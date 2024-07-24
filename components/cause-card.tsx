import Image from 'next/image'

import { Separator } from '@/components/ui/separator'

interface CauseCardProps {
    isForHero?: boolean
}

const CauseCard = ({
    isForHero,
}: CauseCardProps) => {
    const color = isForHero ? `bg-[#FFFAE1]` : "bg-[#F4F4F5]";

    return (
        <div className={`${color} p-4 w-full rounded-xl space-y-4`}>
            <Image 
                src="/Images/card-img.png"
                alt='card img'
                width={1000}
                height={1000}
                className='w-full rounded-lg'
            />
            <div>
                <h2 className='text-light-blue font-bold text-xl'>Help the child to go school</h2>
                <p className='text-gray text-sm mt-1'>accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo Ipsum</p>
            </div>
            <div>
                <h2 className='w-full text-end text-lg text-light-blue font-semibold'>65%</h2>
                <Separator className='bg-[#0F2987] h-[3px]'/>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-start'>
                    <p className='text-sm text-gray'>Goals</p>
                    <p className='text-light-blue font-bold'>100,000 LKR</p>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-sm text-gray'>Raised Money</p>
                    <p className='text-light-blue font-bold'>22,000 LKR</p>
                </div>
            </div>
            <button className='py-3 px-6 rounded-full border-2 border-[#1A2D57] text-sm font-bold text-light-blue'>
                Donate
            </button>
        </div>
    )
}

export default CauseCard