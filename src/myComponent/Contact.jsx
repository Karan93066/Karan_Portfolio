import React from 'react';
function Contact() {
    return (
        <div class=" bg-[url('/common-bg.svg')] lg:py-20">
           <div id="contact">
  <div class="container mx-auto">
    <h1 class="font-bold w-fit mx-auto text-5xl tracking-wider contact_load text-[#00df9a]">Contact Me</h1>
    <hr class="w-16 h-3 mx-auto my-2 bg-[#00df9a] border-0 rounded md:my-5 "/>
    <div className='text-center text-xl text-black py-6 lg:px-52'>
        <h2>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h2>
        </div>
    <div class="flex flex-col mt-8 gap-8 max-w-xl mx-4 md:mx-auto border-2 p-12 bg-white border-white rounded-2xl">
      <div class="contact_load">
        <p class="ml-4 mb-2 text-xl font-semibold">Name</p>
        <input class="px-4 py-2 w-full rounded-3xl bg-white-500 border-[#00df9a] border-2 text-black bg-opacity-10" type="text" name="name" placeholder="Enter your Name" id=""/>
      </div>
      <div class="contact_load">
        <p class="ml-4 mb-2 text-xl font-semibold">Email address</p>
        <input class="px-4 py-2 w-full rounded-3xl bg-white-500 border-[#00df9a] border-2 text-black bg-opacity-10" type="email" name="email" placeholder="Enter your Email address" id=""/>
      </div>
      <div class="contact_load">
        <p class="ml-4 mb-2 text-xl font-semibold">Message</p>
        <textarea class="px-4 py-2 w-full rounded-3xl bg-white-500 border-[#00df9a] border-2 text-black bg-opacity-10" name="email" placeholder="Enter your Message here" id=""></textarea>
      </div>
      <button class="bg-[#00df9a] hover:bg-[#60c1a2]  mx-auto rounded-xl py-2 px-4 w-full">Send Message</button>
    </div>
  </div>
  </div>
</div>
    
    );
}

export default Contact;