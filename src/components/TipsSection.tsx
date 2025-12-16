import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Backpack, 
  PartyPopper,
  Waves,
  AlertTriangle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TipsSection = () => {
  const { t, language } = useLanguage();

  const tipCategories = [
    {
      icon: ShieldCheck,
      title: t("tips.safety.title"),
      tips: [
        t("tips.safety.tip1"),
        t("tips.safety.tip2"),
        t("tips.safety.tip3"),
        t("tips.safety.tip4"),
      ],
    },
    {
      icon: Backpack,
      title: t("tips.packing.title"),
      tips: [
        t("tips.packing.tip1"),
        t("tips.packing.tip2"),
        t("tips.packing.tip3"),
        t("tips.packing.tip4"),
      ],
    },
    {
      icon: PartyPopper,
      title: t("tips.bonus.title"),
      tips: [
        t("tips.bonus.desc"),
      ],
    },
  ];

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
            {t("tips.label")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            {t("tips.title1")} <span className="text-gold-gradient">{t("tips.title2")}</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("tips.description")}
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
                  {language === "pt" 
                    ? "Lembre-se: o mar merece respeito!" 
                    : "Remember: the sea deserves respect!"}
                </h3>
              </div>
              <p className="font-sans text-muted-foreground">
                {language === "pt"
                  ? "Sempre observe as condições do mar antes de entrar. Se houver bandeira vermelha, não entre na água. Divirta-se com segurança e aproveite Canoa Quebrada!"
                  : "Always check sea conditions before entering. If there is a red flag, do not enter the water. Have fun safely and enjoy Canoa Quebrada!"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TipsSection;
