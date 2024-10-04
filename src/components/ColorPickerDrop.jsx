import React, { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ColorPickerDropdown = ({ setBackgroundColor }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [color, setColor] = useState('#0a192f');
   const dropdownRef = useRef(null);

   const toggleDropdown = () => setIsOpen(!isOpen);

   const handleColorChange = (newColor) => {
      setColor(newColor);
      setBackgroundColor(newColor);
   };

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [dropdownRef]);

   return (
      <div className="relative inline-block text-left" ref={dropdownRef}>
         <div>
            <button
               type="button"
               className="inline-flex justify-center items-center h-10 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200"
               onClick={toggleDropdown}>
               <div
                  className="w-6 h-6 rounded-full mr-2 border-2 border-white"
                  style={{ backgroundColor: color }}></div>
              <span className='hidden md:block '>Color</span>
               {isOpen ? (
                  <ChevronUp className="ml-2 h-7 w-7" />
               ) : (
                  <ChevronDown className="ml-2 h-7 w-7" />
               )}
            </button>
         </div>

         {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
               <div className="p-4">
                  <HexColorPicker color={color} onChange={handleColorChange} />
               </div>
            </div>
         )}
      </div>
   );
};

export default ColorPickerDropdown;
