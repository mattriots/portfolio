import React from 'react';

const About = () => {
   return (
      <div name="about" className="w-full h-screen bg-inherit text-gray-300">
         <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
               <div className="sm:text-right pb-8 pl-4">
                  <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
               </div>
               <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
               <div className="sm:text-right text-4xl font-bold">
                  <p>Hi. I'm Matt</p>
               </div>
               <div>
                  <p className='text-2xl pb-4'>I am a Musician turned Software Engineer</p>
                  <p>
                     I am highly interested in the world of Full Stack Development and Devops/Cloud Infrastructure.
                     This is a portfolio site that I built using React and Tailwind CSS.
                     The goal of this page is to showcase my abilities as a developer while also
                     offering a playground for me to experiment with new technologies and projects. 
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
