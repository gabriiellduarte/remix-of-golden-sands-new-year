import { motion } from "framer-motion";
import { Landmark, Waves, Car } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LocationSection = () => {
  const { language } = useLanguage();

  const descricaoLocal = language === "pt"
    ? "Aracati combina patrimônio colonial preservado, culinária regional e hospitalidade nordestina com o cenário litorâneo de Canoa Quebrada. Entre uma especial do Cerapió e outra, aproveite o centro histórico tombado e as falésias coloridas que tornaram o destino famoso no mundo inteiro."
    : "Aracati blends preserved colonial heritage, regional cuisine, and Northeastern hospitality with the coastal backdrop of Canoa Quebrada. Between Cerapió stages, explore the protected historic streets and the colorful cliffs that made the destination famous worldwide.";

  const cartoesInformacao = [
    {
      icone: Landmark,
      titulo: language === "pt" ? "Centro Histórico & Arena Cerapió" : "Historic Center & Cerapió Arena",
      descricao:
        language === "pt"
          ? "Casarões, igrejas e museus tombados convivem com a estrutura de credenciamento, parque fechado e boxes do rally."
          : "Heritage-listed mansions, churches, and museums share space with the accreditation arena, parc fermé, and rally boxes.",
      complemento:
        language === "pt"
          ? "Passeie durante o dia e retorne à noite para briefings, inspeções técnicas e serviços 24h."
          : "Stroll by day and return at night for briefings, scrutineering, and 24/7 services.",
    },
    {
      icone: Waves,
      titulo: language === "pt" ? "Canoa Quebrada" : "Canoa Quebrada",
      descricao:
        language === "pt"
          ? "Falésias coloridas, dunas e ventos constantes convidam a buggy, parapente, kitesurf e banhos de mar renovadores."
          : "Colorful cliffs, dunes, and steady winds invite buggy rides, paragliding, kitesurfing, and refreshing ocean dips.",
      complemento:
        language === "pt"
          ? "A Broadway concentra gastronomia, artesanato e a vida noturna que anima o pós-prova."
          : "Broadway packs restaurants, crafts, and the nightlife that lights up the post-stage scene.",
    },
    {
      icone: Car,
      titulo: language === "pt" ? "Como Chegar" : "How to Get Here",
      descricao:
        language === "pt"
          ? "150 km de Fortaleza (Aeroporto Pinto Martins) pelas rodovias CE-040 ou BR-304, além do acesso pela BR-304 para quem vem do Rio Grande do Norte."
          : "150 km from Fortaleza's Pinto Martins Airport via CE-040 or BR-304, plus BR-304 access for those coming from Rio Grande do Norte.",
      complemento:
        language === "pt"
          ? "Transfers oficiais e comboios guiados levam equipes e visitantes até Aracati e Canoa Quebrada com conforto." 
          : "Official shuttles and guided convoys take teams and visitors to Aracati and Canoa Quebrada with ease.",
    },
  ];

  return (
    <section id="localizacao" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            {language === "pt" ? "Localização" : "Location"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            <span className="text-gold-gradient">Aracati &amp; Canoa Quebrada</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {descricaoLocal}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card overflow-hidden aspect-[4/3] lg:aspect-auto"
          >
            <div className="w-full h-full min-h-[300px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.88584553066!2d-37.71!3d-4.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b9f95f6ad0d9d7%3A0x3f8e0c8c8c8c8c8c!2sCanoa%20Quebrada%2C%20Aracati%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                className="absolute inset-0 w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {cartoesInformacao.map((cartao) => {
              const Icone = cartao.icone;
              return (
                <div key={cartao.titulo} className="glass-card p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium mb-2 text-foreground">
                      {cartao.titulo}
                    </h3>
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                      {cartao.descricao}
                      <br />
                      {cartao.complemento}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
