import React, { useRef } from 'react';
import CircularText from '../components/CircularText';
import TimelineItem from '../components/TimelineItem';

import { useScroll } from 'framer-motion';
import diplomaImg from '../assets/images/journey/diploma.png';
import diplomaImg2 from '../assets/images/journey/diploma2.png';
import workingFinance from '../assets/images/journey/working-office.png';
import workingFinance2 from '../assets/images/journey/working-office2.png';
import workingImg from '../assets/images/journey/working.png';
import Lenis from '@studio-freight/lenis/types';

const timeline = [
  {
    year: '2017',
    title: 'Master 2 - Finance',
    company: 'Paris Nanterre',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: diplomaImg2,
    alt: 'diploma',
  },
  {
    year: '2018',
    title: 'Lazard Frères Gestion',
    company: 'Middle Office Rétrocessions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: workingFinance,
    alt: 'working',
  },
  {
    year: '2019',
    title: 'Rothschild & Co Asset Management',
    company: 'Suivi du Passif',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: workingFinance2,
    alt: 'working',
  },
  {
    year: '2024',
    title: 'Graduate Développeur Web',
    company: 'Studi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: diplomaImg,
    alt: 'diploma',
  },
  {
    year: '2025',
    title: 'Certification Udemy',
    company: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: workingImg,
    alt: 'working',
  },
];

export default function Journey() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <section
      className="relative z-20 flex min-h-screen w-full flex-col items-center justify-start py-20"
      style={{
        backgroundColor: '#AE8FDB',
      }}
    >
      <div className="sticky top-0">
        <CircularText
          text="*MON*PARCOURS"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class mb-16 text-white"
        />
      </div>

      <div className="relative w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="flex h-full flex-col gap-20">
            {timeline.map((item, index) => {
              const targetScale = 1 - (timeline.length - index) * 0.09;

              return (
                <div
                  key={item.year}
                  className="sticky top-72 flex w-full items-center justify-center gap-4 md:top-36"
                >
                  <TimelineItem
                    i={index}
                    {...item}
                    range={[index * 0.25, 1]}
                    targetScale={targetScale}
                    progress={scrollYProgress}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
