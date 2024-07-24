import Image from 'next/image'
import React from 'react'

const TestimonialCard = () => {
    return (
        <div className='bg-[#FFFAE1] rounded-lg py-6 px-7'>
            <h2 className='text-xl font-bold text-blue'>Lovely experience...</h2>
            <p className='text-gray text-sm mt-2'>Praesent tellus tortor, vulputate eu mi eget, feugiat scelerisq. Suspendisse rutrum metus ac auctor viverra</p>
            <div className='flex items-center mt-8'>
                <div className='w-8 h-8 flex justify-center items-center rounded-full bg-[#1A2D572E] text-blue text-xs font-semibold'>LA</div>
                <h3 className='ml-2 text-sm font-semibold text-blue'>Leslie Alexander</h3>
            </div>
        </div>
    )
}

const Testimonial = () => {
    return (
        <section className='bg-blue'>
            <div className='mx-auto max-w-7xl px-4 py-32'>
                <div className='flex'>
                    <div className="lg:w-2/3">
                        <h2 className='text-yellow text-4xl font-bold'>Voices of Impact</h2>
                        <p className='text-white font-light mt-6 text-lg'>Hear from those who have experienced the positive change brought by Lions Club Kandy. Their stories of gratitude and transformation inspire us to continue our mission of service and compassion.</p>
                    </div>
                    <Image
                        src="/Images/elements2.svg"
                        alt='elements'
                        width={100}
                        height={100}
                        className='absolute right-96 -mt-12'
                    />
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>
        </section>
    )
}

export default Testimonial