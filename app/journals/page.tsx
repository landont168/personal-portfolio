import { journals } from "@/data/content";
import { Journal } from "@/data/types";
import JournalCard from "@/components/JournalCard";
import Section from "@/components/sections/Section";
import { Separator } from "@/components/ui/separator";

export default function JournalsPage() {
  return (
    <Section title="Journal" id="journals">
      <Separator className="mt-7" />
      <div className="flex flex-col">
        {journals.map((journal: Journal, index: number) => (
          <JournalCard key={index} journal={journal} />
        ))}
      </div>
    </Section>
  );
}
