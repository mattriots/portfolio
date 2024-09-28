import React from 'react';
import ResumePage from './ResumePage';

const ResumeModal = ({ isOpen, onClose }) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
         <div className="bg-black p-6 rounded-md w-[90%] max-w-4xl">
            <button
               onClick={onClose}
               className="bg-black text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300">
               Close
            </button>
            <div className="overflow-y-auto h-[80vh] ">
               <ResumePage />
            </div>
         </div>
      </div>
   );
};

export default ResumeModal;
