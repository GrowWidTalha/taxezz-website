import BrandLogos from "@/components/sections/brand-logos";
import CTASection from "@/components/sections/CTA";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import GenAIAccountingSection from "@/components/sections/section4";
import ModernAccountingWorkflows from "@/components/sections/section5";
import BentoGridSection from "@/components/sections/section6";
import TestimonialCarousel from "@/components/sections/testimonias";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Hero />
            <BrandLogos />
            <Process />
            <GenAIAccountingSection />
            <ModernAccountingWorkflows />
            <BentoGridSection />
            <BrandLogos />
            <TestimonialCarousel />
            <CTASection />
            
        </main>
    );
}
