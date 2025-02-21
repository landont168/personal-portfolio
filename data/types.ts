export interface Project {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  logo: string;
  url: string;
}

export interface Journal {
  slug: string
  title: string;
  date: string;
  content: string;
}