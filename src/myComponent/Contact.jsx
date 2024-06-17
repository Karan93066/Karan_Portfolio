import React from 'react';
function Contact() {
    return (
        <div   id="contact" className="relative h-[100vh] bg-[url('/contact_background.jpg')] opacity-[0.9] bg-fixed lg:py-20 py-16 bg-cover ">
  <div className="container mx-auto lg:mt-10">
    <h1 className="font-bold w-fit mx-auto text-5xl tracking-wider contact_load text-[#00df9a] ">Contact Me</h1>
    <div className='text-center text-xl text-white py-6 lg:px-52'>
        <h1>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h1>
        </div>
    <div className="flex flex-col lg:w-[60%] lg:mt-10 gap-8 mx-4 md:mx-auto border-2 p-4 lg:p-8 bg-white border-white rounded-2xl">
      <div className="w-full ">
        <p className="ml-4 mb-2 text-xl font-semibold">Name</p>
        <input className="px-4 py-2 w-full rounded-2xl bg-white-500 border-[#00df9a] border-2 text-black bg-opacity-10" type="text" name="name" placeholder="Enter your Name" id=""/>
      </div>
      <div className="w-full">
        <p className="ml-4 mb-2 text-xl font-semibold">Email address</p>
        <input className="px-4 py-2 w-full rounded-2xl bg-white-500 border-[#00df9a] border-2 text-black bg-opacity-10" type="email" name="email" placeholder="Enter your Email address" id=""/>
      </div>
      <div className="w-full">
        <p className="ml-4 mb-2 text-xl font-semibold">Message</p>
        <textarea className="px-4 py-2 w-full rounded-2xl bg-white-500 border-[#00df9a] border-2 text-black bg-opacity-10" name="email" placeholder="Enter your Message here" id=""></textarea>
      </div>
      <button className="bg-[#00df9a] hover:bg-[#60c1a2]  mx-auto rounded-xl py-2 px-4 w-full">Send Message</button>
    </div>
  </div>
</div>
    
    );
}

export default Contact;