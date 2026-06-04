import { Institution, EditalDeadline, CareerArea } from './types';

export const INSTITUTIONS: Institution[] = [
  {
    id: 'ufpr',
    name: 'Universidade Federal do Paraná',
    abbreviation: 'UFPR',
    type: 'Pública Federal',
    campuses: ['Centro Politécnico', 'Jardim Botânico', 'Reitoria', 'Santos Andrade', 'Cabral', 'Palotina', 'Litoral', 'Toledo', 'Jandaia do Sul'],
    modalities: ['Presencial', 'EAD'],
    popularCourses: ['Medicina', 'Direito', 'Engenharia Civil', 'Engenharia de Software', 'Arquitetura e Urbanismo', 'Administração', 'Psicologia'],
    website: 'https://www.ufpr.br',
    description: 'A instituição de ensino superior mais antiga do Brasil em atividade contínua. Referência absoluta em pesquisa científica, extensão universitária e ensino público gratuito de excelente nível no Paraná.',
    phone: '(41) 3360-5000',
    email: 'portal@ufpr.br',
    addressSummary: 'Rua XV de Novembro, 1299 - Centro, Curitiba - PR'
  },
  {
    id: 'utfpr',
    name: 'Universidade Tecnológica Federal do Paraná',
    abbreviation: 'UTFPR',
    type: 'Pública Federal',
    campuses: ['Curitiba (Sede Centro / Sede Ecoville)', 'Campo Mourão', 'Cornélio Procópio', 'Pato Branco', 'Ponta Grossa', 'Londrina', 'Toledo'],
    modalities: ['Presencial', 'Semipresencial'],
    popularCourses: ['Análise e Desenvolvimento de Sistemas', 'Engenharia de Computação', 'Engenharia Mecânica', 'Design', 'Química', 'Sistemas de Informação'],
    website: 'https://www.utfpr.edu.br',
    description: 'Única universidade tecnológica do Brasil. Com forte vocação voltada para a ciência aplicada, tecnologia, engenharias e cursos focados na inserção célere do estudante no mercado de trabalho tecnológico.',
    phone: '(41) 3310-4545',
    email: 'comunicacao-ct@utfpr.edu.br',
    addressSummary: 'Av. Sete de Setembro, 3165 - Rebouças, Curitiba - PR'
  },
  {
    id: 'ifpr',
    name: 'Instituto Federal do Paraná',
    abbreviation: 'IFPR',
    type: 'Pública Federal',
    campuses: ['Campus Curitiba', 'Colombo', 'Pinhais', 'Campo Largo', 'Paranaguá', 'Cascavel', 'Londrina'],
    modalities: ['Presencial', 'EAD'],
    popularCourses: ['Técnico em Informática', 'Técnico em Mecânica', 'Tecnologia em Sistemas para Internet', 'Processos Gerenciais', 'Licenciatura em Física'],
    website: 'https://ifpr.edu.br',
    description: 'Instituição pública federal caracterizada pelo ensino técnico integrado ao ensino médio, além de cursos de tecnologia, licenciaturas e engenharias com foco no desenvolvimento setorial e regional.',
    phone: '(41) 3535-1600',
    email: 'curitiba@ifpr.edu.br',
    addressSummary: 'Rua João Negrão, 1285 - Rebouças, Curitiba - PR'
  },
  {
    id: 'unespar',
    name: 'Universidade Estadual do Paraná',
    abbreviation: 'UNESPAR',
    type: 'Pública Estadual',
    campuses: ['Curitiba I (Embap)', 'Curitiba II (FAP)', 'Apucarana', 'Campo Mourão', 'Paranaguá', 'Paranavaí', 'União da Vitória'],
    modalities: ['Presencial'],
    popularCourses: ['Música', 'Artes Visuais', 'Cinema e Audiovisual', 'Teatro', 'História', 'Geografia', 'Administração'],
    website: 'https://www.unespar.edu.br',
    description: 'Universidade estadual multi-campus que reúne tradicionais escolas de artes e faculdades estaduais do Paraná. Referência na formação de educadores, artistas, produtores de mídias e cientistas sociais.',
    phone: '(41) 3281-7400',
    email: 'reitoria@unespar.edu.br',
    addressSummary: 'Rua Comendador Araújo, 484 - Centro, Curitiba - PR'
  },
  {
    id: 'pucpr',
    name: 'Pontifícia Universidade Católica do Paraná',
    abbreviation: 'PUCPR',
    type: 'Privada',
    campuses: ['Curitiba (Prado Velho)', 'Londrina', 'Maringá', 'Toledo'],
    modalities: ['Presencial', 'EAD', 'Semipresencial'],
    popularCourses: ['Medicina', 'Direito', 'Administração (Hotmilk)', 'Ciência da Computação', 'Publicidade e Propaganda', 'Psicologia', 'Medicina Veterinária'],
    website: 'https://www.pucpr.br',
    description: 'Uma das mais renomadas universidades privadas do Brasil. Possui forte ecossistema de inovação (Hotmilk), estreito relacionamento com indústrias da região metropolitana e excelente infraestrutura.',
    phone: '(41) 3271-1100',
    email: 'atendimento@pucpr.br',
    addressSummary: 'Rua Imaculada Conceição, 1155 - Prado Velho, Curitiba - PR'
  },
  {
    id: 'positivo',
    name: 'Universidade Positivo',
    abbreviation: 'UP',
    type: 'Privada',
    campuses: ['Ecoville (Câmpus Sede)', 'Praça Osório', 'Mercês', 'Avenida Iguaçu'],
    modalities: ['Presencial', 'EAD'],
    popularCourses: ['Medicina', 'Odontologia', 'Direito', 'Arquitetura', 'Engenharia de Produção', 'Análise de Sistemas'],
    website: 'https://www.up.edu.br',
    description: 'Destaca-se por seu amplo câmpus Ecoville, laboratórios de ponta e infraestrutura voltada à prática profissional. Pertence ao grupo Cruzeiro do Sul Educacional.',
    phone: '(41) 3317-3000',
    email: 'faleconosco@up.edu.br',
    addressSummary: 'Rua Professor Pedro Viriato Parigot de Souza, 5300 - Ecoville, Curitiba - PR'
  },
  {
    id: 'unicuritiba',
    name: 'Centro Universitário Curitiba',
    abbreviation: 'UniCuritiba',
    type: 'Privada',
    campuses: ['Milton Vianna Filho (Rebouças)', 'Pinheirinho'],
    modalities: ['Presencial', 'EAD'],
    popularCourses: ['Direito (Histórico)', 'Relações Internacionais', 'Design de Moda', 'Nutrição', 'Engenharia de Software', 'Publicidade'],
    website: 'https://unicuritiba.edu.br',
    description: 'Instituição tradicionalíssima no ensino jurídico em Curitiba, hoje parte da Ânima Educação. Possui forte apelo prático corporativo e projetos integrados com a comunidade.',
    phone: '(41) 2117-9600',
    email: 'falecom@unicuritiba.edu.br',
    addressSummary: 'Rua Chile, 1678 - Rebouças, Curitiba - PR'
  }
];

