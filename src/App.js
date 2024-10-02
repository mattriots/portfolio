import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
   const [backgroundColor, setBackgroundColor] = useState('#0a192f');

   return (
      <div className="w-full min-h-screen" style={{ backgroundColor: backgroundColor }}>
         <Navbar setBackgroundColor={setBackgroundColor} />
         <Home />
         <About />
         <Projects />
         <Experience />
         <Skills />
      </div>
   );
}

export default App;
