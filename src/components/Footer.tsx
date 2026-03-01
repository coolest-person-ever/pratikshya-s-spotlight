import { Instagram, Youtube, Facebook, Music, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  const socials = [
    { icon: Music, href: "https://www.tiktok.com/@bhumika08_", label: "TikTok" },
    { icon: Instagram, href: "https://instagram.com/bhumikathakuri9", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const links = [
    { label: "Home", href: "#home" },
    { label: "Gallery", href: "#gallery" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-display font-black gradient-text mb-4">
            Bhumika Thakuri
          </h3>
          <p className="text-muted-foreground">Dancer • Creator • Artist • Performer</p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15} className="flex justify-center gap-4 mb-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <s.icon size={18} />
            </a>
          ))}
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3} className="flex flex-wrap justify-center gap-6 mb-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="border-t border-border/50 pt-6 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © 2026 Bhumika Thakuri • Made with <Heart size={12} className="text-primary" />
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
