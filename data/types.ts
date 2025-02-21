export interface Project {
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
  current?: boolean;
}

export interface Journal {
  slug: string
  title: string;
  date: string;
  content: string;
}