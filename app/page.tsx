import About from "@/components/about";
import AboutCount from "@/components/about-count";
import CausesSection from "@/components/causes-section";
import Collaboration from "@/components/collaboration";
import Commitee from "@/components/commitee";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import SocialSection from "@/components/social-section";
import Testimonial from "@/components/testimonial";

export default function Home() {
    return (
        <main className="">
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
