export default function About() {
  return (
    <div className="flex flex-col gap-y-4">
      <p>
        I&rsquo;m a Computer Science and Finance student at the{" "}
        <a
          href="https://uwaterloo.ca/computing-financial-management/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:decoration-slate-500"
        >
          University of Waterloo
        </a>
        .
      </p>

      <p>
        Currently, I&rsquo;m helping build an accommodations engine for injured
        workers at{" "}
        <a
          href="https://www.wsib.ca/en"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:decoration-slate-500"
        >
          WSIB Ontario
        </a>
        .
      </p>

      <p>
        Feel free to reach out to me on{" "}
        <a
          href="https://www.linkedin.com/in/landontrinh"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:decoration-slate-600"
        >
          LinkedIn
        </a>{" "}
        or at{" "}
        <a
          href="mailto:landon.trinh@uwaterloo.ca"
          className="underline hover:decoration-slate-600"
        >
          landon.trinh@uwaterloo.ca
        </a>
      </p>
    </div>
  );
}
