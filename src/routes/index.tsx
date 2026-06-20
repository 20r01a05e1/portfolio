import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ajay Kumar Kallammal — Associate Software Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ajay Kumar Kallammal, Associate Software Engineer at Accenture, building scalable web applications with Python, Flask, React, and cloud technologies.",
      },
      { property: "og:title", content: "Ajay Kumar Kallammal — Full-Stack Developer" },
      {
        property: "og:description",
        content: "Associate Software Engineer at Accenture. Building scalable solutions with Python, React, and cloud.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
