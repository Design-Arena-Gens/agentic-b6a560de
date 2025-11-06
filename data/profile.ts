export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  link?: string;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export type Skill = {
  name: string;
  level: number; // 0-100
};

export const profile = {
  name: 'Your Name',
  title: 'Software Engineer',
  location: 'Your City, Country',
  summary:
    'Passionate engineer with a focus on building resilient, delightful web experiences. Experienced across frontend, backend, and cloud-native workflows.',
};

export const experiences: Experience[] = [
  {
    company: 'Acme Corp',
    role: 'Senior Software Engineer',
    period: '2022 ? Present',
    summary:
      'Led development of high-traffic applications with modern web technologies, improving performance and reliability.',
    highlights: [
      'Drove Core Web Vitals improvements resulting in 35% faster LCP',
      'Shipped design system adoption across 12 apps',
      'Mentored 5 engineers and led architecture reviews'
    ],
  },
  {
    company: 'Globex',
    role: 'Fullstack Engineer',
    period: '2020 ? 2022',
    summary:
      'Built end-to-end features across React, Node, and Postgres with a focus on DX and testability.',
    highlights: [
      'Reduced build times by 40% with module federation',
      'Delivered analytics pipeline handling 50M+ events/day',
      'Introduced CI checks raising coverage to 85%'
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Personal Dashboard',
    description:
      'A responsive, themeable dashboard to showcase personal experience and projects.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://agentic-b6a560de.vercel.app',
  },
  {
    name: 'Open Source CLI',
    description:
      'A developer productivity CLI with plugin architecture and robust tests.',
    tech: ['Node.js', 'TypeScript', 'Jest'],
  },
];

export const skills: Skill[] = [
  { name: 'TypeScript', level: 90 },
  { name: 'React', level: 88 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 82 },
  { name: 'CSS/Tailwind', level: 84 },
  { name: 'Testing', level: 80 },
];

export const education: Education[] = [
  { school: 'State University', degree: 'B.S. in Computer Science', period: '2016 ? 2020' },
];
