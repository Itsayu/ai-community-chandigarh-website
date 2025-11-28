import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageId: string;
  tags: string[];
  team: string[];
  link: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'Workshop' | 'Meetup' | 'Conference' | 'Webinar';
  link: string;
}

export interface Resource {
  id: string;
  title:string;
  description: string;
  category: 'Research Paper' | 'Dataset' | 'Tool' | 'Tutorial';
  link: string;
  tags: string[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  description: string;
  link: string;
}

export type Member = {
  id: string;
  name: string;
  role?: string;
  photo?: StaticImageData | string;
  coverPhoto?: StaticImageData | string;  // New field for cover photo
  skills?: string[];
  bio?: string;
  github?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  medium?: string;
};

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  imageId: string;
  excerpt: string;
  content: string;
}