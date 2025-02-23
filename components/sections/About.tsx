import ExternalLink from "../ExternalLink";

export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold my-4">Landon Trinh</h1>
      <div className="flex flex-col gap-y-4">
        <div>
          I&rsquo;m a Computer Science and Finance student at the{" "}
          <ExternalLink
            url="https://uwaterloo.ca/computing-financial-management/"
            title="University of Waterloo"
          />
          .
        </div>

        <div>
          Currently, I&rsquo;m helping build an accommodations engine for
          injured workers at{" "}
          <ExternalLink url="https://www.wsib.ca/en" title="WSIB Ontario" />.
        </div>

        <div>
          Feel free to reach out to me on{" "}
          <ExternalLink
            url="https://www.linkedin.com/in/landontrinh"
            title="LinkedIn"
          />{" "}
          or at{" "}
          <ExternalLink
            url="mailto:landon.trinh@uwaterloo.ca"
            title="landon.trinh@uwaterloo.ca"
          />
          .
        </div>
      </div>
    </section>
  );
}
