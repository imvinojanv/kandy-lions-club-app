import Image from 'next/image'
import React from 'react'

const Collaboration = () => {
    return (
        <section className='mx-auto max-w-7xl px-4 py-20'>
            <div className='py-14 bg-blue rounded-2xl flex items-center justify-between'>
                <div className='flex flex-col w-[500px] justify-start pl-20'>
                    <h2 className='text-yellow text-4xl font-semibold leading-snug'>Collaborate, Donate, Make a Difference!</h2>
                    <p className='text-white mt-6 text-lg font-light'>Looking for a worthy cause? You&#39;ve hit the jackpot! Connect with us for partnerships or join our cause with a generous donation. Every little bit of kindness makes a big difference!</p>
                    <div className='flex space-x-4 mt-8'>
                        <button className="bg-yellow text-blue px-6 py-3 rounded-md font-bold">Email us</button>
                        <button className="border border-white text-white px-6 py-3 rounded-md font-medium">Schedule a call</button>
                    </div>
                </div>
                <Image 
                    src='/images/elements.svg'
                    alt='elements'
                    width={400}
                    height={400}
                    className='pr-8'
                />
            </div>
        </section>
    )
}

export default Collaboration