import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FlipText } from "../magicui/flip-text"
import { TextAnimate } from "../magicui/text-animate"

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="flex-1 flex items-start justify-center flex-col px-6 md:px-16 py-12">
                <FlipText className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
                    Real Estate Meets
                </FlipText>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
                    <span className="decorated-all-corners relative inline-block bg-[#A9FF9B] font-normal rounded-sm leading-tight px-1">
                        Real Strategy
                    </span>
                </h1>
                <TextAnimate className="text-xl text-black/80 mt-6 max-w-xl" animation="blurInUp" by="character" once>

                    Built exclusively for real estate investors scaling residential portfolios, developers navigating complex deals, and commercial owners protecting long-term equity.
                </TextAnimate>
                <TextAnimate className="text-xl text-black/80 mt-6 max-w-xl" animation="blurInUp" by="character" once>
                    As your assets grow, we reduce tax drag, maximize depreciation, and engineer smarter exits — all while keeping the IRS at a safe distance.
                </TextAnimate>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Button size="lg" className="bg-black text-white py-6 group">
                        Book a Strategy Call <ArrowRight className=" size-6 rounded-lg text-white group-hover:translate-x-1" />
                    </Button>
                    <Button variant="secondary" size="lg" className="bg-[#A9FF9B] py-6 flex items-center text-black hover:bg-lime-300">
                        How it Works?
                    </Button>
                </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 rounded-xl  bg-[#003C32] flex justify-center items-center rounded-tl-3xl md:rounded-none">
                <img
                    src="/hero-image.png" // replace with the image you uploaded
                    alt="Hero Graphic"
                    className="w-full max-w-md md:max-w-full object-contain"
                />
            </div>
        </section>
    )
}

export default Hero
