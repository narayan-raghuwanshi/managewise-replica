import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Framericon = () => {
  return (
    <div className='flex fixed bottom-4 right-6 justify-center items-center'>
        <Link href="https://www.framer.com/?utm_source=https%3A%2F%2Fmanagewise.framer.website&utm_campaign=freeplanbadge" className='bg-white text-black text-center self-center font-semibold text-sm py-2 pl-2 pr-4 shadow-sm shadow-gray-600 rounded-lg'>
            <Image src={"/logo-framer.png"} alt="framer logo" width={20} height={20} className='inline rounded-full mr-2'/>
            Made in Framer</Link>
    </div>
  )
}

export default Framericon