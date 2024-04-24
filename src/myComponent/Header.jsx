import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu ,AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-scroll';
function Header() {
   // State to manage the navbar's visibility
   const [nav, setNav] = useState(false);

   // Toggle function to handle the navbar's display
   const handleNav = () => {
     setNav(!nav);
   };
 
   // Array containing navigation items
   const navItems = [
     { id: 1, text: 'HOME',toLink:'' },
     { id: 2, text: 'ABOUT',toLink:'about' },
     { id: 3, text: 'PROJECTS',toLink:'projects' },
     { id: 4, text: 'CONTACT',toLink:'contact'},
   ];
    return (
      <div className='bg-white flex justify-between items-center h-24 max-w-auto mx-auto lg:px-20 px-8 text-white'>
      {/* Logo */}
      <h1 className='basis-1/4 text-3xl font-bold text-[#00df9a]'>KARAN.</h1>

      {/* Desktop Navigation */}
      <div className='hidden md:flex '>    
      <ul className='md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 font-bold text-black rounded-xl m-2 cursor-pointer duration-300 hover:text-[#00df9a]'
          >
             <Link
            activeClass="active"
            to={item.toLink}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >{item.text}</Link>
            
          </li>
        ))}
      </ul>
      <div className='md:flex text-black p-4 gap-4 '>
        <div className='m-2 hover:text-[#00df9a]'>
        <a href="https://www.instagram.com/karan_sing12/" target="_blank" rel="noopener noreferrer" >
      <BsInstagram size={25}/>
    </a>
        </div>
        <div className='m-2 hover:text-[#00df9a]'>
        <a href="https://www.linkedin.com/in/karan-singh-34bb13236/" target="_blank" rel="noopener noreferrer" >
        <AiFillLinkedin size={25}/>
        </a>
        </div>
        <div className='m-2 hover:text-[#00df9a]'>
        <a href="https://github.com/Karan93066" target="_blank" rel="noopener noreferrer" >
        <AiFillGithub size={25}/>
        </a>
        </div>
      </div>
      </div>
     
     
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>KARAN.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl duration-300 hover:text-[#00df9a] cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
       <div className='flex flex-row p-4 '>
        <div className='m-2 cursor-pointer'>
        <a href="https://www.instagram.com/karan_sing12/" target="_blank" rel="noopener noreferrer" >
      <BsInstagram size={25}/>
    </a>
        </div>
        <div className='m-2 cursor-pointer'>
        <a href="https://www.linkedin.com/in/karan-singh-34bb13236/" target="_blank" rel="noopener noreferrer" >
        <AiFillLinkedin size={25}/>
        </a>
        </div>
        <div className='m-2 cursor-pointer'>
        <a href="https://github.com/Karan93066" target="_blank" rel="noopener noreferrer" >
        <AiFillGithub size={25}/>
        </a>
        </div>
      </div>
      </ul>
      
    </div>

    );
}

export default Header;