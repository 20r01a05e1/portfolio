import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  SiPython, SiCplusplus, SiHtml5, SiCss, SiJavascript, SiReact,
  SiFlask, SiDjango, SiNodedotjs, SiMysql, SiMongodb,
  SiDocker, SiGit,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { Cloud } from "lucide-react";

const SiCss3 = SiCss;
const SiAmazon = Cloud;
import { GitBranch, Workflow, Boxes, Brain } from "lucide-react";

const groups = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: SiPython, level: 92 },
      { name: "C++", icon: SiCplusplus, level: 78 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, level: 90 },
      { name: "CSS", icon: SiCss3, level: 85 },
      { name: "JavaScript", icon: SiJavascript, level: 82 },
      { name: "React", icon: SiReact, level: 78 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Flask", icon: SiFlask, level: 90 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql, level: 88 },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "Azure", icon: VscAzure, level: 82 },
      { name: "AWS", icon: SiAmazon, level: 78 },
      { name: "Git", icon: SiGit, level: 90 },
    ],
  },
  {
    title: "Foundations",
    items: [
      { name: "Data Structures", icon: Boxes, level: 85 },
      { name: "Algorithms", icon: Brain, level: 82 },
      { name: "OOPS", icon: GitBranch, level: 88 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Skills & Technologies"
      description="The languages, frameworks, and tools I reach for when bringing ideas to life."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.05 }}
            className="group rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-blue"
          >
            <h3 className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
              {g.title}
            </h3>
            <div className="space-y-4">
              {g.items.map((s, i) => (
                <div key={s.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{s.name}</span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: gi * 0.05 + i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-brand"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
