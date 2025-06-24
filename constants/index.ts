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
    image: "/AlbioPortfolio.github.io/skills/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "/AlbioPortfolio.github.io/skills/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "/AlbioPortfolio.github.io/skills/js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "/AlbioPortfolio.github.io/skills/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "/AlbioPortfolio.github.io/skills/figma.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "/AlbioPortfolio.github.io/skills/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Native",
    image: "/AlbioPortfolio.github.io/skills/reactnative.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "/AlbioPortfolio.github.io/skills/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PHP",
    image: "/AlbioPortfolio.github.io/skills/php.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "/AlbioPortfolio.github.io/skills/python.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel",
    image: "/AlbioPortfolio.github.io/skills/Laravel.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
    image: "/AlbioPortfolio.github.io/skills/tensorflow.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Nextjs",
    image: "/AlbioPortfolio.github.io/skills/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "/AlbioPortfolio.github.io/skills/mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flutter",
    image: "/AlbioPortfolio.github.io/skills/flutter.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Excel",
    image: "/AlbioPortfolio.github.io/skills/excel.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Arduino",
    image: "/AlbioPortfolio.github.io/skills/arduino-ide.svg",
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
    link: "#about",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "#",
};
