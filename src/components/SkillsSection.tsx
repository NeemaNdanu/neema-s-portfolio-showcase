import { Database, Code, BarChart3, Brain, Users, MessageSquare, ChartNoAxesColumnIncreasing, ChartScatter } from "lucide-react";
import { SiPython, SiR, SiApachespark, SiApachehadoop, SiN8N, SiStreamlit } from "react-icons/si";

const primaryTechStack = [
  { name: "Python", icon: SiPython, color: "text-secondary", background: "bg-secondary/10" },
  { name: "R", icon: SiR, color: "text-primary", background: "bg-primary/10" },
  { name: "Power BI", icon: ChartNoAxesColumnIncreasing, color: "text-accent", background: "bg-accent/10" },
  { name: "Tableau", icon: ChartScatter, color: "text-secondary", background: "bg-secondary/10" },
  { name: "SQL", icon: Database, color: "text-primary", background: "bg-primary/10" },
  { name: "Apache Spark", icon: SiApachespark, color: "text-accent", background: "bg-accent/10" },
  { name: "Apache Hadoop", icon: SiApachehadoop, color: "text-secondary", background: "bg-secondary/10" },
  { name: "n8n", icon: SiN8N, color: "text-accent", background: "bg-accent/10" },
  { name: "Streamlit", icon: SiStreamlit, color: "text-primary", background: "bg-primary/10" },
];

const skills = [
  {
    category: "Data Analysis & BI",
    icon: BarChart3,
    items: ["Power BI", "Tableau", "Apache Hadoop", "SQL", "Dashboard Development"],
    color: "from-primary to-accent",
  },
  {
    category: "Programming",
    icon: Code,
    items: ["Python", "R", "MS Excel", "Statistical Analysis"],
    color: "from-accent to-primary",
  },
  {
    category: "Machine Learning",
    icon: Brain,
    items: ["Deep Learning", "NLP", "Computer Vision", "Big Data Analytics", "AI Workflow Automation"],
    color: "from-primary to-accent",
  },
  {
    category: "Databases",
    icon: Database,
    items: ["SQL", "Data Cleaning", "Data Visualization", "ETL"],
    color: "from-accent to-primary",
  },
  {
    category: "Leadership",
    icon: Users,
    items: ["Team Collaboration", "Project Management", "Mentoring"],
    color: "from-primary to-accent",
  },
  {
    category: "Communication",
    icon: MessageSquare,
    items: ["Technical Writing", "Presentation", "Problem-Solving"],
    color: "from-accent to-primary",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for transforming raw data into meaningful insights
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="glass p-6 rounded-2xl group hover:bg-muted/30 transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <skill.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Category */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  {skill.category}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Visual */}
          <div className="mt-16 glass p-6 sm:p-8 rounded-2xl">
            <h3 id="primary-tech-stack-heading" className="font-heading font-semibold text-center mb-6">
              Primary Tech Stack
            </h3>
            <ul aria-labelledby="primary-tech-stack-heading" className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {primaryTechStack.map(
                (tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center gap-3 px-3 sm:px-4 py-3 bg-background/70 border border-border/60 rounded-lg text-foreground font-medium min-w-0"
                  >
                    <span className={`flex items-center justify-center w-9 h-9 shrink-0 rounded-lg ${tech.background}`}>
                      <tech.icon aria-hidden="true" className={`w-5 h-5 ${tech.color}`} />
                    </span>
                    <span className="text-sm leading-snug break-words min-w-0">{tech.name}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
