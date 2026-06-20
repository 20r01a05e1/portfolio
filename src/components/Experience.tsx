import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Section } from "./Section";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    title: "Associate Software Engineer",
    org: "Accenture",
    location: "India · Full-Time",
    date: "Oct 2024 — Present",
    project: "Mondelez Project",
    bullets: [
      "Worked as a Backend Developer and contributed to a 15% increase in overall system efficiency.",
      "Designed and optimized SQL queries, stored procedures, and database indexing in MySQL, improving data retrieval speed by 35%.",
      "Applied Dependency Injection and followed SOLID Principles to improve scalability, readability, and maintainability.",
      "Worked with Visual Studio, Git/GitHub, and JIRA/Confluence for project tracking and documentation.",
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "B.Tech, Computer Science and Engineering",
    org: "CMR Institute of Technology",
    location: "Hyderabad, India",
    date: "Graduated 2024",
    project: "CGPA: 7.6 / 10",
    bullets: [
      "Focused on Data Structures, Algorithms, Operating Systems, and Database Management.",
      "Built multiple full-stack projects exploring Python, Flask, and modern web technologies.",
    ],
  },
];

const certs = [
  { name: "Microsoft Azure Administrator", code: "AZ-104", color: "from-sky-500 to-blue-600" },
  { name: "AWS Academy Cloud Foundations", code: "AWS", color: "from-orange-500 to-amber-600" },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="Experience & Education"
      description="A timeline of where I've worked, what I've studied, and the credentials I've earned along the way."
    >
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-6" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 sm:pl-16"
            >
              <div className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-primary-foreground glow-blue sm:h-12 sm:w-12">
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="rounded-2xl glass p-6 transition-all hover:glow-blue">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      <span className="text-primary">{item.org}</span> · {item.location}
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs font-mono text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <div className="mt-3 inline-block rounded-lg bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {item.project}
                </div>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b, k) => (
                    <li key={k} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* certifications */}
      <div className="mt-16">
        <h3 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
          <Award className="h-6 w-6 text-primary" /> Certifications
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certs.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-purple"
            >
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
              <div className="relative flex items-center gap-4">
                <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${c.color} text-white`}>
                  <Award className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base font-semibold">{c.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">{c.code}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
