import icons from "../subComponents/icons";

const findIconsData = (techStackArray) => {
  const filteredIconsData = icons
    .filter((icon) => techStackArray.includes(icon.name))
    .map((icon) => ({
      ...icon,
      options: {
        ...icon.options,
        size: parseInt(icon.options.size) / 2 + "px",
      },
    }));

  return filteredIconsData;
};
export const Work = [
  {
    index: 1,
    name: "CodeBox RCE",
    info: "CodeBox is a real-time remote code execution platform designed for collaborative coding and technical interviews. It supports Python, C++, and JavaScript with input/output handling, secure sandboxed execution using Docker, and live session sharing with unique session IDs.\n\nKey technologies: Node.js, Express, React, Socket.io, Docker, JWT",
    techStack: findIconsData([
      "React",
      "Node.js",
      "Docker",
      "Socket.io",
      "JWT"
    ]),
    githubUrl: "https://github.com/Rajivkumawat3/CodeBox", 
    hostlink: "https://github.com/Rajivkumawat3/CodeBox", 
    imagePath: "https://res.cloudinary.com/ddqrlzrvn/image/upload/v1751357978/PORTFOLIO/ujujlnwyltcdkhwje85z.png", 
  },  
  {
    index: 2,
    name: "Drizzle",
    info: "Drizzle is a lightweight peer-to-peer file-sharing and messaging application for local networks (inspired by DC++). It offers secure file transfers, real-time discovery, chat, and resumeable downloads via a PyQt5 desktop interface.\n\nKey technologies: Python, PyQt5, Docker, TCP/IP",
    techStack: findIconsData([
      "Python",
      "Socket.io",
      "Docker"
    ]),
    githubUrl: "https://github.com/Rajivkumawat3/Drizzle",
    hostlink: "https://github.com/Rajivkumawat3/Drizzle", 
    imagePath: "https://res.cloudinary.com/ddqrlzrvn/image/upload/v1751357978/PORTFOLIO/s9uewxuakoo7gpretjxp.png", 
  },
  {
    index: 3,
    name: "Fit-Market",
    info: "Fit-Market is a full-featured e-commerce platform that includes secure JWT-based login, real-time search, filtering, cart functionality, and payment integration. It features an admin dashboard for product, user, and order management.\n\nKey technologies: React.js, Node.js, Redux, Docker, JWT, Stripe, Cloudinary",
    techStack: findIconsData([
      "React",
      "Node.js",
      "Redux",
      "Docker",
      "JWT",
      "Stripe",
      "Cloudinary"
    ]),
    githubUrl: "https://github.com/Rajivkumawat3/FitMarket", 
    hostlink: "https://fitmarket-backend.onrender.com/",     
    imagePath: "https://res.cloudinary.com/ddqrlzrvn/image/upload/v1751358309/PORTFOLIO/kus8btcqzk9l9mt96dhz.png", 
  },
 
  {
    index: 4,
    name: "Talk2Robot",
    info: "Talk2Robot is a voice-controlled simulated service robot that can understand multilingual commands, detect objects, and navigate autonomously in a virtual environment using behavior-based logic and real-time perception.\n\nKey technologies: ROS, Gazebo, YOLOv10, spaCy NLP, Python, Behavior Trees",
    techStack: findIconsData([
      "Python"
    ]),
    githubUrl: "https://drive.google.com/file/d/1LUNudfzmhq9FNOU2MRCGGyDIY4y9W1hT/view?usp=sharing", 
    hostlink: "https://drive.google.com/file/d/10OHYrm1fcUoY7cdq7nlt8XGvQqB7CcAj/view?usp=sharing", 
    imagePath: "https://res.cloudinary.com/ddqrlzrvn/image/upload/v1751387760/PORTFOLIO/Screenshot_from_2025-07-01_22-03-53_kdrwxv.png"
  }, {
    index: 5,
    name: "CloudWatts",
    info: "CloudWatts is a weather application that fetches live weather data based on city or real-time location. It includes animated UI, browser-based geolocation, and graceful error handling.\n\nKey technologies: HTML, CSS, JavaScript, Weather API, Geolocation API",
    techStack: findIconsData([
      "HTML",
      "CSS",
      "JavaScript"
    ]),
    githubUrl: "https://github.com/Rajivkumawat3/cloudwatts", 
    hostlink: "https://github.com/Rajivkumawat3/cloudwatts",
    imagePath: "https://res.cloudinary.com/ddqrlzrvn/image/upload/v1751358309/PORTFOLIO/sd8uazfe6m3g2bdynkia.png" 
  }
];
