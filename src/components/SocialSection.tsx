import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Youtube, Facebook, Music } from "lucide-react";

const platforms = [
  {
    name: "TikTok",
    icon: Music,
    color: "from-[hsl(340,80%,55%)] to-[hsl(316,80%,55%)]",
    handle: "@pratikshya",
    followers: "50K+",
    description: "Dance covers, trends & creative content",
    btnText: "Follow on TikTok",
    href: "#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "from-[hsl(316,80%,55%)] to-[hsl(270,60%,50%)]",
    handle: "@pratikshya.gurung",
    followers: "25K+",
    description: "Behind the scenes, reels & aesthetic posts",
    btnText: "Follow on Instagram",
    href: "#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    color: "from-[hsl(0,80%,50%)] to-[hsl(316,80%,55%)]",
    handle: "Pratikshya Gurung",
    followers: "10K+",
    description: "Dance performances, vlogs & music",
    btnText: "Subscribe",
    href: "#",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "from-[hsl(220,70%,50%)] to-[hsl(270,60%,50%)]",
    handle: "Pratikshya Gurung",
    followers: "15K+",
    description: "Community updates & live sessions",
    btnText: "Follow on Facebook",
    href: "#",
  },
];

const SocialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="socials" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-[100px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black gradient-text mb-4">
            My Socials
          </h2>
          <p className="text-muted-foreground text-lg">Follow the journey across platforms 🌟</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 group cursor-pointer block"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0 group-hover:neon-glow transition-all duration-300`}>
                  <p.icon size={24} className="text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-foreground font-bold text-lg">{p.name}</h3>
                    <span className="text-primary text-sm font-semibold">{p.followers}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{p.handle}</p>
                  <p className="text-muted-foreground text-sm">{p.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className={`inline-block px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${p.color} text-primary-foreground group-hover:shadow-lg transition-all duration-300`}>
                  {p.btnText}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
