interface UnderlineProps {
  url: string;
  text: string;
}

export default function Underline({ url, text }: UnderlineProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:decoration-slate-600"
    >
      {text}
    </a>
  );
}
