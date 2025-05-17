import React, { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import AboutItem from '../components/AboutItem';
import Laptop from '../components/Laptop';

export default function About() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, threshold: 0.5 });

  return (
    <motion.section
      className="top-0 flex flex-col items-center space-y-16 bg-white px-6 py-12"
      id="about"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-10 md:flex-row">
        <div
          ref={textRef}
          className="mb-5 flex flex-col items-center justify-center text-left"
        >
          <div className="mb-9">
            <h1 className="mt-9 font-mono text-5xl font-semibold uppercase">
              About me
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="text-xl text-gray-600"
            >
              Après 6 ans dans la finance, j’ai décidé de me lancer dans le
              développement web. Spécialisé en React et Symfony, j'adore
              apprendre et affiner mes compétences. Mon but ? Ecrire du code
              propre et créer des expériences web qui sont à la fois esthétiques
              et fonctionnelles.
            </motion.p>
          </div>
          <AboutItem />
        </div>
      </div>
      <Laptop />
    </motion.section>
  );
}
