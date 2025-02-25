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

export interface Blog {
  title: string;
  date: string;
  draft: boolean;
  slug: string;
}