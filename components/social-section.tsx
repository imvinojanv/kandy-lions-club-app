import { Facebook, Instagram, Linkedin } from "lucide-react"

const SocialSection = () => {
    return (
        <div className="bg-blue">
            <div className="mx-auto max-w-7xl px-4 py-16 flex justify-between items-center">
                <h2 className="text-white text-3xl font-bold">Unleashing lion-hearted compassion and <br />relentless selflessness.</h2>
                <div className="text-[#FFF9C8] flex gap-6">
                    <Facebook className="w-8 h-8"/>
                    <Instagram className="w-8 h-8"/>
                    <Linkedin className="w-8 h-8"/>
                </div>
            </div>
        </div>
    )
}

export default SocialSection