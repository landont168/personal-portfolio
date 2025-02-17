import Row from "./Row";

const experiences = [
  {
    title: "Computing and Financial Management",
    company: "University of Waterloo",
    date: "Sep. 2023 - Apr. 2028",
    description: "Honours",
    logo: "/uw-logo.jpeg",
  },
];

export default function Education() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Education</h1>
      <ul className="space-y-2">
        {experiences.map((experience) => (
          <Row key={experience.company} experience={experience} />
        ))}
      </ul>
    </div>
  );
}
