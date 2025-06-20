import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Encryption } from "@/components/main/encryption";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <section id="about">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Encryption />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </main>
  );
}
