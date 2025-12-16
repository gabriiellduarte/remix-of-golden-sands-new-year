import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Backpack, 
  PartyPopper,
  Waves,
  AlertTriangle
} from "lucide-react";

const tipCategories = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    tips: [
      "Mantenha seus pertences sempre por perto",
      "Use protetor solar e mantenha-se hidratado",
      "Evite nadar sozinho, especialmente à noite",
      "Respeite os limites das áreas sinalizadas",
    ],
  },
  {
    icon: Backpack,
    title: "O que Levar",
    tips: [
      "Protetor solar e repelente",
      "Roupas leves e confortáveis",
      "Chapéu ou boné e óculos de sol",
      "Dinheiro em espécie (nem todos aceitam cartão)",
    ],
  },
  {
    icon: PartyPopper,
    title: "Sobre o Evento",
    tips: [
      "A festa principal começa às 22h na praia",
      "Queima de fogos à meia-noite",
      "Shows musicais durante toda a noite",
      "Chegue cedo para garantir um bom lugar",
    ],
  },
];

const TipsSection = () => {
  return (
    <section id="dicas" className="section-padding relative">
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
            Prepare-se
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Dicas <span className="text-gold-gradient">Úteis</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Informações importantes para aproveitar o Réveillon com segurança e conforto.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tipCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="glass-card p-8 h-full">
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="font-sans text-sm text-muted-foreground">
                        {tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sea Warning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 border-primary/30"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Waves className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Lembre-se: o mar merece respeito!
                </h3>
              </div>
              <p className="font-sans text-muted-foreground">
                Sempre observe as condições do mar antes de entrar. Se houver bandeira vermelha, 
                não entre na água. Divirta-se com segurança e aproveite o Réveillon!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TipsSection;
