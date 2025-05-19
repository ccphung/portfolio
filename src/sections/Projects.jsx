import React, { useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import reactbites from '../assets/images/projects/react-bites.png';
import triptrack from '../assets/images/projects/triptrack.png';
import wildoasis from '../assets/images/projects/wildoasis.png';
import zoo from '../assets/images/projects/zoo-arcadia.png';
import reactMentoring from '../assets/images/projects/react-mentoring.png';
import usePopcorn from '../assets/images/projects/usePopcorn.png';
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
  const text3X = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <>
      <div id="projects"></div>
      <motion.section className="bg-[#5499bc] md:sticky md:top-0 md:h-screen">
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
                      largeCard={true}
                      img={triptrack}
                      bgColor="#8A7899"
                      desc="Application personnelle développée avec React, pour les voyages seuls ou en groupe : créez un voyage, ajoutez des voyageurs, enregistrez les dépenses et le lieu. Suivez qui a payé quoi et où, sans prise de tête."
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
                        Follow your every money move
                      </motion.p>
                    </ProjectItem>
                  </div>
                  <div className="md:w-1/2">
                    <ProjectItem
                      title="Wild Oasis"
                      img={wildoasis}
                      bgColor="		#6b7b8c"
                      desc="Wild Oasis – Application cliente de réservation de cabines, développée avec Next.js, Supabase et React Query, dans le cadre de la formation Udemy de Jonas Schmedtmann. Elle permet aux utilisateurs de consulter et réserver des cabines facilement."
                      delay={0.2}
                      largeCard={true}
                      techno={['Next.js', 'Supabase', 'React Query']}
                      github="https://github.com/ccphung/the-wild-oasis-client"
                      link="https://the-wild-oasis-client-kappa.vercel.app/"
                    >
                      <motion.p
                        style={{ x: text3X }}
                        className="font-josefin absolute left-0 right-0 top-5 text-2xl font-semibold text-gray-100"
                      >
                        The Wild Oasis
                      </motion.p>
                    </ProjectItem>
                  </div>
                </div>

                <div className="mt-4 flex h-[190vh] flex-col space-y-4 pb-4 md:h-[40vh] md:w-[70vw] md:flex-row md:space-x-3 md:space-y-0">
                  <ProjectItem
                    title="React Bites"
                    img={reactbites}
                    bgColor="#d7894a"
                    desc="Application personnelle inspirée de Marmiton – Une plateforme intuitive pour rechercher des recettes, consulter les ingrédients et enregistrer ses plats favoris."
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
                    desc="Zoo Arcadia est une application web développée dans le cadre de l’ECF de ma formation. Les visiteurs peuvent y découvrir les animaux et les habitats du zoo, tandis qu’un back-office permet de gérer les animaux, les enclos et le personnel."
                    techno={['Symfony', 'Docker', 'MySQL']}
                    github="https://github.com/ccphung/zoo-broceliande"
                    link="https://zoo-broceliande-arcadia-c26161614893.herokuapp.com/"
                    delay={0.1}
                    bgColor="	#2E4F3E"
                    rotate={true}
                    imgCover="cover"
                  />
                  <ProjectItem
                    title="usePopcorn"
                    img={usePopcorn}
                    desc="usePopcorn est une application React développée dans le cadre de ma formation Udemy. Elle permet de rechercher des films, les noter et de les enregistrer."
                    delay={0.2}
                    techno={['React JS', 'Context API', 'useReducer']}
                    github="https://github.com/ccphung/usePopcorn"
                    link="https://use-popcorn-blush.vercel.app/"
                    bgColor="	#D4B03D"
                    zoom={true}
                  />
                  <ProjectItem
                    title="React Mentoring"
                    img={reactMentoring}
                    desc="React Mentoring est une application React avec TypeScript, créée durant ma formation Udemy. Elle permet de pratiquer le typage strict et la gestion d’état typée en React."
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
