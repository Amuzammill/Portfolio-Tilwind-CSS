import React from 'react'

const Contact = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
        <h1 className='text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16'>Contact Us</h1>
        <form className='flex flex-col gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <input type="text" placeholder='Name' className=' outline-blue-300 border-gray-400 border rounded-[5px] px-4 py-2 w-[100%]' required />

                <input type="text" placeholder='Name' className=' outline-blue-300 border-gray-400 border rounded-[5px] px-4 py-2 w-[100%]' required />
            </div>
            <input type="text" placeholder='Subject' className=' outline-blue-300 border-gray-400 border rounded-[5px] px-4 py-2 w-[100%]' required />

            <textarea rows={6} placeholder='Message' className=' outline-blue-300 border-gray-400 border rounded-[5px] px-4 py-2 w-[100%] ' required>
            </textarea>

            <div>
                <button type='submit' className='bg-black text-white py-2 px-4 rounded inline-block mt-10 font-medium border border-blue-300 hover:bg-transparent hover:text-blue-300 transition duration-200'>Send Message</button>
            </div>


        </form>
    </section>
  )
}

export default Contact;