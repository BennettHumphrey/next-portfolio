import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdWorkspacesOutline } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";
import { srcsets } from "../../public/srcsets";

export const projectExperience = [
  {
    name: "HTML & CSS Websites",
    projects: 11,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "React Websites",
    projects: 17,
    icon: MdWorkspacesOutline,
    bg: "#EEC048",
  },
  {
    name: "React Native Apps",
    projects: 3,
    icon: BiMobileAlt,
    bg: "#F26440",
  },
];

export const WhatDoIDo = [
  "I love helping new, developing businesses by building websites or apps to help reach a wider audience. This makes it easier for customers to interact with their favorite companies.",
];

export const skills = [
  {
    name: "HTML",
    percentage: 95,
  },
  {
    name: "CSS",
    percentage: 90,
  },
  {
    name: "Tailwind",
    percentage: 95,
  },
  {
    name: "Javascript",
    percentage: 90,
  },
  {
    name: "React",
    percentage: 85,
  },
  {
    name: "React Native",
    percentage: 55,
  },
];

// TODO:
// Clean data, add new sites

export const projects = {
  electrical: {
    header: "ELECTRICAL TEMPLATES",
    description: " were some of my first projects, because I worked as an electrician for a few years",
    projects: [
      {
        title: "First Electrical Template",
        githubSrc: "https://github.com/BennettHumphrey/Electrical-Site-1-React",
        deployedSrc: "https://electrical-site-1-react.vercel.app/",
        description:
          "This was my first project, originally just using HTML, CSS, and a touch of JS for a modal. It includes a working email form and Google Maps location.",
        mainscreenshotSrc: "/electrical/electrical-1.webp",
      },
      {
        title: "Second Electrical Template",
        githubSrc: "https://github.com/BennettHumphrey/Electrical-Site-2-React",
        deployedSrc: "https://electrical-site-2-react.vercel.app/",
        description:
          "My second completed electrical template and the first to feature multiple pages. I also added two image carousels to give it a more dynamic and engaging feel.",
        mainscreenshotSrc: "/electrical/electrical-2.webp",
      },
      {
        title: "Third Electrical Template",
        githubSrc: "https://github.com/BennettHumphrey/Electrical-Site-3-React",
        deployedSrc: "https://electrical-site-3-react.vercel.app/",
        description:
          "My third electrical template, this time with added animations and interactive movement to create a more engaging user experience.",
        mainscreenshotSrc: "/electrical/electrical-3.webp",
      },
      {
        title: "Fourth Electrical Template",
        githubSrc: "https://github.com/BennettHumphrey/Electrical-Site-4-React",
        deployedSrc: "https://electrical-site-4-react.vercel.app/",
        description:
          "My fourth electrical template, featuring scroll animations, smoother transitions, and a new projects section to enhance navigation and user engagement.",
        mainscreenshotSrc: "/electrical/electrical-4.webp",
      },
    ],
  },
  clients: {
    header: "PREVIOUS CLIENTS",
    description: " that were happy with the work I did for them",
    projects: [
      {
        title: "",
        githubSrc: "",
        deployedSrc: "",
        description: "",
        mainscreenshotSrc: "",
      },
    ]
  },
  other: {
    header: "OTHER PROJECTS",
    description: " that I've worked on, with a variety of topics and techs",
    projects: [
      {
        title: "Salon Belleza",
        githubSrc: "https://github.com/BennettHumphrey/Salon-Belleza",
        deployedSrc: "https://salon-belleza-rose.vercel.app/",
        description: "Inspired by my wife's cosmetic dermatology studies, I created a salon portfolio site with Next.js, enjoying its additional conveniences over regular React.",
        mainscreenshotSrc: "",
      },
      {
        title: "Blue Fin Sushi",
        githubSrc: "https://github.com/BennettHumphrey/Restaurant",
        deployedSrc: "https://bennetthumphrey.github.io/Restaurant/",
        description:
          "A sushi restaurant site, blending diverse design elements with parallax scrolling and scroll-based style changes. This project deepened my Tailwind skills and refreshed my React knowledge.",
        mainscreenshotSrc: "/other/blue.webp",
      },
      {
        title: "Uber & Deliveroo Fusion",
        githubSrc: "https://github.com/BennettHumphrey/Deliveroo-Uber-Fusion",
        deployedSrc: "",
        description:
          "My first React Native project, where I built Uber and Deliveroo apps separately, then combined them. It was also my first time using TailwindCSS, which was a great change.",
        mainscreenshotSrc: "/uber-deliveroo-clone/MainScreenshot.webp",
      },
      {
        title: "Flashcard Site (Ongoing)",
        githubSrc: "https://github.com/BennettHumphrey/language-learning-site",
        deployedSrc: "https://language-learning-site.vercel.app/",
        description: "Ongoing full-stack flashcard app made with Next.js, featuring auto-generated quizzes, exercises, and timed repetition. Still a work in progress, so deployment may occasionally break.",
        mainscreenshotSrc: "/other/lang.webp",
      },
    ],
  },
};

// {
//   title: "",
//   githubSrc: "",
//   deployedSrc: "",
//   description: "",
//   mainscreenshotSrc: "",
// },


export interface Project {
  title: string;
  githubSrc: string;
  deployedSrc: string;
  description: string;
  mainscreenshotSrc: string;
}

export interface ProjectCategory {
  header: string;
  description: string;
  projects: Project[];
}

// Props type for MoreWorks
export interface MoreWorksProps {
  extraProjects: Project[];
  setSelectedProject: (project: Project | null) => void;
}

export interface ProjectShowcaseProps {
  project: Project;
}
