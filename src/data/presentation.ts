type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "pablo.jimg@gmail.com",
  title: "Hi, I'm Pablo!",
  // profile: "/profile.webp",
  description:
    `I'm a fullstack developer with a passion for frontend interactions and flashy designs. 
     Seamlessly blending intuitive design with robust functionality, each project showcases
     my commitment to excellence and innovation using cutting-edge technologies like Astro, 
     Vue and React. From responsive layouts to dynamic interactions, I bring websites to life, 
     while also integrating backend expertise for holistic solutions.`,
  socials: [
    // {
    //   label: "X",
    //   link: "https://twitter.com/itsstormzz_",
    // },
    // {
    //   label: "Bento",
    //   link: "https://bento.me/m-wolff",
    // },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
