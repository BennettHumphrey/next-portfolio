import React from 'react';
import { projectExperience, WhatDoIDo } from '@/app/data';

const Expertise = () => {
  return (
    <section className="bg-white">
      <a className="block relative -top-24 invisible" id="expertise"></a>
      <div className="px-6 py-12 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-8 flex-wrap max-w-screen-xl mx-auto">
        <div className="flex-1 flex flex-col gap-8">
          {projectExperience.map((exp, i) => (
            <div
              key={i}
              className="flex items-center border border-gray-200 rounded-lg p-6 gap-8 transition-all duration-200 hover:shadow-md"
            >
              <div
                style={{ background: exp.bg }}
                className="flex justify-center items-center p-2.5 w-12 h-12 rounded-full"
              >
                <exp.icon size={25} color="white" />
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xl font-bold">{exp.name}</span>
                <span className="text-secondaryText text-lg">{exp.projects} Projects</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-8 text-center md:text-left md:gap-16">
          <span className="text-primaryText text-3xl font-bold md:text-5xl">What do I do?</span>
          {WhatDoIDo.map((p, i) => (
            <span key={i} className="text-secondaryText text-lg max-w-[400px] md:text-xl md:leading-8">
              {p}
            </span>
          ))}
          <div className="flex justify-center md:justify-start gap-16">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-primaryText text-3xl font-bold">40+</span>
              <span className="text-secondaryText text-lg">Projects completed</span>
            </div>
            {/* Uncomment if needed */}
            {/* <div className="flex flex-col items-center md:items-start">
              <span className="text-primaryText text-3xl font-bold">190+</span>
              <span className="text-secondaryText text-lg">Happy Clients</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;