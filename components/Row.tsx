import Image from "next/image";

interface RowProps {
  experience: {
    title: string;
    company: string;
    date: string;
    logo: string;
  };
}

export default function Row({ experience }: RowProps) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-4">
        <Image
          src={experience.logo}
          alt={experience.company}
          className="rounded"
          width={48}
          height={48}
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold">{experience.title}</p>
          <p className="text-sm">{experience.company}</p>
        </div>
      </div>
      <p className="text-sm">{experience.date}</p>
    </div>
  );
}
