import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/razaqaalb",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/razaqa-albio-kasyfi-045202231/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/RazakaAlbio",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "EYIP (EyesOnYourIdealPlate)",
    description:
      'In this project, which combines IoT and machine learning, the primary function is to detect food anomalies at an early stage. I served as both a backend and machine learning engineer, where I was responsible for managing the backend using Laravel, as well as creating the dataset, training the model, and integrating it with Flask. This project was submitted to a competition called Olivia, which is the National Vocational Olympics of Indonesia.',
    image: "/AlbioPortfolio.github.io/projects/project-1.png",
  },
  {
    title: "Sound Of Borobudur",
    description:
      '"Sound of Borobudur" is a project initiated by the Indonesian Ministry of Culture for an exhibition in Osaka. I am serving as the web developer for this project, tasked with creating a website that provides information about the musical instruments that will be showcased there. Currently, the project is ongoing as I am working on the website, but the mock-ups are still pending from the UI/UX team.',
    image: "/AlbioPortfolio.github.io/projects/project-2.png",
  },
  {
    title: "EduCrew",
    description:
      'EduCrew is designed to facilitate global networking among students and serves as a platform for side jobs, allowing students to work as learning mentors. I developed it using native PHP, Bootstrap, and JavaScript. Additionally, I implemented AJAX and MySQL to enhance the functionality of the platform.',
    image: "/AlbioPortfolio.github.io/projects/project-3.png",
  },
] as const;



export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "#",
};
