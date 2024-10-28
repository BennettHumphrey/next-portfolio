import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdWorkspacesOutline } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";
import { srcsets } from "../../public/srcsets";


export const projectExperience = [
  {
    name: "HTML & CSS Websites",
    projects: 11,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "React Websites",
    projects: 17,
    icon: MdWorkspacesOutline,
    bg: "#EEC048",
  },
  {
    name: "React Native Apps",
    projects: 3,
    icon: BiMobileAlt,
    bg: "#F26440",
  },
];






export const WhatDoIDo = [
  "I love helping new, developing businesses by building websites or apps to help reach a wider audience. This makes it easier for customers to interact with their favorite companies.",
];






export const workExp = [
  {
    place: "Self-Employed, Remote",
    tenure: "Mar 2022 - Present",
    role: "Web Dev",
    detail:
      "A web developer, building responsive, optimized websites and apps for businesses, working mainly with React and React Native, with Tailwind",
  },
  // {
  //   place: "Self-Employed, Digital",
  //   tenure: "Dec 2022 - Present",
  //   role: "Web Dev",
  //   detail:
  //     "A web developer, building responsive, optimized websites and apps for businesses, working mainly with React and React Native",
  // },
  // {
  //   place: "Self-Employed, Digital",
  //   tenure: "Dec 2022 - Present",
  //   role: "Web Dev",
  //   detail:
  //     "A web developer, building responsive, optimized websites and apps for businesses, working mainly with React and React Native",
  // },
];







export const skills = [
  {
    name: "HTML",
    percentage: 95,
  },
  {
    name: "CSS",
    percentage: 90,
  },
  {
    name: "Tailwind",
    percentage: 95,
  },
  {
    name: "Javascript",
    percentage: 90,
  },
  {
    name: "React",
    percentage: 85,
  },
  {
    name: "React Native",
    percentage: 55,
  },
]









export const comments = [
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    // img: "./people1.png",
  },
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    // img: "./people2.png",
  },
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    // img: "./people1.png",
  },
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    // img: "./people2.png",
  },
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    // img: "./people1.png",
  },
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    // img: "./people2.png",
  },
];







export const projects = [
  {
    id: 'html2',
    title: "Second Electrical Template",
    type: "site",
    tech: "React, TailwindCSS",
    githubSrc: "https://github.com/BennettHumphrey/Electrical-Site-2-React",
    deployedSrc: "https://electrical-site-2-react.vercel.app/",
    description: "My second finished electrical template, and the first one with multiple pages. I added two image sliders as well, to make it more engaging.",
    mainscreenshotSrc: srcsets.electrical2.main,
    screenshots: [...srcsets.electrical2.screenshots],
    showcase: true,
  },
  {
    id: 'react1',
    title: "Third Electrical Template",
    type: "site",
    tech: "React, TailwindCSS",
    githubSrc: "https://github.com/BennettHumphrey/Electrical-Site-3-React",
    deployedSrc: "https://electrical-site-3-react.vercel.app/",
    description: "My third electrical template, this time with some more animations and movement.",
    mainscreenshotSrc: srcsets.electrical1.main,
    screenshots: [...srcsets.electrical1.screenshots],
    showcase: true,
  },
  {
    id: 'react4',
    title: "Fourth Electrical Template",
    type: "site",
    tech: "React, TailwindCSS",
    githubSrc: "https://github.com/BennettHumphrey/Electrical-Site-4-React",
    deployedSrc: "https://electrical-site-4-react.vercel.app/",
    description: "My fourth electrical template, this time with some scroll animations and better movement.",
    mainscreenshotSrc: srcsets.electrical4.main,
    screenshots: [...srcsets.electrical4.screenshots],
    showcase: true,
  },
  {
    id: 'html1',
    title: "First Electrical Template",
    type: "site",
    tech: "React, TailwindCSS",
    githubSrc: "https://github.com/BennettHumphrey/Electrical-Site-1-React",
    deployedSrc: "https://electrical-site-1-react.vercel.app/",
    description: "This was my first ever project. I just used simple CSS and HTML, and a tiny bit of JS for the Modal. I used to be an Electrician, so my first projects were all Electrical company websites. At the time, this project helped solidify my knowledge of the basics. This site features a working Email form modal, and google maps location.",
    mainscreenshotSrc: srcsets.electrical3.main,
    screenshots: [...srcsets.electrical3.screenshots],
    showcase: false,
  },
  {
    id: 'react3',
    title: "Blue Fin Sushi",
    type: "site",
    tech: "Blue Fin Sushi",
    githubSrc: "https://github.com/BennettHumphrey/Restaurant",
    deployedSrc: "https://bennetthumphrey.github.io/Restaurant/",
    description: "My first restaurant site, using a mix of different site designs combined into one. My first time successfully implementing parallax scrolling, and style changes based on scroll position. Got much more comfortable with Tailwind on this project, and also enjoyed working with React again.",
    videoSrc: "./uber-deliveroo-clone/SVID_20230129_153818_1.mp4",
    mainscreenshotSrc: srcsets.blueFin.main,
    screenshots: [...srcsets.blueFin.screenshots],
    showcase: false,
  },
  {
    id: 'react2',
    title: "Uber & Deliveroo Fusion",
    type: "app",
    tech: "Uber & Deliveroo Fusion",
    githubSrc: "https://github.com/BennettHumphrey/Deliveroo-Uber-Fusion",
    deployedSrc: "",
    description: "My first React Native project, I built the Uber and Deliveroo  apps separately then combined them together. I struggled getting the dependencies to combine without issues, and in this project I learned to love Yarn over NPM, for some reason using Yarn fixed everything. It was also my first time using TailwindCSS, which was a nice change after mainly just using normal CSS. I enjoyed struggling with the timing for the map zoom, it taught me a lot about async functions.",
    videoSrc: "./uber-deliveroo-clone/SVID_20230129_153818_1.mp4",
    mainscreenshotSrc: srcsets.uberDeliverooClone.main,
    screenshots: [...srcsets.uberDeliverooClone.screenshots],
    showcase: false,
  },


]





export const imageSizes = {
  projectShowcase: "(max-width: 600px) 50vw, 30vw",
  moreWorks: "(max-width: 500px) 50vw, 30vw"
}


export const moreWorksSliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  // slidesToShow: 4,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true, 

  responsive: [
    {
      breakpoint: 900,
      settings: {
        // slidesToShow: 3,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        // slidesToShow: 2,
        slidesToShow: 2,
      },
    },
  ],
};

export const reviewSliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true, 

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
