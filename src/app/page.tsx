import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-12 bg-background">
        <p>© {new Date().getFullYear()} Suryaprabha S. All rights reserved.</p>
        <p className="mt-1 font-light text-xs opacity-70">Designed with love.</p>
      </footer>
    </main>
  );
}
