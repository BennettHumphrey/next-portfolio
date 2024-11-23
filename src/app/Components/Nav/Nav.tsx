"use client";

import React, { useState, useRef, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import useOutsideAlerter from "@/app/hooks/useOutsideAlerter";
import useHeaderShadow from "@/app/hooks/useHeaderShadow";
import { useWindowSize } from "react-use";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef<HTMLUListElement>(null);
  const [windowWidth, setWindowWidth] = useState(700);

  const { width } = useWindowSize();

  useEffect(() => {
    setWindowWidth(width);
  }, [width]);

  useOutsideAlerter({ menuRef, setMenuOpen });

  return (
    <div
      className={`fixed w-full z-50 p-6 bg-bg-light transition-all duration-300 shadow-lg`}
      style={{
        boxShadow: typeof headerShadow === "string" ? headerShadow : undefined,
      }}
    >
      <div className="flex justify-between items-center max-w-screen-lg mx-auto">
        <p className="text-2xl tracking-wide md:basis-1/3">Bennett Humphrey</p>
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, stiffness: 100 }}
              ref={menuRef}
              className="flex gap-6 text-sm uppercase flex-col absolute right-0 top-16 p-8 bg-bg-light rounded-lg shadow-lg w-2/3 md:w-1/3"
            >
              <li>
                <a
                  href="#expertise"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-600"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-600"
                >
                  Projects
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
        <div
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          onTouchEnd={(e) => {
            setMenuOpen(!menuOpen);
            e.preventDefault();
          }}
        >
          {windowWidth <= 768 ? <BiMenuAltRight size={30} /> : null}
        </div>
        {windowWidth > 768 && (
          <div className="flex justify-around basis-2/3">
            <div className="flex gap-5 items-center">
              <div>
                <p className="text-xl">Interested?</p>
              </div>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.13 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.2,
                }}
                className="text-2xl text-orange-600 tracking-wide group cursor-pointer"
              >
                <a href="mailto:bennetthumphrey98@gmail.com">Email me!</a>
                <div className="h-px bg-orange-600 w-0 group-hover:w-full duration-500" />
              </motion.div>
            </div>
                    
                    <div className="flex list-none gap-10">
            <li className="group">
              <a href="#expertise" className="hover:text-orange-600">
                Services
              </a>
              <div className="h-px bg-orange-600 w-0 group-hover:w-full duration-500" />
            </li>
            <li className="group">
              <a href="#portfolio" className="hover:text-orange-600">
                Projects
              </a>
              <div className="h-px bg-orange-600 w-0 group-hover:w-full duration-500" />
            </li>
                    </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
