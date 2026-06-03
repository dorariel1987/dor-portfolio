import {
  Code2,
  Cloud,
  Cog,
  Workflow,
  Github,
  Linkedin,
  Mail,
  MapPin,
  FileDown,
  ExternalLink,
} from 'lucide-react';

export const profile = {
  name: {
    en: 'Dor Ariel',
    he: 'דור אריאל',
  },
  initials: 'DA',
  email: 'dor.ariel@icloud.com',
  location: {
    en: 'Rosh HaAyin, Israel',
    he: 'ראש העין, ישראל',
  },
  resume: '/Dor_Ariel_Resume.pdf',
  github: 'https://github.com/dorariel1987',
  linkedin: 'https://www.linkedin.com/in/dor-ariel/',
  twitter: '',
  website: 'https://dorariel1987.github.io/dor-portfolio',
};

export const navLinks = [
  { id: 'about', tKey: 'nav.about' },
  { id: 'experience', tKey: 'nav.experience' },
  { id: 'stack', tKey: 'nav.stack' },
  { id: 'work', tKey: 'nav.work' },
  { id: 'contact', tKey: 'nav.contact' },
];

export const services = [
  {
    id: 'fullstack',
    icon: Code2,
    accent: 'cyan',
  },
  {
    id: 'cloud',
    icon: Cloud,
    accent: 'magenta',
  },
  {
    id: 'automation',
    icon: Workflow,
    accent: 'violet',
  },
  {
    id: 'implementation',
    icon: Cog,
    accent: 'lime',
  },
];

export const techStack = [
  {
    category: 'frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'backend',
    items: ['Python', 'Node.js', 'REST APIs', 'Azure Functions'],
  },
  {
    category: 'cloud',
    items: ['AWS', 'GCP', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'Azure DevOps', 'Bitbucket Pipelines'],
  },
  {
    category: 'data',
    items: ['PostgreSQL', 'OpenSearch', 'SQL'],
  },
  {
    category: 'other',
    items: ['Git', 'Linux', 'Automation', 'System Design', 'IaC'],
  },
];

export const projectsMeta = [
  {
    id: 'cloud-ops-console',
    accent: 'cyan',
    source_code_link: 'https://github.com/dorariel1987/cloud-ops-console',
    live_link: '',
  },
  {
    id: 'pipeline-automation-suite',
    accent: 'magenta',
    source_code_link: 'https://github.com/dorariel1987/pipeline-automation-suite',
    live_link: '',
  },
  {
    id: 'implementation-portal',
    accent: 'violet',
    source_code_link: 'https://github.com/dorariel1987/implementation-portal',
    live_link: '',
  },
  {
    id: 'serverless-data-sync',
    accent: 'lime',
    source_code_link: 'https://github.com/dorariel1987',
    live_link: '',
  },
];

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: profile.github,
    icon: Github,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
];

export const heroIcons = {
  MapPin,
  FileDown,
  ExternalLink,
};
