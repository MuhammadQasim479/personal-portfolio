/**
 * Single source of truth for every piece of content on the site.
 *
 * Sections import from here instead of holding their own arrays, so updating
 * a job title or adding a project is a one-line change in one file. Anything
 * a recruiter would read lives here; anything about how it looks lives in the
 * components.
 */

import {
  Code2,
  Database,
  Github,
  Gauge,
  Layers,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Phone,
  Server,
  Workflow,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Muhammad Qasim",
  initials: "MQ",
  title: "Full-Stack MERN Engineer",
  tagline: "MongoDB • Express • React • Node",
  location: "Lahore, Pakistan",
  email: "qasimkhan656655@gmail.com",
  phone: "03061915479",
  phoneHref: "tel:+923061915479",
  yearsExperience: "1.5+",
  availability: "Available for work",
  // Drop a PDF at public/resume.pdf and this link starts working.
  resumeUrl: "/resume.pdf",
  siteUrl: "https://muhammadqasim.dev",
  summary:
    "I build production MERN applications end to end — React interfaces, Express APIs, and MongoDB data models — and I own the part in between: auth, validation, caching, and deploys.",
};

export const socials = [
  {
    icon: Github,
    href: "https://github.com/MuhammadQasim479",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-qasim-b3b9b82b1/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:qasimkhan656655@gmail.com", label: "Email" },
];

/* -------------------------------------------------------------------------- */
/* Navigation — `id` must match the matching section's DOM id for scroll-spy   */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
];

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const marqueeSkills = [
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "Next.js",
  "TypeScript",
  "Mongoose",
  "REST APIs",
  "JWT Auth",
  "Redux Toolkit",
  "Tailwind CSS",
  "Docker",
  "Vercel",
  "GitHub Actions",
];

/** Lines shown in the hero editor, tokenised for syntax colouring. */
export const codeLines = [
  {
    indent: 0,
    content: [
      { t: "const ", c: "keyword" },
      { t: "developer", c: "var" },
      { t: " = {", c: "plain" },
    ],
  },
  {
    indent: 1,
    content: [
      { t: "name", c: "prop" },
      { t: ": ", c: "plain" },
      { t: '"Muhammad Qasim"', c: "string" },
      { t: ",", c: "plain" },
    ],
  },
  {
    indent: 1,
    content: [
      { t: "role", c: "prop" },
      { t: ": ", c: "plain" },
      { t: '"Full-Stack MERN Engineer"', c: "string" },
      { t: ",", c: "plain" },
    ],
  },
  {
    indent: 1,
    content: [
      { t: "stack", c: "prop" },
      { t: ": [", c: "plain" },
    ],
  },
  {
    indent: 2,
    content: [
      { t: '"MongoDB"', c: "string" },
      { t: ", ", c: "plain" },
      { t: '"Express"', c: "string" },
      { t: ",", c: "plain" },
    ],
  },
  {
    indent: 2,
    content: [
      { t: '"React"', c: "string" },
      { t: ", ", c: "plain" },
      { t: '"Node.js"', c: "string" },
    ],
  },
  { indent: 1, content: [{ t: "],", c: "plain" }] },
  {
    indent: 1,
    content: [
      { t: "ships", c: "prop" },
      { t: ": ", c: "plain" },
      { t: '"APIs and the UI on top of them"', c: "string" },
      { t: ",", c: "plain" },
    ],
  },
  {
    indent: 1,
    content: [
      { t: "available", c: "prop" },
      { t: ": ", c: "plain" },
      { t: "true", c: "keyword" },
    ],
  },
  { indent: 0, content: [{ t: "};", c: "plain" }] },
];

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Server,
    title: "API Design",
    description:
      "REST endpoints with predictable contracts, validation, and error shapes.",
  },
  {
    icon: Lock,
    title: "Auth & Security",
    description:
      "JWT sessions, role-based access, hashed credentials, guarded routes.",
  },
];

export const aboutParagraphs = [
  "I'm a full-stack engineer with over 2 years of experience building products on the MERN stack. My journey started with a curiosity for how things work on the web, and it has grown into hands-on ownership of the whole request path — from the React component a user clicks to the MongoDB document that answers it.",
  "Day to day I work across the whole MERN stack — React and Next.js with TypeScript in the client, Node.js and Express serving it, MongoDB and Mongoose underneath. I design the data models, write the endpoints, wire up authentication, and then build the interface that consumes them.",
  // "I care about the parts that show up later: consistent API contracts, indexes that keep queries fast as collections grow, and components the next developer can read without a walkthrough.",
];

export const aboutQuote =
  "My mission is to create digital experiences that are not just functional, but truly delightful — products that users love to use and developers love to maintain.";

/* -------------------------------------------------------------------------- */
/* Stack — the request path, one entry per layer                              */
/* -------------------------------------------------------------------------- */

export const stackLayers = [
  {
    id: "client",
    step: "Client",
    name: "React",
    role: "Interface & state",
    colorVar: "--color-react",
    file: "ProjectList.jsx",
    detail: "Component fires the request and renders the result.",
    skills: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
    ],
    icon: Layers,
  },
  {
    id: "server",
    step: "Server",
    name: "Express",
    role: "Routing & middleware",
    colorVar: "--color-express",
    file: "projects.routes.js",
    detail: "Auth guard, input validation, middleware, then the controller.",
    skills: [
      "Express 5",
      "REST APIs",
      "JWT & refresh tokens",
      "Zod validation",
      "Rate limiting",
      "Error middleware",
    ],
    icon: Workflow,
  },
  {
    id: "runtime",
    step: "Runtime",
    name: "Node.js",
    role: "Business logic",
    colorVar: "--color-node",
    file: "project.service.js",
    detail: "Service layer does the work and shapes the response.",
    skills: [
      "Node.js 22",
      "Async patterns",
      "File uploads",
      "Socket.IO",
      "Redis cache",
      "Background jobs",
    ],
    icon: Server,
  },
  {
    id: "data",
    step: "Data",
    name: "MongoDB",
    role: "Persistence",
    colorVar: "--color-mongo",
    file: "project.model.js",
    detail: "Indexed query returns documents through Mongoose.",
    skills: [
      "MongoDB Atlas",
      "Mongoose schemas",
      "Aggregation pipeline",
      "Indexing",
      "Transactions",
      "Data modelling",
    ],
    icon: Database,
  },
];

