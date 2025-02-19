import { Separator } from "@/components/ui/separator";
import { Journal } from "../types";

interface JournalCardProps {
  journal: Journal;
}

export default function JournalCard({ journal }: JournalCardProps) {
  return (
    <>
      <div className="flex flex-col px-2 cursor-pointer hover:bg-accent">
        <div className="flex items-center justify-between py-4">
          <div className="text-md font-normal">{journal.title}</div>
          <div className="text-sm">{journal.date}</div>
        </div>
      </div>
      <Separator />
    </>
  );
}
