import About from "@/components/contents/about";
import AboutCount from "@/components/contents/about-count";
import CausesSection from "@/components/contents/causes-section";
import Collaboration from "@/components/contents/collaboration";
import Commitee from "@/components/contents/commitee";
import Footer from "@/components/contents/footer";
import Hero from "@/components/contents/hero";
import Projects from "@/components/contents/projects";
import SocialSection from "@/components/contents/social-section";
import Testimonial from "@/components/contents/testimonial";
import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <main className="">
            <Navbar />
            <Hero />
            <About />
            <AboutCount />
            <SocialSection />
            <CausesSection />
            <Collaboration />
            <Commitee />
            <Projects />
            <Testimonial />
            <Footer />
        </main>
    );
}
