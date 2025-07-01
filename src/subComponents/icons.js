import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiCanva,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiUbuntu,
  SiDjango,
  SiExpress,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiSocketdotio,
  SiCloudinary,
  SiJsonwebtokens,
  SiStripe,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { FaGitlab } from "react-icons/fa";
import {
  Figma,
  Cplusplus,
  Python,
  C_lang,
} from "../components/AllSvgs";

const icons = [
  // Languages
  {
    name: "C",
    icon: C_lang,
    options: { size: "100px" },
  },
  {
    name: "C++",
    icon: Cplusplus,
    options: { color: "#427FDB", size: "100px" },
  },
  {
    name: "Python",
    icon: Python,
    options: { color: "#4B8BBE", size: "100px" },
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    options: { color: "#F0DB4F", size: "100px" },
  },

  // Frontend
  {
    name: "HTML",
    icon: SiHtml5,
    options: { color: "#E34C26", size: "100px" },
  },
  {
    name: "CSS",
    icon: SiCss3,
    options: { color: "#2965f1", size: "100px" },
  },
  {
    name: "React",
    icon: SiReact,
    options: { color: "#7cc5d9", size: "100px" },
  },
  {
    name: "Redux",
    icon: SiRedux,
    options: { color: "#764abc", size: "100px" },
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    options: { color: "#7952B3", size: "100px" },
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    options: { color: "#61DAFB", size: "100px" },
  },

  // Backend
  {
    name: "Node.js",
    icon: SiNodedotjs,
    options: { color: "#68A063", size: "100px" },
  },
  {
    name: "Express",
    icon: SiExpress,
    options: { color: "#000000", size: "100px" },
  },
  {
    name: "Django",
    icon: SiDjango,
    options: { color: "#000000", size: "100px" },
  },

  // Database
  {
    name: "MongoDB",
    icon: SiMongodb,
    options: { color: "#4DB33D", size: "100px" },
  },
  {
    name: "MySQL",
    icon: SiMysql,
    options: { color: "#3e6e93", size: "100px" },
  },

  // DevOps
  {
    name: "Docker",
    icon: SiDocker,
    options: { color: "#0db7ed", size: "100px" },
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    options: { color: "#326CE5", size: "100px" },
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    options: { color: "#4183C4", size: "100px" },
  },

  // Tools


  {
    name: "GitHub",
    icon: SiGithub,
    options: { color: "#000000", size: "100px" },
  },
  {
    name: "Postman",
    icon: SiPostman,
    options: { color: "#EF5B25", size: "100px" },
  },

  // Libraries / Others
  {
    name: "Socket.io",
    icon: SiSocketdotio,
    options: { color: "#010101", size: "100px" },
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    options: { color: "#000000", size: "100px" },
  },
  {
    name: "Stripe",
    icon: SiStripe,
    options: { color: "#635bff", size: "100px" },
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
    options: { color: "#3448c5", size: "100px" },
  },

  // Design
  {
    name: "Figma",
    icon: Figma,
    options: { size: "100px" },
  },

  // Platform
  {
    name: "Ubuntu",
    icon: SiUbuntu,
    options: { color: "#E95420", size: "100px" },
  },
  {
    name: "Linux",
    icon: FcLinux,
    options: { size: "100px" },
  },
];

export default icons;
