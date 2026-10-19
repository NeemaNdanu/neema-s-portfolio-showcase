import { Briefcase, Calendar, LayoutDashboard } from "lucide-react";
import ProjectGallery, { type GalleryImage } from "./ProjectGallery";
import m1 from "@/assets/experience/millennium-1.jpg.asset.json";
import m2 from "@/assets/experience/millennium-2.jpg.asset.json";
import m3 from "@/assets/experience/millennium-3.jpg.asset.json";
import m4 from "@/assets/experience/millennium-4.jpg.asset.json";
import m5 from "@/assets/experience/millennium-5.jpg.asset.json";

type Dashboard = { label: string; images: GalleryImage[] };

const experiences: {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  dashboards: Dashboard[];
}[] = [
  {
    title: "Data Science & Analytics Intern",
    company: "Millennium Solutions East Africa Ltd",
    location: "Manga House, Upper Hill, Nairobi",
    period: "May 2025 – July 2025",
    description: [
      "Supported data cleaning, analysis, visualization, and reporting to help track operational performance.",
      "Developed an interactive Tableau dashboard for a client, presenting key sales and operational metrics to support data-driven decision-making.",
    ],
    dashboards: [
      {
        label: "Dashboard 1",
        images: [
          { src: m1.url, caption: "Dashboard 1 — Company performance overview" },
          { src: m2.url, caption: "Dashboard 1 — Employee details" },
          { src: m3.url, caption: "Dashboard 1 — View 3" },
          { src: m4.url, caption: "Dashboard 1 — View 4" },
        ],
      },
      {
        label: "Dashboard 2",
        images: [{ src: m5.url, caption: "Dashboard 2 — Sales analysis" }],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Career</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Professional <span className="text-gradient">Experience</span>
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title + exp.company} className="glass p-8 rounded-3xl hover:shadow-glow transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform self-start">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium text-lg">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full self-start">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 ml-0 sm:ml-[76px]">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 ml-0 sm:ml-[76px] grid gap-8 md:grid-cols-2">
                  {exp.dashboards.map((d) => (
                    <div key={d.label}>
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <LayoutDashboard className="w-4 h-4 text-primary" />
                        {d.label}
                        <span className="text-xs font-normal text-muted-foreground">
                          · {d.images.length} {d.images.length === 1 ? "screenshot" : "screenshots"}
                        </span>
                      </div>
                      <div className="-mt-3">
                        <ProjectGallery images={d.images} title={`${exp.company} ${d.label}`} fit="contain" />
                      </div>
                    </div>
                  ))}
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
