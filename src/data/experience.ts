export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  remote: boolean;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "MeetMaps",
    position: "Sr. Software Engineer",
    location: "Remote",
    remote: true,
    period: "2022 - Present",
    description: "Leading frontend architecture for event management platform, implementing scalable solutions with modern technologies.",
    achievements: [
      "Led frontend architecture for event management platform",
      "Implemented TypeScript and micro-frontend architecture",
      "Achieved significant performance improvements",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React.js", "TypeScript", "Micro-frontend", "Redux", "Node.js", "Material UI"]
  },
  {
    company: "Nixaam Technologies",
    position: "Sr. Software Engineer",
    location: "Karachi",
    remote: false,
    period: "2021 - 2022",
    description: "Developed innovative features for restaurant POS system using React and TypeScript.",
    achievements: [
      "Created innovative features for restaurant POS system",
      "Led React/TypeScript development team",
      "Improved system performance by 40%",
      "Implemented real-time order tracking system"
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "Material UI", "Socket.io"]
  },
  {
    company: "Logistics Exchange Inc.",
    position: "Sr. Software Engineer",
    location: "Remote",
    remote: true,
    period: "2019 - 2021",
    description: "Built frontend components for logistics marketplace and optimized site performance.",
    achievements: [
      "Developed frontend components for logistics marketplace",
      "Implemented CI/CD pipelines",
      "Optimized site performance metrics by 60%",
      "Built responsive web applications"
    ],
    technologies: ["Vue.js", "JavaScript", "Webpack", "Jest", "REST APIs", "Vuex"]
  },
  {
    company: "Logicose",
    position: "Software Engineer",
    location: "Karachi",
    remote: false,
    period: "2017 - 2019",
    description: "Developed e-commerce applications and RESTful APIs for various clients.",
    achievements: [
      "Built e-commerce applications using Vue.js",
      "Developed RESTful APIs with Node.js",
      "Integrated payment gateways",
      "Implemented inventory management systems"
    ],
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    company: "Tabula Rasa Interactive",
    position: "Associate Developer",
    location: "Karachi",
    remote: false,
    period: "2016 - 2017",
    description: "Developed frontend applications for startup clients using modern web technologies.",
    achievements: [
      "Frontend development for startup clients",
      "UI development using React.js",
      "Collaborated with design teams",
      "Implemented responsive web designs"
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
  }
];
