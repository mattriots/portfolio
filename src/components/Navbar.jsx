import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../assets/MD_logo_idea.png';
import ColorPickerDrop from './ColorPickerDrop';
import ResumeModal from './ResumeModal';

const Navbar = ({ setBackgroundColor }) => {
   /* Handle Clicks */
   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);

   /* Resume Modal */
   const [isModalOpen, setIsModalOpen] = useState(false);
   const openResumeModal = () => setIsModalOpen(true);
   const closeResumeModal = () => setIsModalOpen(false);

   return (
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
         <div>
            <Link to="home" smooth={true} duration={500}>
               <img src={Logo} alt="logo" className="w-14 rounded-md" />
            </Link>
         </div>
         {/* Top Right Menu */}

         <div className="hidden md:flex justify-center flex-grow">
            <ColorPickerDrop setBackgroundColor={setBackgroundColor} />
         </div>

         <ul className="hidden md:flex">
            <li className="py-6 hover:-translate-y-1 hover:text-red-400 hover:scale-110 duration-300 ">
               <Link to="home" smooth={true} duration={500}>
                  Home
               </Link>
            </li>
            <li className="py-6 hover:-translate-y-1 hover:text-orange-300 hover:scale-110 duration-300">
               <Link to="about" smooth={true} duration={500}>
                  About
               </Link>
            </li>
            <li className="py-6 hover:-translate-y-1 hover:text-yellow-300 hover:scale-110 duration-300">
               {' '}
               <Link to="skills" smooth={true} duration={500}>
                  Skills
               </Link>
            </li>
            <li className="py-6 hover:-translate-y-1 hover:text-green-500 hover:scale-110 duration-300 ">
               {' '}
               <Link to="experience" smooth={true} duration={500}>
                  Experience
               </Link>
            </li>
            <li className="py-6 hover:-translate-y-1 hover:text-blue-500 hover:scale-110 duration-300">
               {' '}
               <Link to="projects" smooth={true} duration={500}>
                  Projects
               </Link>
            </li>
            <li className="py-6 hover:-translate-y-1 hover:text-indigo-500 hover:scale-110 duration-300 ">
               {' '}
               <Link to="contact" smooth={true} duration={500}>
                  Contact
               </Link>
            </li>
         </ul>

         {/* Hamburger */}
         <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
         </div>
         <div
            className={
               !nav
                  ? 'hidden'
                  : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }>
            {/* Mobile Menu */}
            <ul className="flex flex-col justify-center items-center">
               <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                     Home
                  </Link>
               </li>
               <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                     About
                  </Link>
               </li>
               <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                     Skills
                  </Link>
               </li>
               <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
                     Experience
                  </Link>
               </li>
               <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                     Projects
                  </Link>
               </li>
               <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                     Contact
                  </Link>
               </li>
            </ul>
            <div className="absolute bottom-0 left-0 w-full flex items-center p-4 bg-[#0a192f]">
               <ul className="flex justify-evenly items-center w-full mx-10">
                  <li className="w-14 h-14 flex justify-center items-center  bg-blue-600 rounded-md">
                     <a
                        className="flex justify-center items-center w-full text-gray-300"
                        href="https://www.linkedin.com/in/matt-depauw/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin size={20} />
                     </a>
                  </li>
                  <li className="w-14 h-14 flex justify-center items-center  bg-[#333333] rounded-md">
                     <a
                        className="flex justify-center items-center w-full text-gray-300"
                        href="https://www.github.com/mattriots"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub size={20} />
                     </a>
                  </li>
                  <li className="w-14 h-14 flex justify-center items-center  bg-[#6fc2b0] rounded-md">
                     <a
                        className="flex justify-center items-center w-full text-gray-300"
                        href="mailto:mattdepauw@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        <HiOutlineMail size={20} />
                     </a>
                  </li>
                  <li
                     className="w-14 h-14 flex justify-center items-center  bg-[#565f69] rounded-md"
                     onClick={openResumeModal}>
                     <div className="flex justify-center items-center w-full text-gray-300">
                        <BsFillPersonLinesFill size={20} />
                     </div>
                  </li>
               </ul>
            </div>
         </div>

         {/* Social on left side*/}
         <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
               <li className="w-[160px] h-[60px] rounded-md flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                  <a
                     className="flex justify-between items-center w-full text-gray-300"
                     href="https://www.linkedin.com/in/matt-depauw/"
                     target="_blank"
                     rel="noopener noreferrer">
                     Linkedin <FaLinkedin size={30} />
                  </a>
               </li>
               <li className="w-[160px] h-[60px] rounded-md  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                  <a
                     className="flex justify-between items-center w-full text-gray-300"
                     href="https://www.github.com/mattriots"
                     target="_blank"
                     rel="noopener noreferrer">
                     Github <FaGithub size={30} />
                  </a>
               </li>
               <li className="w-[160px] h-[60px] rounded-md  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                  <a
                     className="flex justify-between items-center w-full text-gray-300"
                     href="mailto:mattdepauw@gmail.com"
                     target="_blank"
                     rel="noopener noreferrer">
                     Email <HiOutlineMail size={30} />
                  </a>
               </li>
               <li
                  className="w-[160px] h-[60px] rounded-md  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]"
                  onClick={openResumeModal}>
                  <div className="flex justify-between items-center w-full text-gray-300">
                     Resume <BsFillPersonLinesFill size={30} />
                  </div>
               </li>
            </ul>
         </div>
         <ResumeModal isOpen={isModalOpen} onClose={closeResumeModal} />
      </div>
   );
};

export default Navbar;
