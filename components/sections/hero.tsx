import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
                    AI Meets<br />
                    <span className="decorated-all-corners relative inline-block bg-[#A9FF9B] font-normal rounded-sm leading-tight px-1">
                        Accounting
                    </span>
                </h1>

                <p className="text-xl text-black/80 mt-6 max-w-xl">
                    AI is shifting the accounting paradigm. Workflows reinvented, priorities realigned,
                    and time reallocated. With Trullion’s AI-powered platform, accounting and audit
                    teams find unprecedented time savings, unparalleled growth opportunities, and
                    flawless financial oversight. Still, the best is yet to come.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Button size="lg" className="bg-black text-white py-6">
                        Book a demo
                    </Button>
                    <Button variant="secondary" size="lg" className="bg-[#A9FF9B] py-6 flex items-center text-black hover:bg-lime-300">
                        Our take on AI <ArrowRight className="ml-1 size-6 rounded-lg bg-black text-white " />
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
