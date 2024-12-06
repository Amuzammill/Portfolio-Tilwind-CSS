import React from 'react';
import { RiLightbulbFlashLine } from "react-icons/ri";
import Link from 'next/link';

const WhatIDo = () => {
  const services = [
    {
      title: "Static Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link:"https://milestone-1-2-sage.vercel.app/"
      
    },
    {
      title: "Editable Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link:"https://milestone-4-rosy.vercel.app/"
      
    },
    {
      title: "Dynamic Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link:"https://milestone-3-phi-lovat.vercel.app/"
    },
  {
    title: "Shareable Resume Builder",
    description: "Explore my portfolio of visually compelling and creative design projects.",
    link:"https://milestone-5-tan-ten.vercel.app//"

  },
  
    
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center mb-8">
        What I Do
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
            <RiLightbulbFlashLine className="text-4xl text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>

            {service.link.startsWith("http") ? (
              <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Projects
              </a>
            ) : (
              <Link href={service.link} className="text-blue-600 hover:underline">
                View Projects
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
