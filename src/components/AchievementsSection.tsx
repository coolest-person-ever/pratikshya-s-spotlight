import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: Users, label: "Followers", target: 100, suffix: "K+" },
  { icon: Star, label: "Performances", target: 50, suffix: "+" },
  { icon: Trophy, label: "Awards", target: 12, suffix: "" },
  { icon: Sparkles, label: "Content Created", target: 500, suffix: "+" },
];

const achievements = [
  { title: "Regional Dance Champion", desc: "1st place in contemporary dance competition 2023", emoji: "🏆" },
  { title: "Viral TikTok", desc: "Dance video crossed 1M+ views", emoji: "🔥" },
  { title: "Art Exhibition Feature", desc: "Paintings showcased at local art gallery", emoji: "🎨" },
  { title: "Stage Performance", desc: "Solo singing performance at cultural festival", emoji: "🎤" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black gradient-text mb-4">Achievements</h2>
          <p className="text-muted-foreground text-lg">Milestones along the way 🏆</p>
        </motion.div>

        {/* Stat counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center group hover:neon-glow-sm transition-all duration-300"
            >
              <s.icon className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" size={32} />
              <div className="text-3xl md:text-4xl font-display font-black gradient-text">
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 flex items-start gap-4 group"
            >
              <span className="text-4xl group-hover:animate-float">{a.emoji}</span>
              <div>
                <h3 className="text-foreground font-bold text-lg">{a.title}</h3>
                <p className="text-muted-foreground text-sm">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
