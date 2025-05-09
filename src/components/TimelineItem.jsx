import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function TimelineItem({
  title,
  company,
  description,
  img,
  alt,
  i,
  progress,
  range,
  targetScale,
  year,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ scale, marginTop: `${i * +40}px` }}
    >
      <div className="group relative flex w-full max-w-xl flex-col justify-between rounded-xl border-2 border-[#323232] bg-gray-200 shadow-[4px_4px_0_#323232]">
        <h3 className="border-b-2 border-[#323232] p-4 pb-1 text-2xl font-semibold text-[#323232]">
          <span className="text-4xl">{year} </span> {title}
        </h3>
        <p className="px-6 pt-3 text-lg font-medium text-[#323232]">
          {company}
        </p>
        {description && (
          <p className="mt-2 px-6 text-lg text-[#323232]">{description}</p>
        )}
        <div className="flex justify-end">
          <motion.div className="h-32 w-32 p-1" style={{ imageScale }}>
            <img
              src={img}
              alt={alt}
              className="h-full w-full rounded-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
