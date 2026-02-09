import { ExternalLink, Github, Eye, Cpu, BookOpen } from "lucide-react";

const projects = [
  {
    title: "Traffic Video Analysis with YOLO",
    description:
      "Final year graduation project applying real-time object detection and speed estimation to traffic videos using YOLO and Streamlit to demonstrate AI capabilities in Computer Vision.",
    tags: ["Python", "YOLO", "Streamlit", "Deep Learning", "Computer Vision"],
    icon: Eye,
    github: "https://github.com/NeemaNdanu/Graduation-Project",
    featured: true,
  },
  {
    title: "Deep Learning Repository",
    description:
      "A comprehensive collection of deep learning projects and experiments exploring neural networks, CNNs, and various architectures.",
    tags: ["Jupyter Notebook", "Deep Learning", "Neural Networks"],
    icon: Cpu,
    github: "https://github.com/NeemaNdanu/Deep-learning",
  },
  {
    title: "Natural Language Processing",
    description:
      "NLP projects focusing on text analysis, sentiment detection, and language understanding using modern techniques.",
    tags: ["Jupyter Notebook", "NLP", "Text Analysis"],
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
