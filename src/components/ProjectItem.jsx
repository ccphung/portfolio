import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { HiArrowUturnLeft } from 'react-icons/hi2';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectItem({
  img,
  bgColor,
  children,
  title,
  delay = 0,
  onMouseEnter,
  onMouseLeave,
  desc,
  github,
  link,
  techno = [],
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  function handleFlip() {
    setIsFlipped((prev) => !prev);
  }

  return (
    <motion.div ref={ref} className="relative h-full w-full">
      <button
        className="flip-card h-full w-full cursor-none rounded-xl hover:grayscale-0 md:grayscale"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          style={{ transformStyle: 'preserve-3d' }}
          transition={{ duration: 0.6 }}
        >
          {/* Front card*/}
          <motion.div
            className="flip-card-front relative"
            style={{
              backgroundColor: bgColor,
              transformStyle: 'preserve-3d',
            }}
            initial={{ x: 50 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img src={img} alt={title} className="h-full w-full object-cover" />
            <div>{children}</div>
          </motion.div>

          {/* Back card*/}
          <motion.div
            className="flip-card-back relative flex h-full cursor-default flex-col justify-between border-2 p-5 text-left text-lg text-white"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div>
              <p className="text-2xl font-bold">{title}</p>
              <p className="mt-2 text-gray-100">{desc}</p>

              {/* Techno */}
              <div className="mt-4 flex flex-wrap gap-2">
                {techno.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/50 px-3 py-1 text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-4 flex justify-end gap-4 text-xl text-white md:text-3xl">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaGithub />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute right-5 top-5 block text-xl font-semibold text-white md:hidden">
          <HiArrowUturnLeft />
        </div>
      </button>
    </motion.div>
  );
}

export default ProjectItem;
