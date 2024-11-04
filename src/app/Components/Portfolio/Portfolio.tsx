"use client";

import React, { useState } from "react";
import { Project, projects } from "@/app/data";
import MoreWorks from "./MoreWorks";
import ProjectShowcase from "./ProjectShowcase";
import { Carousel, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import Image from "next/image";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);
  const [showMoreWorks, setShowMoreWorks] = useState(false);

  const showcaseProjects = projects.filter((x) => x.showcase === true);
  const extraProjects = projects.filter((x) => x.showcase === false);
  console.log("extraProjects in Portfolio.tsx:", extraProjects);

  const customTheme: CustomFlowbiteTheme = {
    carousel: {
      control: {
        base: "inline-flex h-8 w-8 relative top-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      },
    },
  };

  return (
    <>
      <section className="bg-white overflow-hidden py-6 md:py-8 lg:py-12 px-4 sm:px-6">
        <a className="block relative top-[-80px] invisible" id="portfolio"></a>
        <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
          <h3 className="text-center text-3xl font-bold tracking-wider underline">
            Projects
          </h3>
          <div className="flex m-auto gap-10">
            <p>Electrical</p>
            <p>Salons</p>
          </div>

          <div className="relative w-[90vw] h-full">
            <Flowbite theme={{ theme: customTheme }}>
              <Carousel pauseOnHover slideInterval={6000}>
                {showcaseProjects.map((p: Project) => (
                  <div className=" w-4/5 relative" key={p.id}>
                    <Image
                      className="rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
                      src={p.mainscreenshotSrc}
                      width={700}
                      height={700}
                      alt={`${p.title} screenshot`}
                      onClick={() => {
                        setSelectedProject(p);  
                      }}
                      onTouchEnd={() => {
                        setSelectedProject(p);
                      }}
                    />
                    <h3 className="text-center text-2xl font-bold tracking-wider m-auto">{p.title}</h3>
                    <div className="flex justify-between px-2 mt-4 mb-6 border text-orange-400 text-sm">
                      <a href={p.githubSrc}>Github Repo</a>
                      <a href={p.deployedSrc}>Deployed Site</a>
                    </div>
                    <p>{p.description}</p>
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
