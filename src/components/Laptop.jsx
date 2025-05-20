import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiSymfony,
  SiTailwindcss,
} from 'react-icons/si';
import KeyButton from '../components/KeyButton';

import laptopImage from '../assets/images/about/laptop.png';
import FuzzyText from './FuzzyText';

const techData = {
  frontend: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
      level: 90,
      color: '#E34F26',
    },
    {
      icon: <FaCss3Alt />,
      name: 'CSS3',
      level: 90,
      color: '#1572B6',
    },
    {
      icon: <SiJavascript />,
      name: 'JavaScript',
      level: 75,
      color: '#F7DF1E',
    },
    {
      icon: <FaReact />,
      name: 'React',
      level: 88,
      color: '#61DAFB',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
      level: 80,
      color: '#000000',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind',
      level: 90,
      color: '#38BDF8',
    },
  ],
  backend: [
    {
      icon: <SiPhp />,
      name: 'PHP',
      level: 65,
      color: '#777BB4',
    },
    {
      icon: <SiSymfony />,
      name: 'Symfony',
      level: 77,
      color: '#000000',
    },
    {
      icon: <SiMysql />,
      name: 'MySQL',
      level: 70,
      color: '#4479A1',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
      level: 70,
      color: '#47A248',
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
      <div className="flex flex-col items-center font-mono md:w-1/3">
        <div className="hidden md:block">
          <FuzzyText
            baseIntensity={0.05}
            hoverIntensity={0.02}
            enableHover={true}
          >
            Cliquez sur une touche
          </FuzzyText>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:mt-5">
          {[...techData.frontend, ...techData.backend].map((tech) => (
            <KeyButton
              key={tech.name}
              label={tech.icon}
              onClick={() => handleKeyClick(tech)}
              isSelected={selectedTech?.name === tech.name}
              color={tech.color}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <img src={laptopImage} alt="Laptop" className="w-full" />

        <div className="absolute z-10 hidden -translate-x-[20%] rotate-[33deg] text-center text-xl font-bold text-gray-400 md:left-[62%] md:top-[22%] md:block md:rotate-[31deg] xl:top-[21%]">
          <p className="font-mono text-2xl text-gray-500">Compétences</p>
        </div>

        {selectedTech ? (
          <div className="absolute left-[58%] top-[24%] z-10 -translate-x-[20%] rotate-[32deg] text-xl font-bold text-gray-400 md:left-[60%] md:top-[30%] md:text-3xl">
            <p>{selectedTech.name}</p>
            <div className="flex items-center justify-center gap-2 text-xl font-semibold md:text-3xl">
              <FaChartLine />
              <PercentageCounter
                key={selectedTech.name}
                level={selectedTech.level}
              />
            </div>
          </div>
        ) : (
          <div className="z-10 text-center text-xl font-bold text-gray-400">
            <div className="absolute left-[50%] top-[25%] -translate-x-[20%] rotate-[31deg] md:left-[55%] md:top-[30%] md:rotate-[32deg]">
              <p className="animate-blink mb-2 flex font-mono text-xl text-gray-500 md:hidden">
                Cliquez sur une touche
              </p>
            </div>

            <div className="hidden md:flex">
              <div className="absolute left-[55%] top-[25%] flex -translate-x-[20%] rotate-[32deg] items-center gap-5 font-mono">
                <span className="flex items-center gap-1 text-gray-400">
                  React
                </span>
                <div className="h-2 w-24 rounded bg-gray-300">
                  <div
                    className="h-2 rounded bg-gray-500"
                    style={{ width: '88%' }}
                  ></div>
                </div>
              </div>

              <div className="absolute left-[54%] top-[32%] flex -translate-x-[20%] rotate-[33deg] items-center gap-5 font-mono">
                <span className="flex items-center gap-1 text-gray-400">
                  JavaScript
                </span>
                <div className="h-2 w-24 rounded bg-gray-300">
                  <div
                    className="h-2 rounded bg-gray-500"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>

              <div className="absolute left-[52%] top-[36%] flex -translate-x-[20%] rotate-[33deg] items-center gap-5 font-mono">
                <span className="flex items-center gap-1 text-gray-400">
                  Symfony
                </span>
                <div className="h-2 w-24 rounded bg-gray-300">
                  <div
                    className="h-2 rounded bg-gray-500"
                    style={{ width: '77%' }}
                  ></div>
                </div>
              </div>

              <div className="absolute left-[50%] top-[41%] flex -translate-x-[20%] rotate-[34deg] items-center gap-5 font-mono">
                <span className="flex items-center gap-1 text-gray-400">
                  MySQL
                </span>
                <div className="h-2 w-24 rounded bg-gray-300">
                  <div
                    className="h-2 rounded bg-gray-500"
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>
            </div>
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
