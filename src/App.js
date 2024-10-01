import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResumePage from './components/ResumePage';

function App() {
   const [backgroundColor, setBackgroundColor] = useState('#0a192f');

   return (
      <div className="h-screen transition-all" style={{ backgroundColor: backgroundColor }}>
         <Navbar setBackgroundColor={setBackgroundColor} />
         <Home />
         <About />
         {/* <Skills /> */}
         <Projects />
      </div>
   );
}

export default App;
