/**
 * Central portfolio data — generated from Ankita G Mallesh's resume (Ankita_G_Mallesh.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'ANKITA G MALLESH',
  displayName: 'ANKITA G MALLESH',
  firstName: 'ANKITA G MALLESH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'ANKITA G MALLESH',
  role: 'Software Engineer',
  tagline: ['Full-Stack Developer', 'Java / Spring Boot', 'React / TypeScript'],
  intro:
    'Final-year Computer Science undergraduate with hands-on full-stack development experience (Java, Spring Boot, React, TypeScript, MySQL) and prior experience as a software engineer intern building production REST APIs within Agile development teams.',
  location: 'Bangalore, Karnataka, 560068',
  email: 'ankitagmallesh@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ankita-gmallesh-72895b308',
    github: 'https://github.com/Ankitagmallesh',
    leetcode: 'https://leetcode.com/u/Ankitagmallesh/',
  },
  resumePdf: '/assets/Ankita_G_Mallesh_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Ankita G Mallesh',
  },
  interests: ['Spring Boot', 'React', 'Full-Stack Development'],
};

export const education = [
  {
    school: 'Adichunchanagiri Institute of Technology',
    place: 'Chikkamagalur, India',
    degree: 'Bachelor of Engineering in Computer Science',
    period: 'September 2023 – May 2027',
    score: 'GPA: 8.5 / 10',
  },
];

export const experience = [
  {
    company: 'WeTeamRK7',
    role: 'Full Stack Software Engineer Intern',
    place: 'Question Hive project',
    period: 'December 2025 – March 2026',
    points: [
      'Shipped 12 REST API endpoints in Java/Spring Boot for a commercial Q&A platform, gathering functional requirements from stakeholders and translating them into working backend features.',
      'Built 15+ responsive frontend components (HTML, CSS, JavaScript, Bootstrap), improving load consistency across desktop and mobile views.',
      'Modeled and managed a MySQL schema handling 5,000+ records; CRUD optimizations cut query response time by 30%.',
      'Worked in two-week Agile sprints alongside a 6-engineer team, prioritizing backlog items, resolving 40+ bugs, and completing 25 pull requests through peer code review on Git/GitHub.',
      'Researched edge cases and existing code paths before implementation, improving application reliability by 20% through targeted testing and debugging prior to release.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'shopsphere',
    title: 'ShopSphere',
    year: '2026',
    genre: 'Full-Stack • E-Commerce • Dashboard',
    logline: 'A modular e-commerce platform with a consumer storefront and an admin business-intelligence suite.',
    stack: ['React 18', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    build: [
      'Engineered a modular e-commerce platform (React 18, TypeScript, Supabase/PostgreSQL, Tailwind CSS) with a consumer storefront and an admin business-intelligence suite.',
      'Built a storefront with dynamic catalog browsing, debounced search, price/rating filters, real-time cart management, and a guided multi-step checkout.',
      'Delivered an admin dashboard with Recharts revenue analytics, order tracking, CRUD inventory control, and a customer CRM directory.',
      'Enforced end-to-end type safety with strict TypeScript models and Supabase Row Level Security (RLS) for data protection.',
    ],
    features: [
      'Consumer storefront',
      'Debounced search and filters',
      'Real-time cart management',
      'Multi-step checkout',
      'Admin dashboard and CRM',
      'RLS and type-safe data access',
    ],
    metrics: [
      { value: 'React 18', label: 'frontend stack' },
      { value: 'Supabase', label: 'database + auth' },
      { value: 'Tailwind', label: 'UI system' },
      { value: 'RLS', label: 'data protection' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'spinal-mri',
    title: 'Spinal MRI Disease Detection',
    year: '2026',
    genre: 'AI • Medical Imaging • Full-Stack',
    logline: 'A full-stack medical imaging application that processes MRI scans and returns disease predictions.',
    stack: ['Computer Vision', 'GPT-4o Vision', 'React', 'API Design', 'Python'],
    build: [
      'Built a full-stack medical imaging application that processes MRI scans and returns disease predictions in under 10 seconds, validated on 100+ test cases.',
      'Combined classical computer vision with GPT-4o Vision to generate diagnostic insights, improving interpretation accuracy by 15%; contributed to API design linking frontend, backend, and inference services.',
    ],
    features: [
      'MRI scan processing',
      'Prediction under 10 seconds',
      '100+ validation cases',
      'AI-assisted diagnostic insights',
      'Frontend-backend inference flow',
    ],
    metrics: [
      { value: '<10s', label: 'prediction time' },
      { value: '100+', label: 'test cases' },
      { value: '15%', label: 'improved interpretation accuracy' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'question-hive',
    title: 'Question Hive',
    year: '2025–2026',
    genre: 'Full-Stack • Q&A Platform',
    logline: 'A commercial Q&A platform built with a six-engineer Agile team.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'Bootstrap'],
    build: [
      'Shipped 12 REST API endpoints in Java/Spring Boot, translating stakeholder requirements into working backend features.',
      'Built 15+ responsive frontend components using HTML, CSS, JavaScript, and Bootstrap for consistent desktop and mobile experiences.',
      'Modeled a MySQL schema handling 5,000+ records; CRUD optimizations reduced query response time by 30%.',
      'Delivered in two-week Agile sprints, resolving 40+ bugs and completing 25 pull requests through peer review.',
      'Researched edge cases and existing code paths before implementation, improving reliability by 20% through targeted testing and debugging.',
    ],
    features: [
      '12 production REST API endpoints',
      '15+ responsive frontend components',
      'MySQL schema for 5,000+ records',
      'Optimized CRUD queries',
      'Six-engineer Agile collaboration',
    ],
    metrics: [
      { value: '12', label: 'REST API endpoints' },
      { value: '15+', label: 'frontend components' },
      { value: '5,000+', label: 'records managed' },
      { value: '30%', label: 'faster query response' },
      { value: '25', label: 'pull requests completed' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'hackathon',
    title: '1st Place',
    org: 'Smart India Internal Hackathon 2025',
    detail: 'Won 1st among 30+ teams (Team Power Regulators, "Shadow Innovation" theme), building a working prototype in 24 hours.',
    laurel: '1st Place',
    link: '/assets/certificates/smart-india-hackathon-2025.png',
  },
  {
    id: 'techbytes',
    title: 'Inter-College Quiz Participant',
    org: 'TCS TechBytes',
    detail: 'Participated in the statewide engineering IT quiz organized by TCS and BITES, Government of Karnataka.',
    laurel: 'Quiz',
    link: '/assets/certificates/tcs-techbytes-2026.png',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'NPTEL', name: 'Data Structures and Algorithms Design — Elite (61%)', link: '/assets/certificates/nptel-data-structures-algorithms.png' },
  { issuer: 'AIT', name: 'Design and Development of Intelligent Agent Systems — Certificate of Appreciation', link: '/assets/certificates/intelligent-agent-systems-appreciation.png' },
  { issuer: 'Smart India Internal Hackathon', name: '1st Place — Team Power Regulators', link: '/assets/certificates/smart-india-hackathon-2025.png' },
  { issuer: 'TCS TechBytes', name: 'Inter-College Quiz on IT — 2026', link: '/assets/certificates/tcs-techbytes-2026.png' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'C', mono: 'C' },
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core CS',
    subtitle: 'Computer science fundamentals',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Web',
    subtitle: 'Modern web application stack',
    skills: [
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'React', mono: 'Re' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
      { name: 'SPFx', mono: 'Sp' },
    ],
  },
  {
    id: 'apis-cloud',
    title: 'APIs & Cloud',
    subtitle: 'Connected systems and cloud',
    skills: [
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microsoft Graph', mono: 'Mg' },
      { name: 'Microsoft Azure', mono: 'Az' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Delivery and collaboration',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'MySQL', mono: 'My' },
      { name: 'SQLite', mono: 'Sql' },
      { name: 'Agile / Scrum', mono: 'Ag' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    subtitle: 'Team and communication skills',
    skills: [
      { name: 'Problem-Solving', mono: 'Ps' },
      { name: 'Prioritization', mono: 'Pr' },
      { name: 'Collaboration', mono: 'Co' },
      { name: 'Communication', mono: 'Cm' },
      { name: 'Research', mono: 'Rs' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  C: ['Smart India Internal Hackathon 2025'],
  Java: ['WeTeamRK7 Full Stack Engineer Intern', 'Spring Boot REST APIs'],
  SQL: ['MySQL schema design and CRUD optimization'],
  JavaScript: ['Frontend components built in HTML/CSS/JavaScript'],
  TypeScript: ['React + TypeScript storefront and dashboard'],
  DSA: ['Analytical and technical problem-solving'],
  'OOPs': ['Object-oriented Java development'],
  DBMS: ['MySQL schema and query optimization'],
  'Spring Boot': ['WeTeamRK7 backend APIs'],
  React: ['ShopSphere storefront and dashboard'],
  'HTML5': ['Responsive frontend components'],
  'CSS3': ['Responsive frontend design'],
  'SPFx': ['SharePoint Framework knowledge'],
  'REST APIs': ['Production API delivery at WeTeamRK7'],
  'Microsoft Graph': ['Microsoft ecosystem integration'],
  'Microsoft Azure': ['Cloud and integration experience'],
  Git: ['GitHub team pull requests and peer reviews'],
  GitHub: ['Peer code review and pull requests'],
  MySQL: ['Schema modeling and optimization'],
  SQLite: ['Database tooling experience'],
  'Agile / Scrum': ['Two-week sprint delivery and backlog prioritization'],
  'Problem-Solving': ['Research and debug-driven software delivery'],
  Prioritization: ['Backlog prioritization in Agile sprints'],
  Collaboration: ['Worked with 6-engineer cross-functional team'],
  Communication: ['Stakeholder requirement gathering'],
  Research: ['Edge-case and code-path exploration before implementation'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Engineering Foundation',
    period: '2023 – 2027',
    synopsis: 'Bachelor of Engineering in Computer Science at Adichunchanagiri Institute of Technology.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'B.E. in Computer Science — GPA 8.5 / 10 at Adichunchanagiri Institute of Technology.',
        tags: ['B.E.', 'Computer Science'],
        runtime: 'Sept 2023 – May 2027',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Software Engineering',
    period: '2025 – 2026',
    synopsis: 'Hands-on internship experience building real systems in Agile teams.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Intern',
        description: 'Full Stack Software Engineer Intern at WeTeamRK7 working on Question Hive.',
        tags: ['Java', 'Spring Boot', 'MySQL'],
        runtime: 'Dec 2025 – Mar 2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Product Builds',
    period: '2026',
    synopsis: 'Independent solution-building through e-commerce and AI-driven imaging projects.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'ShopSphere',
        description: 'Built a full-stack e-commerce platform with storefront, admin dashboard, and analytics.',
        tags: ['React', 'TypeScript', 'Supabase'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'Spinal MRI Detection',
        description: 'Created a medical imaging application processing scans and returning predictions under ten seconds.',
        tags: ['AI', 'Vision', 'Full-Stack'],
        runtime: 'Jun 2026 – Present',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Recognition',
    period: '2025 – 2026',
    synopsis: 'Hackathon win and IT quiz participation highlight interdisciplinary problem-solving.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Hackathon Win',
        description: 'Smart India Internal Hackathon 2025 — 1st place among 30+ teams.',
        tags: ['Hackathon', 'Prototype'],
        runtime: 'Sept 2025',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'IT Quiz',
        description: 'TCS TechBytes — inter-college quiz on IT, organized by TCS and BITES.',
        tags: ['Quiz', 'IT'],
        runtime: '2026',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Core backend language in internship and APIs', palette: amber },
  { label: 'Commercial backend', title: 'Spring Boot', detail: '12 REST endpoints delivered at WeTeamRK7', palette: crimson },
  { label: 'Frontend stack', title: 'React + TypeScript', detail: 'Responsive UI and dashboard build', palette: ocean },
  { label: 'Hackathon win', title: '1st Place', detail: 'Smart India Internal Hackathon 2025', palette: violet },
  { label: 'Academic profile', title: 'B.E. CSE', detail: 'GPA 8.5 / 10', palette: jade },
  { label: 'Database skills', title: 'MySQL', detail: '5,000+ record schema and optimization', palette: amber },
  { label: 'Problem-solving', title: 'DSA', detail: 'Analytical approach and code quality', palette: crimson },
  { label: 'Medical imaging project', title: 'Spinal MRI Detection', detail: 'Prediction under 10 seconds', palette: ocean },
  { label: 'Team delivery', title: 'Agile', detail: 'Two-week sprints and 25 PRs', palette: jade },
  { label: 'Current focus', title: 'Full-Stack', detail: 'Java • Spring Boot • React • SQL', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · CSE',
    lines: ['Adichunchanagiri Institute of Technology', 'September 2023 – May 2027'],
    chips: ['GPA 8.5'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['C · Java · SQL · JavaScript · TypeScript', 'Spring Boot · React · HTML5 · CSS3 · REST APIs'],
    chips: ['Java', 'Spring Boot', 'React', 'SQL', 'MySQL'],
  },
  {
    kicker: 'Internship',
    title: 'Question Hive',
    lines: ['Full Stack Software Engineer Intern', 'WeTeamRK7 · Dec 2025 – Mar 2026', '12 APIs shipped and 15+ UI components built'],
  },
  {
    kicker: 'Projects',
    title: '3 major builds',
    lines: ['ShopSphere — storefront + admin dashboard', 'Question Hive — commercial Q&A platform', 'Spinal MRI Detection — prediction under 10 seconds'],
  },
  {
    kicker: 'Achievements',
    title: 'Top moments',
    lines: ['1st Place — Smart India Internal Hackathon 2025', 'TCS TechBytes quiz participant'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['Spring Boot · React · Full-Stack systems'],
  },
];

export type ProfileId = 'ankita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'ankita',
    name: 'Ankita G Mallesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
