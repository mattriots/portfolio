import React from 'react';
import WorkImg from '../assets/projects/workImg.jpeg';
import NSOM from '../assets/projects/nsom_cover.jpg';
import LOGO from '../assets/MD_logo_idea.png';

const Projects = () => {
   return (
      <div name="projects" className="w-full min-h-screen text-gray-300 bg-inherit">
         <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                  Projects
               </p>
               <p className="py-6">// Projects I have worked on</p>
            </div>
            {/* Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
               {/* Grid item */}
               <div
                  style={{ backgroundImage: `url(${NSOM})` }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:-translate-y-2 hover:scale-105 duration-500">
                  {/* Hover FX */}
                  <div className="text-center opacity-0 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wider">
                        Night Riots Website
                     </span>

                     <div className="pt-8 text-center">
                        <a
                           href="https://www.nightriots.com/"
                           target="_blank"
                           rel="noopener noreferrer">
                           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                              Link
                           </button>
                        </a>
                        <a
                           href="https://github.com/mattriots/nightriots"
                           target="_blank"
                           rel="noopener noreferrer">
                           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                              Code
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
               {/* Grid item */}
               <div
                  style={{ backgroundImage: `url(${LOGO})` }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:-translate-y-2 hover:scale-105 duration-500">
                  {/* Hover FX */}
                  <div className="text-center opacity-0 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wider">Portfolio</span>
                     <div className="pt-8 text-center">
                        <a href="/">
                           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                              Link
                           </button>
                        </a>
                        <a
                           href="https://github.com/mattriots/portfolio"
                           target="_blank"
                           rel="noopener noreferrer">
                           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                              Code
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
               {/* Grid item */}
            </div>
         </div>
      </div>
   );
};

export default Projects;
