import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Code2, Download } from "lucide-react";
import profile from "@/assets/profile.jpg";

const ROLES = ["Full-Stack Developer", "Backend Engineer", "Python Developer", "Problem Solver"];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = ROLES[i % ROLES.length];
    const speed = del ? 50 : 110;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">Ajay Kumar</span>
            <br />
            Kallammal.
          </h1>

          <div className="mt-5 flex items-center gap-2 text-lg text-muted-foreground sm:text-xl">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-mono text-foreground">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-primary align-middle" />
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Associate Software Engineer at <span className="text-foreground font-medium">Accenture</span> with 2+ years of experience building scalable web applications. Passionate about solving complex problems with Python and modern technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:glow-blue"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Find me on</span>
            <div className="flex gap-2">
              {[
                { href: "mailto:kallammalajaykumar@gmail.com", icon: Mail, label: "Email" },
                { href: "https://github.com/20r01a05e1", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/kallammal-ajay-kumar-1177b923b/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://leetcode.com/u/20r01a05e1/", icon: Code2, label: "LeetCode" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full glass transition-all hover:-translate-y-0.5 hover:text-primary hover:glow-blue"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 mx-auto lg:order-2"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-full bg-gradient-brand opacity-40 blur-2xl animate-pulse-glow" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-white/10 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-brand p-[2px]">
                <div className="h-full w-full overflow-hidden rounded-full bg-background">
                  <img
                    src={profile}
                    alt="Ajay Kumar Kallammal"
                    width={640}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* floating chips */}
            <div className="absolute -left-6 top-10 hidden rounded-xl glass-elevated px-3 py-2 text-xs font-mono shadow-card sm:block">
              <span className="text-primary">{"<"}</span>Python<span className="text-primary">{"/>"}</span>
            </div>
            <div className="absolute -right-4 top-1/2 hidden rounded-xl glass-elevated px-3 py-2 text-xs font-mono shadow-card sm:block">
              <span className="text-accent">React</span>
            </div>
            <div className="absolute bottom-6 -left-8 hidden rounded-xl glass-elevated px-3 py-2 text-xs font-mono shadow-card sm:block">
              <span className="text-primary">Azure</span> ☁
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
