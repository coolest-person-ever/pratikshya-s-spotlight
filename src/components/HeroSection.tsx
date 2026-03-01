import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Youtube, Facebook, Music } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileArt from "@/assets/profile-art.jpg";

const roles = ["Dancing", "Singing", "Painting", "Creating", "Performing"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socials = [
    { icon: Music, label: "TikTok", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.9]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG Image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-[130%] object-cover opacity-30" />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"
        style={{ opacity: overlayOpacity }}
      />

      {/* Floating decorative orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-accent/15 blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-8 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden animate-pulse-glow relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img
                src={profileArt}
                alt="Pratikshya Gurung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-8xl font-display font-black gradient-text mb-4 text-glow"
        >
          Pratikshya Gurung
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-2 tracking-widest uppercase font-light"
        >
          Dancer • Creator • Artist • Performer
        </motion.p>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-3xl font-display font-bold text-primary mb-10 h-10"
        >
          {displayText}
          <span className="border-r-2 border-primary ml-1 animate-typing-cursor">&nbsp;</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#gallery" className="glow-btn text-lg">
            ▶ Watch My Videos
          </a>
          <a href="#socials" className="glow-btn-outline text-lg">
            ✨ Follow My Journey
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-5"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow-sm transition-all duration-300 hover:scale-110"
            >
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-scroll-down" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
