import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/data/types";
import { experiences } from "../../data/content";

export default function Experiences() {
  return (
    <ul className="space-y-6">
      {experiences.map((experience: Experience, index: number) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </ul>
  );
}
