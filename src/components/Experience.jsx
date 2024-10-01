import React, { useState } from 'react';
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
      <div name="experience" className="w-full h-screen bg-inherit text-gray-300">
         <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Experience</h1>
            <div className="relative border-l border-gray-300">
               {experiences.map((experience, index) => (
                  <div key={index} className="mb-8 ml-4 bg-white rounded-md text-black relative">
                     {/* Display Dates on the Left */}
                     <div className="hidden md:block md:absolute -left-32 top-4 text-gray-400 text-sm w-28">
                        {experience.dates}
                     </div>

                     {/* Timeline Marker */}
                     <div className="absolute -left-3 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <FaCircle className="text-white" size={12} />
                     </div>

                     {/* Experience Card */}
                     <div
                        className={`p-4 rounded-lg shadow-md cursor-pointer hover:bg-opacity-50 transition duration-300 ${
                           openCard === index ? 'bg-opacity-50' : ''
                        }`}
                        onClick={() => handleToggle(index)}>
                        <div className="flex justify-between items-center">
                           <div>
                              <h2 className="text-lg font-bold">{experience.role}</h2>
                              <p className="italic text-gray-500">{experience.company}</p>
                           </div>
                           <div>
                              {openCard === index ? (
                                 <span className="text-xl">−</span>
                              ) : (
                                 <span className="text-xl">+</span>
                              )}
                           </div>
                        </div>
                        {openCard === index && (
                           <div className="mt-4">
                              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                                 {experience.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                 ))}
                              </ul>
                           </div>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ExperienceTimeline;
