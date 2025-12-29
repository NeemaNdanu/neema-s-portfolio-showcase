import { Heart, Github, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <a
                href="#"
                className="font-heading text-xl font-semibold text-gradient"
              >
                Neema Ndanu
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Data Scientist & Analyst
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/NeemaNdanu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:ndanuneema51@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
                Made with <Heart className="w-4 h-4 text-primary" /> in Nairobi
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                © {currentYear} Neema Ndanu. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
