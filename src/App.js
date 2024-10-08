import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
   const [backgroundColor, setBackgroundColor] = useState('#0a192f');

   return (
      <div className="w-full min-h-screen" style={{ backgroundColor: backgroundColor }}>
         <Navbar setBackgroundColor={setBackgroundColor} />
         <Home />
         <About />
         <Projects />
         <Work />
         <Experience />
         <Skills />
         <Footer />
      </div>
   );
}

export default App;
