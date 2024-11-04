'use client'


import React, { useState, useRef, useEffect } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import useOutsideAlerter from '@/app/hooks/useOutsideAlerter';
import useHeaderShadow from '@/app/hooks/useHeaderShadow';
import { useWindowSize } from 'react-use';

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
        <ul
          ref={menuRef}
          className={`flex gap-6 text-sm uppercase transition-transform duration-300 ${
            menuOpen ? 'flex-col absolute right-0 top-16 p-8 bg-bg-light rounded-lg shadow-lg w-2/3 md:w-1/3' : 'hidden md:flex'
          }`}
        >
          <li>
            <a href="#expertise" className="hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#happy" className="hover:text-blue-500">
              Experience
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-500">
              Portfolio
            </a>
          </li>
        </ul>
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