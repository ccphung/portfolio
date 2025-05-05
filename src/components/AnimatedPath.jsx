import React, { useRef } from 'react';
import { useEffect } from 'react';

import { motion, useInView, useAnimation } from 'framer-motion';

function AnimatedPath() {
  const ref = useRef();
  const inView = useInView(ref, { margin: '-50% 0px', once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        pathLength: 1,
        transition: { duration: 3, ease: 'easeInOut' },
      });
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute -right-40 -top-32 z-0 h-[100vh] w-full scale-50 overflow-hidden md:-top-20 md:right-5 md:scale-125"
    >
      <svg
        className="absolute -right-[40%] bottom-0 top-20 h-screen md:-right-[5%]"
        viewBox="0 0 1002 1578"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={controls}
          d="M817.7 208.3C627.9 21.5 233 -209.3 171.2 360.9C94 1073.7 1337.9 497.4 898.8 461.3C459.7 425.2 -14.1 551.6 10.3 840.8C34.7 1129.9 660.5 1148 359.2 1376.9C118.2 1560 94 1579 112 1565"
          stroke="black"
          strokeOpacity="0.55"
          strokeWidth="10"
        />
      </svg>
    </div>
  );
}

export default AnimatedPath;
