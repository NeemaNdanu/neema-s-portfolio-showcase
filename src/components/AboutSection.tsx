import { GraduationCap, Award, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Turning Data Into <span className="text-gradient">Stories</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Bio */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a dedicated and proactive Data Scientist and Analyst with hands-on 
                experience in developing innovative, data-driven solutions. My expertise 
                spans across Python, R, Power BI, Hadoop, and Excel.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With a strong foundation in machine learning, natural language processing (NLP), 
                and big data analytics, I'm passionate about continuous learning and leveraging 
                technology to solve real-world problems.
              </p>
              
              {/* Quick Facts */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                <div className="glass p-4 rounded-xl flex items-start gap-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      BSc Data Science & Analytics
                    </p>
                    <p className="text-xs text-primary mt-1">USIU-Africa</p>
                  </div>
                </div>

                <div className="glass p-4 rounded-xl flex items-start gap-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Achievement</h4>
                    <p className="text-sm text-muted-foreground">
                      First Class Honours (Cum Laude)
                    </p>
                    <p className="text-xs text-primary mt-1">Dean's List 2022-2025</p>
                  </div>
                </div>

                <div className="glass p-4 rounded-xl flex items-start gap-4 sm:col-span-2">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Nairobi, Kenya
                    </p>
                    <p className="text-xs text-primary mt-1">Open to remote opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Stats & Certification */}
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-6 rounded-2xl text-center group hover:bg-primary/10 transition-colors">
                  <div className="text-4xl font-bold text-gradient font-heading mb-2">14+</div>
                  <p className="text-sm text-muted-foreground">GitHub Repositories</p>
                </div>
                <div className="glass p-6 rounded-2xl text-center group hover:bg-primary/10 transition-colors">
                  <div className="text-4xl font-bold text-gradient font-heading mb-2">3+</div>
                  <p className="text-sm text-muted-foreground">Years Learning</p>
                </div>
                <div className="glass p-6 rounded-2xl text-center group hover:bg-primary/10 transition-colors">
                  <div className="text-4xl font-bold text-gradient font-heading mb-2">95</div>
                  <p className="text-sm text-muted-foreground">GitHub Contributions</p>
                </div>
                <div className="glass p-6 rounded-2xl text-center group hover:bg-primary/10 transition-colors">
                  <div className="text-4xl font-bold text-gradient font-heading mb-2">2</div>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
              </div>

              {/* Certification Card */}
              <div className="glass p-6 rounded-2xl border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2">Latest Certification</h4>
                <p className="text-primary font-medium">
                  AI Fundamentals Course
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Zindua School
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Completed: January 2026
                </p>
              </div>

              {/* Previous Certification */}
              <div className="glass p-5 rounded-2xl border-l-4 border-secondary/50">
                <p className="text-secondary font-medium text-sm">
                  Introducing Generative AI with AWS
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Udacity x Accenture • July 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
