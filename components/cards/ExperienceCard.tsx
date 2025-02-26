import Image from "next/image";
import { Experience } from "@/data/types";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <a
      className="group"
      href={experience.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-x-4">
        <Image
          src={experience.logo}
          alt={experience.company}
          className="rounded aspect-square group-hover:brightness-90"
          width={46}
          height={46}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2">
            <p className="text-md font-bold">{experience.company}</p>
            {experience.current && <Badge variant="secondary">Current</Badge>}
          </div>
          <p className="text-md">{experience.role}</p>
        </div>
      </div>
    </a>
  );
}
