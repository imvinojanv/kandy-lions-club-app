import { Linkedin } from 'lucide-react';
import Image from 'next/image';

const MemberCard = () => {
    return (
        <div className='group flex flex-col items-start space-y-3 p-6 border-2 border-[#1A2D57] bg-transparent rounded-xl cursor-pointer hover:bg-[#1A2D57] transition-all'>
            <Image
                src="/images/avatar.jpg"
                alt='avatar image'
                width={60}
                height={60}
                className='rounded-full'
            />
            <div>
                <h3 className='text-lg font-bold text-blue group-hover:text-white'>John Doe</h3>
                <p className='text-blue text-sm group-hover:text-white'>Chairman</p>
            </div>
            <p className='text-gray text-sm group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed velit ac est scelerisque fermentum. Sed vitae enim at arcu lobortis molestie.</p>
            <div className='w-6 h-6 rounded-sm bg-blue flex justify-center items-center group-hover:bg-white'>
                <Linkedin className='w-4 h-4 text-white group-hover:text-[#1A2D57]' />
            </div>
        </div>
    )
}

const Commitee = () => {
    return (
        <section className='bg-yellow'>
            <div className='mx-auto max-w-7xl px-4 py-20'>
                <div className='lg:w-2/3'>
                    <h2 className='text-blue text-4xl font-bold'>Meet Our Dedicated Committee</h2>
                    <p className='text-gray mt-6 text-lg'>At Lions Club Kandy, our committee members drive our mission with passion and commitment. Each leader brings unique skills and experiences, united by a common goal: to serve our community with excellence and integrity.</p>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                </div>
            </div>
        </section>
    )
}

export default Commitee