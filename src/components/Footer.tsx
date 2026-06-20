import { ArrowUp, Github, Linkedin, Mail, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <div>
          <div className="font-display text-base font-semibold">
            Ajay Kumar <span className="text-gradient">Kallammal</span>
          </div>
          <p className="mt-1 text-xs italic text-muted-foreground">
            "Building scalable solutions, one line of code at a time."
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            © 2026 Ajay Kumar Kallammal. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
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
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-primary-foreground transition-transform hover:-translate-y-1"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
