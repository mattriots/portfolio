import React, { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';

const experiences = [
   {
      role: 'User Success Engineer',
      company: 'Dassault Systèmes',
      dates: 'November 2023 – Present',
      description: [
         'Applied SQL queries to detect and remove bugs, reducing software downtime by 20%.',
         'Increased customer feedback by 25% through effective issue resolution.',
         'Enhanced product usability, reducing customer support calls by 15%.',
         'Decreased issue resolution time by 30% by providing personalized support.',
      ],
   },
   {
      role: 'Software Engineer (Contractor)',
      company: 'Co-Curator',
      dates: 'October 2022 – November 2023',
      description: [
         'Developed custom eCommerce solutions for major clients like SFMOMA and Boarderie.',
         'Designed 5+ functional and visually stunning Shopify storefronts.',
         'Integrated APIs and managed a sizable codebase, resolving 100+ merge conflicts.',
      ],
   },
   {
      role: 'Software Engineer Intern',
      company: 'Trees.app',
      dates: 'January 2022 – March 2022',
      description: [
         'Programmed 5+ release-ready mobile pages using Google’s Dart and Flutter languages.',
         'Implemented agile methodologies and Jira software, improving project delivery time by 20%.',
         'Collaborated with senior developers on 2 multi-sprint development projects, actively contributing to the version control process with 20+ commits on GitHub.',
      ],
   },
   {
      role: 'Co-Founder',
      company: 'Night Riots LLC',
      dates: 'January 2010 – January 2020',
      description: [
         'Established Night Riots as a successful alternative rock band, selling 50,000 records worldwide.',
         'Planned and executed 10 national/international tours with teams of up to 50 people.',
         'Coordinated financial flow between band, manager, employees, and label, maintaining profitability throughout a 10-year period.',
      ],
   },
];

const ExperienceTimeline = () => {
   const [openCard, setOpenCard] = useState(null);

   const handleToggle = (index) => {
      setOpenCard(openCard === index ? null : index);
   };

   return (
      <div name="experience" className="w-full min-h-screen bg-inherit text-gray-300">
         <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                  Experience
               </p>
            </div>
            {/* Stacked timeline format */}
            <div className="">
               {experiences.map((experience, index) => (
                  <div
                     key={index}
                     id={`experience-card-${index}`}
                     className={`relative bg-white rounded-md text-black shadow-lg p-4 mb-8 cursor-pointer transition-all duration-300 mx-auto ${
                        openCard === index ? 'h-auto w-full max-w-4xl' : 'h-32 w-full max-w-md'
                     }`}
                     onClick={() => handleToggle(index)}
                     style={{ zIndex: openCard === index ? 10 : 1 }}>
                     {/* Timeline Marker */}
                     <div className="hidden md:absolute -left-8 top-6 w-6 h-6 rounded-full bg-blue-500 md:flex items-center justify-center">
                        <FaCircle className="text-white" size={12} />
                     </div>

                     {/* Experience Card Content */}
                     <div className="flex justify-between items-center">
                        <div>
                           <h2 className="text-lg font-bold">{experience.role}</h2>
                           <p className="italic text-gray-500">{experience.company}</p>
                        </div>
                        <div>
                           {openCard === index ? (
                              <span className="text-2xl">−</span>
                           ) : (
                              <span className="text-2xl">+</span>
                           )}
                        </div>
                     </div>
                     {openCard === index && (
                        <div className="mt-4">
                           <p className="text-gray-400 mb-2">{experience.dates}</p>
                           <ul className="list-disc pl-5 space-y-2 text-md text-gray-600">
                              {experience.description.map((desc, i) => (
                                 <li key={i}>{desc}</li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ExperienceTimeline;
