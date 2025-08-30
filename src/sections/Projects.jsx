import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import reactbites from '../assets/images/projects/react-bites.png';
import triptrack from '../assets/images/projects/triptrack.png';
import wildoasis from '../assets/images/projects/wildoasis.png';
import zoo from '../assets/images/projects/zoo-arcadia.png';
import reactMentoring from '../assets/images/projects/react-mentoring.png';
import usePopcorn from '../assets/images/projects/usePopcorn.png';

import ProjectItem from '../components/ProjectItem';
import ScrollVelocity from '../components/ScrollVelocity';
import { useTranslation } from 'react-i18next';

function Projects() {
  const ref = useRef(null);
  const { t } = useTranslation('common');
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const text1X = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const text2X = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const text3X = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <>
      <div id="projects"></div>
      <motion.section className="bg-[#5499bc] md:sticky md:top-0 md:h-screen">
        <ScrollVelocity
          texts={[t('projects.title')]}
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
                      largeCard={true}
                      img={triptrack}
                      bgColor="#8A7899"
                      desc={t('projects.triptrack.desc')}
                      techno={['React', 'Redux', 'Tailwind']}
                      text="large"
                      github="https://github.com/ccphung/triptrack"
                      link="https://triptrack-teal.vercel.app/"
                      imgCover="cover"
                    >
                      <motion.p
                        style={{ x: text1X }}
                        className="absolute bottom-20 right-10 text-3xl font-semibold text-white md:text-4xl"
                      >
                        Trip Track
                      </motion.p>
                      <motion.p
                        style={{ x: text2X }}
                        className="absolute bottom-10 right-10 hidden text-sm italic text-white md:block"
                      >
                        {t('projects.triptrack.slogan')}
                      </motion.p>
                    </ProjectItem>
                  </div>
                  <div className="md:w-1/2">
                    <ProjectItem
                      title="Wild Oasis"
                      img={wildoasis}
                      bgColor="#6b7b8c"
                      desc={t('projects.wildoasis.desc')}
                      delay={0.2}
                      largeCard={true}
                      techno={['Next.js', 'Supabase', 'React Query']}
                      github="https://github.com/ccphung/the-wild-oasis-client"
                      link="https://the-wild-oasis-client-kappa.vercel.app/"
                    >
                      <motion.p
                        style={{ x: text3X }}
                        className="absolute left-0 right-0 top-5 font-josefin text-2xl font-semibold text-gray-100"
                      >
                        {t('projects.wildoasis.title')}
                      </motion.p>
                    </ProjectItem>
                  </div>
                </div>

                <div className="mt-4 flex h-[190vh] flex-col space-y-4 pb-4 md:h-[40vh] md:w-[70vw] md:flex-row md:space-x-3 md:space-y-0">
                  <ProjectItem
                    title="React Bites"
                    img={reactbites}
                    bgColor="#d7894a"
                    desc={t('projects.reactbites.desc')}
                    delay={0}
                    techno={['React JS', 'Context API', 'useReducer']}
                    github="https://github.com/ccphung/react-bites"
                    link="https://react-bites.vercel.app/"
                    imgCover="cover"
                  >
                    <p
                      style={{ x: text1X }}
                      className="absolute left-0 right-0 top-5 text-2xl font-semibold text-white"
                    >
                      React Bites 🍜
                    </p>
                  </ProjectItem>

                  <ProjectItem
                    title="Zoo Arcadia"
                    img={zoo}
                    desc={t('projects.zoo.desc')}
                    techno={['Symfony', 'Docker', 'MySQL']}
                    github="https://github.com/ccphung/zoo-broceliande"
                    link="https://zoo-broceliande-arcadia-c26161614893.herokuapp.com/"
                    delay={0.1}
                    bgColor="#2E4F3E"
                    rotate={true}
                    imgCover="cover"
                  />

                  <ProjectItem
                    title="usePopcorn"
                    img={usePopcorn}
                    desc={t('projects.usePopcorn.desc')}
                    delay={0.2}
                    techno={['React JS', 'Context API', 'useReducer']}
                    github="https://github.com/ccphung/usePopcorn"
                    link="https://use-popcorn-blush.vercel.app/"
                    bgColor="#D4B03D"
                    zoom={true}
                  />

                  <ProjectItem
                    title="React Mentoring"
                    img={reactMentoring}
                    desc={t('projects.reactMentoring.desc')}
                    delay={0.3}
                    bgColor="#7a5c43"
                    techno={[
                      'React',
                      'TypeScript',
                      'Context API',
                      'useReducer',
                    ]}
                    github="https://github.com/ccphung/react-mentoring"
                    link="https://react-mentoring-sage.vercel.app/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Projects;
