import React, { useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import reactbites from '../assets/images/projects/react-bites.png';
import triptrack from '../assets/images/projects/triptrack.png';
import wildoasis from '../assets/images/projects/wildoasis.png';
import ProjectItem from '../components/ProjectItem';
import ScrollVelocity from '../components/ScrollVelocity';

function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const text1X = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const text2X = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <motion.section
      className="bg-[#5499bc] md:sticky md:top-0 md:h-screen"
      id="projects"
    >
      <ScrollVelocity
        texts={['Mes projets']}
        velocity={30}
        className="custom-scroll-text mt-5 text-white"
      />
      <div className="mt-10 flex items-center justify-center">
        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[100vw]">
              <div className="grid h-[90vh] w-[90vw] grid-cols-1 space-y-4 md:flex md:h-[40vh] md:w-[70vw] md:space-x-3 md:space-y-0">
                <div className="md:w-1/2" ref={ref}>
                  <ProjectItem
                    title="Trip Track"
                    img={triptrack}
                    bgColor="#bba3ff"
                    desc="Projet personnel réalisé avec React, Redux et Tailwind CSS : une application pour organiser ses voyages et suivre ses dépenses"
                    techno={['React', 'Redux', 'Tailwind']}
                    github="https://github.com/ccphung/triptrack"
                    link="https://triptrack-teal.vercel.app/"
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
                  />
                </div>
              </div>

              <div className="mt-4 flex h-[190vh] flex-col space-y-4 pb-4 md:h-[40vh] md:w-[70vw] md:flex-row md:space-x-3 md:space-y-0">
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
