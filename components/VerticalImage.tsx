import Image from "next/image";

interface VerticalImageProps {
  src: string;
  alt: string;
}

export default function VerticalImage({ src, alt }: VerticalImageProps) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="50vw"
        className="w-1/2 h-auto"
      />
    </div>
  );
}
