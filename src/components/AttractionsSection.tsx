import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const attractions = [
  {
    time: "20:00",
    name: "Abertura dos Portões",
    description: "Welcome drinks & DJ Set",
    featured: false,
  },
  {
    time: "21:30",
    name: "DJ Internacional",
    description: "Tech House & Deep House",
    featured: true,
  },
  {
    time: "23:00",
    name: "Show Especial",
    description: "Artista Surpresa",
    featured: true,
  },
  {
    time: "00:00",
    name: "Contagem Regressiva",
    description: "Queima de fogos & Brinde",
    featured: true,
  },
  {
    time: "01:00",
    name: "DJ Headliner",
    description: "Set especial de Ano Novo",
    featured: true,
  },
  {
    time: "04:00",
    name: "Sunrise Session",
    description: "Nascer do sol à beira-mar",
    featured: false,
  },
];

const AttractionsSection = () => {
  return (
    <section id="atracoes" className="section-padding relative bg-card/50">
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
            Programação
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Uma Noite de <span className="text-gold-gradient">Atrações</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.time}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div
                className={`glass-card p-6 h-full group transition-all duration-500 ${
                  attraction.featured
                    ? "hover:border-primary/50 hover:gold-glow"
                    : "hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-4 h-4" />
                    <span className="font-sans text-sm font-medium">{attraction.time}</span>
                  </div>
                  {attraction.featured && (
                    <span className="px-2 py-0.5 text-xs font-sans tracking-wider uppercase bg-primary/20 text-primary rounded-full">
                      Destaque
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl font-medium mb-2 text-foreground group-hover:text-gold-gradient transition-all duration-300">
                  {attraction.name}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {attraction.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-muted-foreground text-sm mt-12 font-sans"
        >
          * Programação sujeita a alterações. Atrações finais serão anunciadas em breve.
        </motion.p>
      </div>
    </section>
  );
};

export default AttractionsSection;
