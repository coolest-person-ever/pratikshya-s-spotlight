import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Youtube, Facebook, Music, ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "TikTok",
    icon: Music,
    color: "from-[hsl(340,80%,55%)] to-[hsl(316,80%,55%)]",
    handle: "@pratikshya____11",
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

const tiktokVideos = [
  "7610813431175793941",
  "7611189712421735701",
  "7611871355096583444",
];

const youtubeVideos = [
  "dQw4w9WgXcQ",
  "kJQP7kiw5Fk",
  "RgKAFK5djSk",
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

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
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

        {/* TikTok Embeds */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Music className="text-primary" size={28} />
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground text-glow">
              My TikTok
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiktokVideos.map((id, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative w-full" style={{ minHeight: 580 }}>
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${id}`}
                    className="w-full h-full absolute inset-0"
                    style={{ minHeight: 580 }}
                    allowFullScreen
                    allow="encrypted-media"
                    title={`TikTok video ${i + 1}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.tiktok.com/@pratikshya____11"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2"
            >
              <Music size={18} />
              Follow on TikTok
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        {/* YouTube Embeds */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Youtube className="text-primary" size={28} />
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground text-glow">
              My YouTube
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {youtubeVideos.map((id, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden rounded-2xl group"
              >
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    className="w-full h-full absolute inset-0 rounded-t-2xl"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title={`YouTube video ${i + 1}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://youtube.com/@pratikshyagurung"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2"
            >
              <Youtube size={18} />
              Subscribe on YouTube
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        {/* Instagram Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Instagram className="text-primary" size={28} />
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground text-glow">
              My Instagram
            </h3>
          </div>
          <div className="max-w-2xl mx-auto glass-card p-8 text-center">
            <p className="text-muted-foreground mb-6 text-lg">
              Check out my latest reels, behind-the-scenes, and aesthetic posts ✨
            </p>
            <a
              href="https://instagram.com/pratikshya.gurung"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2"
            >
              <Instagram size={18} />
              Follow on Instagram
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
