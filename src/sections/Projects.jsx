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
                    desc="Application personnelle développée avec React, Redux et Tailwind CSS, permettant aux utilisateurs de planifier leurs voyages, organiser les étapes et gérer leur budget."
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
                    desc="Wild Oasis – Application de réservation de cabines développée avec Next.js, Supabase et React Query, dans le cadre de la formation Udemy de Jonas Schmedtmann. Inclut gestion des utilisateurs, réservations et back-office."
                    delay={0.2}
                    techno={['Next.js', 'Supabase', 'React Query']}
                    github="https://github.com/ccphung/the-wild-oasis-client"
                    link="https://the-wild-oasis-client-kappa.vercel.app/"
                  />
                </div>
              </div>

              <div className="mt-4 flex h-[190vh] flex-col space-y-4 pb-4 md:h-[40vh] md:w-[70vw] md:flex-row md:space-x-3 md:space-y-0">
                <ProjectItem
                  title="React Bites"
                  img={reactbites}
                  bgColor="#B56100"
                  desc="Application personnelle inspirée de Marmiton, développée avec React, Context API et useReducer. Permet de rechercher des recettes, consulter les détails et les enregistrer dans une liste personnalisée."
                  delay={0}
                  techno={['React JS', 'Context API', 'useReducer']}
                  github="https://github.com/ccphung/react-bites"
                  link="https://react-bites.vercel.app/"
                />
                <ProjectItem
                  title="Zoo Arcadia"
                  img={zoo}
                  desc="Zoo Arcadia – Projet réalisé dans le cadre de l'ECF de ma formation. Application développée avec Symfony, Docker, MySQL, permettant la gestion des animaux, enclos et personnel d’un zoo fictif."
                  techno={['Symfony', 'Docker', 'MySQL']}
                  github="https://github.com/ccphung/zoo-broceliande"
                  link="https://zoo-broceliande-arcadia-c26161614893.herokuapp.com/"
                  delay={0.1}
                />
                <ProjectItem
                  title="usePopcorn"
                  img={usePopcorn}
                  desc="UsePopcorn – Application React pour rechercher des films, les noter et créer une liste de visionnage (formation Udemy)."
                  delay={0.2}
                  techno={['React JS', 'Context API', 'useReducer']}
                  github="https://github.com/ccphung/usePopcorn"
                  link="https://use-popcorn-blush.vercel.app/"
                />
                <ProjectItem
                  title="React Mentoring"
                  img={reactMentoring}
                  desc="React Mentoring – Application React/TypeScript pour pratiquer le typage avec TypeScript et gérer des états de manière typée (formation avec Maximilian)."
                  delay={0.3}
                  techno={['React', 'TypeScript', 'Context API', 'useReducer']}
                  github="https://github.com/ccphung/react-mentoring"
                  link="https://react-mentoring-415882h2m-ccphungs-projects.vercel.app/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
