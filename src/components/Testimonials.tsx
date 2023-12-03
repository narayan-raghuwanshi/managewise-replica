import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <div className='bg-white flex flex-col justify-center items-start pl-5 pr-5 md:px-32' id="testimonials">
            <div className='self-center'>
                <div className='text-xs font-semibold text-[#a078f5] w-fit py-1.5 px-2.5 bg-white border border-gray-300 rounded-md mt-24'>🧡 TESTIMONIALS</div>
                <h1 className=" max-w-5xl text-4xl font-semibold tracking-tight text-black sm:text-5xl mt-6">
                    Hear from our <span className="text-[#fe8162]">Satisfied </span>clients
                </h1>
                <h2 className='text-md sm:text-xl sm:mt-8 max-w-2xl tracking-tight text-gray-500 '>Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.</h2>
            </div>
            <div className='flex flex-wrap justify-center self-center gap-6 mt-20 '>
                <div className='max-w-xs rounded-2xl border border-gray-200 flex justify-center items-center flex-col p-8 '>
                    <div className='flex justify-center flex-col p-4 max-w-xs'>
                        <p className='text-lg text-gray-800 mb-3 font-semibold '>"The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.</p>
                        <div className='flex gap-5 mt-5'>
                            <Image src={"/profile-image-testimonial.png"} alt="profile image" width={50} height={50} className='rounded-full' />
                            <div>
                                <p className=' font-semibold'>Sarah</p>
                                <p className='text-sm'>Project Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-xs rounded-2xl border border-gray-200 flex justify-center items-center flex-col p-8'>
                    <div className='flex justify-center flex-col p-4 max-w-xs'>
                        <p className='text-lg text-gray-800 mb-3 font-semibold '>"Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.</p>
                        <div className='flex gap-5 mt-5'>
                            <Image src={"/profile-image-testimonial.png"} alt="profile image" width={50} height={50} className='rounded-full' />
                            <div>
                                <p className=' font-semibold'>David</p>
                                <p className='text-sm'>PFreelancer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-xs rounded-2xl border border-gray-200 flex justify-center items-center flex-col p-8'>
                    <div className='flex justify-center flex-col p-4 max-w-xs'>
                        <p className='text-lg text-gray-800 mb-3 font-semibold '>"I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.</p>
                        <div className='flex gap-5 mt-5'>
                            <Image src={"/profile-image-testimonial.png"} alt="profile image" width={50} height={50} className='rounded-full' />
                            <div>
                                <p className=' font-semibold'>Alex</p>
                                <p className='text-sm'>IT Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-xs rounded-2xl border border-gray-200 flex justify-center items-center flex-col p-8'>
                    <div className='flex justify-center flex-col p-4 max-w-xs'>
                        <p className='text-lg text-gray-800 mb-3 font-semibold '>"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"</p>
                        <div className='flex gap-5 mt-5'>
                            <Image src={"/profile-image-testimonial.png"} alt="profile image" width={50} height={50} className='rounded-full' />
                            <div>
                                <p className=' font-semibold'>Emily</p>
                                <p className='text-sm'>Art Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials