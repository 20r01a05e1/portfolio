import { motion } from "framer-motion";
import { Github, Link2, Sparkles } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "URL Shortener",
    description:
      "A Python Flask-based URL shortener that generates compact, shareable links with database persistence and instant redirection.",
    tags: ["Python", "Flask", "HTML", "SQLite"],
    features: ["Unique compact URLs", "Database persistence", "Quick redirection", "Friendly UI"],
    repo: "https://github.com/20r01a05e1",
    gradient: "from-blue-500/30 to-cyan-500/30",
    accent: "240",
  },
  {
    title: "E-Commerce Website",
    description:
      "A full-featured Flask-based e-commerce platform with authentication, shopping cart, payments, and a dockerized deployment.",
    tags: ["Flask", "JavaScript", "CSS", "Docker"],
    features: [
      "Secure authentication",
      "Product management",
      "Shopping cart & orders",
      "Payment processing",
      "Admin dashboard",
      "Dockerized deployment",
    ],
    repo: "https://github.com/20r01a05e1",
    gradient: "from-purple-500/30 to-pink-500/30",
    accent: "300",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects I've built"
      description="A small collection of things I've designed and shipped. More on my GitHub."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl glass shadow-card transition-all hover:-translate-y-2 hover:glow-blue"
          >
            {/* visual header */}
            <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl glass-elevated px-5 py-3 font-mono text-sm">
                  <span className="text-primary">{">"}</span> run <span className="text-accent">{p.title.toLowerCase().replace(/\s+/g, "-")}</span>
                </div>
              </div>
              <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full glass-elevated px-3 py-1 text-xs font-medium">
                <Sparkles className="h-3 w-3 text-primary" /> Featured
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-2">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Github className="h-3.5 w-3.5" /> View Code
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/5"
                >
                  <Link2 className="h-3.5 w-3.5" /> Details
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
