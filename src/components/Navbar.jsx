import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [showBurger, setShowBurger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBurger(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav className="fixed right-0 top-5 z-40 flex items-center justify-between px-6 py-4">
        <AnimatePresence>
          {showBurger && !menuOpen && (
            <motion.button
              key="burger"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(true)}
              className="rounded-full border-2 border-black bg-white p-2 shadow-[4px_4px_0_#000] md:border-4 md:shadow-[6px_6px_0_#000]"
            >
              <div className="group cursor-pointer">
                <div className="mb-2 h-[3px] w-7 bg-black transition-all duration-300 group-hover:translate-x-[8px] md:h-[4px] md:w-8"></div>
                <div className="mb-2 ml-2 h-[3px] w-7 bg-black transition-all duration-300 md:h-[4px] md:w-8"></div>
                <div className="mb-1 ml-4 h-[3px] w-7 bg-black transition-all duration-300 group-hover:translate-x-[-7px] md:h-[4px] md:w-8"></div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Desktop */}
        {!showBurger && isReady && (
          <div className="hidden w-full justify-end md:flex">
            <ul className="flex space-x-20 text-lg uppercase text-gray-200">
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
                  to="journey"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Parcours
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
            className="fixed z-50 overflow-hidden rounded-tl-[250px] border-l-4 border-r-2 border-black bg-white p-6 text-black shadow-[8px_8px_0_#000]"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-white text-3xl font-bold text-black shadow-[6px_6px_0_#000]"
              >
                <span className="transition-all duration-150 hover:rotate-180">
                  ✕
                </span>
              </button>
            </div>

            {/* Menu mobile */}
            <div className="mt-10 flex flex-col space-y-6 text-center text-2xl font-bold text-black">
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
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              >
                Projets
              </Link>
              <Link
                to="journey"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              >
                Parcours
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
