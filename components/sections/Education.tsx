import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/data/types";
import { educations } from "@/data/content";

export default function Education() {
  return (
    <ul className="space-y-6">
      {educations.map((education: Experience, index: number) => (
        <ExperienceCard key={index} experience={education} />
      ))}
    </ul>
  );
}
