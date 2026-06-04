export interface Institution {
  id: string;
  name: string;
  abbreviation: string;
  type: 'Pública Federal' | 'Pública Estadual' | 'Privada';
  campuses: string[];
  modalities: ('Presencial' | 'EAD' | 'Semipresencial')[];
  popularCourses: string[];
  website: string;
  description: string;
  phone: string;
  email: string;
  logoUrl?: string;
  addressSummary: string;
}

export interface EditalDeadline {
  id: string;
  title: string;
  institutionId: string;
  institutionName: string;
  type: 'Vestibular' | 'Enem / Sisu' | 'Ensino Técnico' | 'Prouni / Fies' | 'Concurso / Estágio';
  status: 'Aberto' | 'Próximo' | 'Resultado' | 'Encerrado';
  startDate: string; // ISO date string YYYY-MM-DD
  endDate: string;   // ISO date string YYYY-MM-DD
  examDate?: string; // ISO date string YYYY-MM-DD
  resultDate?: string; // ISO date string YYYY-MM-DD
  registrationFee: string; // e.g. "R$ 195,00" or "Gratuito"
  registrationLink: string;
  description: string;
  requirements: string[];
}

export interface CareerArea {
  id: string;
  title: string;
  marketOutlook: 'Alta Demanda' | 'Crescimento Estável' | 'Competitivo';
  averageSalaryRange: string;
  description: string;
  demandFocus: string; // Specific sectors in Curitiba/RMC
  popularCourses: string[];
  hubsInCuritiba: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
