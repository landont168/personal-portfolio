import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="flex items-center justify-center gap-x-4 my-16">
      <ul className="flex gap-x-4">
        <li>
          <Button asChild variant="ghost">
            <Link href="/">About</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="ghost">
            <Link href="/projects">Projects</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="ghost">
            <Link href="/blogs">Blog</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
