export const heroSlides = [
  {
    img: "./clients/andersen.webp",
    href: "https://andersenelectric.com/",
    title: "Andersen Electric",
    text: '"You were patient, persistent and concise, and respected my time! Thanks so much, I will recommend you to anyone I know who needs a site!" -Dave',
  },
  {
    img: "./clients/pioneer.webp",
    href: "https://www.pioneerelectrical.net/",
    title: "Pioneer Electric",
    text: '"Everything was done well, and smoothly!" -Chris',
  },
  {
    img: "./clients/poweron.webp",
    href: "https://poweronelectrical.net/",
    title: "Power On Electric",
    text: '"Quick and affordable, I highly recommend!" -Yared',
  },
];

export interface CarouselSlide {
  img: string;
  href: string;
  title: string;
  text: string;
}

export interface CarouselOptions {
  autoplay?: boolean;
  autoplayDelay?: number;
  line?: boolean;
  img?: boolean;
}

export interface CarouselProps {
  data: CarouselSlide[];
  options: CarouselOptions;
  styles: { [key: string]: string };
}
