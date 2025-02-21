import { Project, Experience, Journal } from "./types";

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


export const journals: Journal[] = [
  {
    slug: "first-journal",
    title: "First Journal",
    date: "2021-01-01",
    content: "This is the first journal entry.",
  },
  {
    slug: "second-journal",
    title: "Second Journal",
    date: "2021-01-02",
    content: "This is the second journal entry.",
  },
  {
    slug: "third-journal",
    title: "Third Journal",
    date: "2021-01-03",
    content: "This is the third journal entry."
  },
  {
    slug: "fourth-journal",
    title: "Fourth Journal",
    date: "2021-01-04",
    content: "This is the fourth journal entry."
  }
];