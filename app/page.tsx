import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/main/hero").then(mod => ({ default: mod.Hero })), { ssr: false });
const Encryption = dynamic(() => import("@/components/main/encryption").then(mod => ({ default: mod.Encryption })), { ssr: false });
const Projects = dynamic(() => import("@/components/main/projects").then(mod => ({ default: mod.Projects })), { ssr: false });
const Skills = dynamic(() => import("@/components/main/skills").then(mod => ({ default: mod.Skills })), { ssr: false });

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
