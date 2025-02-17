import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4">
      <div className="font-semibold">Landon Trinh</div>
      <div className="flex items-center gap-x-4">
        <a
          href="https://github.com/landont168"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="www.linkedin.com/in/landontrinh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
