import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

function ColorPicker({ setBackgroundColor }) {
   const handleChangeComplete = (color) => {
      console.log('Selected color:', color);
      setBackgroundColor(color);
   };

   return (
      <div className="h-screen flex justify-center items-center">
         <div className="p-4 bg-white rounded-lg shadow-xl">
            <h1 className="text-xl font-bold mb-4 text-gray-800">Pick a color</h1>
            <HexColorPicker onChange={handleChangeComplete} />
         </div>
      </div>
   );
}

export default ColorPicker;
