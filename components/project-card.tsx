import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'

const ProjectCard = () => {
    return (
        <div className='bg-transparent flex gap-7 p-7 rounded-xl'>
            <Image 
                src='/Images/project-img.png'
                alt='project image'
                width={1000}
                height={1000}
                className='rounded-lg w-[240px] h-[400]'
            />
            <div className='flex flex-col space-y-7 items-start py-2'>
                <h1 className='text-blue text-3xl font-bold'>New community center</h1>
                <p className='text-blue mt-6 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <Separator className='bg-blue'/>
                <div className='flex space-x-10'>
                    <div className='flex gap-2'>
                        <Image 
                            src='/Images/heart.svg'
                            alt='heart'
                            width={44}
                            height={44}
                            className='rounded-lg'
                        />
                        <div className='flex flex-col items-start'>
                            <p className='text-sm text-gray'>Goal</p>
                            <p className='text-lg text-blue font-bold'>250,000 LKR</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <Image 
                            src='/Images/heart.svg'
                            alt='heart'
                            width={44}
                            height={44}
                            className='rounded-lg'
                        />
                        <div className='flex flex-col items-start'>
                            <p className='text-sm text-gray'>Raised</p>
                            <p className='text-lg text-blue font-bold'>550,000 LKR</p>
                        </div>
                    </div>
                </div>
                <button className='px-4 pt-1.5 pb-2 border border-[#1A2D57] text-sm font-semibold text-blue rounded-lg hover:bg-[#1A2D57] hover:text-white'>
                    Read more
                </button>
            </div>
        </div>
    )
}

export default ProjectCard