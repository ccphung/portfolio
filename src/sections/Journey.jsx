import React, { useRef } from 'react';
import CircularText from '../components/CircularText';
import TimelineItem from '../components/TimelineItem';
import { useScroll } from 'framer-motion';
import diplomaImg from '../assets/images/journey/diploma.png';
import diplomaImg2 from '../assets/images/journey/diploma2.png';
import workingFinance from '../assets/images/journey/working-office.png';
import workingFinance2 from '../assets/images/journey/working-office2.png';
import workingImg from '../assets/images/journey/working.png';
import { useTranslation } from 'react-i18next';

export default function Journey() {
  const { t } = useTranslation('common');
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const timeline = [
    {
      year: '2016',
      header: t('journey.master'),
      title: 'Paris Nanterre',
      description: t('journey.masterDesc'),
      img: diplomaImg2,
      alt: 'diploma',
    },
    {
      year: '2017',
      header: t('journey.lazard'),
      title: 'Middle Office Rétrocessions',
      description: t('journey.lazardDesc'),
      img: workingFinance,
      alt: 'working',
    },
    {
      year: '2017',
      header: t('journey.rothschild'),
      title: 'Gestionnaire Rétrocessions et Suivi du Passif',
      description: t('journey.rothschildDesc'),
      img: workingFinance2,
      alt: 'working',
    },
    {
      year: '2024',
      header: t('journey.studi'),
      title: 'Studi',
      description: t('journey.studiDesc'),
      img: diplomaImg,
      alt: 'diploma',
    },
    {
      year: '2025',
      header: t('journey.udemy'),
      title: '',
      description: t('journey.udemyDesc'),
      img: workingImg,
      alt: 'working',
    },
    {
      year: '2025',
      header: t('journey.freelance'),
      title: 'Shopify / Next.js Commerce',
      description: t('journey.freelanceDesc'),
      img: workingImg,
      alt: 'e-commerce',
    },
  ];

  return (
    <section
      id="journey"
      className="relative z-20 flex min-h-screen w-full flex-col items-center justify-start py-20"
      style={{ backgroundColor: '#AE8FDB' }}
    >
      <div className="sticky top-0">
        <CircularText
          text={t('journey.circularText')}
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
