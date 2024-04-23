import React from 'react';
import { AiOutlineClose, AiOutlineMenu ,AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import { BsInstagram } from "react-icons/bs";
function Footer() {
    return (
        <div className="bg-black">
            <div className="flex px-60 py-8">
               <div className="basis-1/2">
                <h1 className=' text-3xl font-bold text-[#00df9a]'>KARAN.</h1>
                <p className="py-8 text-white">
                A Frontend focused Web Developer building the Frontend of Websites and Web 
                Applications that leads to the success of the overall product
                </p>
               </div>
               <div className="basis-1/2">
                <div>
                <h1 className=' text-3xl text-right font-bold text-[#ffffff]'>Socials</h1>
                </div>
               <div className='flex flex-row gap-4 py-4 text-[#ffffff] justify-end'>
        <div className='m-2 cursor-pointer '>
        <BsInstagram size={30}/>
        </div>
        <div className='m-2 cursor-pointer'>
        <AiFillLinkedin size={30}/>
        </div>
        <div className='m-2 cursor-pointer'>
        <AiFillGithub size={30}/>
        </div>
      </div>
               </div>
            </div>
            <hr className="text-white w-[70%] h-1 pt-2 pb-2 mx-auto"/>
            <div>
                <p className="text-white text-center pb-12">© Copyright 2024 . Made by KARAN</p>
            </div>
        </div>
    );
}

export default Footer;