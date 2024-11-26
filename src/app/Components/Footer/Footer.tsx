"use client"

import { motion } from "framer-motion";
import { Button } from "flowbite-react";
import React from "react";
import EmailIcon from "./EmailIcon";
import InstagramIcon from "./InstagramIcon";
import GithubIcon from "./GithubIcon";

const Footer = () => {
  return (
    <div className="bg-bg-light-secondary w-full flex flex-col md:flex-row items-center justify-center md:items-start px-6 pt-10 pb-5">
      <h4 className="text-8xl opacity-80 font-black md:text-[8rem] md:w-[300px]">Shall we?</h4>
      <div className="flex flex-col items-center justify-center pb-12">
        <p className="text-lg leading-[1.8] pb-8 pt-2 max-w-[700px] md:w-1/2 text-center md:text-start">
          I work with small businesses to create optimized websites that drive
          growth and enhance user experiences. Want to work together?
        </p>
        <motion.a 
          initial={{ scale: 1 }}
          animate={{ scale: 1.13 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
          }}
          href="mailto:bennetthumphrey98@gmail.com"
        >
          <Button className="rounded-full px-5 py-1" color="dark">
            <div className="w-7 h-7 pr-3 flex justify-center items-center">
              <EmailIcon />
            </div>
            <p className="flex justify-center items-center text-lg tracking-wider">
              Email me!
            </p>
          </Button>
        </motion.a>
      <div className="flex justify-center items-center gap-10 pt-8">
        <a href="https://www.instagram.com/bennett.humphrey/" target="_blank"
        className="group" aria-label="Instagram Link">
          <div className="w-10 h-10 group-hover:scale-110 duration-300">
            <InstagramIcon  />
          </div>
        </a>
        <a href="https://github.com/BennettHumphrey" target="_blank"
        className="group" aria-label="Github Link">
          <div className="w-[44px] h-[44px] bg-slate-800 rounded-full flex justify-center items-center group-hover:scale-110 duration-300">
            <GithubIcon  />
          </div>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Footer;
