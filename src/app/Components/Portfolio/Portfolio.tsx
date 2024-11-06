"use client";

import React, { useEffect, useState } from "react";
import { Project, projects } from "@/app/data";
import MoreWorks from "./MoreWorks";
import ProjectShowcase from "./ProjectShowcase";
import {
  Button,
  Carousel,
  CustomFlowbiteTheme,
  Flowbite,
} from "flowbite-react";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { useRouter, useSearchParams } from "next/navigation";

const Portfolio = () => {
  const [windowWidth, setWindowWidth] = useState(700);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [projectSet, setProjectSet] = useState<Project[] | null>(null);

  const { width } = useWindowSize();

  useEffect(() => {
    setWindowWidth(width);
  }, [width]);

  useEffect(() => {
    const currentSearchParams = searchParams.get('projectset');
    if(!currentSearchParams) {
      console.log('no search params')
      handleProjectSetChange('electrical');
    }
  }, [])

  useEffect(() => {
    const selectedProjectSet = searchParams.get('projectset');
    // if(!selectedProjectSet) {
    //   console.log('no search params')
    //   handleProjectSetChange('electrical');
    // }
    // @ts-ignore
    setProjectSet(projects[selectedProjectSet]);
  }, [searchParams]);

  useEffect(() => {
    console.log('projectSet in Portfolio.tsx:', projectSet)
  }, [projectSet])

  const handleProjectSetChange = (selectedProjectSet: string) => {
    router.replace(`/?projectset=${selectedProjectSet}`, { scroll: false });
  };

  const customTheme: CustomFlowbiteTheme = {
    carousel: {
      control: {
        base: "inline-flex h-8 w-8 relative -top-12 items-center justify-center rounded-full bg-[#c4c4c499] group-hover:[#c4c4c4bb] group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      },
    },
  };

  return (
    <>
      <section className="bg-white pb-52 overflow-hidden py-6 md:py-8 lg:py-12 px-4 sm:px-6">
        <a className="block relative top-[-80px] invisible" id="portfolio"/>
        <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
          <h3 className="text-center text-3xl font-bold tracking-wider underline">
            Projects
          </h3>
          <div className="flex items-center gap-2 sm:gap-4 m-auto justify-evenly *:rounded-xl *:[text-shadow:1.2px_1.2px_1.2px_black]">
            <Button
              gradientDuoTone="redToYellow"
              className="duration-300 hover:scale-105 w-[90px] h-[42px] text-white"
              // @ts-ignore
              onClick={() => handleProjectSetChange('electrical')}
            >
              Electrical
            </Button>
            <Button
              gradientDuoTone="greenToBlue"
              className="duration-300 hover:scale-105 p-1 sm:p-3 sm:text-2xl sm:rounded-3xl"
            >
              HAPPY CLIENTS
            </Button>
            <Button
              gradientDuoTone="pinkToOrange"
              className="duration-300 hover:scale-105 w-[90px] h-[42px]"
              onClick={() => handleProjectSetChange('other')}
            >
              Salons
            </Button>
          </div>

          <div className="relative w-[90vw] h-full m-auto">
            <Flowbite theme={{ theme: customTheme }}>
              <Carousel pauseOnHover slideInterval={6000}>
                {projectSet && projectSet.map((p: Project) => (
                  <div
                    className="w-4/5 flex pb-3 flex-col md:flex-row items-center justify-center relative max-h-screen"
                    key={p.id}
                  >
                    {windowWidth < 768 && (
                      <h3 className="text-center text-2xl font-bold tracking-wider m-auto pb-8">
                        {p.title}
                      </h3>
                    )}
                    <Image
                      className="rounded-2xl relative shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 md:w-[40vw]"
                      src={p.mainscreenshotSrc}
                      priority
                      width={700}
                      height={700}
                      alt={`${p.title} screenshot`}
                      // onClick={() => {
                      //   setSelectedProject(p);
                      // }}
                      // onTouchEnd={() => {
                      //   setSelectedProject(p);
                      // }}
                    />
                    <div className="flex relative flex-col md:w-[40vw] md:px-[2vw] lg:px-[4vw]">
                      {windowWidth >= 768 && (
                        <h3 className="text-center text-2xl font-bold tracking-wider m-auto pb-8">
                          {p.title}
                        </h3>
                      )}
                      <div className="flex justify-between w-full px-1 sm:px-[10vw] md:px-1 md:order-1 mt-4 mb-6 *:border *:p-2 *:rounded-lg *:border-gray-800 text-orange-400 text-sm">
                        <a href={p.githubSrc}>Github Repo</a>
                        <a href={p.deployedSrc}>Deployed Site</a>
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
      {/* {showMoreWorks && <MoreWorks extraProjects={extraProjects} setSelectedProject={setSelectedProject} />} */}
      {/* {selectedProject && <ProjectShowcase project={selectedProject} />} */}
    </>
  );
};

export default Portfolio;
