import { useEffect, useState } from "react";
import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#home" className="group flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-primary-foreground glow-blue">
            AK
          </span>
          <span className="hidden font-display text-base font-semibold sm:inline">
            Ajay<span className="text-gradient">.dev</span>
          </span>
        </a>

        <nav
          className={`glass-elevated hidden items-center gap-1 rounded-full px-2 py-2 md:flex ${
            scrolled ? "glow-blue/30" : ""
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://github.com/20r01a05e1" target="_blank" rel="noreferrer" className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground sm:block">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/kallammal-ajay-kumar-1177b923b/" target="_blank" rel="noreferrer" className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground sm:block">
            <Linkedin className="h-4 w-4" />
          </a>
          <button
            onClick={() => setDark((d) => !d)}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:glow-blue sm:inline-flex"
          >
            <Mail className="mr-1.5 h-3.5 w-3.5" /> Hire me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
            aria-label="Menu"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-5 mt-3 rounded-2xl glass-elevated p-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
