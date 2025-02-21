import Link from "@/components/Link";

export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold my-4">Landon Trinh</h1>
      <div className="flex flex-col gap-y-4">
        <div>
          I&rsquo;m a Computer Science and Finance student at the{" "}
          <Link url="https://uwaterloo.ca/computing-financial-management/">
            University of Waterloo
          </Link>
          .
        </div>

        <div>
          Currently, I&rsquo;m helping build an accommodations engine for
          injured workers at{" "}
          <Link url="https://www.wsib.ca/en">WSIB Ontario</Link>.
        </div>

        <div>
          Feel free to reach out to me on{" "}
          <Link url="https://www.linkedin.com/in/landontrinh">LinkedIn</Link> or
          at{" "}
          <Link url="mailto:landon.trinh@uwaterloo.ca">
            landon.trinh@uwaterloo.ca
          </Link>
          .
        </div>
      </div>
    </section>
  );
}
