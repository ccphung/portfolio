import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import KeyButton from '../components/KeyButton';

import {
  FaChartLine,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';
import laptopImage from '../assets/images/about/laptop.png';

const techData = {
  frontend: [
    {
      icon: <FaReact style={{ color: '#61DAFB' }} />,
      name: 'React',
      level: 90,
    },
    {
      icon: <SiJavascript style={{ color: '#F7DF1E' }} />,
      name: 'JavaScript',
      level: 80,
    },
    {
      icon: <FaHtml5 style={{ color: '#E34F26' }} />,
      name: 'HTML5',
      level: 95,
    },
    {
      icon: <FaCss3Alt style={{ color: '#1572B6' }} />,
      name: 'CSS3',
      level: 90,
    },
    {
      icon: <SiTailwindcss style={{ color: '#06B6D4' }} />,
      name: 'Tailwind',
      level: 90,
    },
  ],
  backend: [
    {
      icon: <FaNodeJs style={{ color: '#339933' }} />,
      name: 'Node.js',
      level: 70,
    },
    {
      icon: <SiExpress style={{ color: '#000000' }} />,
      name: 'Express',
      level: 75,
    },
    {
      icon: <SiMongodb style={{ color: '#47A248' }} />,
      name: 'MongoDB',
      level: 76,
    },
  ],
};

function Laptop() {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleKeyClick = (tech) => {
    setSelectedTech(tech);
  };
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row">
      <div className="flex flex-wrap justify-center gap-4 md:w-1/3">
        {techData.frontend.map((tech) => (
          <KeyButton
            key={tech.name}
            label={tech.icon}
            onClick={() => handleKeyClick(tech)}
          />
        ))}
        {techData.backend.map((tech) => (
          <KeyButton
            key={tech.name}
            label={tech.icon}
            onClick={() => handleKeyClick(tech)}
          />
        ))}
      </div>

      <div className="relative">
        <img src={laptopImage} alt="Laptop" className="w-full" />
        <div className="absolute z-10 hidden -translate-x-[20%] rotate-[33deg] text-center text-xl font-bold text-gray-400 md:left-[62%] md:top-[22%] md:block md:rotate-[31deg] xl:top-[21%]">
          <p className="font-mono text-2xl text-gray-500">Compétences</p>
        </div>

        {selectedTech ? (
          <div className="absolute left-[58%] top-[24%] z-10 -translate-x-[20%] rotate-[32deg] text-xl font-bold text-gray-400 md:left-[60%] md:top-[30%] md:text-3xl">
            <p>{selectedTech.name}</p>

            <div className="flex items-center justify-center gap-2 text-xl font-semibold text-gray-500 md:text-3xl">
              <FaChartLine />
              <PercentageCounter
                key={selectedTech.name}
                level={selectedTech.level}
              />
            </div>
          </div>
        ) : (
          <div className="absolute left-[50%] top-[25%] z-10 -translate-x-[20%] rotate-[31deg] text-center text-xl font-bold text-gray-400 md:left-[55%] md:top-[30%] md:rotate-[32deg]">
            <p className="animate-blink text-center font-mono text-xl text-gray-500">
              Cliquez sur une touche
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function PercentageCounter({ level }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < level) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [level]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {percentage}%
    </motion.p>
  );
}

export default Laptop;
