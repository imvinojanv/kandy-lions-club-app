import React from 'react'
import CauseCard from './cause-card'

const CausesSection = () => {
    return (
        <section className='mx-auto max-w-7xl px-4 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8'>
                <CauseCard />
                <CauseCard />
                <CauseCard />
                <CauseCard />
                <CauseCard />
                <CauseCard />
            </div>
            <div className='w-full flex justify-center mt-8 mb-40'>
                <button className='bg-[#1C2436] text-white px-6 py-3 rounded-lg text-sm font-medium'>
                    More Causes
                </button>
            </div>
        </section>
    )
}

export default CausesSection