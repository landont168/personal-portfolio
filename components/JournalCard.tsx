import { Separator } from "@/components/ui/separator";
import { Journal } from "@/data/types";
import Link from "next/link";

interface JournalCardProps {
  journal: Journal;
}

export default function JournalCard({ journal }: JournalCardProps) {
  return (
    <Link href={`/journal/${journal.slug}`}>
      <div className="flex items-center justify-between px-3 py-4 cursor-pointer hover:bg-accent">
        <div className="text-md font-normal">{journal.title}</div>
        <div className="text-sm">{journal.date}</div>
      </div>
      <Separator />
    </Link>
  );
}
