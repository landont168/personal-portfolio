import Image from "next/image";
import { Experience } from "@/data/types";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-4">
        <a href={experience.url} target="_blank" rel="noopener noreferrer">
          <Image
            src={experience.logo}
            alt={experience.company}
            className="rounded aspect-square hover:brightness-90"
            width={46}
            height={46}
          />
        </a>
        <div className="flex flex-col">
          <p className="text-md font-bold">{experience.company}</p>
          <p className="text-md">{experience.role}</p>
        </div>
      </div>
      <p className="text-md">{experience.date}</p>
    </div>
  );
}
