import React from 'react';
import NSOM from '../assets/projects/nsom_cover.jpg';
import FAMSF from '../assets/work/famsf.png';
import Board from '../assets/work/boarderie.jpg';
import BBQRubs from '../assets/work/bbqrubs.jpg';

const ClientWork = () => {
   return (
      <div name="work" className="w-full min-h-screen text-gray-300 bg-inherit">
         <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                  Work
               </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               <div
                  style={{
                     backgroundImage: `url(${FAMSF})`,
                     backgroundSize: 'contain', // Adjusts the size of the image
                     backgroundRepeat: 'no-repeat', // Prevents image from repeating
                     backgroundPosition: 'center', // Centers the image
                  }}
                  className="shadow-lg shadow-[#040c16] bg-white group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500">
                  <div className="text-center opacity-0 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wider">FAMSF</span>

                     <div className="pt-8 text-center">
                        <a href="https://www.famsf.org/" target="_blank" rel="noopener noreferrer">
                           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                              Link
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
               <div
                  style={{ backgroundImage: `url(${Board})` }}
                  className="shadow-lg shadow-[#040c16]  group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500">
                  <div className="text-center opacity-0 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wider">Boarderie</span>

                     <div className="pt-8 text-center">
                        <a href=" https://boarderie.com/" target="_blank" rel="noopener noreferrer">
                           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                              Link
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
               <div
                  style={{
                     backgroundImage: `url(${BBQRubs})`,
                     backgroundSize: 'contain', // Adjusts the size of the image
                     backgroundRepeat: 'no-repeat', // Prevents image from repeating
                     backgroundPosition: 'center', // Centers the image
                  }}
                  className="shadow-lg shadow-[#040c16] bg-white group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500">
                  <div className="text-center opacity-0 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wider">BBQ Rubs</span>

                     <div className="pt-8 text-center">
                        <a
                           href="https://www.bbqrubs.com/"
                           target="_blank"
                           rel="noopener noreferrer">
                           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                              Link
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ClientWork;
