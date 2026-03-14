import { ExternalLink, Github, Eye, GraduationCap, Database, BookOpen, Brain } from "lucide-react";

const projects = [
  {
    title: "Real-Time Traffic Detection & Speed Estimation — YOLOv8",
    description:
      "Built a system detecting road accidents and estimating vehicle speeds in real time using crowd-sourced Kenyan traffic video, addressing Kenya's RTA fatalities. Deployed as a public Streamlit Cloud web app.",
    tags: ["Python", "YOLOv8", "Streamlit", "Deep Learning", "Computer Vision"],
    icon: Eye,
    github: "https://github.com/NeemaNdanu/Traffic-Video-Analysis-with-YOLO",
    featured: true,
  },
  {
    title: "Scholarship Discovery Automation",
    description:
      "Co-built an end-to-end AI automation pipeline eliminating manual scholarship searching for Kenyan students targeting US Masters programmes, powered by Gemini AI and n8n.",
    tags: ["Automation", "n8n", "Gemini AI", "Python"],
    icon: GraduationCap,
    github: "https://github.com/NeemaNdanu/scholarship-ai-workflow",
  },
  {
    title: "Big Data Analytics Pipeline",
    description:
      "Big data pipeline using Hadoop, HDFS, Sqoop, and SQL to ingest and analyze web data at scale.",
    tags: ["Hadoop", "HDFS", "Sqoop", "SQL", "Big Data"],
    icon: Database,
    github: "https://github.com/NeemaNdanu/Big-Data-Analytics",
  },
  {
    title: "Deep Learning — Computer Vision",
    description:
      "Practical deep learning work including unsupervised learning, CNN-based image classification, and object detection with model development and evaluation.",
    tags: ["Deep Learning", "CNN", "Computer Vision", "Jupyter"],
    icon: Brain,
    github: "https://github.com/NeemaNdanu/Deep-learning",
  },
  {
    title: "Natural Language Processing",
    description:
      "Hands-on NLP projects including text classification for low-resource African languages, social media sentiment analysis, and parsing implementations.",
    tags: ["NLP", "Text Classification", "Sentiment Analysis"],
    icon: BookOpen,
    github: "https://github.com/NeemaNdanu/Natural-language-processing",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
              A showcase of my data science, machine learning, and analytics projects
            </p>
          </div>

          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="glass rounded-3xl p-8 mb-8 border-l-4 border-primary group hover:bg-muted/20 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <project.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md font-medium">
                        Featured
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary/50 rounded-lg text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="glass rounded-2xl p-6 group hover:bg-muted/20 transition-all hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/50 rounded-md text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/NeemaNdanu?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass px-8 py-4 rounded-xl font-semibold hover:bg-primary/10 transition-all"
            >
              <Github className="w-5 h-5" />
              View All Repositories
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
