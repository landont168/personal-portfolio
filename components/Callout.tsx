import { SiApplemusic } from "react-icons/si";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CalloutProps {
  date: string;
  song: string;
}

export default function Callout({ song }: CalloutProps) {
  return (
    <Alert>
      <SiApplemusic className="h-4 w-4" />
      <AlertTitle>Favourite Song:</AlertTitle>
      <AlertDescription>{song}</AlertDescription>
    </Alert>
  );
}
