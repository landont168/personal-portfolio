import Underline from "../Underline";

export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-3">Landon Trinh</h1>
      <div className="flex flex-col gap-y-4">
        <p>
          I&rsquo;m a Computer Science and Finance student at the{" "}
          <Underline
            url="https://uwaterloo.ca/"
            text="University of Waterloo"
          />
          .
        </p>

        <p>
          Currently, I&rsquo;m helping build an accommodations engine for
          injured workers at{" "}
          <Underline url="https://www.wsib.ca/en" text="WSIB Ontario" />.
        </p>

        <p>
          Feel free to reach out to me on{" "}
          <Underline
            url="https://www.linkedin.com/in/landontrinh"
            text="LinkedIn"
          />{" "}
          or at{" "}
          <Underline
            url="mailto:landon.trinh@uwaterloo.ca"
            text="landon.trinh@uwaterloo.ca"
          />
          .
        </p>
      </div>
    </section>
  );
}
