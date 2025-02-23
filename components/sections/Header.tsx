import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <nav className="flex items-center justify-center gap-x-2 my-16">
      <Button asChild variant="ghost">
        <Link href="/">About</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/blogs">Journal</Link>
      </Button>
    </nav>
  );
}
