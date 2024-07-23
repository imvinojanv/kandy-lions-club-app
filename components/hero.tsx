import HeroSlider from '@/components/hero-slider';

const Hero = () => {
    return (
        <section className='bg-blue text-white'>
            <div className='mx-auto max-w-7xl flex pt-48 pb-72 px-4'>
                <div className="flex-1 w-1/2 pr-32 mt-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Opportunity to change the lives of others
                    </h1>
                    <p className="font-light mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-yellow text-blue px-6 py-3 rounded-md font-bold">Donate</button>
                        <button className="border border-white px-6 py-3 rounded-md font-medium">Learn more</button>
                    </div>
                </div>
                <div className='w-1/2 px-12'>
                    <HeroSlider />
                </div>
            </div>
        </section>
    )
}

export default Hero