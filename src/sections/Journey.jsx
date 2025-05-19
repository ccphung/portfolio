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
    year: '2016',
    header: 'Master 2 - Finance',
    title: 'Paris Nanterre',
    description:
      'J’ai obtenu un Master 2 Banque, Monnaie, Marchés à l’Université Paris Nanterre avec mention. Pour mon mémoire, j’ai travaillé sur le Shadow Banking et ses effets sur la stabilité financière.',
    img: diplomaImg2,
    alt: 'diploma',
  },
  {
    year: '2017',
    header: 'Lazard Frères Gestion',
    title: 'Middle Office Rétrocessions',
    description:
      'J’ai fait une mission d’intérim de 9 mois au poste de Middle Office Rétrocessions. Je m’occupais principalement du traitement des attestations dépositaires et du calcul des commissions de rétrocessions.',
    img: workingFinance,
    alt: 'working',
  },
  {
    year: '2017',
    header: 'Rothschild & Co Asset Management',
    title: 'Gestionnaire Rétrocessions et Suivi du Passif',
    description:
      'J’ai occupé le poste de Gestionnaire Rétrocessions et Suivi du Passif pendant 5 ans. Mes missions consistaient au calcul des rétrocessions, à la gestion et à la mise en place des conventions, ainsi qu’au suivi du passif. J’ai également participé à plusieurs projets internes visant à automatiser et optimiser les processus existants.',
    img: workingFinance2,
    alt: 'working',
  },
  {
    year: '2024',
    header: 'Graduate Développeur Web',
    title: 'Studi',
    description:
      'J’ai suivi une formation diplômante chez Studi où j’ai réalisé un projet final en PHP/Symfony. J’ai obtenu le titre professionnel de Développeur Web et Web Mobile, avec des compétences full stack, ce qui m’a permis de maîtriser aussi bien le front-end que le back-end.',
    img: diplomaImg,
    alt: 'diploma',
  },
  {
    year: '2025',
    header: 'Certifications Udemy',
    title: '',
    description:
      'J’ai suivi la formation complète React de 84 heures avec Jonas Schmedtmann, où j’ai appris les Hooks, Redux, Context API, React Router, et j’ai aussi découvert Next.js en profondeur. Ensuite, j’ai complété la formation de Maximilian Schwarzmüller sur React avec TypeScript pour bien maîtriser le typage strict et la gestion d’état en React.',
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

  return (
    <section
      id="journey"
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
              const targetScale = 1 - (timeline.length - index) * 0.07;

              return (
                <div
                  key={item.year}
                  className="sticky top-9 flex w-full items-center justify-center gap-4 md:top-36"
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
