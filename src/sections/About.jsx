import React, { useEffect, useRef, useState } from 'react';

import { motion, useInView } from 'framer-motion';
import KeyButton from '../components/KeyButton';

import { BiBookAlt, BiBookBookmark } from 'react-icons/bi';
import {
  FaChartLine,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
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
      level: 85,
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
      level: 80,
    },
  ],
  backend: [
    {
      icon: <FaNodeJs style={{ color: '#339933' }} />,
      name: 'Node.js',
      level: 80,
    },
    {
      icon: <SiExpress style={{ color: '#000000' }} />,
      name: 'Express',
      level: 75,
    },
    {
      icon: <SiMongodb style={{ color: '#47A248' }} />,
      name: 'MongoDB',
      level: 70,
    },
  ],
};

const cardData = [
  {
    title: 'Diplômes',
    icon: <BiBookBookmark className="text-5xl" />,
    content: [
      'Titre Professionnel Développeur Web & Web Mobile',
      'Master 2 - Finance',
    ],
  },
  {
    title: 'Certification Udemy',
    icon: <RiReactjsLine className="text-5xl" />,
    content: [
      'The Ultimate React Course 2025: React, Next.js, Redux & More - Jonas Schmedtmann',
    ],
  },
  {
    title: 'En cours',
    icon: <BiBookAlt className="text-5xl" />,
    content: [
      'Certification Udemy : Master Node JS & Deno.js - Maximilian Schwarzmüller',
    ],
  },
];

function About() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, threshold: 0.5 });
  const [selectedTech, setSelectedTech] = useState(null);

  const handleKeyClick = (tech) => {
    setSelectedTech(tech);
  };

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
              développement web. Spécialisé en React.js et Symfony, j'adore
              apprendre de nouvelles choses et affiner mes compétences. Mon but
              ? Ecrire du code propre et créer des expériences web qui sont à la
              fois pratiques, esthétiques et fonctionnelles.
            </motion.p>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-1">
            <div className="flex w-full flex-col justify-start gap-6 md:flex-row md:justify-center">
              {cardData.map((card, index) => (
                <div key={card.title} className="flex items-start md:w-1/3">
                  {index > 0 && (
                    <div className="mx-4 hidden h-24 border-l-2 border-gray-300 md:block"></div>
                  )}
                  <div className="flex flex-col text-left">
                    <div>{card.icon}</div>
                    <p className="text-xl">{card.title}</p>
                    <div className="text-gray-500">
                      {card.content.map((c) => (
                        <p key={c}>{c}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Laptop + keyboard */}
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
            <div className="absolute left-[50%] top-[25%] z-10 -translate-x-[20%] rotate-[33deg] text-center text-xl font-bold text-gray-400 md:left-[55%] md:top-[30%] md:rotate-[32deg]">
              <p className="animate-blink text-center font-mono text-xl text-gray-500">
                Cliquez sur une touche
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
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

export default About;
