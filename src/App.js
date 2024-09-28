import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import ResumePage from './components/ResumePage';

function App() {
   const [backgroundColor, setBackgroundColor] = useState('#0a192f');

   return (
      <div className="h-screen transition-all" style={{ backgroundColor: backgroundColor }}>
         <Navbar setBackgroundColor={setBackgroundColor} />
         <Home />
         <About />
         <Skills />
         <Work />
      </div>
   );
}

export default App;
