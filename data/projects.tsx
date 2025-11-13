interface projects {
  id: number;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  link : string;
  aosDescription : string;
}

export const projects: projects[] = [
  {
    id: 1,
    title: "ETAL1",
    description:
      "Discover my project, each of which reflects my approach to transforming ideas into clear and interactive designs.",
    image: "/Home 1.png",
    link: "https://github.com/WillR3n/ETAL1",
    aosDescription : "fade-right" 
  },
  {
    id: 2,
    title: "SG Cameroun",
    description:
      "Every project helps me grow and refine my skills, one line of code at a time.",
    image: "/1. Main page 1.png",
    link: "https://github.com/WillR3n/Londo-project",
    aosDescription : "fade-left" 
  },
  {
    id: 3,
    title: "BB-TV",
    description: "So if you agree, let’s work together.",
    image: "/Home-BB.png",
    link: "https://weatherapp.com",
    aosDescription : "zoom-in-left" 
  },
];
