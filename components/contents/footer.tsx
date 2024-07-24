import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
    return (
        <footer className="mx-auto max-w-7xl px-4 pt-20 pb-12">
            <div className="flex items-center justify-center gap-8">
                <ul className="flex gap-8 font-semibold text-[#111010]">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className="py-3 px-6 bg-yellow font-bold text-[#111010] rounded-md">
                    Donate
                </button>
            </div>
            <div>
                <div className="flex space-x-4">
                    <Image
                        src="/Images/logo.png"
                        alt='logo'
                        width={72}
                        height={72}
                        className=''
                    />
                    <Image
                        src="/Images/logo2.jpg"
                        alt='logo'
                        width={72}
                        height={72}
                        className=''
                    />
                </div>
                <p className="mt-3 text-blue font-semibold">Lions Community service Foundation</p>
                <p className="mt-1 text-blue font-bold">Reg. No: 898989898989</p>
                <p className="mt-4 text-gray text-sm font-light">All donations accepted on lionsclubs.org support Lions Clubs International Foundation (LCIF), which is a 501(c)(3) tax-exempt public charitable organization. Lions Clubs International (LCI) is a 501(c)(4) tax-exempt social welfare organization and is not eligible to accept or solicit charitable donations. LCI and LCIF are EEO providers.</p>
            </div>
            <Separator className="mt-8"/>
            <div className="mt-8 flex justify-between items-center">
                <p className="text-blue text-sm">© 2024 Lions Kandy Rajans. All rights reserved.</p>
                <div className="text-blue flex gap-2">
                    <Facebook className="w-5 h-5"/>
                    <Instagram className="w-5 h-5"/>
                    <Linkedin className="w-5 h-5"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer