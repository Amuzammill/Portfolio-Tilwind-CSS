import React from 'react';

const Hero = () => {
  return (
    <section 
      aria-label="Hero Section"
      className='bg-[url(/image.jpeg)] h-screen bg-cover bg-center bg-fixed flex items-center'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backgroundBlendMode: 'overlay' }}
    >
      <div className='container mx-auto px-4'>
        <header className='max-w-[450px] text-gray-100 flex flex-col gap-[30px]'>
          <div>
            <h1 className='text-5xl font-semibold text-black-100'>I am Muzamil Ahmed</h1>
            <h4 className='text-2xl mt-3 text-blue-300'>Frontend Developer</h4>
          </div>
          <div className='bg-blue-300 h-[2px] w-[40px]'></div>
          <div>
            <p className='mt-3 text-gray-300'>
              Crafting modern, interactive, and responsive web applications with a focus on user experience.
            </p>
            <button 
              aria-label="Learn more about Muzamil Ahmed"
              className='bg-black-800 text-gray-100 py-2 px-5 rounded mt-10 font-medium border border-gray-700 hover:bg-blue-300 hover:text-gray-900 transition duration-200'
            >
              Learn more
            </button>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Hero;
