import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bld,
  taio,
  university,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  github,
  unity,
  unreal,
  cpp,
  django,
  kubernetes,
  neoncity
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Games Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Unreal Engine",
    icon: unreal,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "bld.ai",
    icon: bld,
    iconBg: "#383E56",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Develop API REST services using frameworks such as Django with Python and Express with NodeJS.",
      "Support and Maintain the web user interfaces, using ReactJS.",
    ],
  },
  {
    title: "Augmented Reality / Mixed Reality Developer",
    company_name: "Taio Systems",
    icon: taio,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Dec 2022",
    points: [
      "Develop augmented reality (AR) and mixed reality (MR) multiplatform applications with Unreal Engine and Unity.",
      "Develop and Integrate API REST services for AR and MR applications.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Universidad de Nariño",
    icon: university,
    iconBg: "#383E56",
    date: "Apr 2021 - May 2022",
    points: [
      "Design the architecture for a SCADA system for the microgrid of the university.",
      "Develop the backend and frontend modules of the application.",
      "Support the programming of the devices associated with the microgrid, which use MQTT and Modbus as communication protocols, for its connection and communication with the SCADA.",
    ],
  },
];

const socialNetworks = {
  linkedin: {
    name: "Linkedin",
    url: "https://linkedin.com/in/juansebasbravo",
  },
  github: {
    name: "Github",
    url: "https://github.com/juansebasdev",
  },
  itch: {
    name: "Itch",
    url: "https://juansebas.itch.io/",
  },
  tiktok: {
    name: "TikTok",
    url: "https://www.tiktok.com/@juansebas96",
  },
  email: {
    name: "Email",
    url: "jbravomeneses@gmail.com",
  },
};

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Neon City",
    description:
      "Immerse yourself in a cyberpunk city full of action and adrenaline as you control one of our three unique characters. Dodge obstacles, compete against other racers online, and collect incredible items to restore your health and energy. Get ready for an exciting and full of surprises gaming experience in a randomly generated scenario!",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "photon",
        color: "green-text-gradient",
      },
      {
        name: "games",
        color: "pink-text-gradient",
      },
    ],
    image: neoncity,
    source_code_link: "https://sebastianmartinezdev.itch.io/neon-city",
    source: "itch"
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export {
  services,
  technologies,
  experiences,
  socialNetworks,
  testimonials,
  projects,
};
