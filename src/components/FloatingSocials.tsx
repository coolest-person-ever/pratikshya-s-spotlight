import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, Music } from "lucide-react";

const socials = [
  {
    icon: Music,
    href: "https://www.tiktok.com/@bhumika08_",
    label: "TikTok",
    hoverColor: "hover:bg-[hsl(340,80%,55%)]",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/bhumikathakuri9",
    label: "Instagram",
    hoverColor: "hover:bg-[hsl(316,80%,55%)]",
  },
  {
    icon: Youtube,
    href: "#",
    label: "YouTube",
    hoverColor: "hover:bg-[hsl(0,80%,50%)]",
  },
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
    hoverColor: "hover:bg-[hsl(220,70%,50%)]",
  },
];

const FloatingSocials = () => {
  return (
    <motion.div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-[9998] hidden md:flex flex-col gap-3"
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.6, ease: "easeOut" }}
    >
      {socials.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={`w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground ${s.hoverColor} hover:text-primary-foreground transition-all duration-300 hover:neon-glow-sm hover:scale-110`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.2 + i * 0.1 }}
        >
          <s.icon size={18} />
        </motion.a>
      ))}
      <div className="w-px h-8 bg-border mx-auto mt-1" />
    </motion.div>
  );
};

export default FloatingSocials;
