export type Tech = {
  title: string;
  logo: string;
};

const technologies: Tech[] = [
  {
    title: "ReactJS",
    logo: "/logos/react.svg",
  },
  {
    title: "NextJS",
    logo: "/logos/nextjs.svg",
  },
  {
    title: "Astro",
    logo: "/logos/astro.svg",
  },
  {
    title: "VueJS",
    logo: "/logos/vue.svg",
  },
  {
    title: "p5.js",
    logo: "/logos/p5js.svg",
  },
  {
    title: "TailwindCSS",
    logo: "/logos/tailwind.svg",
  }
  // {
  //   title: "Portfolio / Lina BLIDI",
  //   techs: ["ReactJS (NextJS)", "TypeScript"],
  //   link: "https://www.linablidi.fr/",
  // },
  // {
  //   title: "Portfolio / Template",
  //   techs: ["Astro"],
  //   link: "/",
  //   isComingSoon: true,
  // },
];

export default technologies;
