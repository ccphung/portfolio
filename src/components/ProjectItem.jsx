import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { HiArrowUturnLeft } from 'react-icons/hi2';

function ProjectItem({
  img,
  bgColor,
  children,
  title,
  desc,
  github,
  link,
  techno = [],
  largeTitle,
  rotate,
  zoom,
  imgCover,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);

  function handleFlip() {
    setIsFlipped((prev) => !prev);
  }

  return (
    <motion.div
      ref={ref}
      className="relative h-full w-full transition hover:grayscale-0"
    >
      <button className="h-full w-full rounded-xl" onClick={handleFlip}>
        <motion.div
          className="bg-lightgray relative h-full w-full rounded-xl border-2 border-[#323232] p-6 shadow-[4px_4px_0_#323232] transition-all duration-300 [transform-style:preserve-3d]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Front card */}
          <div
            className="absolute inset-0 flex flex-col overflow-hidden rounded-xl [backface-visibility:hidden]"
            style={{ backgroundColor: bgColor || 'var(--bg-color)' }}
          >
            <img
              src={img}
              alt={title}
              className={`right-0 h-full transform ${imgCover === 'cover' ? 'object-cover' : 'object-contain'} ${rotate ? 'rotate-[-23deg] scale-150 transition-all duration-300 hover:rotate-[0deg] hover:scale-100' : ''} ${zoom ? 'transition-all duration-300 hover:scale-125' : ''}`}
            />
            {children}
          </div>

          {/* Back card */}
          <div
            className="bg-lightgray absolute inset-0 flex cursor-auto flex-col justify-between rounded-xl p-9 text-left text-[#323232] [backface-visibility:hidden] [transform:rotateY(180deg)]"
            style={{ backgroundColor: '#d3d3d3' }}
          >
            <div>
              <div className="mb-2 flex justify-between font-bold">
                <span
                  className={`text-2xl ${largeTitle ? 'md:text-4xl' : 'md:text-xl'} `}
                >
                  {title}
                </span>
                <div className="flex gap-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl hover:text-gray-500"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-gray-500"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-700 md:text-lg">{desc}</p>

              {/* Techno */}
              <div className="absolute bottom-5 mt-4 flex flex-wrap gap-2">
                {techno.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-[#323232] bg-white px-3 py-1 text-[10px] text-[#323232] shadow-[2px_2px_0_#323232] md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute right-4 top-4 block text-xl text-white">
            <HiArrowUturnLeft />
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}

export default ProjectItem;
