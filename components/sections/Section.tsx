import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h1 className="text-2xl font-bold my-3">{title}</h1>
      {children}
    </section>
  );
}
