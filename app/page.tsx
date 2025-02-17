import Description from "@/components/Description";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-10">
      <Description />
      <Projects />
      <Experience />
      <Education />
    </main>
  );
}
