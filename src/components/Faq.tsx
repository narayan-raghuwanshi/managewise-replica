import { useState } from 'react'
const Faq = () => {
    const [number, setNumber] = useState(0);
    const handleToggle = (num: any) => {
        if (num != number) setNumber(num);
        else setNumber(0);
    }
    return (
        <div id="faq" className='bg-white pt-36 flex flex-row justify-center sm:justify-between px-5 md:px-80 -mt-20 flex-wrap gap-10 pb-20'>
            <div className='flex flex-col justify-start'>
                <div className='text-xs font-semibold w-fit text-[#a078f5] py-1.5 px-2.5 bg-white border border-gray-300 rounded-md mt-5'>🙋‍♀️ FAQ</div>
                <h1 className=" max-w-xs text-4xl font-semibold tracking-tight text-black sm:text-5xl mt-6">
                    Need <span className="text-[#fe8162]">Answers?</span>
                </h1>
                <h2 className='text-md sm:text-xl sm:mt-8 max-w-sm tracking-tight text-gray-500 '>Check out our most commonly asked questions below to find the information you need.</h2>
            </div>
            <div className='flex flex-wrap items-center justify-center'>
                <div className='max-w-xl space-y-4'>
                    <div className=' p-5 bg-[#f7f8fd] rounded-3xl'>
                        <div className='flex justify-between items-center gap-10'>
                            <p className={`font-bold text-xl ${(number == 1) ? 'text-indigo-600' : 'text-black'}`}>What is Manage Wise and what does it offer?</p>
                            <span className='font-sans font-bold text-indigo-700 text-xl cursor-pointer' onClick={() => { handleToggle(1) }}>{(number == 1) ? '✖️' : '➕'}</span>
                        </div>
                        {(number == 1) && <p className='max-w-lg pt-3 text-gray-500'>Manage Wise is a comprehensive management platform designed to streamline your
                            business operations, enhance productivity, and drive success. It offers a range of
                            features including task management, scheduling, communication tools, analytics, and
                            more.</p>}
                    </div>
                    <div className=' p-5 bg-[#f7f8fd] rounded-3xl'>
                        <div className='flex justify-between items-center gap-10'>
                            <p className={`font-bold text-xl ${(number == 2) ? 'text-indigo-600' : 'text-black'}`}>Is Manage Wise suitable for small businesses and larger
                                enterprises alike?</p>
                            <span className='font-sans font-bold text-indigo-700 text-xl cursor-pointer' onClick={() => { handleToggle(2) }}>{(number == 2) ? '✖️' : '➕'}</span>
                        </div>
                        {(number == 2) && <p className='max-w-lg pt-3 text-gray-500'>Yes, Manage Wise is designed to cater to the needs of both small businesses and
                            larger enterprises. Its scalable features and customizable options make it versatile for
                            various business sizes.</p>}
                    </div>
                    <div className=' p-5 bg-[#f7f8fd] rounded-3xl'>
                        <div className='flex justify-between items-center gap-10'>
                            <p className={`font-bold text-xl ${(number == 3) ? 'text-indigo-600' : 'text-black'}`}>Can I access Manage Wise from different devices and
                                platforms?</p>
                            <span className='font-sans font-bold text-indigo-700 text-xl cursor-pointer' onClick={() => { handleToggle(3) }}>{(number == 3) ? '✖️' : '➕'}</span>
                        </div>
                        {(number == 3) && <p className='max-w-lg pt-3 text-gray-500'>Yes, Manage Wise offers cross-platform compatibility, allowing you to access and
                            use the platform seamlessly on desktops, web browsers, and mobile devices.</p>}
                    </div>
                    <div className=' p-5 bg-[#f7f8fd] rounded-3xl'>
                        <div className='flex justify-between items-center gap-10'>
                            <p className={`font-bold text-xl ${(number == 4) ? 'text-indigo-600' : 'text-black'}`}>What kind of support options do you offer to users?</p>
                            <span className='font-sans font-bold text-indigo-700 text-xl cursor-pointer' onClick={() => { handleToggle(4) }}>{(number == 4) ? '✖️' : '➕'}</span>
                        </div>
                        {(number == 4) && <p className='max-w-lg pt-3 text-gray-500'>MWe provide responsive customer support via chat and email to assist you with any
                            inquiries, issues, or guidance you may need while using Manage Wise.</p>}
                    </div>
                    <div className=' p-5 bg-[#f7f8fd] rounded-3xl'>
                        <div className='flex justify-between items-center gap-10'>
                            <p className={`font-bold text-xl ${(number == 5) ? 'text-indigo-600' : 'text-black'}`}>How secure is the data stored within Manage Wise?</p>
                            <span className='font-sans font-bold text-indigo-700 text-xl cursor-pointer' onClick={() => { handleToggle(5) }}>{(number == 5) ? '✖️' : '➕'}</span>
                        </div>
                        {(number == 5) && <p className='max-w-lg pt-3 text-gray-500'>Your data's security is a top priority. Manage Wise employs robust data encryption
                            and follows industry best practices to ensure your sensitive information is safe and
                            protected.</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq