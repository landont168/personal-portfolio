import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Hover from "../Hover";
import { ModeToggle } from "../theme/ModeToggle";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4">
      <div className="flex items-center gap-x-1">
        <div className="font-semibold">Landon Trinh</div>
        <ModeToggle />
      </div>
      <div className="flex items-center gap-x-1">
        <Hover url="https://github.com/landont168">
          <FaGithub size={20} />
        </Hover>
        <Hover url="https://linkedin.com/in/landontrinh">
          <FaLinkedin size={20} />
        </Hover>
        <Hover url="mailto:landon.trinh@uwaterloo.ca">
          <MdEmail size={20} />
        </Hover>
      </div>
    </footer>
  );
}
