export type Project = {
  title: string;
  description?: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Dictionary App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    techs: ["ReactJS (NextJS)", "react-query", "zod"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Portfolio / Lina BLIDI",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://www.linablidi.fr/",
  },
  {
    title: "Portfolio / Template",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    techs: ["Astro"],
    link: "/",
    // isComingSoon: true,
  },
];

export default projects;
