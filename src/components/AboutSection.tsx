import { motion } from "framer-motion";
import { Sparkles, Music, Waves, Star } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Experiência Premium",
    description: "Um evento cuidadosamente planejado para proporcionar momentos inesquecíveis.",
  },
  {
    icon: Music,
    title: "Atrações Exclusivas",
    description: "DJs internacionais e shows ao vivo com o melhor da música eletrônica e brasileira.",
  },
  {
    icon: Waves,
    title: "Cenário Paradisíaco",
    description: "Celebre em uma das praias mais belas do Brasil, com vista privilegiada para o mar.",
  },
  {
    icon: Star,
    title: "Gastronomia de Alto Padrão",
    description: "Open bar premium e cardápio assinado por chefs renomados.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding relative">
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
            Sobre o Evento
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Uma Noite <span className="text-gold-gradient">Extraordinária</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            O Réveillon Canoa Quebrada 2026 é mais do que uma festa — é uma celebração da vida e da natureza em perfeita harmonia. Prepare-se para viver a virada do ano 
            mais memorável da sua vida.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="glass-card p-8 h-full group hover:border-primary/30 transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-medium mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
