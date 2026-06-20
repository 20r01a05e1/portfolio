import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {title.split(" ").map((w, i) =>
              i === title.split(" ").length - 1 ? (
                <span key={i} className="text-gradient">{" "}{w}</span>
              ) : (
                <span key={i}>{i === 0 ? "" : " "}{w}</span>
              ),
            )}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