/** Shown under the trace — the things that surround the stack itself. */
export const toolingGroups = [
  {
    title: "Testing & quality",
    items: ["Jest", "React Testing Library", "Supertest", "ESLint", "Prettier"],
  },
  {
    title: "Ship & operate",
    items: ["Git", "GitHub Actions", "Docker", "Vercel", "Render", "Postman"],
  },
];

/* -------------------------------------------------------------------------- */
/* Projects — `link`/`github` may be null; the UI hides the button then       */
/* -------------------------------------------------------------------------- */

export const projects = [
  {
    title: "THOKMANDEE",
    description:
      "A full-featured e-commerce solution offering product catalog management, cart and checkout flows, secure payment processing, and order tracking — alongside inventory management, an admin analytics dashboard, and customer account management for a complete shopping experience.",
    image: "/projects/thokmande.png",
    tags: ["Node.js","Express.js","Prisma ORM","AWS/S3", "Next.js", "Typescript","Tailwind CSS"],
    link: "https://staging.thokmandee.es/", // TODO: add live URL
    github: null, // TODO: add repo URL
  },
  {
    title: "SOUL SIGHTED",
    description:
    "A personalized parenting platform that translates a child's astrological birth data into insights about their emotional patterns. I owned the backend layer — authentication, report generation, and the email-automation workflow.",
    image: "/projects/soulsighted.png",
    tags: ["MongoDB", "Express.js", "Node.js", "Next.js", "Tailwind CSS", ],
    link:  "https://soul-sighted.com/", // TODO: add live URL
    github: null, // TODO: add repo URL
  },
  {
    title: "VIEWBEFOREYOUMOVE",
    description:
    "A modern real estate platform that lets users explore verified property listings with high-quality photos, virtual walkthroughs, and detailed neighborhood insights — helping buyers and renters make confident decisions before ever visiting a property in person.",
    image: "/projects/viewfrom.png",
    tags: ["MongoDB","Express.js" , "Node.js","React", "Next.js", "Monorepo"],
    link: "https://viewbeforeyoumove.com/", // TODO: add live URL
    // github: null, // TODO: add repo URL
  },
  
  {
    title: "RIG TECH",
      description:
    "A corporate marketing website built for a UAE-based event rigging and production company. Developed a service showcase with dynamic content sections, an ImageKit-powered media gallery for high-resolution project photos, and a lead-capture contact/quote system — optimized for performance and local SEO to drive inbound client inquiries.",
    image: "/projects/Rigtech.png",
    tags: ["MongoDB", "Express.js","Node.js","ImageKit", "Next.js", "React", "Tailwind CSS", ],
    link: "https://rigtechservicesint.com/", // TODO: add live URL
    // github: null, // TODO: add repo URL
  },
];

/* -------------------------------------------------------------------------- */
/* Experience                                                                 */
/* -------------------------------------------------------------------------- */

export const experiences = [
  {
    period: "2026 — Present",
    role: "MERN Stack Developer",
    company: "Byte Scripters.",
    description:
      "Leading full-stack architecture for a suite of fintech products. Designed the Express API layer and MongoDB data models, implemented a modular client architecture that reduced bundle size by 40%, and mentored a team of 5 developers.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Next.js"],
    current: true,
  },
  {
    period: "2025 — 2026",
    role: "MERN Stack Developer",
    company: "Code Scrapper.",
    description:
      "Built and maintained multiple MERN applications for enterprise clients — React clients on top of Node.js and Express REST APIs. Introduced automated testing practices that improved code coverage to 85%.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
    current: false,
  },
  {
    period: "2024 — 2025",
    role: "Front End Developer",
    company: "Xemen Technology",
    description:
      "Contributed to a SaaS platform from MVP to production — building React UI components against Node.js endpoints and MongoDB collections, and collaborating with designers to get the interface pixel-perfect.",
    technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB", "JavaScript"],
    current: false,
  },
];

/* -------------------------------------------------------------------------- */
/* Testimonials                                                               */
/* -------------------------------------------------------------------------- */

export const testimonials = [
  {
    id: "sarah-chen",
    quote:
      "Muhammad Qasim is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "michael-rodriguez",
    quote:
      "Working with Muhammad Qasim was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: "emily-watson",
    quote:
      "Muhammad Qasim's expertise across the MERN stack helped us rebuild our entire application in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: "david-kim",
    quote:
      "Not only is Muhammad Qasim technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore Ali Town",
    href: null,
  },
];

/* -------------------------------------------------------------------------- */
/* Hero stats — derived, so they can never drift out of sync with the lists    */
/* below them. No hand-typed numbers to go stale.                              */
/* -------------------------------------------------------------------------- */

export const heroStats = [
  { value: profile.yearsExperience, label: "Years shipping for the web" },
  { value: String(projects.length), label: "Featured projects" },
  { value: String(stackLayers.length), label: "Layers of the stack owned" },
];
