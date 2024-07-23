const AboutCount = () => {
    return (
        <div className="bg-yellow">
            <div className="mx-auto max-w-7xl px-4 py-16 flex justify-between items-start">
                <div className="flex flex-col items-start gap-1 text-blue">
                    <h1 className="text-5xl font-bold">150+</h1>
                    <p className="text-lg">Projects</p>
                </div>
                <div className="flex flex-col items-start gap-1 text-blue">
                    <h1 className="text-5xl font-bold">25</h1>
                    <p className="text-lg">Awards</p>
                </div>
                <div className="flex flex-col items-start gap-1 text-blue">
                    <h1 className="text-5xl font-bold">10+</h1>
                    <p className="text-lg">Partnerships</p>
                </div>
                <div className="flex flex-col items-start gap-1 text-blue">
                    <h1 className="text-5xl font-bold">5000+</h1>
                    <p className="text-lg">Lives touched</p>
                </div>
            </div>
        </div>
    )
}

export default AboutCount