import { motion } from "framer-motion";
import { Sparkles, Music, Waves, Star, Sun } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Experiência Premium",
    description: "Cada detalhe foi pensado para transformar sua virada de ano em um momento memorável, com conforto, exclusividade e uma atmosfera à altura de uma das praias mais icônicas do Brasil.",
  },
  {
    icon: Music,
    title: "Atrações Exclusivas",
    description: "Uma curadoria musical especial com DJs renomados e apresentações ao vivo que misturam música eletrônica e brasilidade, criando a trilha sonora perfeita para celebrar novos começos.",
  },
  {
    icon: Waves,
    title: "Cenário Paradisíaco",
    description: "Pé na areia, brisa do mar e o pôr do sol mais bonito do Ceará. Viva a virada do ano em Canoa Quebrada, cercado por paisagens deslumbrantes e uma energia contagiante.",
  },
  {
    icon: Sun,
    title: "Passeios e Aventura",
    description: "Explore Canoa Quebrada além da festa. Passeios de buggy pelas dunas, falésias impressionantes, lagoas escondidas e experiências que conectam você à natureza, tornando seu Réveillon ainda mais completo e inesquecível.",
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
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Uma Expreiência <span className="text-gold-gradient">Inesquecível</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Canoa Quebrada é mais do que um destino — é uma experiência única de natureza, aventura e cultura. 
            Venha descobrir esse paraíso e, de bônus, celebre a virada do ano em grande estilo!
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
