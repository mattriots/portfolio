import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import Node from '../assets/node.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Github from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import Docker from '../assets/docker.png';
import Java from '../assets/java.png';
import Python from  '../assets/python.png';
import SQL from '../assets/sql.png';

const Skills = () => {
   return (
      <div name="skills" className="w-full min-h-screen text-gray-300 bg-inherit">
         {/* Container */}
         <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
               <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Skills</p>
            </div>

            <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8">
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                  <p className="my-4">HTML</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={CSS} alt="CSS" />
                  <p className="my-4">CSS</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={JS} alt="Javascript" />
                  <p className="my-4">JAVASCRIPT</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={ReactImg} alt="React" />
                  <p className="my-4">REACT</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={Github} alt="Github" />
                  <p className="my-4">GITHUB</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={Node} alt="Node" />
                  <p className="my-4">NODE</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind" />
                  <p className="my-4">TAILWIND</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={Mongo} alt="Mongo" />
                  <p className="my-4">MONGO DB</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto mt-4" src={Docker} alt="Docker" />
                  <p className="my-5">DOCKER</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto mt-1 " src={Java} alt="Java" />
                  <p className="my-3">JAVA</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto mt-1 " src={Python} alt="Python" />
                  <p className="my-3">PYTHON</p>
               </div>
               <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="h-16 mx-auto mt-3 " src={SQL} alt="SQL" />
                  <p className="mt-5">SQL</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
