import { motion } from "framer-motion";
import { Briefcase, Calendar, Cloud, Code2, Layers } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: Calendar, label: "2+ Years", sub: "Professional Experience" },
  { icon: Briefcase, label: "Accenture", sub: "Backend Developer" },
  { icon: Layers, label: "Full-Stack", sub: "Web Development" },
  { icon: Cloud, label: "AWS · Azure", sub: "Cloud Certified" },
  { icon: Code2, label: "DSA · OOP", sub: "Problem Solving" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A bit about me"
      description="I'm an Associate Software Engineer at Accenture with 2 years of experience building modern web applications using Python and cutting-edge technologies."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground"
        >
          <p>
            I enjoy solving programming challenges, learning new frameworks, and developing real-world applications that create meaningful impact. My focus is on writing clean, scalable, and maintainable code.
          </p>
          <p>
            On the <span className="text-foreground font-medium">Mondelez Project at Accenture</span>, I work as a Backend Developer where I've contributed to improving system efficiency and optimizing database performance through SQL query optimization, indexing, and scalable software design practices.
          </p>
          <div className="rounded-2xl glass p-5">
            <p className="font-mono text-sm">
              <span className="text-muted-foreground">{"// philosophy"}</span>
              <br />
              <span className="text-primary">const</span> mantra ={" "}
              <span className="text-accent">"Build scalable solutions, one line of code at a time."</span>
              ;
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`group rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:glow-blue ${
                i === 4 ? "col-span-2" : ""
              }`}
            >
              <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <h.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-lg font-semibold">{h.label}</div>
              <div className="text-xs text-muted-foreground">{h.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
