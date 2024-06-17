import React from 'react';

function Project() {

  return (
    <>
      <div className="py-12 bg-black" id="projects">
        <div className="text-center text-3xl text-[#00df9a] font-bold">
          <h1>Projects</h1>
          <hr className="w-16 h-3 mx-auto my-2 bg-[#00df9a] border-0 rounded md:my-5 " />
        </div>
        <div className="text-center text-xl text-[#fff] py-6 lg:px-52">
          <h1>
            Explore a range of projects I've worked on, including personal and
            client-based endeavors. Each project comes with its own case study,
            offering insights into my creative process and problem-solving
            approach.
          </h1>
        </div>
        <div class="container project_container relative py-8 flex flex-col gap-16 md:gap-24 px-4 sm:px-0 sm:mx-auto text-white">
          <div class="lg:flex gap-8 lg:justify-evenly lg:mx-32 lg:my-16 entry">
            <div className="basis-1/2 entry_meta">
              <h1 class="font-bold tracking-wider text-2xl text-[#00df9a]">
                Employee Management System
              </h1>
              <p class="py-4 text-lg">
                Designed and implemented an Employee Management System using
                ReactJS, Node.js, and MySQL. Features include admin capabilities
                for adding, deleting, updating, and searching employees by name
                and department. Demonstrated proficiency in full-stack
                development and database management.
              </p>
              <p className="text-lg font-semibold">Technology Used</p>
              <div className="flex flex-wrap py-4">
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  JavaScript
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  React.js
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  Node.js
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  MySql
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  Github
                </div>
              </div>
            </div>
            <div class="basis-1/2 entry_media">
              <img
                src="/EMS.webp"
                alt="Portfolio Image"
                className="border-2 h-full border-transparent rounded-2xl shadow-md hover-animation"
              />
            </div>
          </div>

          <div class="lg:flex flex-row-reverse gap-8 justify-evenly lg:mx-32 lg:my-16">
            <div className="basis-1/2">
              <h1 class="font-bold tracking-wider text-2xl text-[#00df9a]">Watch OTT Party</h1>
              <p class="py-4 text-lg">
                Allows multiple users to watch synchronized videos from various
                OTT platforms (YouTube, Netflix, Prime, Hotstar) and provides
                chat and video call functionality for joined users. Parties can
                be created with or without a host.
              </p>
              <p className="text-lg font-semibold">Technology Used</p>
              <div className="flex flex-wrap py-4">
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  JavaScript
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  React.js
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  Node.js
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  Github
                </div>
              </div>
            </div>
            <div class="basis-1/2 ">
              <img
                src="/WatchOTT.webp"
                alt="Portfolio Image"
                className="border-2 h-full border-transparent rounded-2xl shadow-md hover-animation"
              />
            </div>
          </div>
          <div class="lg:flex gap-8 justify-evenly lg:mx-32 lg:my-16">
            <div className="basis-1/2">
              <h1 class="font-bold tracking-wider text-2xl text-[#00df9a]">a2zpassword</h1>
              <p class="py-4 text-lg">
                Led the development of an SEO-optimized website aimed at
                promoting the a2zpassword Chrome extension. Leveraged ReactJS
                and Tailwind CSS to craft a sleek and highly optimized online
                platform. This project showcased expertise in front-end
                development, UI/UX design, and search engine optimization
                strategies, contributing to the extension's visibility and user
                engagement.
              </p>
              <p className="text-lg font-semibold">Technology Used</p>
              <div className="flex flex-wrap py-4">
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  HTML
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  Tailwind CSS
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  JavaScript
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  React.js
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  Github
                </div>
              </div>
            </div>
            <div class="basis-1/2 ">
              <img
                src="/a2zpassword.webp"
                alt="A2zpassword Image"
                className="border-2 h-full border-transparent rounded-2xl shadow-md hover-animation"
              />
            </div>
          </div>
          <div class="lg:flex flex-row-reverse gap-8 justify-evenly lg:mx-32 lg:my-16">

            <div className="basis-1/2">
              <h1 class="font-bold tracking-wider text-2xl text-[#00df9a]">Cleaning Soldier</h1>
              <p class="py-4 text-lg">
                Developed a user-friendly website for a house cleaning service,
                prioritizing ease of navigation and functionality. Utilized
                various WordPress plugins and tools to enhance interactivity and
                functionality, ensuring a seamless user experience. Implemented
                effective SEO techniques to optimize search engine visibility,
                bolstering the website's online presence and attracting
                potential clients.
              </p>
              <p className="text-lg font-semibold ">Technology Used</p>
              <div className="flex flex-wrap py-4">
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  JavaScript
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  React.js
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  Node.js
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  Github
                </div>
              </div>
            </div>
            <div class="basis-1/2 ">
              <img
                src="/CleaningSoilder.webp"
                alt="Cleaning Soilder Image"
                className="border-2 h-full border-transparent rounded-2xl shadow-md hover-animation"
              />
            </div>
          </div>
          <div class="lg:flex gap-8 justify-evenly lg:mx-32 lg:my-16">
            <div className="basis-1/2">
              <h1 class="font-bold tracking-wider text-2xl text-[#00df9a]">
                Portfolio Website
              </h1>
              <p class="py-4 text-lg">
                Built a sleek portfolio website with ReactJS, Tailwind CSS, and
                GitHub integration. Seamlessly blending design and
                functionality, it showcases professional achievements and
                projects. Leveraging GitHub for version control, it reflects a
                commitment to innovative web development practices.
              </p>
              <p className="text-lg font-semibold">Technology Used</p>
              <div className="flex flex-wrap py-4">
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  HTML
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  Tailwind CSS
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  JavaScript
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  React.js
                </div>
                <div className="px-4 py-2 m-2 text-lg bg-[#9D9C9C33] text-[#c8c8c8] rounded-xl font-semibold tada-hover">
                  Github
                </div>
              </div> 
            </div>
            <div class="basis-1/2 ">
              <img
                src="/Portfolio.webp"
                alt="Portfolio Image"
                className="border-2 h-full border-transparent rounded-2xl shadow-md hover-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
