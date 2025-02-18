import Section from "@/components/sections/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/content";
import { Project } from "@/data/types";

export default function Projects() {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 gap-y-4">
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
