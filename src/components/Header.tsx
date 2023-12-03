import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
      setHovered(!hovered);
    };
  return (
    <div className="flex flex-col justify-center items-center">
        <div className='text-xs font-semibold text-[#a078f5] py-1.5 px-2.5 bg-white border border-gray-300 rounded-md mt-24'>👋 WELCOME TO MANAGE WISE!</div>
        <h1 className=" max-w-5xl text-center text-5xl font-semibold tracking-tight  text-black sm:text-7xl px-5 mt-6">
          Empower your business with  <span className="text-[#fe8162]">Strategic</span> insights
        </h1>
        <h2 className='text-md sm:text-xl sm:mt-12 max-w-2xl text-center tracking-tight px-6 text-gray-500 '>Powerful management platform designed to streamline your business operations, boost productivity, and drive success</h2>
        <div className='flex justify-center gap-3 mt-8 flex-wrap items-center'>
          <Link href="/getstarted" className={`bg-[#8247ff] w-96 sm:w-56 text-center text-white rounded-2xl py-3 px-11 text-lg font-semibold hover:ring-8 hover:ring-zinc-200`} onMouseEnter={handleHover}
            onMouseLeave={handleHover}>{hovered ? `${"Get Started 🚀"}` : 'Get Started'}</Link>
          <Link href="/watchdemo" className='bg-white text-black rounded-2xl py-3 px-12 text-lg font-semibold border border-gray-300 hover:border-gray-500 w-96 sm:w-56 text-center'>Watch Demo</Link>
        </div>
        <div>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='-m-2 rounded-2xl ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-3xl'>
                <Image
                  src='/screenshot-dashboard.png'
                  alt='product preview'
                  width={1364}
                  height={866}
                  quality={100}
                  className='rounded-3xl bg-white p-2 sm:p-8 md:p-20 shadow-sm ring-1 ring-gray-600/10'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header