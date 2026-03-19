import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, PieChart, TrendingUp, Database, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sales Performance Dashboard",
    description:
      "Interactive Power BI dashboard tracking sales KPIs, regional performance, and revenue trends with drill-down capabilities.",
    tags: ["Power BI", "DAX", "Sales Analytics"],
    icon: BarChart3,
    color: "from-primary to-secondary",
  },
  {
    title: "Customer Segmentation Analysis",
    description:
      "Data-driven customer segmentation using RFM analysis, visualized through dynamic Power BI reports for marketing strategy.",
    tags: ["Power BI", "Data Modeling", "RFM Analysis"],
    icon: PieChart,
    color: "from-secondary to-accent",
  },
  {
    title: "Financial Reporting Suite",
    description:
      "Comprehensive financial dashboard with P&L statements, budget vs actuals, and cash flow analysis for executive decision-making.",
    tags: ["Power BI", "Finance", "KPI Tracking"],
    icon: TrendingUp,
    color: "from-accent to-primary",
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "Employee analytics platform tracking attrition, engagement scores, and workforce diversity metrics with predictive insights.",
    tags: ["Power BI", "HR Analytics", "Predictive"],
    icon: Database,
    color: "from-primary to-accent",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black gradient-text mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Data stories brought to life through Power BI dashboards and analytics 📊
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}
                >
                  <project.icon size={22} className="text-primary-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-foreground font-bold text-lg">
                      {project.title}
                    </h3>
                    <ExternalLink
                      size={14}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