export const DEADLINES: EditalDeadline[] = [
  {
    id: 'ufpr-2027',
    title: 'Vestibular UFPR 2026/2027 (Processo Geral)',
    institutionId: 'ufpr',
    institutionName: 'UFPR',
    type: 'Vestibular',
    status: 'Próximo',
    startDate: '2026-07-15',
    endDate: '2026-08-31',
    examDate: '2026-10-25',
    resultDate: '2027-01-12',
    registrationFee: 'R$ 195,00',
    registrationLink: 'https://www.nc.ufpr.br',
    description: 'A maior e mais concorrida prova de ingresso público em Curitiba e Litoral. Seleciona candidatos para mais de 120 cursos. Requer preparação focada nas duas fases clássicas (objetiva e discursivas específicas).',
    requirements: [
      'Documento de identidade (RG) atualizado e CPF do candidato.',
      'Conclusão ou matrícula em fase de conclusão do Ensino Médio.',
      'Comprovante de pagamento da taxa ou deferimento do pedido de isenção via CadÚnico.'
    ]
  },
  {
    id: 'sisu-2026-1',
    title: 'Processo Seletivo SISU UTFPR 2026.2',
    institutionId: 'utfpr',
    institutionName: 'UTFPR',
    type: 'Enem / Sisu',
    status: 'Aberto',
    startDate: '2026-06-05',
    endDate: '2026-06-12',
    resultDate: '2026-06-16',
    registrationFee: 'Gratuito',
    registrationLink: 'https://acessounico.mec.gov.br/sisu',
    description: 'Seleção para vagas remanescentes e novo semestre de cursos de Engenharia e Tecnologia da UTFPR através da nota do ENEM 2025. Não há cobrança de taxas.',
    requirements: [
      'Ter realizado o ENEM 2025.',
      'Nota na redação superior a zero.',
      'Inscrição no Portal Único de Acesso do Ministério da Educação.'
    ]
  },
  {
    id: 'pucpr-inverno-2026',
    title: 'Vestibular de Inverno PUCPR 2026',
    institutionId: 'pucpr',
    institutionName: 'PUCPR',
    type: 'Vestibular',
    status: 'Aberto',
    startDate: '2026-05-01',
    endDate: '2026-06-10',
    examDate: '2026-06-14',
    resultDate: '2026-06-23',
    registrationFee: 'R$ 110,00',
    registrationLink: 'https://multiversidade.pucpr.br/vestibular',
    description: 'Ingresso no segundo semestre letivo da PUCPR para cursos de graduação presencial e semipresencial. Opções de prova presencial, prova agendada ou aproveitamento de nota ENEM.',
    requirements: [
      'Preenchimento da inscrição online no portal do candidato PUCPR.',
      'Opção por prova presencial tradicional, redação online ou nota Enem.',
      'Idade mínima de 16 anos ou conclusão do ensino médio regulamentado.'
    ]
  },
  {
    id: 'isenção-ufpr-2027',
    title: 'Solicitação de Isenção da Taxa de Inscrição UFPR',
    institutionId: 'ufpr',
    institutionName: 'UFPR',
    type: 'Vestibular',
    status: 'Próximo',
    startDate: '2026-07-15',
    endDate: '2026-07-28',
    resultDate: '2026-08-10',
    registrationFee: 'Gratuito',
    registrationLink: 'https://www.nc.ufpr.br',
    description: 'Procedimento voltado para candidatos de baixa renda, estudantes matriculados em escola pública, ou que comprovem inscrição ativa no Cadastro Único do Governo Federal (CadÚnico).',
    requirements: [
      'Número de Identificação Social (NIS) ativo no CadÚnico.',
      'Histórico escolar completo de escola pública ou atestado de bolsista integral em escola particular.'
    ]
  },
  {
    id: 'ifpr-tecnicos-2027',
    title: 'Processo Seletivo de Cursos Técnicos IFPR 2027',
    institutionId: 'ifpr',
    institutionName: 'IFPR',
    type: 'Ensino Técnico',
    status: 'Próximo',
    startDate: '2026-08-01',
    endDate: '2026-09-15',
    examDate: '2026-10-18',
    resultDate: '2026-11-20',
    registrationFee: 'R$ 50,00',
    registrationLink: 'https://ifpr.edu.br/processos-seletivos',
    description: 'Vagas para cursos técnicos integrados ao ensino médio (para quem já concluiu o fundamental) e cursos subsequentes (para quem tem ensino médio) em áreas de TI, Mecatrônica, Saúde e Logística.',
    requirements: [
      'Documento de Declaração Escolar ou histórico de conclusão prévia.',
      'Estudo em escolas municipais ou estaduais do Paraná garante pontuação diferenciada na política de cotas.'
    ]
  },
  {
    id: 'prouni-fies-2026',
    title: 'Inscrições Prouni & Fies Parcial 2026.2',
    institutionId: 'positivo',
    institutionName: 'Cruzeiro do Sul / UP',
    type: 'Prouni / Fies',
    status: 'Resultado',
    startDate: '2026-05-10',
    endDate: '2026-05-20',
    resultDate: '2026-06-01',
    registrationFee: 'Gratuito',
    registrationLink: 'http://acessounico.mec.gov.br/prouni',
    description: 'Consulta da divulgação do resultado da segunda chamada e período ativo de entrega de documentações de alunos selecionados no Prouni Paraná para universidades privadas parceiras (UP, PUCPR, Dom Bosco).',
    requirements: [
      'Documentos de comprovação de renda do grupo familiar (holerites, extratos e declarações).',
      'Histórico do Ensino Médio que comprove escola pública ou bolsa privada.',
      'RG de todos os membros declarados no cadastro único do portal do MEC.'
    ]
  },
  {
    id: 'unespar-vestibular-2027',
    title: 'Vestibular Unificado UNESPAR 2027',
    institutionId: 'unespar',
    institutionName: 'UNESPAR',
    type: 'Vestibular',
    status: 'Próximo',
    startDate: '2026-09-01',
    endDate: '2026-10-15',
    examDate: '2026-11-22',
    resultDate: '2027-01-20',
    registrationFee: 'R$ 100,00',
    registrationLink: 'https://vestibular.unespar.edu.br',
    description: 'Ingresso unificado para cursos tradicionais e as consagradas faculdades de artes de Curitiba (FAP e EMBAP). A prova de habilidades específicas (para música/teatro) ocorre em etapas subsequentes e agendadas.',
    requirements: [
      'Inscrição digital contendo dados curriculares.',
      'Para cursos de Belas Artes (Embap) e Artes (FAP), preencher agendamento de portfólio ou teste prático (Canto, Instrumento, Atuação).'
    ]
  }
];

