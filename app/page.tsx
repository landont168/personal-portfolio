import Section from "@/components/sections/Section";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <About />

      <Section title="Projects">
        <Projects />
      </Section>

      <Section title="Experience">
        <Experience />
      </Section>

      <Section title="Education">
        <Education />
      </Section>
    </>
  );
}
