import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className={cn("w-full fixed top-8 z-[999] px-4", inter.className)}>
        <div className="mx-auto max-w-7xl py-2 px-4 flex items-center justify-between bg-white border-2 border-[#1A2D57] rounded-2xl">
            <div className="flex items-center gap-4 ml-2">
                <Image 
                    src="/Images/logo2.jpg"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-14"
                />
                <h1 className="text-xl font-extrabold text-blue">Kandy Ranjans</h1>
            </div>
            <div className="flex items-center gap-8">
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
        </div>
    </nav>
  )
}

export default Navbar