import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quote = 'Code is like humor. When you have to explain it, it’s bad.';
const author = '— Cory House';

export default function Hello() {
  const [visibleWords, setVisibleWords] = useState(0);
  const [showAuthor, setShowAuthor] = useState(false);
  const [hide, setHide] = useState(false);

  const words = quote.split(' ');

  useEffect(() => {
    if (visibleWords < words.length) {
      const timer = setTimeout(() => setVisibleWords((prev) => prev + 1), 200);
      return () => clearTimeout(timer);
    } else {
      const authorTimer = setTimeout(() => setShowAuthor(true), 1000);
      const hideTimer = setTimeout(() => setHide(true), 3000);
      return () => {
        clearTimeout(authorTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [visibleWords]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          initial={{ height: '100vh' }}
          animate={{ height: '100vh' }}
          exit={{ height: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center overflow-hidden bg-black"
        >
          <div className="flex flex-wrap justify-center text-2xl text-white md:text-4xl">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="mr-2 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: index < visibleWords ? 1 : 0,
                  y: index < visibleWords ? 0 : 30,
                  filter:
                    index < visibleWords
                      ? 'blur(0px)'
                      : `blur(${(index + 1) * 2}px)`,
                }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {showAuthor && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-4 text-sm text-gray-400"
            >
              {author}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
