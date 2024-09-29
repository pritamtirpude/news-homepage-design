'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type SidebarProps = {
  setIsSidebarOpen: (val: boolean) => void;
};

const navLinks = ['home', 'new', 'popular', 'trending', 'categories'];

function Sidebar({ setIsSidebarOpen }: SidebarProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        duration: 0.2,
        bounce: 0
      }}
      className="fixed inset-0 -z-10 size-full bg-black/75"
      onClick={() => setIsSidebarOpen(false)}
    >
      <motion.div
        initial={{
          width: '0%'
        }}
        animate={{ width: '65%' }}
        exit={{
          width: '0%'
        }}
        transition={{
          duration: 0.2,
          type: 'spring',
          bounce: 0,
          delay: 0.1
        }}
        className="absolute right-0 -z-10 flex h-full  flex-col overflow-auto bg-newsColor-off-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-44 px-6">
          <ul className="flex flex-col gap-6">
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
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;
