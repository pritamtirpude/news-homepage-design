'use client';

import Logo from '@/public/assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Sidebar from './Sidebar';

const navLinks = ['home', 'new', 'popular', 'trending', 'categories'];

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <header className="w-full">
      <nav className="flex w-full items-center justify-between">
        <Image src={Logo} alt="logo" />
        <ul className={`hidden items-center gap-10 md:hidden lg:flex`}>
          {navLinks.map((link) => (
            <Link
              className="text-[15px] capitalize text-newsColor-darkGrayishBlue transition-colors hover:text-newsColor-softRed"
              key={link}
              href="#"
            >
              {link}
            </Link>
          ))}
        </ul>

        <div className={`z-10 lg:hidden ${isSidebarOpen && 'fixed right-6'}`}>
          <div
            className="relative flex h-[17px] w-full flex-col gap-1"
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
          >
            <motion.span
              animate={{ rotate: isSidebarOpen ? '45deg' : '0deg' }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2
              }}
              className="inline-block h-[3px] w-10 bg-newsColor-darkBlue"
            ></motion.span>
            <motion.span
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2
              }}
              animate={{
                opacity: isSidebarOpen ? 0 : 1
              }}
              className="inline-block h-[3px] w-10 bg-newsColor-darkBlue"
            ></motion.span>
            <motion.span
              animate={{
                rotate: isSidebarOpen ? '135deg' : '0deg',
                top: isSidebarOpen ? '0px' : 0
              }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2
              }}
              className={`h-[3px] w-10 bg-newsColor-darkBlue ${isSidebarOpen ? 'absolute' : 'inline-block'}`}
            ></motion.span>
          </div>
          <AnimatePresence mode="popLayout" initial={false}>
            {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
