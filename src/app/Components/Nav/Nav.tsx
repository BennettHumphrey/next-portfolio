'use client'


import React, { useState, useRef, useEffect } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import useOutsideAlerter from '@/app/hooks/useOutsideAlerter';
import useHeaderShadow from '@/app/hooks/useHeaderShadow';
import { useWindowSize } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';
import { menu } from 'framer-motion/client';

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
      className={`sticky top-0 z-50 p-6 bg-bg-light transition-all duration-300 shadow-lg`}
      style={{ boxShadow: typeof headerShadow === 'string' ? headerShadow : undefined }}
    >
      <div className="flex justify-between items-center max-w-screen-lg mx-auto">
        <p className="text-2xl tracking-wide`">Bennett Humphrey</p>
        <AnimatePresence>
          {menuOpen && <motion.ul
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, stiffness: 100 }}
            ref={menuRef}
            className='flex gap-6 text-sm uppercase flex-col absolute right-0 top-16 p-8 bg-bg-light rounded-lg shadow-lg w-2/3 md:w-1/3'
          >
            <li>
              <a href="#expertise" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-blue-500">
                Projects
              </a>
            </li>
          </motion.ul>}
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
      </div>
    </div>
  );
};

export default Nav;