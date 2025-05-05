import React, { useEffect, useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { HiArrowUturnLeft } from 'react-icons/hi2';
import reactbites from '../assets/images/projects/react-bites.png';
import triptrack from '../assets/images/projects/triptrack.png';
import wildoasis from '../assets/images/projects/wildoasis.png';
import ProjectItem from '../components/ProjectItem';

function Projects({ scrollDown }) {
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const text1X = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const text2X = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  const scale = useTransform(scrollDown, [1, 0.8], [0, 1]);
  const rotate = useTransform(scrollDown, [0, 1], ['00deg', '10deg']);

  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (showCursor) {
      window.addEventListener('mousemove', move);
    } else {
      window.removeEventListener('mousemove', move);
    }

    return () => window.removeEventListener('mousemove', move);
  }, [showCursor]);

  return (
    <motion.section
      style={
        typeof window !== 'undefined' &&
        window.matchMedia('(min-width: 768px)').matches
          ? { scale, rotate }
          : {}
      }
      className="z-10 bg-[#638190]"
      id="projects"
    >
      <h1 className="m-9 py-5 font-mono text-5xl text-white">Mes projets</h1>
      <div className="flex items-center justify-center">
        <div className="relative">
          {showCursor && (
            <div
              className="pointer-events-none fixed z-50 hidden items-center justify-center rounded-full border border-gray-500 bg-gray-500 text-white transition-transform duration-75 md:flex"
              style={{
                top: cursorPos.y - 20,
                left: cursorPos.x - 20,
                width: 40,
                height: 40,
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              <HiArrowUturnLeft />
            </div>
          )}

          <div className="flex items-center justify-center">
            <div className="w-full max-w-[100vw]">
              <div className="grid h-[60vh] w-[90vw] grid-cols-1 space-y-4 md:flex md:h-[40vh] md:w-[70vw] md:space-x-3 md:space-y-0">
                <div className="md:w-1/2" ref={ref}>
                  <ProjectItem
                    title="Trip Track"
                    img={triptrack}
                    bgColor="#bba3ff"
                    desc="Projet personnel réalisé avec React, Redux et Tailwind CSS : une application pour organiser ses voyages et suivre ses dépenses"
                    techno={['React', 'Redux', 'Tailwind']}
                    github="https://github.com/ccphung/triptrack"
                    link="https://triptrack-teal.vercel.app/"
                    onMouseEnter={() => setShowCursor(true)}
                    onMouseLeave={() => setShowCursor(false)}
                  >
                    <motion.p
                      style={{ x: text1X }}
                      className="absolute bottom-20 right-10 text-3xl font-semibold text-white md:text-2xl"
                    >
                      Trip Track
                    </motion.p>
                    <motion.p
                      style={{ x: text2X }}
                      className="absolute bottom-10 right-10 hidden text-sm italic text-white md:block"
                    >
                      Follow your every money move
                    </motion.p>
                  </ProjectItem>
                </div>
                <div className="md:w-1/2">
                  <ProjectItem
                    title="Wild Oasis"
                    img={wildoasis}
                    bgColor="white"
                    desc="Projet personnel réalisé avec React, Redux et Tailwind CSS : une application pour organiser ses voyages et suivre ses dépenses"
                    delay={0.2}
                    onMouseEnter={() => setShowCursor(true)}
                    onMouseLeave={() => setShowCursor(false)}
                  />
                </div>
              </div>

              <div className="mt-4 flex h-[100vh] flex-col space-y-4 pb-4 md:h-[40vh] md:w-[70vw] md:flex-row md:space-x-3 md:space-y-0">
                {[
                  { color: '#B56100', delay: 0 },
                  { color: 'green', delay: 0.1 },
                  { color: 'red', delay: 0.2 },
                  { color: 'black', delay: 0.3 },
                ].map((item, index) => (
                  <ProjectItem
                    key={index}
                    title="React Bites"
                    img={reactbites}
                    bgColor={item.color}
                    desc="Projet personnel réalisé avec React, Redux et Tailwind CSS : une application pour organiser ses voyages et suivre ses dépenses"
                    delay={item.delay}
                    onMouseEnter={() => setShowCursor(true)}
                    onMouseLeave={() => setShowCursor(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
