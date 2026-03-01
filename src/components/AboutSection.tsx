import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { emoji: "💃", label: "Dance" },
  { emoji: "🎤", label: "Singing" },
  { emoji: "🎨", label: "Painting" },
  { emoji: "📱", label: "Content Creation" },
  { emoji: "🎭", label: "Performing" },
];

const timeline = [
  { year: "2016", title: "Started Dancing", desc: "Began her dance journey with classical and contemporary styles" },
  { year: "2020", title: "Social Media Growth", desc: "Started creating content on TikTok and Instagram" },
  { year: "2023", title: "Competitions & Awards", desc: "Won multiple dance competitions and art showcases" },
  { year: "2026", title: "Creative Journey", desc: "Building her brand as a multi-talented Gen Z creator" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black gradient-text mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm Pratikshya — an 18-year-old dancer, singer, painter, and digital creator from Nepal.
            I express myself through movement, color, and content. Every day is a canvas. ✨
          </p>
        </motion.div>

        {/* Skill Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card px-6 py-3 flex items-center gap-2 neon-glow-sm cursor-default"
            >
              <span className="text-2xl">{skill.emoji}</span>
              <span className="font-semibold text-foreground">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary neon-glow-sm z-10" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card p-5">
                  <span className="text-primary font-bold font-display text-lg">{item.year}</span>
                  <h3 className="text-foreground font-bold text-xl mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
