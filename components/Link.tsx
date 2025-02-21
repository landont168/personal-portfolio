import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface LinkProps {
  url: string;
  children: ReactNode;
}

export default function Link({ url, children }: LinkProps) {
  return (
    <Button asChild variant="link" className="p-0">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="text-base">{children}</div>
      </a>
    </Button>
  );
}
