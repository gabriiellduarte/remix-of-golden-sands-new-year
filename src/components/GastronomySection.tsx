import { motion } from "framer-motion";
import { UtensilsCrossed, Sun, Umbrella, Coffee, Music, Moon, ShoppingBag, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const GastronomySection = () => {
  const { language } = useLanguage();

  const dinnerRestaurants = [
    { name: "Paprika", location: "Canoa Quebrada", highlight: language === "pt" ? "Cozinha internacional, pratos mais elaborados" : "International cuisine, more elaborate dishes", instagram: "paprikacanoa" },
    { name: "Cabana", location: "Canoa Quebrada", highlight: language === "pt" ? "Ambiente charmoso, frutos do mar e culinária contemporânea" : "Charming atmosphere, seafood and contemporary cuisine", instagram: "cabana.cq" },
    { name: "Café Habana", location: "Canoa Quebrada", highlight: language === "pt" ? "Culinária regional e internacional com música ao vivo" : "Regional and international cuisine with live music", instagram: "cafe.habanacanoa" },
    { name: "Gusto Italiano", location: "Canoa Quebrada", highlight: language === "pt" ? "Massas frescas e pizzas artesanais" : "Fresh pasta and artisan pizzas", instagram: "gustoitacanoa" },
    { name: "Vitórios", location: "Canoa Quebrada", highlight: language === "pt" ? "Restaurante com variedade no menu" : "Restaurant with varied menu", instagram: "vitorios_canoa" },
    { name: "Pátio Grill", location: "Canoa Quebrada", highlight: language === "pt" ? "Foco em carnes grelhadas e churrasco" : "Focus on grilled meats and BBQ", instagram: "patiogrillcanoaquebrada" },
  ];

  const lunchRestaurants = [
    { name: "O'Nain", location: "Canoa Quebrada/Aracati", highlight: language === "pt" ? "Variedade, incluindo carne de sol e frutos do mar" : "Variety, including sun-dried meat and seafood", instagram: "onainrestaurante" },
    { name: "Sal e Mar", location: "Canoa Quebrada", highlight: language === "pt" ? "Culinária brasileira e frutos do mar, com bom ambiente" : "Brazilian cuisine and seafood, with good atmosphere", instagram: "barracasalemarcanoa" },
    { name: "TIKI BEACH", location: "Canoa Quebrada", highlight: language === "pt" ? "Barraca de praia com ótima estrutura para almoço à beira-mar" : "Beach bar with great structure for seaside lunch", instagram: "tikibeachcanoaquebrada" },
    { name: "El Argentino", location: "Canoa Quebrada", highlight: language === "pt" ? "Carnes (Parrilla) e cozinha argentina" : "Meats (Parrilla) and Argentine cuisine", instagram: "elargentinogrillcanoa" },
    { name: "Paraíso Arre Égua", location: "Canoa Quebrada", highlight: language === "pt" ? "Culinária nordestina e brasileira, ambiente rústico" : "Northeastern and Brazilian cuisine, rustic atmosphere", instagram: "paraisoarrejegua" },
  ];

  const beachBars = [
    { name: "Freedom Bar", instagram: "freedombarcanoa" },
    { name: "Chega Mais", instagram: "chegamaiscanoa" },
    { name: "TIKI BEACH", instagram: "tikibeachcanoaquebrada" },
    { name: "Barraca Antônio Coco", instagram: "barracaantoniocococq" },
    { name: "Barraca da Lua", instagram: "barracadalua" },
  ];

  const cafes = [
    { name: "Lay Doçuras", location: "Canoa Quebrada", instagram: "laydocuras" },
    { name: "Padaria Sol e Lua", location: "Canoa Quebrada", instagram: null },
    { name: "Doce Cereja", location: "Aracati", instagram: "docecereja_aracati" },
    { name: "Divas Doces", location: "Aracati", instagram: "divasdoces.ac" },
    { name: "Doce Mel", location: "Aracati", instagram: "docemel.aracati" },
    { name: "Bom d'Vanni", location: "Aracati", instagram: "bomdvanni" },
  ];

  const nightlife = [
    { name: "Luau na Freedom", instagram: "freedombarcanoa" },
    { name: "Bar Caverna", instagram: "cavernabarcanoa" },
    { name: "Canoa House Club", instagram: "canoahouseclub" },
  ];

  const lateNightFood = [
    { location: language === "pt" ? "Sede de Aracati" : "Downtown Aracati", options: language === "pt" ? "Posto BR na entrada da cidade (conveniência e lanches)" : "BR Gas Station at city entrance (convenience and snacks)", hours: "24h" },
    { location: "Canoa Quebrada", options: language === "pt" ? "Praça de Alimentação (por trás da Broadway) e Tapioca da Nieti (@tapiocadanieti)" : "Food Court (behind Broadway) and Tapioca da Nieti (@tapiocadanieti)", hours: "19h - 05h" },
    { location: "Quixaba, Majorlândia, Lagoa do Mato", options: language === "pt" ? "Não há opções conhecidas" : "No known options", hours: "-" },
  ];

  const seafoodVendors = {
    specialized: ["Ygor Pescados", "Renato Pescados", "Camarões BR e Camarões da Praia"],
    supermarkets: ["Super Minibox","Super Damasceno", "Pinheiro Supermercado", "Mix Matheus"],
    market: language === "pt" ? "Mercado Público (Mercado do Peixe) de Aracati" : "Public Market (Fish Market) of Aracati",
  };

  const categories = [
    {
      icon: UtensilsCrossed,
      title: language === "pt" ? "Restaurantes para Jantar" : "Dinner Restaurants",
      content: (
        <div className="grid gap-3">
          {dinnerRestaurants.map((r) => (
            <div key={r.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-background/50 rounded-lg">
              <div>
                <span className="font-medium text-foreground">{r.name}</span>
                <span className="text-muted-foreground text-sm ml-2">({r.location})</span>
                <p className="text-sm text-muted-foreground">{r.highlight}</p>
              </div>
              <a href={`https://instagram.com/${r.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm">
                <Instagram className="w-4 h-4" />@{r.instagram}
              </a>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: Sun,
      title: language === "pt" ? "Restaurantes para Almoçar" : "Lunch Restaurants",
      content: (
        <div className="grid gap-3">
          {lunchRestaurants.map((r) => (
            <div key={r.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-background/50 rounded-lg">
              <div>
                <span className="font-medium text-foreground">{r.name}</span>
                <span className="text-muted-foreground text-sm ml-2">({r.location})</span>
                <p className="text-sm text-muted-foreground">{r.highlight}</p>
              </div>
              <a href={`https://instagram.com/${r.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm">
                <Instagram className="w-4 h-4" />@{r.instagram}
              </a>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: Umbrella,
      title: language === "pt" ? "Barracas de Praia" : "Beach Bars",
      subtitle: language === "pt" ? "Para passar o dia na praia de Canoa Quebrada" : "To spend the day at Canoa Quebrada beach",
      content: (
        <div className="flex flex-wrap gap-3">
          {beachBars.map((b) => (
            <a key={b.name} href={`https://instagram.com/${b.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full hover:bg-primary/10 transition-colors">
              <span className="text-foreground">{b.name}</span>
              <span className="text-primary text-sm">@{b.instagram}</span>
            </a>
          ))}
        </div>
      ),
    },
    {
      icon: Coffee,
      title: language === "pt" ? "Docerias e Cafeterias" : "Bakeries and Coffee Shops",
      content: (
        <div className="flex flex-wrap gap-3">
          {cafes.map((c) => (
            <div key={c.name} className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full">
              <span className="text-foreground">{c.name}</span>
              <span className="text-muted-foreground text-xs">({c.location})</span>
              {c.instagram && (
                <a href={`https://instagram.com/${c.instagram}`} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:text-primary/80">
                  @{c.instagram}
                </a>
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: Music,
      title: language === "pt" ? "Vida Noturna" : "Nightlife",
      subtitle: language === "pt" ? "O principal polo de entretenimento é a Broadway em Canoa Quebrada" : "The main entertainment hub is Broadway in Canoa Quebrada",
      content: (
        <div className="flex flex-wrap gap-3">
          {nightlife.map((n) => (
            <a key={n.name} href={`https://instagram.com/${n.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 bg-background/50 rounded-lg hover:bg-primary/10 transition-colors">
              <span className="text-foreground font-medium">{n.name}</span>
              <span className="text-primary text-sm">@{n.instagram}</span>
            </a>
          ))}
        </div>
      ),
    },
    {
      icon: Moon,
      title: language === "pt" ? "Comida de Madrugada" : "Late Night Food",
      content: (
        <div className="grid gap-3">
          {lateNightFood.map((l) => (
            <div key={l.location} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-background/50 rounded-lg">
              <div>
                <span className="font-medium text-foreground">{l.location}</span>
                <p className="text-sm text-muted-foreground">{l.options}</p>
              </div>
              <span className="text-primary text-sm font-medium">{l.hours}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: ShoppingBag,
      title: language === "pt" ? "Onde Comprar Camarão e Lagosta" : "Where to Buy Shrimp and Lobster",
      content: (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-primary mb-2">{language === "pt" ? "Comércio Especializado:" : "Specialized Vendors:"}</p>
            <div className="flex flex-wrap gap-2">
              {seafoodVendors.specialized.map((v) => (
                <span key={v} className="px-3 py-1 bg-background/50 rounded-full text-sm text-foreground">{v}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-primary mb-2">{language === "pt" ? "Supermercados:" : "Supermarkets:"}</p>
            <div className="flex flex-wrap gap-2">
              {seafoodVendors.supermarkets.map((v) => (
                <span key={v} className="px-3 py-1 bg-background/50 rounded-full text-sm text-foreground">{v}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-primary mb-2">{language === "pt" ? "Feira/Mercado:" : "Market:"}</p>
            <span className="px-3 py-1 bg-background/50 rounded-full text-sm text-foreground">{seafoodVendors.market}</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="gastronomia" className="section-padding relative bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            {language === "pt" ? "Gastronomia & Entretenimento" : "Gastronomy & Entertainment"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            {language === "pt" ? "Onde " : "Where to "}
            <span className="text-gold-gradient">{language === "pt" ? "Comer e Se Divertir" : "Eat & Have Fun"}</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-muted-foreground text-lg max-w-3xl mx-auto">
            {language === "pt" 
              ? "De restaurantes sofisticados a barracas de praia, descubra os melhores lugares para saborear a culinária local e aproveitar a vida noturna."
              : "From sophisticated restaurants to beach bars, discover the best places to savor local cuisine and enjoy the nightlife."}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                    )}
                  </div>
                </div>
                {category.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GastronomySection;
