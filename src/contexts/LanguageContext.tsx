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
    "nav.location": "Local",
    "nav.tips": "Dicas",
    "nav.usefulTips": "Dicas Úteis",
    "nav.seeTips": "Ver Dicas",
    
    // Hero
    "hero.title1": "Final de Ano em",
    "hero.title2": "Canoa Quebrada",
    "hero.subtitle": "Descubra as belezas de Canoa Quebrada e encerre o ano em um dos destinos mais incríveis do Ceará.",
    "hero.cta": "Descubra Mais",
    "hero.scrollText": "Role para explorar",
    
    // About
    "about.title1": "Uma Experiência",
    "about.title2": "Inesquecível",
    "about.description": "Canoa Quebrada é muito mais que um destino de Réveillon. É uma experiência completa que combina natureza exuberante, cultura vibrante e momentos únicos. Venha descobrir por que este é o lugar perfeito para encerrar o ano.",
    "about.feature1.title": "Experiência Premium",
    "about.feature1.desc": "Cada detalhe foi pensado para transformar sua virada de ano em um momento memorável, com conforto, exclusividade e uma atmosfera à altura de uma das praias mais icônicas do Brasil.",
    "about.feature2.title": "Atrações Exclusivas",
    "about.feature2.desc": "Uma curadoria musical especial com DJs renomados e apresentações ao vivo que misturam música eletrônica e brasilidade, criando a trilha sonora perfeita para celebrar novos começos.",
    "about.feature3.title": "Cenário Paradisíaco",
    "about.feature3.desc": "Pé na areia, brisa do mar e o pôr do sol mais bonito do Ceará. Viva a virada do ano em Canoa Quebrada, cercado por paisagens deslumbrantes e uma energia contagiante.",
    "about.feature4.title": "Passeios e Aventura",
    "about.feature4.desc": "Explore Canoa Quebrada além da festa. Passeios de buggy pelas dunas, falésias impressionantes, lagoas escondidas e experiências que conectam você à natureza.",
    
    // How to Get
    "howToGet.label": "Logística",
    "howToGet.title1": "Como",
    "howToGet.title2": "Chegar",
    "howToGet.routes": "Rotas de Acesso",
    "howToGet.meetingPoints": "Pontos de Encontro",
    "howToGet.viewOnMaps": "Ver no Maps",
    "howToGet.route1.name": "Via BR-304",
    "howToGet.route1.desc": "Vindo de Natal/Mossoró pela BR-304",
    "howToGet.route2.name": "Via CE-040",
    "howToGet.route2.desc": "Vindo de Fortaleza pela CE-040 (Litoral)",
    "howToGet.point1.name": "Central de Turismo",
    "howToGet.point1.desc": "Ponto principal de encontro para passeios",
    "howToGet.point2.name": "Praça Central - Maria Alice",
    "howToGet.point2.desc": "Referência no centro de Canoa Quebrada",
    "howToGet.point3.name": "Praça Dragão do Mar",
    "howToGet.point3.desc": "Coração da vida noturna local",
    
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
    "places.description": "Tenha em mãos os contatos e localizações essenciais para sua estadia em Canoa Quebrada.",
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
    "footer.realization": "Realização: Prefeitura Municipal de Aracati.",
    "footer.description": "Descubra Canoa Quebrada e encerre o ano em um dos destinos mais incríveis do Ceará.",
    "footer.social": "Redes Sociais",
    "footer.terms": "Termos de Uso",
    "footer.privacy": "Política de Privacidade",
    "footer.rights": "© 2025 Final de Ano em Canoa Quebrada. Todos os direitos reservados.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.howToGet": "How to Get",
    "nav.whatToDo": "What to Do",
    "nav.location": "Location",
    "nav.tips": "Tips",
    "nav.usefulTips": "Useful Tips",
    "nav.seeTips": "See Tips",
    
    // Hero
    "hero.title1": "New Year's Eve in",
    "hero.title2": "Canoa Quebrada",
    "hero.subtitle": "Discover the beauty of Canoa Quebrada and end the year in one of the most incredible destinations in Ceará.",
    "hero.cta": "Discover More",
    "hero.scrollText": "Scroll to explore",
    
    // About
    "about.title1": "An Unforgettable",
    "about.title2": "Experience",
    "about.description": "Canoa Quebrada is much more than a New Year's destination. It's a complete experience that combines lush nature, vibrant culture, and unique moments. Come discover why this is the perfect place to end the year.",
    "about.feature1.title": "Premium Experience",
    "about.feature1.desc": "Every detail has been designed to transform your New Year's Eve into a memorable moment, with comfort, exclusivity, and an atmosphere worthy of one of Brazil's most iconic beaches.",
    "about.feature2.title": "Exclusive Attractions",
    "about.feature2.desc": "A special musical curation with renowned DJs and live performances that blend electronic music and Brazilian vibes, creating the perfect soundtrack to celebrate new beginnings.",
    "about.feature3.title": "Paradisiacal Scenery",
    "about.feature3.desc": "Feet in the sand, ocean breeze, and the most beautiful sunset in Ceará. Experience New Year's Eve in Canoa Quebrada, surrounded by stunning landscapes and contagious energy.",
    "about.feature4.title": "Tours and Adventure",
    "about.feature4.desc": "Explore Canoa Quebrada beyond the party. Buggy tours through the dunes, impressive cliffs, hidden lagoons, and experiences that connect you with nature.",
    
    // How to Get
    "howToGet.label": "Logistics",
    "howToGet.title1": "How to",
    "howToGet.title2": "Get There",
    "howToGet.routes": "Access Routes",
    "howToGet.meetingPoints": "Meeting Points",
    "howToGet.viewOnMaps": "View on Maps",
    "howToGet.route1.name": "Via BR-304",
    "howToGet.route1.desc": "Coming from Natal/Mossoró via BR-304",
    "howToGet.route2.name": "Via CE-040",
    "howToGet.route2.desc": "Coming from Fortaleza via CE-040 (Coast)",
    "howToGet.point1.name": "Tourism Center",
    "howToGet.point1.desc": "Main meeting point for tours",
    "howToGet.point2.name": "Central Square - Maria Alice",
    "howToGet.point2.desc": "Reference in downtown Canoa Quebrada",
    "howToGet.point3.name": "Dragão do Mar Square",
    "howToGet.point3.desc": "Heart of local nightlife",
    
    // Activities
    "activities.label": "Experiences",
    "activities.title1": "What to",
    "activities.title2": "Do",
    "activities.description": "Canoa Quebrada offers unique experiences that go far beyond New Year's Eve. Explore the natural wonders and unforgettable adventures.",
    "activities.buggy.title": "Buggy Tour",
    "activities.buggy.desc": "Adventure through the dunes and cliffs on an exciting buggy ride. Discover breathtaking landscapes and live unique moments.",
    "activities.quadricycle.title": "Quadricycle",
    "activities.quadricycle.desc": "Explore trails and secret paths driving your own quadricycle. An experience of adrenaline and contact with nature.",
    "activities.paragliding.title": "Paragliding Flight",
    "activities.paragliding.desc": "Fly over the cliffs and have a privileged view of Canoa Quebrada. An unforgettable experience for the most adventurous.",
    
    // Important Places
    "places.label": "Useful Information",
    "places.title1": "Important",
    "places.title2": "Places",
    "places.description": "Have at hand the essential contacts and locations for your stay in Canoa Quebrada.",
    "places.pharmacy": "Pharmacy",
    "places.police": "Police Station",
    "places.health": "Health Center",
    "places.viewLocation": "View location",
    
    // Tips
    "tips.label": "Get Ready",
    "tips.title1": "Useful",
    "tips.title2": "Tips",
    "tips.description": "Make the most of your experience in Canoa Quebrada with these essential tips.",
    "tips.safety.title": "Safety",
    "tips.safety.tip1": "Keep your belongings always in sight",
    "tips.safety.tip2": "Use safes available at the inns",
    "tips.safety.tip3": "Avoid walking alone in deserted areas at night",
    "tips.safety.tip4": "Always have the inn's contact handy",
    "tips.packing.title": "What to Bring",
    "tips.packing.tip1": "Sunscreen and insect repellent",
    "tips.packing.tip2": "Light and comfortable clothes",
    "tips.packing.tip3": "Footwear for sand and trails",
    "tips.packing.tip4": "Personal medications",
    "tips.bonus.title": "And New Year's Eve?",
    "tips.bonus.desc": "New Year's Eve in Canoa Quebrada is the perfect bonus! After days exploring beaches, dunes, and cliffs, celebrate the turn of the year with your feet in the sand, live music, and unique energy. It's the cherry on top of an unforgettable experience.",
    
    // Footer
    "footer.realization": "Organized by: Municipality of Aracati.",
    "footer.description": "Discover Canoa Quebrada and end the year in one of the most incredible destinations in Ceará.",
    "footer.social": "Social Media",
    "footer.terms": "Terms of Use",
    "footer.privacy": "Privacy Policy",
    "footer.rights": "© 2025 New Year's Eve in Canoa Quebrada. All rights reserved.",
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
