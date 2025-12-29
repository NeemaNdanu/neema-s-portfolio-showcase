import { ArrowDown, Github, Mail, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="animate-fade-in mb-6">
            <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
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
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Transforming complex data into actionable insights through machine learning, 
            analytics, and visualization. Passionate about leveraging technology to solve 
            real-world problems.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up"
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
              className="glass px-8 py-4 rounded-xl font-semibold hover:bg-muted/50 transition-all text-foreground"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 animate-slide-up"
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
              href="mailto:ndanuneema51@gmail.com"
              className="p-3 glass rounded-xl hover:bg-primary/20 transition-all hover:scale-110 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-primary/20 transition-all hover:scale-110 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
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
