import React, { useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import me from '../assets/images/header/me.png';
import AnimatedPath from '../components/AnimatedPath';

function Header() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0', '400%']);
  const textX = useTransform(scrollYProgress, [0, 1], ['0', '500%']);
  const text2X = useTransform(scrollYProgress, [0, 1], ['0', '-300%']);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const phrase = 'Developpeur Web';

  return (
    <section
      ref={ref}
      className="relative z-0 min-h-[60vh] overflow-hidden bg-[#2f5e75] px-10 py-10 md:min-h-[100vh]"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="absolute inset-3 bg-gradient-to-b from-transparent via-[#1a5d7e] to-transparent"></div>

        <div className="mt-50 relative flex flex-col items-center justify-center md:mt-10">
          <h1 className="z-10 mb-5 text-center font-mono text-xl text-[#86d6fe] md:text-left md:text-4xl">
            Salut! Je suis Cédric Phung
          </h1>
          <h2 className="flex flex-wrap justify-center text-5xl font-bold uppercase text-white opacity-90 md:text-[8vw]">
            {phrase.split('').map((char, index) => {
              const distance = Math.abs(index - hoveredIndex);
              let y = 0;
              if (hoveredIndex !== null) {
                if (distance === 0) y = -20;
                else if (distance === 1) y = -12;
                else if (distance === 2) y = -6;
              }

              return (
                <motion.span
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{ y }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="inline-block font-mono"
                  style={{ x: textX }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              );
            })}
          </h2>
        </div>

        <motion.div
          style={{ y: backgroundY }}
          className="z-2 absolute bottom-0 w-[25em] md:w-[30em] xl:w-[70vh]"
        >
          <img
            src={me}
            alt="Cédric"
            className="w-full object-contain grayscale"
          />
        </motion.div>
        <motion.div
          className="absolute left-0 top-96 z-10 flex items-center justify-center rounded-r-full bg-gray-800 px-6 py-4 text-white"
          initial={{ opacity: 1, x: -230 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
          style={{ x: text2X }}
        >
          <span className="mr-4 text-3xl text-green-400">•</span> Disponible
          pour travailler
        </motion.div>
      </div>
      <AnimatedPath />
    </section>
  );
}

export default Header;
