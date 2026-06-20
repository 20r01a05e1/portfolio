import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Code2 } from "lucide-react";
import { Section } from "./Section";

const contacts = [
  { icon: Mail, label: "Email", value: "kallammalajaykumar@gmail.com", href: "mailto:kallammalajaykumar@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 73824 06634", href: "tel:+917382406634" },
  { icon: MapPin, label: "Location", value: "Bengaluru, India" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kallammal-ajay-kumar-1177b923b/" },
  { icon: Github, label: "GitHub", href: "https://github.com/20r01a05e1" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/20r01a05e1/" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`;
    window.location.href = `mailto:kallammalajaykumar@gmail.com?subject=Portfolio inquiry&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's build something together"
      description="Have a project in mind, a role to discuss, or just want to say hi? My inbox is always open."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* contact cards */}
        <div className="space-y-3">
          {contacts.map((c, i) => {
            const Inner = (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:glow-blue"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="truncate text-sm font-medium">{c.value}</div>
                </div>
              </motion.div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="block">{Inner}</a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}

          <div className="rounded-2xl glass p-5">
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Social</div>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl glass-elevated transition-all hover:-translate-y-0.5 hover:text-primary hover:glow-blue"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 rounded-2xl glass-elevated p-6 shadow-card"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Your name" name="name" placeholder="Jane Doe" required />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project, role, or idea…"
              className="w-full resize-none rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:glow-blue"
          >
            {sent ? "Opening your mail app…" : "Send Message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="text-center text-xs text-muted-foreground">
            I usually respond within 24 hours on business days.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
