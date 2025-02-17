import Row from "./Row";

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "WSIB Ontario",
    date: "Jan. 2025 - Apr. 2025",
    logo: "/wsib-logo.jpg",
  },
  {
    title: "Backend Developer Intern",
    company: "Arteria AI",
    date: "May 2024 - Aug. 2024",
    logo: "/arteria-ai-logo.png",
  },
];

export default function Experience() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Experience</h1>
      <ul className="space-y-2">
        {experiences.map((experience) => (
          <Row key={experience.company} experience={experience} />
        ))}
      </ul>
    </div>
  );
}
