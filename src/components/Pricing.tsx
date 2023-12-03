import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Pricing = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white pb-32 pt-16">
            <div className='text-xs font-semibold text-[#a078f5] py-1.5 px-2.5 bg-white border border-gray-300 rounded-md mt-24'>💲PRICING</div>
            <h1 className=" max-w-5xl text-center text-4xl font-semibold tracking-tight text-black sm:text-5xl px-5 mt-6">
                Select your ideal <span className="text-[#fe8162]">Pricing</span> plan
            </h1>
            <h2 className='text-md sm:text-xl sm:mt-12 max-w-2xl text-center tracking-tight px-6 text-gray-500 '>At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.</h2>
            <div className='flex gap-5 mt-10 flex-wrap justify-center'>
                <div className='max-w-md border border-gray-200 rounded-3xl bg-[#ededfa] p-16 flex flex-col justify-between items-center'>
                    <div className='flex justify-start flex-col'>
                        <div className='text-xs font-semibold text-[#fe9c84] w-fit py-1.5 px-2.5 bg-white border border-gray-300 rounded-md'>FREE</div>
                        <p className='text-5xl font-semibold mt-5'>$0<span className='text-sm font-normal'>/month</span></p>
                        <ul className='space-y-2 my-8'>
                            <li className='text-gray-600'>✔️ Access to all basic features</li>
                            <li className='text-gray-600'>✔️ Reporting and analytics</li>
                            <li className='text-gray-600'>✔️ Up to 5 individual users</li>
                            <li className='text-gray-600'>✔️ Chat and email support</li>
                        </ul>
                    </div>
                    <Link href="/buytemplate" className='bg-white text-black rounded-2xl py-3 px-8 text-lg font-semibold border border-gray-300 hover:border-gray-500 w-96 sm:w-56 text-center'>Get started</Link>
                </div>
                <div className='max-w-md border border-gray-200 rounded-3xl bg-[#1c1c1c] p-16 flex flex-col justify-between items-center'>
                    <div className='flex justify-start flex-col'>
                        <div className='text-xs font-semibold text-[#fe9c84] w-fit py-1.5 px-2.5 bg-white border border-gray-300 rounded-md'>STANDARD</div>
                        <p className='text-5xl font-semibold mt-5 text-white'>$25<span className='text-sm font-normal'>/month</span></p>
                        <ul className='space-y-2 my-8'>
                            <li className='text-gray-600'>✔️ Access to all basic features</li>
                            <li className='text-gray-600'>✔️ Reporting and analytics</li>
                            <li className='text-gray-600'>✔️ Up to 5 individual users</li>
                            <li className='text-gray-600'>✔️ Chat and email support</li>
                            <li className='text-gray-600'>✔️ 3+ integrations</li>
                            <li className='text-gray-600'>✔️ Account performance reporting</li>
                        </ul>
                    </div>
                    <Link href="/buytemplate" className='bg-white text-black rounded-2xl py-3 px-8 text-lg font-semibold border border-gray-300 hover:border-gray-500 w-96 sm:w-56 text-center'>Get started</Link>
                </div>
                <div className='max-w-md border border-gray-200 rounded-3xl bg-[#ededfa] p-16 flex flex-col justify-between items-center'>
                    <div className='flex justify-start flex-col'>
                        <div className='text-xs font-semibold text-[#fe9c84] w-fit py-1.5 px-2.5 bg-white border border-gray-300 rounded-md'>BUSINESS</div>
                        <p className='text-5xl font-semibold mt-5'>$42<span className='text-sm font-normal'>/month</span></p>
                        <ul className='space-y-2 my-8'>
                            <li className='text-gray-600'>✔️ Access to all basic features</li>
                            <li className='text-gray-600'>✔️ Reporting and analytics</li>
                            <li className='text-gray-600'>✔️ Up to 5 individual users</li>
                            <li className='text-gray-600'>✔️ Chat and email support</li>
                            <li className='text-gray-600'>✔️ 3+ integrations</li>
                        </ul>
                    </div>
                    <Link href="/buytemplate" className='bg-white text-black rounded-2xl py-3 px-8 text-lg font-semibold border border-gray-300 hover:border-gray-500 w-96 sm:w-56 text-center'>Get started</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing