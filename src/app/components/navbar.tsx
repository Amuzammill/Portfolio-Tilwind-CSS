"use client"

import React, { useState } from 'react';
import Link from "next/link";
import { MdFileDownload } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className='bg-gray-900/90 fixed top-0 w-full z-10 shadow-lg'>
                <div className='container mx-auto flex justify-between items-center py-4 px-4'>
                    <div className='text-2xl font-semibold text-gray-100'>Muzamil Ahmed</div>
                    <div className='hidden md:flex gap-6'>
                        <Link href="/" className='text-gray-300 hover:text-blue-400 transition duration-200'>Home</Link>
                        <Link href="/about" className='text-gray-300 hover:text-blue-400 transition duration-200'>About</Link>
                        <Link href="/portfolio" className='text-gray-300 hover:text-blue-400 transition duration-200'>Portfolio</Link>
                        <Link href="/skills" className='text-gray-300 hover:text-blue-400 transition duration-200'>Skills</Link>
                        <Link href="/contact" className='text-gray-300 hover:text-blue-400 transition duration-200'>Contact</Link>
                    </div>
                    <Link href="#" className='hidden md:flex items-center px-4 py-2 text-gray-300 border border-blue-400 rounded hover:bg-blue-400 hover:text-gray-900 transition duration-200'>
                        Download CV
                        <MdFileDownload className='ml-2' />
                    </Link>
                    <div className='md:hidden text-[24px] text-gray-300' onClick={toggleMenu}>
                        {isMenuOpen ? <IoMdClose /> : <FiMenu />}
                    </div>
                </div>
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='md:hidden bg-gray-800 p-4'>
                        <Link href="/" className='block py-2 text-gray-300 hover:text-blue-400 transition duration-200'>Home</Link>
                        <Link href="/about" className='block py-2 text-gray-300 hover:text-blue-400 transition duration-200'>About</Link>
                        <Link href="/portfolio" className='block py-2 text-gray-300 hover:text-blue-400 transition duration-200'>Portfolio</Link>
                        <Link href="/skills" className='block py-2 text-gray-300 hover:text-blue-400 transition duration-200'>Skills</Link>
                        <Link href="/contact" className='block py-2 text-gray-300 hover:text-blue-400 transition duration-200'>Contact</Link>
                        <Link href="#" className='block mt-4 px-4 py-2 text-gray-300 border border-blue-400 rounded hover:bg-blue-400 hover:text-gray-900 transition duration-200'>
                            Download CV
                            <MdFileDownload className='ml-2 inline' />
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
