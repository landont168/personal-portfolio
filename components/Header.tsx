import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="flex items-center justify-center gap-x-4 my-16">
      <ul className="flex gap-x-4">
        <li>
          <Link href="/">
            <Button variant="ghost">
              <span className="font-semibold">About</span>
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <Button variant="ghost">
              <span className="font-semibold">Projects</span>
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/blogs">
            <Button variant="ghost">
              <span className="font-semibold">Blog</span>
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
