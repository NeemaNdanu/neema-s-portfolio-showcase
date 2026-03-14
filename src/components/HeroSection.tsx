import { ArrowDown, Github, Mail, Code, Database, Sparkles, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden tech-pattern">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        
        {/* Tech decorations */}
        <div className="absolute top-20 left-10 code-bracket animate-float">&lt;</div>
        <div className="absolute bottom-32 right-10 code-bracket animate-float-delayed">/&gt;</div>
        <div className="absolute top-1/3 right-1/4 text-secondary/20 animate-float">
          <Database className="w-12 h-12" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-primary/20 animate-float-delayed">
          <Code className="w-10 h-10" />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Photo */}
            <div className="animate-fade-in order-1 lg:order-2">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-primary/30 shadow-glow">
                  <img
                    src={profilePhoto}
                    alt="Neema Ndanu"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating tech badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-primary p-4 rounded-2xl shadow-glow">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute -top-4 -left-4 bg-gradient-secondary p-3 rounded-xl">
                  <Code className="w-5 h-5 text-secondary-foreground" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left flex-1 order-2 lg:order-1">
              {/* Greeting */}
              <div className="animate-fade-in mb-6">
                <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium">
                  Welcome to my portfolio
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                Hi, I'm{" "}
                <span className="text-gradient">Neema Ndanu</span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up font-heading"
                style={{ animationDelay: "0.2s" }}
              >
                Data Scientist & Analyst
              </p>

              {/* Description */}
              <p
                className="text-muted-foreground text-lg max-w-xl mb-10 animate-slide-up leading-relaxed"
                style={{ animationDelay: "0.3s" }}
              >
                Transforming complex data into actionable insights through machine learning, 
                analytics, and visualization. Passionate about leveraging technology to solve 
                real-world problems.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="#projects"
                  className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-glow"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="glass px-8 py-4 rounded-xl font-semibold hover:bg-primary/10 transition-all text-foreground"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div
                className="flex items-center justify-center lg:justify-start gap-4 animate-slide-up"
                style={{ animationDelay: "0.5s" }}
              >
                <a
                  href="https://github.com/NeemaNdanu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:bg-primary/20 transition-all hover:scale-110 group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/neema-ndanu-26b45b3a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:bg-primary/20 transition-all hover:scale-110 group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:ndanuneema51@gmail.com"
                  className="p-3 glass rounded-xl hover:bg-primary/20 transition-all hover:scale-110 group"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;