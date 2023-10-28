import { m } from "framer-motion";

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Electron.js",
  "Node.js",
  "TailwindCSS",
  "Python",
  "SQL",
  "Markdown",
  "Git",
  "Postman",
  "Firebase",
  "Framer Motion",
  "C",
  "C#",
  "Vue.js",
] as const;

export type navElement = {
  home: navButton;
  about: navButton;
  skills: navButton;
  timeline: navButton;
  blog: navButton;
};

export type navButton = {
  name: string;
  route: string;
  path: string;
  viewBox: string;
};

export const navbarData: navElement = {
  home: {
    name: "home",
    route: "/",
    path: "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z",
    viewBox: "0 0 576 512",
  },
  about: {
    name: "about me",
    route: "#about",
    path: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z",
    viewBox: "0 0 512 512",
  },
  skills: {
    name: "skills",
    route: "#skills",
    path: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",
    viewBox: "0 0 512 512",
  },
  timeline: {
    name: "timeline",
    route: "#timeline",
    path: "M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z",
    viewBox: "0 0 640 512",
  },
  blog: {
    name: "blog",
    route: "/blog",
    path: "M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z",
    viewBox: "0 0 576 512",
  },
} as const;

export const interestsData = [
  "web development",
  "UI/UX development",
  "color theory",
  "typography",
  "computer networking",
  "machine learning",
] as const;

export const hobbiesData = [
  "video games",
  "learning chinese",
  "anime",
  "manga",
  "music",
  "cooking",
] as const;

const possibleTags = {
  education: "edu",
  experience: "exp",
  development: "dev",
};

export type timelineElement = {
  title: string;
  date: string;
  tag: string;
  link?: string;
  content?: string[];
};

export const timelineData: timelineElement[] = [
  {
    title: "Began attending Temple University",
    date: "august 2020",
    tag: possibleTags.education,
  },
  {
    title:
      "Began working as a Teaching Assistant for Introduction to Java (CIS 1068)",
    date: "january 2023",
    tag: possibleTags.experience,
    content: [
      "Reinforced my learning of Object Oriented Programming",
      "Served as a valuable experience for teaching information to students",
    ],
  },
  {
    title: "Attended Owlhacks Spring 2023",
    date: "february 2023",
    tag: possibleTags.development,
    link: "https://devpost.com/software/inquiry-ozy7jf",
    content: [
      "Built Inquiry, a multi-platform real-time messaging and reaction app for students to ask questions without the fear of public opinion",
      "My teammate and I won! Check out the project by clicking on the timeline box",
    ],
  },
  {
    title: "Joined Coventry Life Settlements as a Software Engineer Intern",
    date: "may 2023",
    tag: possibleTags.experience,
    link: "https://www.coventry.com/",
    content: [
      "Worked on company systems written in C#, Javascript, and Visual Basic",
      "Designed, developed, and implemented a streamlined employee onboarding process application",
    ],
  },
  {
    title:
      "Hired as a CS peer tutor and Teaching Assistant for Low-Level Systems Programming (CIS 2107)",
    date: "august 2023",
    tag: possibleTags.experience,
  },
  {
    title: "Attended Owlhacks Fall 2023",
    date: "september 2023",
    tag: possibleTags.development,
    link: "https://devpost.com/software/litter-critters",
    content: [
      "My team and I built Litter Critters, an application that gameifies waste management in a Pokemon Go style!",
      "Click on the timeline box to check out the project",
    ],
  },
  {
    title: "Graduating from Temple University",
    date: "may 2024",
    tag: possibleTags.education,
    content: ["My expected graduation date!"],
  },
];
