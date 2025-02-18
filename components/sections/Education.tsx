import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/data/types";
import { educations } from "@/data/content";

export default function Education() {
  return (
    <div className="flex flex-col gap-y-4">
      {educations.map((education: Experience, index: number) => (
        <ExperienceCard key={index} experience={education} />
      ))}
    </div>
  );
}
