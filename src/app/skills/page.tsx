import React from 'react'

const Skills = () => {
    return (
        <section className='container mx-auto py-16 px-4'>
            <h1 className='text-gray-800 text-[32px] font-semibold flex items-center gap-4 py-16'>Skills</h1>
            <p className='text-gray-600 mb-12'>
                I have acquired a variety of skills throughout my career. Here’s a breakdown of some of my key competencies.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* React.js Skill */}
                <div>
                    <p className='font-semibold text-gray-700'>React.js</p>
                    <div className='relative bg-gray-300 h-[8px] mt-2 rounded-full'>
                        <div className='bg-blue-500 absolute h-[8px] rounded-full w-[80%] transition-all duration-300'></div>
                    </div>
                </div>

                {/* HTML Skill */}
                <div>
                    <p className='font-semibold text-gray-700'>HTML</p>
                    <div className='relative bg-gray-300 h-[8px] mt-2 rounded-full'>
                        <div className='bg-blue-500 absolute h-[8px] rounded-full w-[90%] transition-all duration-300'></div>
                    </div>
                </div>

                {/* CSS Skill */}
                <div>
                    <p className='font-semibold text-gray-700'>CSS</p>
                    <div className='relative bg-gray-300 h-[8px] mt-2 rounded-full'>
                        <div className='bg-blue-500 absolute h-[8px] rounded-full w-[75%] transition-all duration-300'></div>
                    </div>
                </div>

                {/* Typescript Skill */}
                <div>
                    <p className='font-semibold text-gray-700'>Typescript</p>
                    <div className='relative bg-gray-300 h-[8px] mt-2 rounded-full'>
                        <div className='bg-blue-500 absolute h-[8px] rounded-full w-[70%] transition-all duration-300'></div>
                    </div>
                </div>


                <div>
                    <p className='font-semibold text-gray-700'>Tailwind CSS</p>
                    <div className='relative bg-gray-300 h-[8px] mt-2 rounded-full'>
                        <div className='bg-blue-500 absolute h-[8px] rounded-full w-[75%] transition-all duration-300'></div>
                    </div>
                </div>


                <div>
                    <p className='font-semibold text-gray-700'>Next JS</p>
                    <div className='relative bg-gray-300 h-[8px] mt-2 rounded-full'>
                        <div className='bg-blue-500 absolute h-[8px] rounded-full w-[70%] transition-all duration-300'></div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;
