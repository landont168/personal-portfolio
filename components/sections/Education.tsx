import Section from "./Section";
import ExperienceCard from "../cards/ExperienceCard";
import { Experience } from "@/data/types";
import { educations } from "@/data/content";

export default function Education() {
  return (
    <Section title="Education">
      <div className="flex flex-col gap-y-5">
        {educations.map((education: Experience, index: number) => (
          <ExperienceCard key={index} experience={education} />
        ))}
      </div>
    </Section>
  );
}
