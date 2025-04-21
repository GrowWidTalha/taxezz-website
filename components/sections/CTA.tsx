"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
    return (
        <section className="w-full py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row rounded-xl overflow-hidden">
                    {/* Left side with text and CTA */}
                    <div className="bg-[#0a4d56] text-white p-8 md:p-16 flex flex-col justify-center rounded-2xl flex-[3]">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 md:mb-10">
                            It just works,
                            <br />
                            so that you can too.
                        </h2>
                        <div>
                            <Button
                                className="bg-[#a3f2da] hover:bg-[#8ee6cb] text-emerald-900 font-medium px-6 py-4 h-auto text-base"
                                onClick={() => window.open('https://example.com/book-demo', '_blank')}
                            >
                                Book a demo <ArrowRight className="ml-2" />
                            </Button>
                        </div>
                    </div>

                    {/* Right side with image */}
                    <div className="flex-[2] min-h-[300px]">
                        <img
                            src="/footer-img-1.png"
                            alt="People working together at a desk with laptop"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
