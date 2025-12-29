import { Briefcase, Heart, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Science & Analytics Intern",
    company: "Millennium Solutions East Africa Ltd",
    location: "Manga House, Upper Hill, Nairobi",
    period: "May 2025 – July 2025",
    type: "work",
    description: [
      "Supported internal data analysis efforts through data cleaning, visualization, and reporting using widely adopted business intelligence tools.",
      "Assisted in compiling performance and activity data to aid internal teams in tracking operational metrics.",
    ],
  },
  {
    title: "Volunteer",
    company: "Baby Blessing Children's Home",
    location: "Nairobi, Kenya",
    period: "Sep 2024 – Dec 2024",
    type: "volunteer",
    description: [
      "Engaged children in structured and creative extracurricular activities to support their social and emotional development.",
      "Applied analytical skills to monitor participation levels, identify trends, and tailor programs to individual needs.",
      "Improved engagement outcomes by customizing activities for inclusivity and overall experience.",
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
              Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow z-10" />

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl hover:bg-muted/20 transition-all group">
                    {/* Icon */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                        {exp.type === "work" ? (
                          <Briefcase className="w-5 h-5 text-primary" />
                        ) : (
                          <Heart className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-md ${
                            exp.type === "work"
                              ? "bg-primary/20 text-primary"
                              : "bg-accent/20 text-accent"
                          }`}
                        >
                          {exp.type === "work" ? "Work" : "Volunteer"}
                        </span>
                      </div>
                    </div>

                    {/* Title & Company */}
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.location}
                    </p>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
