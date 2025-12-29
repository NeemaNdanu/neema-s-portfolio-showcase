import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Science & Analytics Intern",
    company: "Millennium Solutions East Africa Ltd",
    location: "Manga House, Upper Hill, Nairobi",
    period: "May 2025 – July 2025",
    description: [
      "Supported internal data analysis efforts through data cleaning, visualization, and reporting using widely adopted business intelligence tools.",
      "Assisted in compiling performance and activity data to aid internal teams in tracking operational metrics.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Career
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Professional <span className="text-gradient">Experience</span>
            </h2>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.title + exp.company}
                className="glass p-8 rounded-3xl hover:shadow-glow transition-all group"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium text-lg">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 ml-0 sm:ml-[76px]">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex items-start gap-3"
                    >
                      <span className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;