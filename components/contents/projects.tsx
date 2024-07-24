import ProjectSlider from "@/components/project-slider";

const Projects = () => {
    return (
        <section className='mx-auto max-w-7xl py-32'>
            <div className="lg:w-2/3 px-4">
                <h2 className='text-blue text-4xl font-bold leading-snug'>Take a look at our <br /> completed projects</h2>
                <p className='text-gray mt-6 text-lg'>At Lions Club Kandy, our committee members drive our mission with passion and commitment. Each leader brings unique skills and experiences, united by a common goal: to serve our community with excellence and integrity.</p>
            </div>
            <div className="mt-16 pl-44">
                <ProjectSlider />
            </div>
        </section>
    )
}

export default Projects