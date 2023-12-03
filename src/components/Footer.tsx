import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

const Footer = () => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };
    return (
        <div className='flex flex-col justify-center items-center bg-[#fdf3ed] mt-20 pb-20'>
            <div className='mt-40 border-2 border-gray-300 bg-white rounded-2xl'>
                <div id="faq" className='bg-white rounded-2xl pt-36 flex flex-row justify-center px-5 md:px-40 flex-wrap gap-10 pb-20'>
                    <div className='flex flex-col justify-start'>
                        <div className='text-xs font-semibold w-fit text-[#a078f5] py-1.5 px-2.5 bg-white border border-gray-300 rounded-md mt-5'>👋 DON'T MISS OUT</div>
                        <h1 className=" max-w-md text-4xl font-semibold tracking-tight text-black sm:text-5xl mt-6">
                            Unleash your  <span className="text-[#fe8162]">Potential</span> with us
                        </h1>
                        <h2 className='text-md sm:text-xl sm:mt-8 max-w-sm tracking-tight text-gray-500 '>Join our community of ambitious individuals and organizations eager to make a difference.</h2>
                        <Link href="/getstarted" className={`bg-[#8247ff] w-96 sm:w-56 text-center text-white rounded-2xl py-3 px-11 text-lg font-semibold hover:ring-8 hover:ring-zinc-200 mt-8`} onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>{hovered ? `${"Try out now 🚀"}` : 'Try out now'}</Link>
                    </div>
                    <div className='flex flex-wrap items-center justify-center'>
                        <Image src={"/happy-customers.png"} alt="happy-customers" width={500} height={450} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full px-5 md:px-96 mt-40'>
                <div className='flex justify-center sm:justify-between items-center w-full flex-col sm:flex-row flex-wrap gap-20'>
                    <Image
                        width={180}
                        height={10}
                        src={"/logo-managewise.png"}
                        alt={"logo"} />
                    <ul className='flex flex-col gap-2 justify-center items-center sm:items-start'>
                        <li><Link href="#features" className=' text-gray-600 hover:text-gray-400 text-center'>Features</Link></li>
                        <li><Link href="#faq" className=' text-gray-600 hover:text-gray-400 text-center'>FAQ</Link></li>
                        <li><Link href="#pricing" className=' text-gray-600 hover:text-gray-400 text-center'>Pricing</Link></li>
                        <li><Link href="#testimonials" className=' text-gray-600 hover:text-gray-400 text-center'>Testimonials</Link></li>
                    </ul>
                </div>
                <hr className='w-full bg-gray-400 my-8' />
                <div className='flex justify-center sm:justify-between items-center w-full flex-col sm:flex-row flex-wrap gap-20'>
                    <p>© 2022 ManageWise, Inc.</p>
                    <div className='flex gap-4'>
                        <Link href="https://www.instagram.com/">
                            <Image src={"/instagram.png"} alt="instagram logo" width={20} height={20} />
                        </Link>
                        <Link href="https://twitter.com/home">
                            <Image src={"/x.png"} alt="instagram logo" width={20} height={20} />
                        </Link>
                        <Link href="https://www.linkedin.com/feed/">
                            <Image src={"/linkedinn.png"} alt="instagram logo" width={20} height={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer