import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Features = () => {
    return (
        <div id='features'>
            <div className="flex flex-col justify-center items-center bg-white mt-10 pb-32">
                <div className='text-xs font-semibold text-[#a078f5] py-1.5 px-2.5 bg-white border border-gray-300 rounded-md mt-24'>🔥 PREMIER FEATURES</div>
                <h1 className=" max-w-5xl text-center text-4xl font-semibold tracking-tight text-black sm:text-5xl px-5 mt-6">
                    Discover our product&apos;s <span className="text-[#fe8162]">Capabilities</span>
                </h1>
                <h2 className='text-md sm:text-xl sm:mt-12 max-w-2xl text-center tracking-tight px-6 text-gray-500 '>Don&apos;t settle for mediocrity - embrace the future of management with Manage Wise.</h2>
                <div className='flex justify-center flex-wrap self-center gap-10 mt-10'>
                    <div className='rounded-2xl bg-[#ededfa] p-7 flex flex-col items-start max-w-md'>
                        <p className='p-1.5 bg-white rounded-2xl text-2xl'>⭐</p>
                        <p className='text-black text-3xl font-semibold mt-3 ml-1'>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</p>
                    </div>
                    <div className='max-w-md border border-gray-200 rounded-lg'>
                        <Image
                            src={"/screenshot-smarttaskmanagement.png"}
                            alt="screenshot"
                            width={700}
                            height={350}
                            className='bg-white' />
                        <div className='flex justify-start flex-col p-4'>
                            <p className='text-lg font-semibold'>Smart Task Management</p>
                            <h3 className='text-sm max-w-2xl tracking-tight text-gray-500 '>Say goodbye to chaos with our smart task management system</h3>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 mt-10 flex-wrap justify-center'>
                    <div className='max-w-md border border-gray-200 rounded-lg'>
                        <Image
                            src={"/screenshot-flexiblescheduling.png"}
                            alt="screenshot"
                            width={400}
                            height={260}
                            className='bg-white' />
                        <div className='flex justify-start flex-col p-4'>
                            <p className='text-lg font-semibold'>Flexible Scheduling</p>
                            <h3 className='text-sm max-w-2xl tracking-tight text-gray-500 '>Stay productive with our flexible scheduling system</h3>
                        </div>
                    </div>
                    <div className='max-w-md border border-gray-200 rounded-lg'>
                        <Image
                            src={"/screenshot-easycommunication.png"}
                            alt="screenshot"
                            width={400}
                            height={260}
                            className='bg-white' />
                        <div className='flex justify-start flex-col p-4'>
                            <p className='text-lg font-semibold'>Easy Communication</p>
                            <h3 className='text-sm max-w-2xl tracking-tight text-gray-500 '>Collaborate seamlessly with your team in real-time</h3>
                        </div>
                    </div>
                    <div className='max-w-md border border-gray-200 rounded-lg'>
                        <Image
                            src={"/screenshot-analytics.png"}
                            alt="screenshot"
                            width={400}
                            height={260}
                            className='bg-white' />
                        <div className='flex justify-start flex-col p-4'>
                            <p className='text-lg font-semibold'>Analytics</p>
                            <h3 className='text-sm max-w-2xl tracking-tight text-gray-500 '>Gain valuable insights with our advanced analytics feature</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='bg-[#1c1c1c] flex flex-col justify-center items-start pl-5 pr-5 md:pl-52 md:pr-52'>
                    <div className='self-center'>
                        <div className='text-xs font-semibold text-[#a078f5] w-fit py-1.5 px-2.5 bg-white border border-gray-300 rounded-md mt-24'>🤩 AND MORE...</div>
                        <h1 className=" max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl mt-6">
                            Explore an array of features that elevate your <span className="text-[#fe8162]">Productivity </span>to new heights
                        </h1>
                        <h2 className='text-md sm:text-xl sm:mt-8 max-w-2xl tracking-tight text-gray-500 '>Discover the tools that will revolutionize the way you manage and optimize your operations</h2>
                    </div>
                    <div className='flex flex-wrap justify-center self-center gap-6 mt-20'>
                        <div className='max-w-md bg-[#212121] rounded-2xl flex justify-center items-center flex-col p-8'>
                            <Image
                                src={"/fire-svg.png"}
                                alt="screenshot"
                                width={60}
                                height={60}
                                className='bg-[#8247ff] rounded-2xl w-16 p-2' />
                            <div className='flex justify-center flex-col p-4 max-w-xs'>
                                <p className='text-lg text-white mb-3 font-semibold text-center'>Cross-Platform Compatibility</p>
                                <h3 className='text-md max-w-2xl tracking-tight text-gray-400 text-center'>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</h3>
                            </div>
                        </div>
                        <div className='max-w-md bg-[#212121] rounded-2xl flex justify-center items-center flex-col p-8'>
                            <Image
                                src={"/bell-svg.png"}
                                alt="screenshot"
                                width={20}
                                height={20}
                                className='bg-[#8247ff] rounded-2xl w-16 p-2' />
                            <div className='flex justify-center flex-col p-4 max-w-xs'>
                                <p className='text-lg text-white mb-3 font-semibold text-center'>Stay Informed with Essential Notifications</p>
                                <h3 className='text-md max-w-2xl tracking-tight text-gray-400 text-center'>Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</h3>
                            </div>
                        </div>
                        <div className='max-w-md bg-[#212121] rounded-2xl flex justify-center items-center flex-col p-8'>
                            <Image
                                src={"/fire-svg.png"}
                                alt="screenshot"
                                width={60}
                                height={60}
                                className='bg-[#8247ff] rounded-2xl w-16 p-2' />
                            <div className='flex justify-center flex-col p-4 max-w-xs'>
                                <p className='text-lg text-white mb-3 font-semibold text-center'>Secure Data Encryption at all times</p>
                                <h3 className='text-md max-w-2xl tracking-tight text-gray-400 text-center'>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center bg-[#1c1c1c] pb-80 pt-32">
                    <div className='text-xs font-semibold text-[#a078f5] py-1.5 px-2.5 bg-white border border-gray-300 rounded-md mt-24'>🛠️ INTEGRATIONS</div>
                    <h1 className=" max-w-2xl text-center text-4xl font-semibold tracking-tight px-5 text-white sm:text-5xl mt-6">
                        Enable <span className="text-[#fe8162]">integration</span> with other popular tools and platforms
                    </h1>
                    <h2 className='text-md sm:text-xl sm:mt-12 max-w-xl text-center tracking-tight px-5 text-gray-500 '>Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.</h2>
                </div>
            </div>
            <div className='-mt-60 flex justify-center'>
                <Image
                    src={"/screenshot-connectapp.png"}
                    alt="screenshot"
                    width={600}
                    height={400}
                    className='min-w-[350px] shadow-2xl shadow-gray-200' />
            </div>
        </div>

    )
}

export default Features