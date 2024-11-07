import React from 'react'
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-white px-6 py-6 sm:px-16 sm:py-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-8 items-center sm:items-start">
        
        {/* Left Section */}
        <div className="flex-3 text-center sm:text-left">
          <span className="text-4xl font-bold block">Let&apos;s make something<br />great together!</span>
          <span className="text-4xl font-bold block mt-12">
            Start by
            <a href="mailto:bennetthumphrey98@gmail.com" className="text-orange-400 underline ml-1">saying hi</a>
          </span>
        </div>
        
        {/* Right Section */}
        <div className="flex-1 space-y-4 md:px-0">
          <div className='pt-8'>
            <a 
              href="mailto:bennetthumphrey98@gmail.com"
              className="text-lg cursor-pointer hover:text-gray-600"
            >
              <span className='underline'>Email:</span><br/> bennetthumphrey98@gmail.com
            </a>
          </div>
          <div>
            <a 
              href="https://www.instagram.com/bennett.humphrey/" 
              target="_blank" 
              className="flex items-center cursor-pointer hover:text-orange-500"
              rel="noopener noreferrer"
            >
              <BsInstagram className="mr-1 transform translate-y-1" />
              Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer
