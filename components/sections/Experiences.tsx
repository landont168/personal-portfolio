import Section from "./Section";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/data/types";
import { experiences } from "../../data/content";

export default function Experiences() {
  return (
    <Section title="Experience">
      <div className="flex flex-col gap-y-6">
        {experiences.map((experience: Experience, index: number) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
