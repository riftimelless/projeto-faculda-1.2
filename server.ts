import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI client lazily or with backup fallback
let genAiClient: GoogleGenAI | null = null;
function getGenAiClient(): GoogleGenAI {
  if (!genAiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("Aviso: GEMINI_API_KEY não foi configurada. Respostas automatizadas simplificadas serão usadas como fallback.");
    }
    genAiClient = new GoogleGenAI({
      apiKey: apiKey || 'MOCK_KEY',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return genAiClient;
}

// REST API for Career Bot Guidance in Curitiba
app.post('/api/career-bot', async (req, res) => {
  const { messages, userProfile } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Lista de mensagens inválida.' });
  }

  const latestUserMessage = messages[messages.length - 1]?.text || 'Olá, preciso de ajuda com minha carreira!';

  // Format context about user profile if provided
  let profileContext = '';
  if (userProfile) {
    profileContext = `Perfil do Estudante:
- Nome/Apelido: ${userProfile.name || 'Estudante'}
- Interesse Principal: ${userProfile.interest || 'Não definido'}
- Preferência de Instituição: ${userProfile.institutionPreference || 'Indiferente (Pública ou Privada)'}
- Modalidade: ${userProfile.modality || 'Indiferente'}
- Situação de Escolaridade: ${userProfile.schooling || 'Cursando Ensino Médio'}\n`;
  }

  // Define strict system instructions for Curitiba's student consultant
  const systemInstruction = `Você é o Conselheiro IA do portal "GuiaEstudantil" de Curitiba e região metropolitana (Paraná).
Seu objetivo é dar orientações vocacionais realistas, técnicas, focadas no ecossistema de educação e mercado laboral curitibano.
Sempre que responder, faça conexões diretas com as faculdades locais como UFPR, UTFPR, IFPR, UNESPAR, PUCPR, Universidade Positivo (UP), UniCuritiba, etc., e mencione mercados regionais (como o Vale do Pinhão para TI no Rebouças, a Cidade Industrial de Curitiba - CIC para engenharias/indústria, e São José dos Pinhais para o setor automotivo e manufatura).
Fale em português do Brasil, de forma clara, técnica, polida, e encorajadora. Forneça respostas estruturadas com pontos principais e use negrito. Curitiba tem forte transporte público (ônibus biarticulados, terminais), use isso para comentar que o acesso a campus centrais e do Ecoville/Centro Politécnico é facilitado ao planejar a escolha!`;

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.trim() === '') {
      // Simulate real high-quality response as a backup fallback if credentials aren't completed yet
      const responseText = `Olá! Sou o Assistente de Orientação do GuiaEstudantil do Paraná. (Nota: Modo de Simulação Ativo devido a chave de API ausente).

Considerando o que você me disse, **Curitiba oferece excelentes oportunidades de desenvolvimento profissional**:

1. **Se você busca Tecnologia & Desenvolvimento (Software, Análise de Sistemas):**
   - **Instituições Indicadas**: A **UTFPR (Campus Rebouças/Sede Centro)** e a **UFPR (Centro Politécnico)** oferecem formações de altíssimo nível totalmente gratuitas. Já na rede privada, a **PUCPR** conta com um ecossistema excelente chamado **Hotmilk** focado em startups.
   - **Conexão de Mercado**: O **Vale do Pinhão** (principalmente no bairro Rebouças) abriga dezenas de startups e grandes empresas (como Ebanx) em constante busca de estagiários.

2. **Se o seu foco é Engenharia ou Indústria Tradicional:**
   - **Mercado e Escolas**: O polo automotivo em **São José dos Pinhais** e a **CIC** (Cidade Industrial de Curitiba) são hubs robustos com Volvo, Renault e Bosch. Cursos técnicos industriais no **IFPR** e as Engenharias na **UFPR/UTFPR** abrem muitas portas aqui.

Como posso guiar você hoje? Gostaria de saber os cronogramas das provas ou detalhes sobre alguma área específica?`;
      
      return res.json({ text: responseText });
    }

    const ai = getGenAiClient();
    
    // Construct simplified history from chat message history
    const chatHistory = messages.map((m: any) => ({
      role: m.sender === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    // Prepend profile parameters to the latest input if it exists, to contextualize properly
    const contentPrompt = profileContext 
      ? `Histórico de Mensagens anteriores...\n${profileContext}\n\nNova Mensagem do Estudante: ${latestUserMessage}`
      : latestUserMessage;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: contentPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error('Erro na chamada do Gemini API no backend:', error);
    res.status(500).json({ 
      error: 'Erro ao processar orientação profissional.', 
      details: error?.message || String(error)
    });
  }
});

// Configure Vite or Static delivery
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[GuiaEstudantil Server] rodando no link: http://localhost:${PORT} em modo ${process.env.NODE_ENV || 'development'}`);
  });
}

startServer();
