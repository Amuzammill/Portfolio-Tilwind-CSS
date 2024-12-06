import React from 'react';
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import Image from 'next/image';

function About() {
  return (
    <section className='container mx-auto py-10 px-4'>
      <h1 className='text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16'>About me</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
        <div className='order-1 md:order-1'>
          <Image 
          src="/image.jpeg" 
          alt="Profile" 
          width={400} 
          height={400}/>
        </div>
        
        <div className='flex items-center justify-between w-[300px] order-2 md:order-2'>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-4 items-center font-medium'>
              <AiOutlineGift className='text-blue-400 text-[22px]'/>
              Birthday
            </div>
            <div className='flex gap-4 items-center font-medium'>
              <FiBookOpen className='text-blue-400 text-[22px]'/>
              Study
            </div>
            <div className='flex gap-4 items-center font-medium'>
              <BsGlobe2 className='text-blue-400 text-[22px]'/>
              Website
            </div>
            <div className='flex gap-4 items-center font-medium'>
              <TbPacman className='text-blue-400 text-[22px]'/>
              Interest
            </div>
            <div className='flex gap-4 items-center font-medium'>
              <IoLocationOutline className='text-blue-400 text-[22px]'/>
              Location
            </div>
          </div>
          <div className='flex flex-col gap-6 text-white-600'>
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
          </div>
          <div className='flex flex-col gap-6 text-white-600'>
            <div>22-08-2000</div>
            <div>kent collage of Karachi</div>
            <div>xyz</div>
            <div> Cricket</div>
            <div> Karachi</div>
          </div> 
        </div>

        {/* Move this section to the right side */}
        <div className='max-w-[800px] order-3 md:order-3 md:col-start-2'>
          <h2 className='font-bold mb-10 text-[24px]'>I am Muzamil Ahmed, and I am a frontend developer.</h2>
          <p className='text-gray-600'>Hi! My name is Muzamil Ahmed. I am a passionate and dedicated web developer, eager to grow and gain experience.</p>
          <button type='submit' className='bg-white text-black py-2 px-6 rounded inline-block mt-10 font-medium border border-blue-300 hover:bg-transparent hover:text-blue-300 transition duration-200'>Hire me</button>
        </div>
      </div>
    </section>
  );
}

export default About;