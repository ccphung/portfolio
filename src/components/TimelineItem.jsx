import React from 'react';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/16/solid';

const stylesByIndex = [
  { scale: 1, y: '0px', zIndex: 30, opacity: 1, blur: '0px' },
  { scale: 0.9, y: '40px', zIndex: 20, opacity: 0.7, blur: '5px' },
  { scale: 0.8, y: '80px', zIndex: 10, opacity: 0.4, blur: '10px' },
];

const TimelineItem = ({
  year,
  title,
  company,
  description,
  index,
  img,
  alt,
  animated = false,
  transitionIn = true,
}) => {
  const style = stylesByIndex[index] || stylesByIndex[2];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['10deg', '-10deg']);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      key={year}
      initial={animated ? { opacity: 0, x: -100, scale: 0.8 } : false}
      animate={{
        opacity: style.opacity,
        x: 0,
        y: style.y,
        scale: style.scale,
        filter: `blur(${transitionIn ? '0px' : style.blur})`,
      }}
      exit={
        animated
          ? { opacity: 0, x: 100, transition: { duration: 0.4 } }
          : undefined
      }
      transition={{
        duration: 0.6,
        filter: 'blur(0.4s)',
      }}
      className="absolute left-0 top-0 flex h-[27rem] w-full flex-col overflow-hidden rounded-3xl bg-[#2f5e75] shadow-lg"
      style={{
        zIndex: style.zIndex,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mt-9 text-center">
        <p className="text-xl font-semibold text-white">{year}</p>
        <p className="font-semibold text-white">{title}</p>
      </div>

      <div className="mt-2 px-4 text-center text-sm">
        <p className="text-white">{company}</p>
        <p className="mt-2 text-white">{description}</p>
      </div>

      <img
        src={img}
        alt={alt}
        className="absolute bottom-0 right-0 z-10 w-44 opacity-80"
      />
      <div className="absolute -bottom-52 -right-32 z-0 h-96 w-96 rounded-full bg-[#527c91]" />

      <div className="absolute right-3 top-2 z-10 h-10 w-10 rounded-full bg-gray-500 p-2 text-xl text-white">
        <ArrowRightIcon />
      </div>
    </motion.div>
  );
};

export default TimelineItem;
