import React, { useState } from 'react';
import About from './components/About';
import ColorPicker from './components/ColorPicker';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
   const [backgroundColor, setBackgroundColor] = useState('#ffffff');

   return (
      <div className="h-screen transition-all" style={{ backgroundColor: backgroundColor}}>
         <Navbar />
         <ColorPicker setBackgroundColor={setBackgroundColor} />
         <Home />
         <About />
         <Skills />
         <Work />
      </div>
   );
}

export default App;
