import { GraduationCap, Award, MapPin, Sparkles, BookOpen, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                About Me
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Turning Data Into <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Where curiosity meets code — building intelligent solutions that matter.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left - Bio (3 cols) */}
            <div className="lg:col-span-3 space-y-8">
              {/* Bio Card */}
              <div className="glass p-8 rounded-2xl space-y-5 border border-border/50">
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

              {/* Quick Facts Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="glass p-5 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-primary/5 transition-all duration-300 group border border-border/30">
                  <div className="p-3 bg-primary/15 rounded-xl group-hover:bg-primary/25 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Education</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      BSc Data Science & Analytics
                    </p>
                    <p className="text-xs text-primary font-medium mt-1">USIU-Africa</p>
                  </div>
                </div>

                <div className="glass p-5 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-primary/5 transition-all duration-300 group border border-border/30">
                  <div className="p-3 bg-primary/15 rounded-xl group-hover:bg-primary/25 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Achievement</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      First Class Honours (Cum Laude)
                    </p>
                    <p className="text-xs text-primary font-medium mt-1">Dean's List 2022–2025</p>
                  </div>
                </div>

                <div className="glass p-5 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-primary/5 transition-all duration-300 group border border-border/30">
                  <div className="p-3 bg-primary/15 rounded-xl group-hover:bg-primary/25 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Location</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Nairobi, Kenya
                    </p>
                    <p className="text-xs text-primary font-medium mt-1">Open to remote</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Stats & Certs (2 cols) */}
            <div className="lg:col-span-2 space-y-5">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="glass p-5 rounded-2xl text-center group hover:bg-primary/10 transition-all duration-300 border border-border/30">
                  <div className="text-3xl font-bold text-gradient font-heading mb-1">9</div>
                  <p className="text-xs text-muted-foreground">Repositories</p>
                </div>
                <div className="glass p-5 rounded-2xl text-center group hover:bg-primary/10 transition-all duration-300 border border-border/30">
                  <div className="text-3xl font-bold text-gradient font-heading mb-1">3+</div>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
                <div className="glass p-5 rounded-2xl text-center group hover:bg-primary/10 transition-all duration-300 border border-border/30">
                  <div className="text-3xl font-bold text-gradient font-heading mb-1">2</div>
                  <p className="text-xs text-muted-foreground">Certs</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  Certifications
                </h4>
                
                <div className="glass p-5 rounded-2xl border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/15 rounded-lg mt-0.5">
                      <Brain className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-sm">
                        AI Fundamentals Course
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Zindua School • January 2026
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-5 rounded-2xl border-l-4 border-secondary/50 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-secondary/15 rounded-lg mt-0.5">
                      <Sparkles className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-secondary font-semibold text-sm">
                        Introducing Generative AI with AWS
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Udacity • July 2025
                      </p>
                    </div>
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
