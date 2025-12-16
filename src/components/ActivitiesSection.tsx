import { motion } from "framer-motion";
import { Car, Bike, Wind, Building2 } from "lucide-react";

const activities = [
  {
    icon: Car,
    name: "Passeio de Buggy",
    description: "Roteiros pelas falésias, dunas e lagoas com paradas para banho e fotos incríveis.",
    highlights: [
      "Duna do Pôr do Sol",
      "Lagoa do Mato",
      "Garganta do Diabo",
    ],
    note: "Opções com emoção (radicais) ou sem emoção (mais tranquilas)",
    meetingPoint: "Central de Turismo",
  },
  {
    icon: Bike,
    name: "Passeio de Quadriciclo",
    description: "Aventure-se pelas dunas e trilhas de Canoa Quebrada em um quadriciclo.",
    highlights: [],
    note: "Perfeito para quem busca adrenalina",
    meetingPoint: "Central de Turismo",
  },
  {
    icon: Wind,
    name: "Passeio de Parapente",
    description: "Voe sobre as falésias e tenha uma vista privilegiada de toda a região.",
    highlights: [],
    note: "Experiência inesquecível para os aventureiros",
    meetingPoint: "Consultar local de encontro",
  },
  {
    icon: Building2,
    name: "Centro Histórico de Aracati",
    description: "Conheça a arquitetura colonial e a história da cidade mais antiga do litoral leste.",
    highlights: [],
    note: "Passeio cultural imperdível",
    meetingPoint: "Central de Turismo",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="oque-fazer" className="section-padding relative">
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
            O Que Fazer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Onde Se <span className="text-gold-gradient">Aventurar</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-muted-foreground text-lg max-w-3xl mx-auto">
            Para os amantes de emoção e natureza, Aracati e Canoa Quebrada são um prato cheio.
            Roteiros seguem trilhas pelas falésias, dunas e lagoas com paradas para banho e fotos incríveis.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="glass-card p-8 h-full group hover:border-primary/50 hover:gold-glow transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <activity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-gold-gradient transition-colors mb-2">
                      {activity.name}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </div>

                {activity.highlights.length > 0 && (
                  <div className="ml-[4.5rem] mb-4">
                    <p className="font-sans text-xs text-primary mb-2 uppercase tracking-wider">
                      Paradas Incluídas:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activity.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-xs font-sans bg-primary/10 text-primary rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="ml-[4.5rem] pt-4 border-t border-border/50">
                  <p className="font-sans text-xs text-muted-foreground italic mb-2">
                    {activity.note}
                  </p>
                  <p className="font-sans text-sm text-foreground/80">
                    <span className="text-primary">📍</span> {activity.meetingPoint}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
