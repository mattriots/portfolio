import React from 'react';

const ResumePage = () => {
   return (
      <div className="bg-gray-100 min-h-screen p-8 text-gray-600">
         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            {/* Header Section */}
            <div className="text-center mb-8">
               <h1 className="text-3xl font-bold mb-2">Matt DePauw</h1>
               <p>
                  mattdepauw@gmail.com | 805 423 4462 |{' '}
                  <a
                     href="https://linkedin.com/in/matt-depauw"
                     className="text-blue-500 hover:underline"
                     target="_blank"
                     rel="noopener noreferrer">
                     LinkedIn
                  </a>
               </p>
            </div>

            {/* Education Section */}
            <div className="mb-6">
               <h2 className="text-xl font-bold mb-2">Education</h2>
               <div className="space-y-2">
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
            <div className="mb-6">
               <h2 className="text-xl font-bold mb-2">Experience</h2>
               <div className="space-y-4">
                  <div>
                     <h3 className="font-semibold">User Success Engineer</h3>
                     <p className="italic">Dassault Systèmes, November 2023 – Present</p>
                     <ul className="list-disc list-inside">
                        <li>
                           Applied SQL queries to detect and remove bugs, reducing software downtime
                           by 20%.
                        </li>
                        <li>
                           Increased positive customer feedback by 25% through effective issue
                           resolution.
                        </li>
                        <li>
                           Enhanced product usability, leading to a 15% decrease in customer support
                           calls.
                        </li>
                        <li>
                           Reduced issue resolution time by 30%, providing personalized support.
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h3 className="font-semibold">Software Engineer (Contractor)</h3>
                     <p className="italic">Co-Curator, October 2022 – November 2023</p>
                     <ul className="list-disc list-inside">
                        <li>
                           Developed custom eCommerce solutions for major clients like SFMOMA and
                           Boarderie.
                        </li>
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
            <div className="mb-6">
               <h2 className="text-xl font-bold mb-2">Skills</h2>
               <div className="grid grid-cols-2 gap-4">
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
            <div className="mb-6">
               <h2 className="text-xl font-bold mb-2">Programming Projects</h2>
               <div>
                  <h3 className="font-semibold">CI/CD-Enabled To-Do List App</h3>
                  <ul className="list-disc list-inside">
                     <li>
                        Created an Express.js backend, improving page load and API response times
                        significantly.
                     </li>
                     <li>
                        Utilized CI/CD pipelines on GitHub to boost developer productivity by 25%.
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
   );
};

export default ResumePage;
