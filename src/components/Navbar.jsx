import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../assets/MD_logo_idea.png';
import ColorPickerDrop from './ColorPickerDrop';

const Navbar = ({ setBackgroundColor }) => {
   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);
   return (
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
         <div>
            <Link to="home" smooth={true} duration={500}>
               <img src={Logo} alt="logo" className="w-14 rounded-md" />
            </Link>
         </div>
         {/* menu */}

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

         {/* Mobile Menu */}
         <ul
            className={
               !nav
                  ? 'hidden'
                  : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }>
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

         {/* Social */}
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
               <li className="w-[160px] h-[60px] rounded-md  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                  <a
                     className="flex justify-between items-center w-full text-gray-300"
                     href="change this"
                     target="_blank"
                     rel="noopener noreferrer">
                     Resume <BsFillPersonLinesFill size={30} />
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
