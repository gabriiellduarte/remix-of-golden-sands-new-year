import { motion } from "framer-motion";
import { Sparkles, Music, Waves, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sparkles,
      title: t("about.feature1.title"),
      description: t("about.feature1.desc"),
    },
    {
      icon: Music,
      title: t("about.feature2.title"),
      description: t("about.feature2.desc"),
    },
    {
      icon: Waves,
      title: t("about.feature3.title"),
      description: t("about.feature3.desc"),
    },
    {
      icon: Sun,
      title: t("about.feature4.title"),
      description: t("about.feature4.desc"),
    },
  ];

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
            {t("about.title1")} <span className="text-gold-gradient">{t("about.title2")}</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
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
