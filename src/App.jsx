import React from 'react';

import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import About from './sections/About';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Journey from './sections/Journey';
import Projects from './sections/Projects';
import Hello from './sections/Hello';

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Hello />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Journey />
      <Footer />
    </div>
  );
}

export default App;
