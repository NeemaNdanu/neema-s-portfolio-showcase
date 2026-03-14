import { ExternalLink, Github, Eye, GraduationCap, BarChart, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Traffic Video Analysis with YOLO",
    description:
      "Real-time road accident detection and vehicle speed estimation using crowd-sourced Kenyan traffic video. Trained an ensemble of YOLOv8 models with centroid-based speed tracking, achieving exceptional detection accuracy. Deployed as a public Streamlit Cloud web app.",
    tags: ["Python", "YOLOv8", "Streamlit", "Deep Learning", "Computer Vision"],
    icon: Eye,
    github: "https://github.com/NeemaNdanu/Traffic-Video-Analysis-with-YOLO",
    highlight: "Computer Vision",
  },
  {
    title: "Baraka Hygienics — Company Analysis",
    description:
      "Comprehensive data analysis covering company performance, sales trends, and market analytics for Baraka Hygienics. Built interactive visualizations and dashboards to surface actionable business insights.",
    tags: ["Python", "Data Analysis", "Sales & Marketing", "Visualization"],
    icon: BarChart,
    github: "https://github.com/NeemaNdanu/baraka-hygienics",
    highlight: "Business Intelligence",
  },
  {
    title: "Scholarship Discovery Automation",
    description:
      "End-to-end AI automation pipeline that scrapes scholarship listings daily, uses Google Gemini to parse details into structured fields, and delivers a formatted HTML digest via Gmail, eliminating manual searching for Kenyan students targeting US Masters programmes.",
    tags: ["n8n", "Gemini AI", "Automation", "Python"],
    icon: GraduationCap,
    github: "https://github.com/NeemaNdanu/scholarship-ai-workflow",
    highlight: "AI Workflow Automation",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A curated showcase of impactful work across data science, AI automation, and business analytics
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-3xl p-8 group hover:bg-muted/20 transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                      <project.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 text-xs bg-primary/15 text-primary rounded-full font-medium border border-primary/20">
                        {project.highlight}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-secondary/50 rounded-lg text-xs text-muted-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium group/link"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-14">
            <a
              href="https://github.com/NeemaNdanu?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass px-8 py-4 rounded-xl font-semibold hover:bg-primary/10 transition-all group"
            >
              <Github className="w-5 h-5" />
              View All Repositories
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
