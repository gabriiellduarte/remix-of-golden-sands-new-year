import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.howToGet": "Como Chegar",
    "nav.whatToDo": "O Que Fazer",
    "nav.gastronomy": "Gastronomia",
    "nav.location": "Local",
    "nav.tips": "Dicas",
    "nav.usefulTips": "Dicas Úteis",
    "nav.seeTips": "Ver Dicas",
    
    // Hero
    "hero.title1": "Bem-vindo ao",
    "hero.title2": "Cerapió em Aracati",
    "hero.subtitle": "Guia oficial para equipes, pilotos e visitantes do Cerapió. Aracati, fundada no século XVIII, une centro histórico tombado, culinária regional e as falésias de Canoa Quebrada para receber você no litoral leste do Ceará.",
    "hero.cta": "Guia do Participante",
    "hero.scrollText": "Role para se preparar",
    
    // About
    "about.title1": "Quartel-General",
    "about.title2": "do Cerapió",
    "about.description": "Além de abrigar a estrutura do rally, Aracati convida você a explorar ruas centenárias, sabores regionais, artesanato e o visual lendário de Canoa Quebrada enquanto acompanha o Cerapió.",
    "about.feature1.title": "Centro Histórico Tombado",
    "about.feature1.desc": "Casarões coloridos, igrejas seculares e museus contam a trajetória econômica do Ceará desde o século XVIII.",
    "about.feature2.title": "Canoa Quebrada Vibrante",
    "about.feature2.desc": "Falésias coloridas, dunas e esportes de vento criam o cenário perfeito para buggy, kite e muito pôr do sol.",
    "about.feature3.title": "Cultura & Gastronomia",
    "about.feature3.desc": "Culinária regional, artesanato autoral e festas tradicionais revelam a identidade nordestina de Aracati.",
    "about.feature4.title": "Suporte para o Rally",
    "about.feature4.desc": "Credenciamento, briefings e parque de apoio garantem infraestrutura completa para equipes e visitantes do Cerapió.",
    
    // How to Get
    "howToGet.label": "Logística",
    "howToGet.title1": "Como",
    "howToGet.title2": "Chegar",
    "howToGet.routes": "Rotas de Acesso",
    "howToGet.meetingPoints": "Pontos de Encontro",
    "howToGet.viewOnMaps": "Ver no Maps",
    "howToGet.viewRoute": "Ver Rota",
    "howToGet.route1.name": "Para Aracati",
    "howToGet.route1.desc": "Acesso para equipes vindas do RN via BR-304 direto à base do Cerapió.",
    "howToGet.route2.name": "Para Canoa Quebrada",
    "howToGet.route2.desc": "Para quem já busca o lazer e conhecer nossas praias.",
    "howToGet.route3.name": "Via Majorlândia",
    "howToGet.route3.desc": "Conexão litorânea entre Majorlândia e Canoa Quebrada destinada ao parque de apoio.",
    "howToGet.point1.name": "Base do Cerapió - Arena Aracati",
    "howToGet.point1.desc": "Credenciamento, briefing e área fechada para o evento.",
    "howToGet.point2.name": "Área de Serviços e Vistoria",
    "howToGet.point2.desc": "Estacionamento amplo para boxes e apoio mecânico.",
    "howToGet.point3.name": "Ponto de Largada - Broadway",
    "howToGet.point3.desc": "Concentração para especiais noturnas e largada promocional.",
    
     // Activities
    "activities.label": "Experiências",
    "activities.title1": "O Que",
    "activities.title2": "Fazer",
    "activities.description": "Canoa Quebrada oferece experiências únicas que vão muito além do Réveillon. Explore as maravilhas naturais e aventuras inesquecíveis.",
    "activities.buggy.title": "Passeio de Buggy",
    "activities.buggy.desc": "Aventure-se pelas dunas e falésias em um emocionante passeio de buggy. Conheça paisagens de tirar o fôlego e viva momentos únicos.",
    "activities.quadricycle.title": "Quadriciclo",
    "activities.quadricycle.desc": "Explore trilhas e caminhos secretos pilotando seu próprio quadriciclo. Uma experiência de adrenalina e contato com a natureza.",
    "activities.paragliding.title": "Voo de Parapente",
    "activities.paragliding.desc": "Sobrevoe as falésias e tenha uma vista privilegiada de Canoa Quebrada. Uma experiência inesquecível para os mais aventureiros.",
    
    // Important Places
    "places.label": "Informações Úteis",
    "places.title1": "Locais",
    "places.title2": "Importantes",
    "places.description": "Mantenha à mão serviços essenciais para equipes e torcedores: farmácias, delegacia, saúde e transporte.",
    "places.pharmacy": "Farmácia",
    "places.police": "Delegacia",
    "places.health": "Posto de Saúde",
    "places.viewLocation": "Ver localização",
    
    // Tips
    "tips.label": "Prepare-se",
    "tips.title1": "Dicas",
    "tips.title2": "Úteis",
    "tips.description": "Aproveite ao máximo sua experiência em Canoa Quebrada com estas dicas essenciais.",
    "tips.safety.title": "Segurança",
    "tips.safety.tip1": "Mantenha seus pertences sempre à vista",
    "tips.safety.tip2": "Use cofres disponíveis nas pousadas",
    "tips.safety.tip3": "Evite andar sozinho em áreas desertas à noite",
    "tips.safety.tip4": "Tenha sempre o contato da pousada em mãos",
    "tips.packing.title": "O Que Levar",
    "tips.packing.tip1": "Protetor solar e repelente",
    "tips.packing.tip2": "Roupas leves e confortáveis",
    "tips.packing.tip3": "Calçados para areia e trilhas",
    "tips.packing.tip4": "Medicamentos pessoais",
    "tips.bonus.title": "E o Réveillon?",
    "tips.bonus.desc": "O Réveillon em Canoa Quebrada é o bônus perfeito! Após dias explorando praias, dunas e falésias, celebre a virada do ano com os pés na areia, música ao vivo e uma energia única. É a cereja do bolo de uma experiência inesquecível.",
    // Footer
    "footer.realization": "Realização: Prefeitura de Aracati e Organização Cerapió.",
    "footer.description": "Base oficial do Cerapió em Aracati: logística completa, cultura local e suporte às equipes no litoral cearense.",
    "footer.social": "Redes Sociais",
    "footer.terms": "Termos de Uso",
    "footer.privacy": "Política de Privacidade",
    "footer.rights": "© 2026 Base Cerapió Aracati. Todos os direitos reservados.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.howToGet": "How to Get",
    "nav.whatToDo": "What to Do",
    "nav.gastronomy": "Gastronomy",
    "nav.location": "Location",
    "nav.tips": "Tips",
    "nav.usefulTips": "Useful Tips",
    "nav.seeTips": "See Tips",
    
    // Hero
    "hero.title1": "Welcome to",
    "hero.title2": "Cerapió in Aracati",
    "hero.subtitle": "Official guide for teams, riders, and visitors. Founded in the 18th century, Aracati blends a protected historic core, regional cuisine, and Canoa Quebrada's cliffs to welcome you on Ceará's east coast.",
    "hero.cta": "Participant Guide",
    "hero.scrollText": "Scroll to get ready",
    
    // About
    "about.title1": "Rally Headquarters",
    "about.title2": "by the Sea",
    "about.description": "While it hosts the rally structure, Aracati also invites you to wander century-old streets, taste regional cuisine, shop for crafts, and admire Canoa Quebrada's legendary vistas during Cerapió.",
    "about.feature1.title": "Protected Historic Center",
    "about.feature1.desc": "Colorful mansions, centuries-old churches, and museums narrate Ceará's economic story since the 18th century.",
    "about.feature2.title": "Vibrant Canoa Quebrada",
    "about.feature2.desc": "Colorful cliffs, dunes, and steady winds set the stage for buggy rides, kite sessions, and epic sunsets.",
    "about.feature3.title": "Culture & Gastronomy",
    "about.feature3.desc": "Regional cuisine, signature crafts, and traditional festivities showcase Aracati's Northeastern identity.",
    "about.feature4.title": "Rally Support Hub",
    "about.feature4.desc": "Accreditation, briefings, and the service park deliver full infrastructure for Cerapió teams and visitors.",
    
    // How to Get
    "howToGet.label": "Logistics",
    "howToGet.title1": "How to",
    "howToGet.title2": "Get There",
    "howToGet.routes": "Access Routes",
    "howToGet.meetingPoints": "Meeting Points",
    "howToGet.viewOnMaps": "View on Maps",
    "howToGet.viewRoute": "View Route",
    "howToGet.route1.name": "Via BR-304",
    "howToGet.route1.desc": "Route for teams arriving from Rio Grande do Norte via BR-304 straight to rally HQ.",
    "howToGet.route2.name": "Via CE-040",
    "howToGet.route2.desc": "Main Fortaleza ↔ Aracati (CE-040) connection for motorhomes and service trucks.",
    "howToGet.route3.name": "Via Majorlândia",
    "howToGet.route3.desc": "Coastal link between Majorlândia and Canoa Quebrada for the service park.",
    "howToGet.point1.name": "Cerapió HQ - Aracati Arena",
    "howToGet.point1.desc": "Accreditation, briefings, and parc fermé.",
    "howToGet.point2.name": "Service & Scrutineering Area",
    "howToGet.point2.desc": "Large parking lot for boxes and mechanical support.",
    "howToGet.point3.name": "Start Point - Broadway",
    "howToGet.point3.desc": "Gathering spot for night specials and ceremonial start.",
    
    // Activities
    "activities.label": "Experiences",
    "activities.title1": "What to",
    "activities.title2": "Do",
    "activities.description": "When you're off Cerapió's special stages, choose activities that help with acclimatization, terrain scouting, and recovery.",
    "activities.buggy.title": "Dune Recon",
    "activities.buggy.desc": "Use certified buggies to feel the soft sand near the cliffs and fine-tune setups before racing.",
    "activities.quadricycle.title": "Navigation Training",
    "activities.quadricycle.desc": "Ride guided quad trails to practice terrain reading and light navigation.",
    "activities.paragliding.title": "Special Stage Flyover",
    "activities.paragliding.desc": "Take a paragliding flight to visualize the cliff lines and plan reference points.",
    
    // Important Places
    "places.label": "Useful Information",
    "places.title1": "Important",
    "places.title2": "Places",
    "places.description": "Keep handy the essential services for teams and fans: pharmacies, police, health care, and transport.",
    "places.pharmacy": "Pharmacy",
    "places.police": "Police Station",
    "places.health": "Health Center",
    "places.viewLocation": "View location",
    
    // Tips
    "tips.label": "Get Ready",
    "tips.title1": "Useful",
    "tips.title2": "Tips",
    "tips.description": "Stay physically, mechanically, and logistically ready to live Cerapió safely in Aracati and Canoa Quebrada.",
    "tips.safety.title": "Safety",
    "tips.safety.tip1": "Check gear, PPE, and paperwork before every stage.",
    "tips.safety.tip2": "Hydrate often and respect rest windows.",
    "tips.safety.tip3": "Report incidents or route changes to race control.",
    "tips.safety.tip4": "Use Cerapió's official channels for support and alerts.",
    "tips.packing.title": "What to Bring",
    "tips.packing.tip1": "Basic toolkit and spare parts.",
    "tips.packing.tip2": "Hydration pack, electrolytes, and quick snacks.",
    "tips.packing.tip3": "Breathable apparel, base layers, and sun protection.",
    "tips.packing.tip4": "Keep personal and vehicle documents handy.",
    "tips.bonus.title": "During Cerapió",
    "tips.bonus.desc": "Follow the official schedule, join the briefings, and enjoy Broadway's cultural agenda after the stages.",
    
    // Footer
    "footer.realization": "Organized by: Municipality of Aracati & Cerapió Organization.",
    "footer.description": "Official Cerapió base in Aracati: complete logistics, local culture, and full support on Ceará's coast.",
    "footer.social": "Social Media",
    "footer.terms": "Terms of Use",
    "footer.privacy": "Privacy Policy",
    "footer.rights": "© 2026 Cerapió Hub Aracati. All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["pt"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
