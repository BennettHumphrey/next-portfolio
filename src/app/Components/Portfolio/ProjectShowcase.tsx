import React, { FC, useEffect, useState } from "react";
import { imageSizes, ProjectShowcaseProps } from "@/app/data";

const ProjectShowcase:FC<ProjectShowcaseProps> = ({ project }) => {
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    setProjectType(project.type);
  }, [project]);

  return (
    <>
      <a className="block relative top-[-100px] invisible" id="projectShowcase"></a>
      <section className="flex justify-center items-center overflow-hidden py-6 md:py-8 lg:py-12 px-4 sm:px-6">
        <div className="max-w-screen-xl w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-[42vw] p-4 sm:w-[90vw]">
              <h1 className="text-3xl font-bold text-center sm:text-2xl">{project.title}</h1>
              <p className="pt-4 font-medium text-base leading-snug sm:text-sm sm:leading-4">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="flex justify-around gap-4 mb-4">
                <div className="border border-secondary-white rounded-full py-2 px-4 text-center">
                  <a className="text-orange-500" target="blank" href={project.githubSrc}>
                    View GitHub
                  </a>
                </div>
                {projectType === "site" && (
                  <div className="border border-secondary-white rounded-full py-2 px-4 text-center">
                    <a className="text-orange-500" target="blank" href={project.deployedSrc}>
                      View deployed site
                    </a>
                  </div>
                )}
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  className="w-[40vw] rounded-3xl shadow-md lg:w-[48vw] sm:w-[60vw]"
                  src={project.mainscreenshotSrc}
                  alt="Photo"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap p-4 gap-4">
            {project.screenshots.map((p, i) => (
              <img
                srcSet={p}
                sizes={imageSizes.projectShowcase}
                alt={`Screenshot ${i + 1}`}
                key={i}
                className="w-[20vw] rounded-lg shadow-md lg:w-[24vw] sm:w-[30vw]"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectShowcase;
