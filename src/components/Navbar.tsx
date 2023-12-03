"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const [menuStatus,setMenuStatus] = useState(false);

    const toggleMenu = () => {
        setMobileNav(!mobileNav);
        setMenuStatus(!menuStatus);
    };

    return (
        <nav className={`p-4 ${(mobileNav && menuStatus)?'bg-white':'bg-[#fdf3ed]'} relative inset-x-0 z-30 w-full top-0 border border-b-gray-200`}>
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/" className="text-white font-bold text-xl">
                        <Image
                            width={180}
                            height={10}
                            src={"/logo-managewise.png"}
                            alt={"logo"} />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-5 justify-center items-center">
                    <Link href="#features" className="text-gray-700 text-md hover:text-indigo-700 font-semibold">Features</Link>
                    <div className='w-1 h-1 bg-gray-300'/>
                    <Link href="#faq" className="text-gray-700 text-md hover:text-indigo-700 font-semibold">FAQ</Link>
                    <div className='w-1 h-1 bg-gray-300'/>
                    <Link href="#pricing" className="text-gray-700 text-md hover:text-indigo-700 font-semibold">Pricing</Link>
                    <div className='w-1 h-1 bg-gray-300'/>
                    <Link href="#testimonials" className="text-gray-700 text-md hover:text-indigo-700 font-semibold">Testimonials</Link>
                    <Link href="/buytemplate" className="text-gray-700 bg-white font-bold border hover:border-gray-400 px-4 py-2.5 rounded-xl">Buy Template</Link>
                </div>
                <div className="md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                        {(menuStatus)?<Image src={"/hemburger-open-icon.png"} alt="menu icon" width={25} height={10}/>:<Image src={"/hemburger-closed-icon.svg"} alt="menu icon" width={36} height={10}/>}
                    </button>
                </div>
            </div>
            {mobileNav && (
                <div className="md:hidden flex flex-col justify-start items-center pl-1 mt-5 bg-white h-screen">
                    <Link href="#features" className="block font-md font-semibold text-gray-600 py-4 hover:text-indigo-700">Features</Link>
                    <Link href="#faq" className="block font-md font-semibold text-gray-600 py-4 hover:text-indigo-700">FAQ</Link>
                    <Link href="#pricing" className="block font-md font-semibold text-gray-600 py-4 hover:text-indigo-700">Pricing</Link>
                    <Link href="#testimonials" className="block font-md font-semibold text-gray-600 py-4 hover:text-indigo-700">Testimonials</Link>
                    <Link href="/buytemplate" className=" text-gray-100 py-3 mt-14 hover:text-gray-300 text-md font-semibold bg-[#8247ff] w-full rounded-xl text-center">Buy Template</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;