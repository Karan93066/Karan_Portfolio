import React from 'react';

function About_me(props) {
    return (
        <div className='py-12 bg-[#666] lg:h-[100vh] flex flex-col justify-center items-center' id='about'>
            <div className='text-center text-3xl text-[#00df9a] font-bold'>
               <h1>About Me</h1>
               <hr className="w-16 h-3 mx-auto my-2 bg-[#00df9a] border-0 rounded md:my-5"/>
            </div>
            <div className='lg:flex lg:mx-28 lg:my-12 mx-6 my-6 gap-12'>
                <div className='basis-1/2'>
                    <div className='font-bold text-2xl text-[#00df9a] text-center lg:text-left my-8'>
                        <h1>Get to know about me!</h1>
                    </div>
                    <div className='text-justify'>
                        <p className='my-4 text-white text-xl'>
                            I'm a <b>Frontend Focused Web Developer</b>, dedicated to crafting and overseeing the frontend of Websites and Web Applications,
                            essential for driving the overall success of digital products. Check out my portfolio showcasing projects that highlight
                            my proficiency in React.js, HTML, CSS, and JavaScript.
                        </p>
                        <p className='my-4 text-white text-xl'>
                            I enjoy sharing insights and lessons learned from my journey in Web Development with the wider Dev Community. Connect with me 
                            on LinkedIn and Instagram for valuable content related to Web Development and Programming.
                        </p>
                        <p className='my-4 text-white text-xl'>
                            Open to new job opportunities where I can contribute, learn, and grow further. Feel free to reach out if you have an exciting
                            opportunity that aligns with my skills and experience.
                        </p>
                    </div>
                </div>
                <div className='basis-1/2'>
                    <div className='font-bold text-2xl text-[#00df9a] lg:my-4 text-center lg:text-left'>
                        <h1>My Skills</h1>
                    </div>
                    <div className='flex flex-wrap justify-center lg:justify-start'>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            HTML
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            CSS
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            JavaScript
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            React.js
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            Node.js
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            MySql
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            Express.js
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            Chrome Extension
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            WordPress
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            Responsive Design
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            Git
                        </div>
                        <div className='px-6 py-4 m-4 text-xl bg-[#00000033] text-[#fff] tada-hover rounded-xl font-semibold'>
                            Github
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About_me;
