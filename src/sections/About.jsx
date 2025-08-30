import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AboutItem from '../components/AboutItem';
import Laptop from '../components/Laptop';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation('common');
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, threshold: 0.5 });

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
              {t('aboutMe.title')}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="text-xl text-gray-600"
            >
              {t('aboutMe.description')}
            </motion.p>
          </div>
          <AboutItem />
        </div>
      </div>
      <Laptop />
    </motion.section>
  );
}
