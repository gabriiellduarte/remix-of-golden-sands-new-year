import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Car, MapIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import RouteMap from "./RouteMap";

interface RouteData {
  name: string;
  description: string;
  kmlPath?: string;
  link: string;
  color?: string;
}

const HowToGetSection = () => {
  const { t } = useLanguage();
  const [selectedRoute, setSelectedRoute] = useState<RouteData | null>(null);

  const routes: RouteData[] = [
    {
      name: t("howToGet.route1.name"),
      description: t("howToGet.route1.desc"),
      kmlPath: "/routes/aracati-canoa-br304.kml",
      link: "https://maps.app.goo.gl/NU3h16xxhqhNVbcq6",
      color: "#ff0026",
    },
    {
      name: t("howToGet.route2.name"),
      description: t("howToGet.route2.desc"),
      kmlPath: "/routes/aracati-canoa-ce040.kml",
      link: "https://maps.app.goo.gl/NU3h16xxhqhNVbcq6",
      color: "#00a8ff",
    },
    {
      name: t("howToGet.route3.name"),
      description: t("howToGet.route3.desc"),
      kmlPath: "/routes/majorlandia-canoa.kml",
      link: "https://maps.app.goo.gl/NU3h16xxhqhNVbcq6",
      color: "#00ff6a",
    },
  ];

  const meetingPoints = [
    {
      name: t("howToGet.point1.name"),
      description: t("howToGet.point1.desc"),
      link: "https://maps.app.goo.gl/7soBQJAeheUwiY699",
    },
    {
      name: t("howToGet.point2.name"),
      description: t("howToGet.point2.desc"),
      link: "https://maps.app.goo.gl/NU3h16xxhqhNVbcq6",
    },/*
    {
      name: t("howToGet.point3.name"),
      description: t("howToGet.point3.desc"),
      link: "https://maps.app.goo.gl/Rgg6S27gsuWqhcPj8",
    },*/
  ];

  return (
    <section id="como-chegar" className="section-padding relative bg-card/50">
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
            {t("howToGet.label")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            {t("howToGet.title1")} <span className="text-gold-gradient">{t("howToGet.title2")}</span>
          </h2>
          <div className="gold-divider mb-8" />
        </motion.div>

        {/* Routes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-serif text-2xl font-medium mb-8 text-center">
            <Car className="w-6 h-6 inline-block mr-3 text-primary" />
            {t("howToGet.routes")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {routes.map((route, index) => (
              <motion.div
                key={route.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/50 hover:gold-glow transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Navigation className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-medium text-foreground group-hover:text-gold-gradient transition-colors">
                      {route.name}
                    </h4>
                    <p className="font-sans text-sm text-muted-foreground">
                      {route.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {route.kmlPath && (
                    <button
                      onClick={() => setSelectedRoute(route)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-sans transition-colors"
                    >
                      <MapIcon className="w-4 h-4" />
                      {t("howToGet.viewRoute")}
                    </button>
                  )}
                  <a
                    href={route.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-primary/30 hover:bg-primary/10 text-primary rounded-lg text-sm font-sans transition-colors"
                  >
                    {t("howToGet.viewOnMaps")} →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meeting Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-serif text-2xl font-medium mb-8 text-center">
            <MapPin className="w-6 h-6 inline-block mr-3 text-primary" />
            {t("howToGet.meetingPoints")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {meetingPoints.map((point, index) => (
              <motion.a
                key={point.name}
                href={point.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary/50 hover:gold-glow transition-all duration-500"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg font-medium text-foreground group-hover:text-gold-gradient transition-colors mb-2">
                  {point.name}
                </h4>
                <p className="font-sans text-sm text-muted-foreground mb-3">
                  {point.description}
                </p>
                <span className="text-primary text-xs font-sans">
                  {t("howToGet.viewOnMaps")} →
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Route Map Modal */}
      {selectedRoute && selectedRoute.kmlPath && (
        <RouteMap
          routeName={selectedRoute.name}
          kmlPath={selectedRoute.kmlPath}
          color={selectedRoute.color}
          onClose={() => setSelectedRoute(null)}
        />
      )}
    </section>
  );
};

export default HowToGetSection;
