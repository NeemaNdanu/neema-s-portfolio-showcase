import { Heart, Calendar, Users } from "lucide-react";

const volunteerExperiences = [
  {
    title: "Volunteer",
    organization: "Baby Blessing Children's Home",
    location: "Nairobi, Kenya",
    period: "Sep 2024 – Dec 2024",
    description: [
      "Engaged children in structured and creative extracurricular activities to support their social and emotional development.",
      "Applied analytical skills to monitor participation levels, identify trends, and tailor programs to individual needs.",
      "Improved engagement outcomes by customizing activities for inclusivity and overall experience.",
    ],
  },
];

const VolunteerSection = () => {
  return (
    <section id="volunteer" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Giving Back
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Community <span className="text-gradient-secondary">Involvement</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Making a positive impact through volunteer work and community service
            </p>
          </div>

          {/* Volunteer Cards */}
          <div className="space-y-8">
            {volunteerExperiences.map((exp) => (
              <div
                key={exp.title + exp.organization}
                className="glass p-8 rounded-3xl border-l-4 border-accent hover:shadow-glow transition-all group"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-secondary rounded-2xl group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        Volunteer Work
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium text-lg">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/10 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 text-accent" />
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
                      <span className="w-2 h-2 bg-gradient-secondary rounded-full mt-2 flex-shrink-0" />
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

export default VolunteerSection;