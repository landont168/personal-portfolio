import { Button } from "@/components/ui/button";

interface ExternalLinkProps {
  url: string;
  title: string;
}

export default function ExternalLink({ url, title }: ExternalLinkProps) {
  return (
    <Button asChild variant="link" className="p-0">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="text-base">{title}</span>
      </a>
    </Button>
  );
}
