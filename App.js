import React from 'react';
import { INSTITUTIONS, DEADLINES, CAREER_AREAS } from './data';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Instituicoes from './components/Instituicoes';
import EditaisPrazos from './components/EditaisPrazos';
import OrientacaoProfissional from './components/OrientacaoProfissional';
import { Landmark, ArrowUpCircle, Phone, BookOpen, AlertCircle, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<string>('inicio');
  const [fontSizeAdjustment, setFontSizeAdjustment] = React.useState<number>(0);
  const [selectedEditalId, setSelectedEditalId] = React.useState<string | null>(null);
  const [globalSearchQuery, setGlobalSearchQuery] = React.useState<string>('');

  // Scroll to top when tab changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Accessibility Font size adjusters
  const handleIncreaseFont = () => {
    if (fontSizeAdjustment < 3) {
      setFontSizeAdjustment(prev => prev + 1);
    }
  };

  const handleDecreaseFont = () => {
    if (fontSizeAdjustment > -1) {
      setFontSizeAdjustment(prev => prev - 1);
    }
  };

  const handleResetFont = () => {
    setFontSizeAdjustment(0);
  };

  // Navigates to a specific edital and expands it
  const handleSelectEdital = (id: string) => {
    setSelectedEditalId(id);
    setActiveTab('editais');
  };

  const handleClearSelectedEdital = () => {
    setSelectedEditalId(null);
  };

  // Triggers when user searches globally in the header
  const handleSearchGlobal = (query: string) => {
    setGlobalSearchQuery(query);
    // Auto switch to active collections based on best guess, or defaults to 'editais' / 'instituicoes'
    if (activeTab === 'inicio' || activeTab === 'orientacao') {
      setActiveTab('instituicoes');
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen flex flex-col bg-[#f4f6f9] text-slate-800 antialiased font-sans transition-all duration-150"
      style={{ fontSize: `${100 + fontSizeAdjustment * 8}%` }}
    >
      {/* Government-style standard header */}
      <Header
        fontSizeAdjustment={fontSizeAdjustment}
        onIncreaseFont={handleIncreaseFont}
        onDecreaseFont={handleDecreaseFont}
        onResetFont={handleResetFont}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // When swapping away from direct selections, wipe global searches
          setGlobalSearchQuery('');
        }}
        onSearchGlobal={handleSearchGlobal}
      />

      {/* Main Container Wrapper */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 md:py-8">
        
        {/* Dynamic global search indicator alert */}
        {globalSearchQuery && (
          <div className="mb-6 bg-pr-blue-50 border border-pr-blue-200 text-pr-blue-950 p-3 rounded-md text-xs flex justify-between items-center animate-fadeIn">
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-pr-blue-900 uppercase">Filtro Ativo:</span>
              Você está visualizando resultados correspondentes a: <strong className="bg-[#e0e9f5] px-2 py-0.5 rounded text-slate-900 border border-slate-350">"{globalSearchQuery}"</strong>
            </span>
            <button 
              onClick={() => setGlobalSearchQuery('')} 
              className="text-pr-blue-900 underline font-bold cursor-pointer"
            >
              Resetar Busca
            </button>
          </div>
        )}

        {/* Tab View Router renderers */}
        <div className="space-y-6">
          {activeTab === 'inicio' && (
            <Inicio
              institutions={INSTITUTIONS}
              deadlines={DEADLINES}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                setGlobalSearchQuery('');
              }}
              onSelectEdital={handleSelectEdital}
              searchFilter={globalSearchQuery}
            />
          )}

          {activeTab === 'instituicoes' && (
            <Instituicoes
              institutions={INSTITUTIONS}
              initialSearchQuery={globalSearchQuery}
            />
          )}

          {activeTab === 'editais' && (
            <EditaisPrazos
              deadlines={DEADLINES}
              selectedEditalId={selectedEditalId}
              onClearSelectedEdital={handleClearSelectedEdital}
              initialSearchQuery={globalSearchQuery}
            />
          )}

          {activeTab === 'orientacao' && (
            <OrientacaoProfissional
              careerAreas={CAREER_AREAS}
            />
          )}
        </div>

      </main>

      {/* Official Government styled State Footer */}
      <footer className="bg-pr-blue-950 text-slate-300 border-t border-slate-800 font-sans mt-12 self-stretch">
        
        {/* Upper footer links with crest signature */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Crest Branding */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="bg-white text-pr-blue-950 p-2 rounded flex items-center justify-center font-bold">
                <Landmark className="w-5 h-5 text-pr-blue-900" />
              </div>
              <span className="text-sm font-extrabold text-white tracking-wider uppercase font-display">
                ESTADO DO PARANÁ
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed text-left">
              GuiaEstudantil unifica e simplifica canais dispersos para acelerar o amadurecimento e decisão profissional dos estudantes do Paraná.
            </p>
          </div>

          {/* Col 2: Useful Links inside curitiba region */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Acesso Rápido</h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>
                <a href="https://www.ufpr.br" target="_blank" rel="noreferrer" className="hover:text-pr-gold transition-colors block">
                  Universidade Federal do Paraná (UFPR)
                </a>
              </li>
              <li>
                <a href="https://www.utfpr.edu.br" target="_blank" rel="noreferrer" className="hover:text-pr-gold transition-colors block">
                  Universidade Tecnológica do PR (UTFPR)
                </a>
              </li>
              <li>
                <a href="https://www.unespar.edu.br" target="_blank text-slate-400" rel="noreferrer" className="hover:text-pr-gold transition-colors block">
                  Universidade Estadual do PR (UNESPAR)
                </a>
              </li>
              <li>
                <a href="https://ifpr.edu.br" target="_blank" rel="noreferrer" className="hover:text-pr-gold transition-colors block">
                  Instituto Federal do Paraná (IFPR)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal Disclosures */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Transparência e Suporte</h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Lei de Acesso à Informação (LAI)
              </li>
              <li className="flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-pr-gold" /> Ouvidoria Geral do Paraná
              </li>
              <li className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" /> Diretrizes de Isenções e Prouni
              </li>
            </ul>
          </div>

          {/* Col 4: Central Contato */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Central Unificada</h4>
            <div className="text-[11px] text-slate-400 space-y-2">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-pr-gold" /> Ligação Direta: 156 (Curitiba)
              </p>
              <p>Segunda a Sexta: 08h às 18h</p>
              <p className="bg-pr-blue-900 p-2 rounded text-[10px] text-slate-300 border border-slate-700/60 font-mono text-center">
                Para suporte técnico ou dúvidas de prazos remotos, mande e-mail para faculdaproject@gmail.com
              </p>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-slate-800/80 bg-pr-blue-950/80 py-4 px-4 text-center text-xs text-slate-500 font-sans">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
            <p>© 2026 GuiaEstudantil Paraná - Tecnologia e Serviços Educacionais de Curitiba. Todos os direitos reservados.</p>
            <button 
              onClick={handleBackToTop}
              className="text-[#94a3b8] hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-bold bg-white/5 hover:bg-white/10 px-3 py-1 rounded border border-slate-700"
            >
              Voltar ao Topo <ArrowUpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

      </footer>

    </div>
  );
}
