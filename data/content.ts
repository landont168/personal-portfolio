import { Project, Experience } from "./types";

export const projects: Project[] = [
  {
    title: "Stockle",
    description: "Full-stack stock-themed spinoff of the classic Wordle game.",
    imageUrl: "/projects/stockle-demo.png",
    url: "https://github.com/landont168/stockle",
  },
  {
    title: "Portfolio Roboadvisor",
    description:
      "Python script that generates a portfolio with optimal risk and return.",
    imageUrl: "/projects/portfolio-roboadvisor-demo.png",
    url: "https://github.com/landont168/portfolio-roboadvisor",
  },
];

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer Intern",
    company: "WSIB Ontario",
    logo: "/logos/wsib-ontario-logo.jpeg",
    url: "https://www.wsib.ca/en",
    current: true,
  },
  {
    role: "Data Annotator Intern",
    company: "Arteria AI",
    logo: "/logos/arteria-ai-logo.png",
    url: "https://arteria.ai/",
  },
];

export const educations = [
  {
    role: "Computing and Financial Management",
    company: "University of Waterloo",
    logo: "/logos/uw-logo.png",
    url: "https://uwaterloo.ca/computing-financial-management/",
  },
];