export const CAREER_AREAS: CareerArea[] = [
  {
    id: 'ti-vale-pinhao',
    title: 'Tecnologia da Informação & Inovação (Vale do Pinhão)',
    marketOutlook: 'Alta Demanda',
    averageSalaryRange: 'R$ 3.500,00 a R$ 12.000,00+',
    description: 'Curitiba possui um dos mais fortes polos de TI do país, apelidado de Vale do Pinhão. O ecossistema composto por startups unicórnios (como EBANX e MadeiraMadeira), aceleradoras e multinacionais contrata desenvolvedores, analistas de dados, designers de interface (UI/UX) e especialistas em segurança cibernética a todo instante.',
    demandFocus: 'Sistemas corporativos, Fintechs, Portais de e-commerce e Tecnologias de Cloud Computing.',
    popularCourses: ['Análise e Desenvolvimento de Sistemas', 'Engenharia de Software', 'Ciência da Computação', 'Design Digital'],
    hubsInCuritiba: ['Bairro Rebouças (Vale do Pinhão)', 'Ecoville / Techno Parque', 'Centro (Coworqs Públicos da prefeitura)']
  },
  {
    id: 'industria-automotiva-rmc',
    title: 'Engenharia & Indústria Automobilística (RMC)',
    marketOutlook: 'Crescimento Estável',
    averageSalaryRange: 'R$ 4.500,00 a R$ 14.000,00',
    description: 'A Região Metropolitana de Curitiba (principalmente São José dos Pinhais, Campo Largo e Araucária) abriga importantes montadoras multinacionais, como Renault, Volvo, Audi/Volkswagen, além do polo petroquímico e indústrias de manufatura de grande escala. Engenheiros de controle, automação, eletrônica e mecânicos são requisitados para modernização de linhas industriais.',
    demandFocus: 'Automação Industrial, IoT Industrial (Manufatura 4.0), Logística e Engenharia de Materiais.',
    popularCourses: ['Engenharia Mecânica', 'Engenharia de Controle e Automação', 'Engenharia de Produção', 'Técnico em Eletromecânica'],
    hubsInCuritiba: ['Cidade Industrial de Curitiba (CIC)', 'São José dos Pinhais', 'Araucária']
  },
  {
    id: 'saude-biotecnologia',
    title: 'Saúde, Biotecnologia & Medicina Clínico-Hospitalar',
    marketOutlook: 'Alta Demanda',
    averageSalaryRange: 'R$ 2.800,00 a R$ 15.000,00+',
    description: 'Curitiba é polo médico nacional, famosa pela qualidade das redes de hospitais públicos e clínicas particulares integradas (Hospital de Clínicas da UFPR, Hospital Pequeno Príncipe, Hospital Erasto Gaertner). Isso fomenta a proliferação de laboratórios de análises, farmácias de manipulação inovadoras e startups de biotecnologia (healthtechs), gerando alta empregabilidade.',
    demandFocus: 'Análises Clínicas, Pesquisa Científica, Saúde Pública, Enfermagem Geral e Medicina Assistiva.',
    popularCourses: ['Medicina', 'Biomedicina', 'Farmácia', 'Biotecnologia', 'Enfermagem'],
    hubsInCuritiba: ['Prado Velho (Hospitais / Hotmilk)', 'Alto da Glória (Pólos médicos)', 'Centro Politécnico (Laboratórios de pesquisa)']
  },
  {
    id: 'economia-criativa-audiovisual',
    title: 'Economia Criativa, Audiovisual & Comunicação Social',
    marketOutlook: 'Competitivo',
    averageSalaryRange: 'R$ 2.500,00 a R$ 7.000,00',
    description: 'Impulsionado por uma intensa vida cultural e agências renomadas, o setor criativo da capital gera oportunidades excepcionais em audiovisual (produtoras independentes no Paraná), design de embalagens e marcas, publicidade digital e gestão de marcas. As grandes universidades estaduais e federais formam anualmente talentos prestigiados.',
    demandFocus: 'Marketing Redacional, Produção Cinematográfica, Web Design e Criação de Conteúdo de Marca.',
    popularCourses: ['Publicidade e Propaganda', 'Design de Produto', 'Cinema e Audiovisual', 'Jornalismo'],
    hubsInCuritiba: ['Bairro São Francisco / Centro Histórico', 'Cabral (Setor criativo UFPR-EMBAP)', 'Mercês']
  }
];
