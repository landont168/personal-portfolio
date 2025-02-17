import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Stockle",
    description: "Full-stack stock-themed spinoff of the classic Wordle game.",
    imageUrl: "/stockle-demo.png",
    url: "https://www.google.com",
  },
  {
    title: "Portfolio Roboadvisor",
    description:
      "Python script that generates a portfolio with optimal risk and return.",
    imageUrl: "/portfolio-roboadvisor-demo.png",
    url: "https://www.google.com",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Projects</h1>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
