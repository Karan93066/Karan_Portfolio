import React from 'react';
import { Link } from 'react-scroll';
function Banner() {
    return (
        <div className="bg-[url('/common-bg.svg')] lg:py-20 lg:h-[700px] py-20">
            <h1 className="lg:text-6xl text-3xl font-bold text-center lg:mt-16">HEY, I'M KARAN</h1>
            <div className="lg:py-12 py-8">
            <p className="lg:text-xl text-large font-large text-center lg:px-80">
            A Result-Oriented Web Developer building and managing Websites and Web Applications 
            that leads to the success of the overall product
            </p>
            </div>
            <div className='text-center lg:py-10 py-6'>
              <button class="bg-[#767676] hover:bg-[#5a5c5b] text-[#60c1a2] mx-auto rounded-xl py-5 px-10 text-2xl font-semibold">
              <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Projects</Link>
                
              </button>
            </div>
        </div>
    );
}

export default Banner;