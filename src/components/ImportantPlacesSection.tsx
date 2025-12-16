import { motion } from "framer-motion";
import { 
  Cross, 
  Shield, 
  Stethoscope, 
  Hospital, 
  Bus, 
  Phone,
  Siren,
  Users,
  Flame
} from "lucide-react";

const places = [
  {
    icon: Cross,
    name: "Farmácia",
    description: "Medicamentos e produtos de saúde",
    link: "https://maps.google.com/?q=Farmacia+Canoa+Quebrada",
  },
  {
    icon: Shield,
    name: "Posto Policial",
    description: "Delegacia de polícia local",
    link: "https://maps.google.com/?q=Delegacia+Canoa+Quebrada",
  },
  {
    icon: Stethoscope,
    name: "Posto de Saúde",
    description: "Atendimento básico de saúde",
    link: "https://maps.google.com/?q=Posto+de+Saude+Canoa+Quebrada",
  },
  {
    icon: Hospital,
    name: "UPA",
    description: "Unidade de Pronto Atendimento",
    link: "https://maps.google.com/?q=UPA+Aracati",
  },
  {
    icon: Hospital,
    name: "Hospital Municipal",
    description: "Atendimento de emergência",
    link: "https://maps.google.com/?q=Hospital+Municipal+Aracati",
  },
  {
    icon: Bus,
    name: "Parada de Ônibus/Topics",
    description: "Transporte para Aracati e Majorlândia",
    link: "https://maps.google.com/?q=Parada+Onibus+Canoa+Quebrada",
  },
];

const emergencyContacts = [
  {
    icon: Siren,
    name: "Polícia",
    number: "190",
  },
  {
    icon: Users,
    name: "Guarda Municipal",
    number: "153",
  },
  {
    icon: Flame,
    name: "Bombeiros",
    number: "193",
  },
];

const ImportantPlacesSection = () => {
  return (
    <section id="locais-importantes" className="section-padding relative bg-card/50">
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
            Informações Úteis
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Locais <span className="text-gold-gradient">Importantes</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {places.map((place, index) => (
            <motion.a
              key={place.name}
              href={place.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/50 hover:gold-glow transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <place.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-foreground group-hover:text-gold-gradient transition-colors">
                    {place.name}
                  </h4>
                  <p className="font-sans text-sm text-muted-foreground">
                    {place.description}
                  </p>
                </div>
              </div>
              <span className="mt-3 inline-flex items-center text-primary text-xs font-sans">
                Ver no mapa →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-serif text-2xl font-medium mb-8 text-center">
            <Phone className="w-6 h-6 inline-block mr-3 text-primary" />
            Telefones Importantes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg font-medium text-foreground mb-2">
                  {contact.name}
                </h4>
                <a
                  href={`tel:${contact.number}`}
                  className="font-sans text-3xl font-bold text-gold-gradient hover:opacity-80 transition-opacity"
                >
                  {contact.number}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportantPlacesSection;
