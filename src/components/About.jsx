import React from 'react';

const About = () => {
   return (
      <div name="about" className="w-full h-screen bg-inherit text-gray-300">
         <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full">
               <div className="pb-8 pl-4">
                  <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
               </div>
               <div></div>
            </div>
            <div className="max-w-[1000px] w-full px-4 py-8 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-opacity-80 rounded-lg shadow-lg text-white">
               <div className="text-4xl font-bold mb-6">
                  <p>Hi - I am Matt</p>
               </div>

               <div>
                  <p className="text-2xl pb-4 font-semibold text-yellow-300">
                     A Musician turned Software Engineer
                  </p>
                  <p className="mb-4">
                     I am highly interested in the world of{' '}
                     <span className="text-pink-200 font-bold">Full Stack Development</span> and
                     <span className="text-purple-200 font-bold">DevOps/Cloud Infrastructure</span>.
                  </p>
                  <p className="mb-4">
                     This is a simple portfolio site that I built using React and Tailwind CSS.
                  </p>
                  <p>
                     The goal of this page is to{' '}
                     <span className="font-bold text-purple-300">showcase my experience</span> as
                     well as offer a place for me to experiment on projects.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
