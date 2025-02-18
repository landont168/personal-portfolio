import { ReactNode } from "react";

interface IconButtonProps {
  link: string;
  children: ReactNode;
}

export default function IconButton({ link, children }: IconButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-md hover:bg-accent"
    >
      {children}
    </a>
  );
}
