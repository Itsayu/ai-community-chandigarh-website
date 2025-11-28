import type { Project, Event, Resource, Job, Member, NewsArticle } from './types';
import Aashi from '@/assets/aashi.jpg';
import Ayush from '@/assets/ayush.jpg';
// Import cover photos if you have them
import AashiCover from '@/assets/aashiCI.jpg';
import AyushCover from '@/assets/ayushCI.jpg';

export const events: Event[] = [
  {
    id: '1',
    title: 'Intro to Generative AI',
    date: 'October 26, 2024',
    location: 'PEC, Chandigarh',
    description: 'A hands-on workshop covering the fundamentals of GANs and diffusion models. Laptops required.',
    type: 'Workshop',
    link: '#',
  },
  {
    id: '2',
    title: 'Chandigarh AI Monthly Meetup',
    date: 'November 5, 2024',
    location: 'Infosys, IT Park',
    description: 'Casual meetup for AI enthusiasts to network and discuss the latest trends. Snacks and drinks provided.',
    type: 'Meetup',
    link: '#',
  },
  {
    id: '3',
    title: 'AI for Business Conference',
    date: 'November 15, 2024',
    location: 'Hyatt Regency, Chandigarh',
    description: 'A full-day conference exploring the practical applications of AI in various business sectors.',
    type: 'Conference',
    link: '#',
  },
  {
    id: '4',
    title: 'Webinar: The Ethics of AI',
    date: 'December 2, 2024',
    location: 'Online',
    description: 'A virtual panel discussion with experts on the ethical considerations and societal impact of AI.',
    type: 'Webinar',
    link: '#',
  },
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Attention Is All You Need',
    description: 'The original paper introducing the Transformer architecture, a key component of modern language models.',
    category: 'Research Paper',
    link: 'https://arxiv.org/abs/1706.03762',
    tags: ['NLP', 'Transformer', 'Foundation'],
  },
  {
    id: '2',
    title: 'Hugging Face Datasets',
    description: 'A vast collection of open-source datasets for a wide range of machine learning tasks.',
    category: 'Dataset',
    link: 'https://huggingface.co/datasets',
    tags: ['Open Source', 'Data'],
  },
  {
    id: '3',
    title: 'PyTorch: An Imperative Style',
    description: 'An open source machine learning framework that accelerates the path from research prototyping to production deployment.',
    category: 'Tool',
    link: 'https://pytorch.org/',
    tags: ['Framework', 'Deep Learning'],
  },
  {
    id: '4',
    title: 'fast.ai - Practical Deep Learning for Coders',
    description: 'A popular free course designed for anyone with some coding experience who wants to learn about deep learning.',
    category: 'Tutorial',
    link: 'https://course.fast.ai/',
    tags: ['Education', 'Free Course'],
  },
];

export const members: Member[] = [
  {
    id: 'aashi-datt',
    name: 'Aashi Datt',
    role: 'Organizer', 
    photo: Aashi,
    coverPhoto: AashiCover, 
    skills: ['Community Building', 'Event Management', 'Public Speaking'],
    bio: 'Dedicated community builder and primary organizer, focused on connecting the AI enthusiasts of Chandigarh.',
    github: 'https://github.com/AashiDutt',
    linkedin: 'https://www.linkedin.com/in/aashi-dutt/',
    twitter: 'https://twitter.com/AashiDutt',
    // medium: 'https://aashi-dutt3.medium.com/',
  },
  {
    id: 'ayush-tiwari',
    name: 'Ayush Kumar Tiwari',
    role: 'Organizer', 
    photo: Ayush,
    coverPhoto: AyushCover,
    skills: ['ReactJs', 'NextJs', 'TypeScript', 'JavaScript', 'Event Planning', 'Firebase', 'ML Workshops', 'AngularJs', 'NodeJs', 'MongoDB'],
    bio: 'ML enthusiast and organizer, specializing in planning technical workshops and fostering machine learning knowledge.',
    github: 'https://github.com/itsayu',
    linkedin: 'https://linkedin.com/itsayu',
    twitter: 'https://twitter.com/itsayu',
    // medium: 'https://medium.com/@itsayu',
  },
];

export const news: NewsArticle[] = [
  {
    id: '1',
    title: 'Chandigarh-based AI Startup Raises $5M in Seed Funding',
    date: 'October 15, 2024',
    author: 'Community Bot',
    imageId: 'news-1',
    excerpt: 'InnovateAI, a local startup specializing in agricultural AI, has successfully closed its seed funding round led by...',
    content: 'Full article content would go here.',
  },
  {
    id: '2',
    title: 'Winners of the Tricity AI Hackathon 2024 Announced',
    date: 'October 8, 2024',
    author: 'Jane Doe',
    imageId: 'news-2',
    excerpt: 'A team from PEC has won the grand prize for their innovative project on AI-powered waste management...',
    content: 'Full article content would go here.',
  },
  {
    id: '3',
    title: 'How AI is Transforming Education in Chandigarh Schools',
    date: 'September 22, 2024',
    author: 'John Smith',
    imageId: 'news-3',
    excerpt: 'Local schools are adopting new AI-powered learning platforms to create personalized educational experiences...',
    content: 'Full article content would go here.',
  },
   {
    id: '4',
    title: 'The Rise of Generative Art: A Chandigarh Perspective',
    date: 'September 10, 2024',
    author: 'ArtBot',
    imageId: 'news-4',
    excerpt: 'Meet local artists who are using generative adversarial networks to create stunning and unique visual art.',
    content: 'Full article content would go here.',
  },
];