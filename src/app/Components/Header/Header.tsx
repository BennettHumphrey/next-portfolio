"use client"
import React from "react";

import { motion } from "framer-motion";

const Header = () => {

  
  return (
    <section className="relative top-10 p-6 py-12 overflow-hidden">
      <div className="flex flex-col mx-auto relative w-full md:flex-row md:justify-around md:px-[10vw]">
        <div className="flex flex-col items-center justify-between sm:justify-around sm:flex-row md:flex-col md:justify-around">
          <span className="text-4xl text-center font-bold text-text-dark md:text-start">
            Hello,
            <br />
            I&apos;m Ben
          </span>
          <span className="text-xl text-gray-600 pt-8 pb-12 sm:pt-12 w-[200px]">
          Canadian web developer living in Peru, married, mountain lover, and rock climber. Fluent in Spanish.







          </span>
        </div>

        <div className="w-[70vw] h-[70vw] max-h-[70vw] max-w-[80vh] rounded-[40px] md:rounded-[70px] m-auto relative sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw] lg:w-[35vw] lg:h-[35vw]">
          <motion.img
            initial={{y: 500, opacity: 0, scale: 0}}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            // transition={{duration: 0.5}}
            src="/profile.webp"
            alt="Ben"
            width={376}
            height={420}
            className="aspect-[376/420] z-10 absolute rounded-[100px] overflow-hidden inset-0 w-[90%] m-auto h-full object-cover block"
          />
          <img
            src="/splash.webp"
            alt=""
            width={426}
            height={439}
            className="aspect-[426/439] absolute rounded-[100px] overflow-hidden inset-0 w-[90%] m-auto h-full object-cover block"
          />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center md:items-start mt-12">
          <p className="text-xl">
            {" "}
            Let&apos;s build
            <br />
            something together!
          </p>
          <a
            className="text-lg underline underline-offset-2 inline relative text-orange-600"
            href="mailto:bennetthumphrey98@gmail.com"
          >
            bennetthumphrey98
            <br />
            @gmail.com
          </a>
          <div className="flex flex-col justify-center items-center w-full sm:flex-row sm:justify-around md:flex-col md:justify-center md:items-start">
            <div className="flex items-center gap-4 mx-auto py-8 md:mx-0">
              <div className="text-4xl font-bold text-text-dark">3</div>
              <div className="text-gray-600">
                <div>Years</div>
                <div>Experience</div>
              </div>
            </div>
            <div className="flex flex-col items-center mx-auto">
              <h3 className="text-xl font-semibold">Current rate</h3>
              <span>$32CAD / $25USD per hour</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
