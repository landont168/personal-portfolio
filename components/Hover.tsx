import { ReactNode } from "react";

interface HoverProps {
  url: string;
  children: ReactNode;
}

export default function Hover({ url, children }: HoverProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-md hover:bg-accent"
    >
      {children}
    </a>
  );
}
