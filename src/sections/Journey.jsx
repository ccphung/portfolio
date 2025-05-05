import React, { useState } from 'react';

import { motion, AnimatePresence, useTransform } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';
import TimelineNavigation from '../components/TimelineNavigation';

import diplomaImg from '../assets/images/journey/diploma.png';
import diplomaImg2 from '../assets/images/journey/diploma2.png';
import workingFinance from '../assets/images/journey/working-office.png';
import workingFinance2 from '../assets/images/journey/working-office2.png';
import workingImg from '../assets/images/journey/working.png';

const timeline = [
  {
    year: '2017',
    title: 'Master 2 - Finance',
    company: 'Paris Nanterre',
    description: 'Mémoire : Les bulles spéculatives',
    img: diplomaImg2,
    alt: 'diploma',
  },
  {
    year: '2018',
    title: 'Lazard Frères Gestion',
    company: 'Middle Office Rétrocessions',
    description: '',
    img: workingFinance,
    alt: 'working',
  },
  {
    year: '2019',
    title: 'Rothschild & Co Asset Management',
    company: 'Suivi du Passif',
    description: '',
    img: workingFinance2,
    alt: 'working',
  },
  {
    year: '2024',
    title: 'Graduate Développeur Web',
    company: 'Studi',
    description: 'ECF : PHP Symfony',
    img: diplomaImg,
    alt: 'diploma',
  },
  {
    year: '2025',
    title: 'Certification Udemy',
    company: '',
    description: 'Découverte du métier',
    img: workingImg,
    alt: 'working',
  },
];

export default function Journey({ scrollDown }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % timeline.length);
  };

  const getDisplayItems = () => {
    return [0, 1, 2].map((offset) => {
      const index = (activeIndex + offset) % timeline.length;
      return { ...timeline[index], displayIndex: offset };
    });
  };

  const scale = useTransform(scrollDown, [0, 1], [0, 1]);
  const rotate = useTransform(scrollDown, [0, 1], ['-10deg', '0deg']);

  const displayItems = getDisplayItems();

  return (
    <motion.section
      className="relative mx-auto max-w-[1080px] bg-white py-20"
      style={
        typeof window !== 'undefined' &&
        window.matchMedia('(min-width: 768px)').matches
          ? { scale, rotate }
          : {}
      }
    >
      <h2 className="mb-10 text-center font-mono text-5xl font-bold">
        Mon Parcours
      </h2>

      <div className="flex flex-col items-center justify-center md:space-x-10">
        <motion.div
          className="flex items-center justify-center md:items-start"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <TimelineNavigation
            timeline={timeline}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </motion.div>

        <motion.div
          className="relative flex h-[400px] w-[300px] cursor-pointer items-center justify-center"
          onClick={nextSlide}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          {displayItems
            .filter((item) => item.displayIndex !== 0)
            .map((item) => (
              <TimelineItem
                key={item.year}
                {...item}
                index={item.displayIndex}
                transitionIn={false}
              />
            ))}

          <AnimatePresence mode="wait">
            <TimelineItem
              key={activeIndex}
              {...displayItems[0]}
              index={0}
              animated
              transitionIn={true}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
