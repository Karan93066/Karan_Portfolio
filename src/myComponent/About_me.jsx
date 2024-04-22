import React from 'react';

function About_me(props) {
    return (
        <div className='py-12'>
            <div className='text-center text-3xl text-[#00df9a] font-bold'>
               <h1>About Me</h1>
               <hr class="w-16 h-3 mx-auto my-2 bg-[#00df9a] border-0 rounded md:my-5 "/>
            </div>
            <div className='flex mx-28 gap-8'>
             <div className='basis-1/2'>
                <div>
                    <h1 className='text-2xl font-bold'>Get to know me!</h1>
                </div>
             </div>
             <div className='basis-1/2'>
                <h1>helo</h1>
             </div>
            </div>
            
        </div>
    );
}

export default About_me;