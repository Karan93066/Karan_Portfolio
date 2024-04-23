import React from 'react';

function Banner() {
    return (
        <div className="bg-[url('src/assets/common-bg.svg')] lg:py-20 lg:h-[700px]">
            <h1 className="text-6xl font-bold text-center mt-16">HEY, I'M KARAN</h1>
            <div className="py-12">
            <p className="text-xl font-large text-center lg:px-80">
            A Result-Oriented Web Developer building and managing Websites and Web Applications 
            that leads to the success of the overall product
            </p>
            </div>
            <div className='text-center lg:py-10'>
              <button class="bg-[#767676] hover:bg-[#5a5c5b] text-[#60c1a2] mx-auto rounded-xl py-5 px-10 text-2xl font-semibold">Projects</button>
            </div>
        </div>
    );
}

export default Banner;