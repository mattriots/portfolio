import React from 'react';
import {
   FaGraduationCap,
   FaBriefcase,
   FaLaptopCode,
   FaTools,
   FaProjectDiagram,
} from 'react-icons/fa';

const ResumePage = () => {
   return (
      <div className="bg-gray-100 rounded-lg p-4 md:p-8 min-h-screen text-gray-600">
         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4 md:p-6">
            {/* Header Section */}
            <div className="text-center mb-6 md:mb-8">
               <h1 className="text-2xl md:text-3xl font-bold mb-2 text-blue-800">Matt DePauw</h1>
               <p className="text-sm md:text-base">
                  <a
                     href="mailto:mattdepauw@gmail.com"
                     className="hover:text-blue-700 transition duration-300">
                     mattdepauw@gmail.com
                  </a>
               </p>
               <p className="text-sm md:text-base">805 423 4462 </p>
            </div>

            {/* Education Section */}
            <div className="mb-6 md:mb-8">
               <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center text-blue-800">
                  <FaGraduationCap className="mr-2" /> Education
               </h2>
               <div className="space-y-2 text-sm md:text-base">
                  <div>
                     <h3 className="font-semibold">B.S. Computer Science</h3>
                     <p>
                        California Polytechnic State University, San Luis Obispo, GPA: 3.69, June
                        2023
                     </p>
                     <p>Honors: Cum Laude, Dean’s List 2021-2023</p>
                  </div>
                  <div>
                     <h3 className="font-semibold">
                        A.A. Liberal Arts: Social and Behavioral Science
                     </h3>
                     <p>Cuesta College, San Luis Obispo, GPA: 3.79, May 2021</p>
                  </div>
               </div>
            </div>

            {/* Experience Section */}
            <div className="mb-6 md:mb-8">
               <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center text-blue-800">
                  <FaBriefcase className="mr-2" /> Experience
               </h2>
               <div className="space-y-4 text-sm md:text-base">
                  <div>
                     <h3 className="font-semibold">User Success Engineer</h3>
                     <p className="italic">Dassault Systèmes, November 2023 – Present</p>
                     <ul className="list-disc list-inside">
                        <li>Reduced software downtime by 20% by applying SQL queries.</li>
                        <li>Increased customer feedback by 25% through issue resolution.</li>
                        <li>Enhanced product usability, reducing customer support calls by 15%.</li>
                        <li>
                           Decreased issue resolution time by 30% by providing personalized support.
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h3 className="font-semibold">Software Engineer (Contractor)</h3>
                     <p className="italic">Co-Curator, October 2022 – November 2023</p>
                     <ul className="list-disc list-inside">
                        <li>Developed custom eCommerce solutions for major clients like SFMOMA.</li>
                        <li>Designed 5+ functional and visually stunning Shopify storefronts.</li>
                        <li>
                           Integrated APIs and managed a sizable codebase, resolving 100+ merge
                           conflicts.
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h3 className="font-semibold">Software Engineer (Intern)</h3>
                     <p className="italic">Trees.app, January 2022 - March 2022</p>
                     <ul className="list-disc list-inside">
                        <li>Programmed 5+ release-ready mobile pages using Dart and Flutter.</li>
                        <li>
                           Improved project delivery time by 20% using agile methodologies and Jira.
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Skills Section */}
            <div className="mb-6 md:mb-8">
               <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center text-blue-800">
                  <FaTools className="mr-2" /> Skills
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                  <div>
                     <h3 className="font-semibold">Languages</h3>
                     <p>Java, Python, C/C++, React, JavaScript, HTML5, CSS3, Shell, SQL</p>
                  </div>
                  <div>
                     <h3 className="font-semibold">Databases</h3>
                     <p>MySQL, SQL*Plus, MongoDB</p>
                  </div>
                  <div>
                     <h3 className="font-semibold">Tools</h3>
                     <p>Git, Docker, Postman, Visual Studio Code, IntelliJ IDEA</p>
                  </div>
                  <div>
                     <h3 className="font-semibold">Cloud</h3>
                     <p>Microsoft Azure, AWS (IAM)</p>
                  </div>
               </div>
            </div>

            {/* Projects Section */}
            <div className="mb-6 md:mb-8">
               <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center text-blue-800">
                  <FaProjectDiagram className="mr-2" /> Programming Projects
               </h2>
               <div className="space-y-4 text-sm md:text-base">
                  <div>
                     <h3 className="font-semibold">CI/CD-Enabled To-Do List App</h3>
                     <ul className="list-disc list-inside">
                        <li>
                           Created an Express.js backend, improving page load and API response times
                           significantly.
                        </li>
                        <li>
                           Utilized CI/CD pipelines on GitHub to boost developer productivity by
                           25%.
                        </li>
                        <li>Deployed the app on Microsoft Azure, ensuring 99.9% uptime.</li>
                     </ul>
                  </div>
                  <div>
                     <h3 className="font-semibold">Java Video Game Refactoring</h3>
                     <ul className="list-disc list-inside">
                        <li>
                           Refactored Java game to an OOP design, increasing maintainability by 30%.
                        </li>
                        <li>Used JUnit for unit testing, ensuring 100% code reliability.</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ResumePage;
