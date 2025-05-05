import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quote = 'Code is like humor. When you have to explain it, it’s bad.';
const author = '— Cory House';

function Hello() {
  const words = quote.split(' ');
  const [visibleWords, setVisibleWords] = useState(0);
  const [startBlur, setStartBlur] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (visibleWords < words.length) {
      const timer = setTimeout(() => setVisibleWords((prev) => prev + 1), 200);
      return () => clearTimeout(timer);
    } else {
      const blurTimer = setTimeout(() => setStartBlur(true), 1000);
      return () => clearTimeout(blurTimer);
    }
  }, [visibleWords]);

  useEffect(() => {
    if (startBlur) {
      const hideTimer = setTimeout(() => setHide(true), 2000);
      return () => clearTimeout(hideTimer);
    }
  }, [startBlur]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          initial={{ height: '100vh' }}
          animate={{ height: hide ? '0vh' : '100vh' }}
          transition={{ duration: 1 }}
          className="z-10 flex flex-col items-center justify-center overflow-hidden bg-black"
        >
          <div className="flex flex-wrap justify-center text-2xl text-white md:text-4xl">
            {words.map((word, index) => {
              const isVisible = index < visibleWords;
              return (
                <motion.span
                  key={index}
                  className="mr-2 inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible
                      ? {
                          opacity: 1,
                          y: 0,
                          filter: 'blur(0px)',
                        }
                      : {
                          opacity: 0,
                          filter: `blur(${(index + 1) * 2}px)`,
                          y: 30,
                        }
                  }
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={startBlur ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            rapidement
            className="mt-4 text-sm text-gray-400"
          >
            {author}
          </motion.p>
        </motion.div>
      )}

      {hide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0,
            y: 30,
            height: '0vh',
          }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center justify-center overflow-hidden bg-black"
        >
          <div className="flex flex-wrap justify-center text-2xl text-white md:text-4xl">
            {words.map((word, index) => {
              return (
                <motion.span
                  key={index}
                  className="mr-2 inline-block"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0,
                    y: 30,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.08,
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0,
              y: 30,
            }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-sm text-gray-400"
          >
            {author}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Hello;
