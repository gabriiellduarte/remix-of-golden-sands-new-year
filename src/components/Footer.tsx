import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logoPrefeitura from "@/assets/logo-prefeitura-aracati.png";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-8 px-6">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={logoPrefeitura} 
              alt="Prefeitura do Aracati" 
              className="h-14 w-auto mb-4"
            />
            <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-xs">
              Realização: Prefeitura Municipal de Aracati.
              Descubra Canoa Quebrada e encerre o ano em um dos destinos 
              mais incríveis do Ceará.
            </p>
          </motion.div>

          

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-medium mb-4 text-foreground">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-muted-foreground">
              © 2025 Final de Ano em Canoa Quebrada. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
