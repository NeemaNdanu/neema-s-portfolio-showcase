import { GraduationCap, Award, MapPin, Sparkles, BookOpen, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                About Me
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Driven by Data, <span className="text-gradient">Guided by Purpose</span>
            </h2>
          </div>

          {/* Bio */}
          <div className="glass p-8 rounded-2xl border border-border/50 mb-10">
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a dedicated and proactive Data Scientist and Analyst with hands-on 
                experience in developing innovative, data-driven solutions. My expertise 
                spans Python, R, Power BI, Tableau, SQL, Apache Spark, and Apache Hadoop.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With a strong foundation in machine learning, NLP, computer vision, 
                big data analytics, and AI workflow automation, I'm passionate about 
                continuous learning and delivering actionable insights through data science.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
            <div className="glass p-6 rounded-2xl text-center hover:bg-primary/10 transition-all duration-300 border border-border/30">
              <div className="text-3xl font-bold text-gradient font-heading mb-1">9</div>
              <p className="text-sm text-muted-foreground">Repositories</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover:bg-primary/10 transition-all duration-300 border border-border/30">
              <div className="text-3xl font-bold text-gradient font-heading mb-1">2</div>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
          </div>

          {/* Quick Facts + Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left — Quick Facts */}
            <div className="space-y-4">
              <div className="glass p-5 rounded-2xl flex items-center gap-4 hover:bg-primary/5 transition-all duration-300 border border-border/30">
                <div className="p-3 bg-primary/15 rounded-xl shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Education</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">BSc Data Science & Analytics</p>
                  <p className="text-xs text-primary font-medium mt-0.5">USIU-Africa</p>
                </div>
              </div>

              <div className="glass p-5 rounded-2xl flex items-center gap-4 hover:bg-primary/5 transition-all duration-300 border border-border/30">
                <div className="p-3 bg-primary/15 rounded-xl shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Achievement</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">First Class Honours (Cum Laude)</p>
                  <p className="text-xs text-primary font-medium mt-0.5">Dean's List 2022–2025</p>
                </div>
              </div>

              <div className="glass p-5 rounded-2xl flex items-center gap-4 hover:bg-primary/5 transition-all duration-300 border border-border/30">
                <div className="p-3 bg-primary/15 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Location</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Nairobi, Kenya</p>
                  <p className="text-xs text-primary font-medium mt-0.5">Open to remote opportunities</p>
                </div>
              </div>
            </div>

            {/* Right — Certifications */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2 mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                Certifications
              </h4>

              <div className="glass p-5 rounded-2xl border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/15 rounded-lg mt-0.5">
                    <Brain className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary font-semibold text-sm">AI Fundamentals Course</p>
                    <p className="text-xs text-muted-foreground mt-1">Zindua School • January 2026</p>
                  </div>
                </div>
              </div>

              <div className="glass p-5 rounded-2xl border-l-4 border-secondary/50 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary/15 rounded-lg mt-0.5">
                    <Sparkles className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-secondary font-semibold text-sm">Introducing Generative AI with AWS</p>
                    <p className="text-xs text-muted-foreground mt-1">Udacity • July 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
