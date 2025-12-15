import { motion } from "framer-motion";
import { Check, Crown, Star } from "lucide-react";

const tickets = [
  {
    name: "Individual",
    price: "R$ 890",
    originalPrice: "R$ 1.190",
    badge: "1º Lote",
    features: [
      "Acesso completo ao evento",
      "Open bar premium",
      "Buffet de gastronomia",
      "Kit boas-vindas",
    ],
    highlighted: false,
    icon: Star,
  },
  {
    name: "Casal",
    price: "R$ 1.590",
    originalPrice: "R$ 2.190",
    badge: "Mais Vendido",
    features: [
      "2 ingressos individuais",
      "Open bar premium",
      "Buffet de gastronomia",
      "Kit boas-vindas para casal",
      "Área VIP preferencial",
    ],
    highlighted: true,
    icon: Crown,
  },
  {
    name: "VIP Lounge",
    price: "R$ 2.990",
    originalPrice: "R$ 3.990",
    badge: "Exclusivo",
    features: [
      "Acesso ao lounge privativo",
      "Open bar super premium",
      "Menu degustação exclusivo",
      "Concierge dedicado",
      "Vista privilegiada",
      "Transfer incluso",
    ],
    highlighted: false,
    icon: Crown,
  },
];

const TicketsSection = () => {
  return (
    <section id="ingressos" className="section-padding relative bg-card/50">
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
            Ingressos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Escolha Sua <span className="text-gold-gradient">Experiência</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Garanta sua presença no evento mais exclusivo do litoral cearense.
            Valores promocionais de 1º lote por tempo limitado.
          </p>
        </motion.div>

        {/* Ticket cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              {ticket.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 text-xs font-sans tracking-wider uppercase bg-gold-gradient text-primary-foreground rounded-full font-medium">
                    {ticket.badge}
                  </span>
                </div>
              )}
              
              <div
                className={`glass-card p-8 h-full flex flex-col transition-all duration-500 ${
                  ticket.highlighted
                    ? "border-primary/50 gold-glow"
                    : "hover:border-primary/30"
                }`}
              >
                <div className="text-center mb-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ticket.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {!ticket.highlighted && ticket.badge && (
                    <span className="inline-block px-3 py-1 text-xs font-sans tracking-wider uppercase bg-muted text-muted-foreground rounded-full mb-3">
                      {ticket.badge}
                    </span>
                  )}
                  
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                    {ticket.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-muted-foreground line-through text-sm font-sans">
                      {ticket.originalPrice}
                    </span>
                    <span className="font-serif text-3xl font-medium text-gold-gradient">
                      {ticket.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {ticket.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-sans text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                    ticket.highlighted
                      ? "btn-premium"
                      : "btn-premium-outline"
                  }`}
                >
                  Comprar Ingresso
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-sans text-muted-foreground text-sm">
            Parcelamento em até 12x no cartão. PIX com 10% de desconto.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TicketsSection;
