import { motion } from "framer-motion";
import { MapPin, Plane, Car } from "lucide-react";

const LocationSection = () => {
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
            Localização
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            <span className="text-gold-gradient">Canoa Quebrada</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Um dos destinos mais encantadores do litoral cearense, conhecido por suas falésias 
            avermelhadas, águas cristalinas e energia vibrante. O cenário perfeito para uma 
            celebração inesquecível.
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
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium mb-2 text-foreground">
                  Endereço do Evento
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  Praia de Canoa Quebrada
                  <br />
                  Aracati, Ceará - Brasil
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium mb-2 text-foreground">
                  Como Chegar
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  Aeroporto Internacional Pinto Martins (FOR)
                  <br />
                  ~150km de Fortaleza (2h30 de carro)
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium mb-2 text-foreground">
                  Transfer Exclusivo
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  Oferecemos serviço de transfer saindo de Fortaleza.
                  <br />
                  Consulte disponibilidade na compra do ingresso.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
