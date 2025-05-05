import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

function Navbar() {
  const [showBurger, setShowBurger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBurger(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed right-9 top-10 z-40 flex items-center justify-between px-6 py-4 md:right-0">
        <AnimatePresence>
          {showBurger && !menuOpen && (
            <motion.button
              key="burger"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(true)}
              className="rounded-full"
            >
              <div className="group cursor-pointer">
                <div className="mb-2 h-[4px] w-8 bg-gray-800 transition-all duration-300 group-hover:translate-x-[15px]"></div>
                <div className="mb-2 ml-2 h-[4px] w-8 bg-gray-800 transition-all duration-300 group-hover:translate-x-2"></div>
                <div className="mb-1 ml-4 h-[4px] w-8 bg-gray-800 transition-all duration-300 group-hover:translate-x-[-1px]"></div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Desktop */}
        {!showBurger && (
          <div className="hidden w-full justify-end md:flex">
            <ul className="flex space-x-20 text-xl uppercase text-gray-200">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{
              width: 60,
              height: 60,
              borderRadius: '500px 0 0 500px',
              top: 20,
              right: 20,
              opacity: 0,
            }}
            animate={{
              width: '100vw',
              maxWidth: 450,
              height: '100vh',
              borderRadius: '250px 0 0 0px',
              top: 0,
              right: 0,
              opacity: 1,
            }}
            exit={{
              width: 60,
              height: 60,
              borderRadius: '250px 0 0 250px',
              top: 20,
              right: 20,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              borderRadius: { duration: 0.5, ease: 'easeInOut' },
            }}
            className="fixed z-50 overflow-hidden bg-black p-6 text-white shadow-xl"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-white"
              >
                ✕
              </button>
            </div>

            {/* Menu mobile */}
            <div className="mt-10 flex flex-col space-y-6 text-center text-2xl text-white">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              >
                Projets
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              >
                À propos
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
