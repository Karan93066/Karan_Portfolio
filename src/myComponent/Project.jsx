import React from 'react';

function Project() {
    return (
        <>
               <div className='py-12' id='projects'>
        <div className='text-center text-3xl text-[#00df9a] font-bold'>
           <h1>Projects</h1>
           <hr className="w-16 h-3 mx-auto my-2 bg-[#00df9a] border-0 rounded md:my-5 "/>
        </div>
        <div className='text-center text-xl text-[#666] py-6 lg:px-52'>
        <h2>Explore a range of projects I've worked on, including personal and client-based endeavors. Each project comes with its own case study,
             offering insights into my creative process and problem-solving approach.</h2>
        </div>
        <div class="container project_container relative py-8 flex flex-col gap-16 md:gap-24 px-4 sm:px-0 sm:mx-auto">
           <div class="flex gap-8 justify-evenly mx-32">
        <div className='basis-1/2'>
          <h1 class="font-bold tracking-wider text-xl">Employee Management System</h1>
          <p class="py-4 text-lg">Designed and implemented an Employee Management System using ReactJS, Node.js, and MySQL. 
          Features include admin capabilities for adding, deleting, updating, and searching employees by name and department. 
          Demonstrated proficiency in full-stack development and database management.</p>
          <p className='text-lg font-semibold'>Technology Used</p>
          <div className='flex flex-wrap py-4'>
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                    JavaScript
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        React.js
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        Node.js
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        MySql
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        Github
                    </div> 
                </div>
        </div>
        <div class="basis-1/2 ">
        <img
      src="./src/assets/EMS.png"
      alt="Portfolio Image"
      className="border-2 border-transparent rounded-2xl shadow-md transition-transform hover:scale-105 hover:shadow-xl"
    />
        </div>
      </div>

        <div class="flex gap-8 justify-evenly mx-32">
        <div class="basis-1/2 ">
        <img
      src="./src/assets/WatchOTT.png"
      alt="Portfolio Image"
      className="border-2 border-transparent rounded-2xl shadow-md transition-transform hover:scale-105 hover:shadow-xl"
    />
        </div>
      
        <div className='basis-1/2'>
          <h1 class="font-bold tracking-wider text-xl">Watch OTT Party</h1>
          <p class="py-4 text-lg">Allows multiple users to watch synchronized videos from various OTT platforms 
          (YouTube, Netflix, Prime, Hotstar) and provides chat and video call functionality for joined users. 
          Parties can be created with or without a host.</p>
          <p className='text-lg font-semibold'>Technology Used</p>
          <div className='flex flex-wrap py-4'>
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                    JavaScript
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        React.js
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        Node.js
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        Github
                    </div> 
                </div>
        </div>
        </div>
      <div class="flex gap-8 justify-evenly mx-32">
        <div className='basis-1/2'>
          <h1 class="font-bold tracking-wider text-xl">a2zpassword</h1>
          <p class="py-4 text-lg">Led the development of an SEO-optimized website aimed at promoting the a2zpassword Chrome extension. 
          Leveraged ReactJS and Tailwind CSS to craft a sleek and highly optimized online platform. This project showcased expertise 
          in front-end development, UI/UX design, and search engine optimization strategies, contributing to the extension's visibility
          and user engagement.</p>
          <p className='text-lg font-semibold'>Technology Used</p>
          <div className='flex flex-wrap py-4'>
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                    HTML
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                    Tailwind CSS
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                    JavaScript
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        React.js
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        Github
                    </div> 
                </div>
        </div>
        <div class="basis-1/2 ">
        <img
      src="./src/assets/a2zpassword.png"
      alt="A2zpassword Image"
      className="border-2 border-transparent rounded-2xl shadow-md transition-transform hover:scale-105 hover:shadow-xl"
    />
        </div>
      </div>
      <div class="flex gap-8 justify-evenly mx-32">
      <div class="basis-1/2 ">
        <img
      src="./src/assets/CleaningSoilder.png"
      alt="Cleaning Soilder Image"
      className="border-2 border-transparent rounded-2xl shadow-md transition-transform hover:scale-105 hover:shadow-xl"
    />
        </div>
      
        <div className='basis-1/2'>
          <h1 class="font-bold tracking-wider text-xl">Cleaning Soldier</h1>
          <p class="py-4 text-lg">Developed a user-friendly website for a house cleaning service, prioritizing ease of 
          navigation and functionality. Utilized various WordPress plugins and tools to enhance interactivity and 
          functionality, ensuring a seamless user experience. Implemented effective SEO techniques to optimize search
           engine visibility, bolstering the website's online presence and attracting potential clients.</p>
          <p className='text-lg font-semibold'>Technology Used</p>
          <div className='flex flex-wrap py-4'>
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                    JavaScript
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        React.js
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        Node.js
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        Github
                    </div> 
                </div>
        </div>
        </div>
      <div class="flex gap-8 justify-evenly mx-32">
        <div className='basis-1/2'>
          <h1 class="font-bold tracking-wider text-xl">Portfolio Website</h1>
          <p class="py-4 text-lg">Built a sleek portfolio website with ReactJS, Tailwind CSS, and GitHub integration. 
          Seamlessly blending design and functionality, it showcases professional achievements and projects. 
          Leveraging GitHub for version control, it reflects a commitment to innovative web development practices.</p>
          <p className='text-lg font-semibold'>Technology Used</p>
          <div className='flex flex-wrap py-4'>
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                    HTML
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                    Tailwind CSS
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        JavaScript
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                       React.js
                    </div> 
                    <div className='px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#666] rounded-xl font-semibold'>
                        Github
                    </div> 
                </div>
        </div>
        <div class="basis-1/2 ">
        <img
      src="./src/assets/Portfolio.png"
      alt="Portfolio Image"
      className="border-2 border-transparent rounded-2xl shadow-md transition-transform hover:scale-105 hover:shadow-xl"
    />
        </div>
      </div>

    </div>
    </div>
    </>
    );
}

export default Project;