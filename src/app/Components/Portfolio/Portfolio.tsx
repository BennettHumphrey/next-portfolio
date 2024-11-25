"use client";

import React, { useEffect, useState } from "react";
import { Project, ProjectCategory, projects } from "@/app/data";
import {
  Button,
  Carousel,
  CustomFlowbiteTheme,
  Flowbite,
} from "flowbite-react";
import { useWindowSize } from "react-use";
import { useRouter, useSearchParams } from "next/navigation";

const Portfolio = () => {
  const [windowWidth, setWindowWidth] = useState(700);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [projectSet, setProjectSet] = useState<ProjectCategory>(
    projects.clients
  );

  const { width } = useWindowSize();

  useEffect(() => {
    setWindowWidth(width);
  }, [width]);

  type ProjectKey = keyof typeof projects;

  useEffect(() => {
    const selectedProjectSet = searchParams.get(
      "projectset"
    ) as ProjectKey | null;

    if (selectedProjectSet && selectedProjectSet in projects) {
      setProjectSet(projects[selectedProjectSet]);
    } else {
      setProjectSet(projects.clients);
    }
  }, [searchParams]);

  // useEffect(() => {
  //   console.log('projectSet in Portfolio.tsx:', projectSet)
  // }, [projectSet])

  const handleProjectSetChange = (selectedProjectSet: string) => {
    router.replace(`/?projectset=${selectedProjectSet}`, { scroll: false });
  };

  const customTheme: CustomFlowbiteTheme = {
    carousel: {
      control: {
        base: "inline-flex h-8 w-8 relative -top-[80px] md:-top-[10px] items-center justify-center rounded-full bg-[#c4c4c499] group-hover:[#c4c4c4bb] group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      },
    },
  };

  return (
    <>
      <section className="bg-white pb-52 overflow-hidden py-6 md:py-8 lg:py-12 px-4 sm:px-6">
        <a className="block relative top-[-80px] invisible" id="portfolio" />
        <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
          <h3 className="text-center text-3xl font-bold tracking-wider underline">
            Projects
          </h3>
          <div className="flex items-center gap-2 sm:gap-4 m-auto justify-evenly *:rounded-xl *:[text-shadow:1.2px_1.2px_1.2px_black]">
            <Button
              gradientDuoTone="redToYellow"
              className="duration-300 hover:scale-105 w-[90px] h-[42px] text-white"
              onClick={() => handleProjectSetChange("electrical")}
            >
              Electrical
            </Button>
            <Button
              gradientDuoTone="greenToBlue"
              className="duration-300 hover:scale-105 p-1 sm:p-3 sm:text-2xl sm:rounded-3xl"
              onClick={() => handleProjectSetChange("clients")}
            >
              HAPPY CLIENTS
            </Button>
            <Button
              gradientDuoTone="pinkToOrange"
              className="duration-300 hover:scale-105 w-[90px] h-[42px]"
              onClick={() => handleProjectSetChange("other")}
            >
              Other
            </Button>
          </div>
          <p className="text-center text-xl px-3 max-w-[600px] m-auto">
            <span className="underline tracking-wider font-bold mr-2 text-2xl">
              {projectSet.header}
            </span>
            {projectSet.description}
          </p>
          <div className="relative w-[90vw] h-full m-auto">
            <Flowbite theme={{ theme: customTheme }}>
              <Carousel pauseOnHover slideInterval={6000}>
                {projectSet &&
                  projectSet.projects.map((p: Project, i) => (
                    <div
                      className="w-4/5 flex pb-3 flex-col md:flex-row items-center justify-center relative"
                      key={i}
                    >
                      {windowWidth < 768 && (
                        <h3 className="text-center text-2xl font-bold tracking-wider m-auto pb-8">
                          {p.title}
                        </h3>
                      )}
                      <div className=" relative shadow-lg duration-200 aspect-[8/7] md:w-[40vw]">
                        <img
                          className="overflow-hidden rounded-2xl"
                          src={p.mainscreenshotSrc}
                          width={800}
                          height={700}
                          loading="lazy"
                          alt={`${p.title} screenshot`}
                        />
                      </div>
                      <div className="flex relative flex-col md:w-[40vw] md:px-[2vw] lg:px-[4vw]">
                        {windowWidth >= 768 && (
                          <h3 className="text-center text-2xl font-bold tracking-wider m-auto pb-8">
                            {p.title}
                          </h3>
                        )}
                        <div className="flex justify-center gap-2 w-full px-1 sm:px-[10vw] md:px-1 md:order-1 mt-4 mb-6 text-sm">
                          {p.githubSrc && (
                            <a href={p.githubSrc} target="_blank">
                              <Button outline gradientDuoTone="redToYellow">
                                Github Repo
                              </Button>
                            </a>
                          )}
                          {p.deployedSrc && (
                            <a href={p.deployedSrc} target="_blank">
                              <Button outline gradientDuoTone="redToYellow">
                                Deployed Site
                              </Button>
                            </a>
                          )}
                        </div>
                        <p className="first-letter:uppercase px-2 text-lg tracking-wide">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </Carousel>
            </Flowbite>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
