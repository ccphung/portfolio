import React, { useRef } from 'react';

import Hello from './components/Hello';
import Navbar from './components/Navbar';
import About from './sections/About';
import Header from './sections/Header';
import Journey from './sections/Journey';
import Projects from './sections/Projects';
import { useScroll } from 'framer-motion';
import AnimatedPath from './components/AnimatedPath';

function App() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="relative">
      {/* <Hello /> */}
      <Navbar />
      <Header />
      <About scrollDown={scrollYProgress} />
      <div ref={container} className="relative h-[200vh]">
        <Projects scrollDown={scrollYProgress} />
        <Journey scrollDown={scrollYProgress} />
      </div>
    </div>
  );
}

export default App;
