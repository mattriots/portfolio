import React, { useEffect, useRef } from 'react';
import ResumePage from './ResumePage';

const ResumeModal = ({ isOpen, onClose }) => {
   const modalRef = useRef(null);

   // Detect outside click
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose(); // Close the modal if clicked outside
         }
      };

      // Add event listener for mouse clicks
      if (isOpen) {
         document.addEventListener('mousedown', handleClickOutside);
      }

      // Cleanup the event listener when modal is closed
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [isOpen, onClose]);

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
         <div
            ref={modalRef}
            className="relative bg-black p-6 rounded-lg w-[100%] max-w-4xl md:w-[95%] md:h-[90vh] h-[95vh] shadow-lg overflow-hidden">
            <div className='flex justify-between items-center'>
               <div></div>
               <button
                  onClick={onClose}
                  className=" bg-black text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300">
                  Close
               </button>
            </div>
            <div className="overflow-y-auto h-[80vh] ">
               <ResumePage />
            </div>
         </div>
      </div>
   );
};

export default ResumeModal;
