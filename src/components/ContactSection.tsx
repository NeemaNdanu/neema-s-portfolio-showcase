import { Mail, Phone, Github, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question 
              or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <a
                href="mailto:ndanuneema51@gmail.com"
                className="glass p-5 rounded-xl flex items-center gap-4 group hover:bg-primary/10 transition-all"
              >
                <div className="p-3 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">
                    ndanuneema51@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+254742502862"
                className="glass p-5 rounded-xl flex items-center gap-4 group hover:bg-primary/10 transition-all"
              >
                <div className="p-3 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+254 742 502 862</p>
                </div>
              </a>

              <a
                href="https://github.com/NeemaNdanu"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-5 rounded-xl flex items-center gap-4 group hover:bg-primary/10 transition-all"
              >
                <div className="p-3 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-foreground">@NeemaNdanu</p>
                </div>
              </a>

              <div className="glass p-5 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="glass rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                <Send className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Ready to Connect?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-sm">
                I'm open to discussing data science opportunities, collaborations, 
                or just having a chat about the latest in AI and analytics.
              </p>
              <a
                href="mailto:ndanuneema51@gmail.com"
                className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-glow w-full sm:w-auto"
              >
                Send Me an Email
              </a>
            </div>
          </div>

          {/* Reference */}
          <div className="mt-16 glass p-6 rounded-2xl">
            <h4 className="font-heading font-semibold mb-4">Reference</h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-medium text-foreground">Dr. Edward Ombui</p>
                <p className="text-sm text-muted-foreground">
                  Assistant Professor, Department of Computing and Informatics
                </p>
                <p className="text-sm text-muted-foreground">
                  School of Science and Technology, USIU-Africa
                </p>
              </div>
              <div className="space-y-1">
                <a
                  href="mailto:eombui@usiu.ac.ke"
                  className="text-sm text-primary hover:text-accent transition-colors block"
                >
                  eombui@usiu.ac.ke
                </a>
                <p className="text-sm text-muted-foreground">+254 725 508 353</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
