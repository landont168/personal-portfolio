import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";

import IconButton from "./IconButton";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4">
      <div className="font-semibold">Landon Trinh</div>
      <div className="flex items-center gap-x-1">
        <IconButton link="https://github.com/landont168">
          <FaGithub size={20} />
        </IconButton>
        <IconButton link="https://linkedin.com/in/landontrinh">
          <FaLinkedin size={20} />
        </IconButton>
        <IconButton link="mailto:landon.trinh@uwaterloo.ca">
          <MdEmail size={20} />
        </IconButton>
        <IconButton link="/resume.pdf">
          <IoDocumentTextSharp size={20} />
        </IconButton>
      </div>
    </footer>
  );
}
