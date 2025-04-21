
"use client"
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Define testimonial type
type Testimonial = {
    id: number;
    logo: string;
    content: string;
    author: string;
    position: string;
    company: string;
};

// Mock data for testimonials
const testimonials: Testimonial[] = [
    {
        id: 1,
        logo: "/hmd_tagline-logo.svg",
        content: "We chose to migrate from our previous software to Trullion in order to improve efficiency. With Trullion, we've reduced our time spent on reporting by over 25% and saved over 30% on costs between the two softwares.",
        author: "Morgan Hoffmann",
        position: "Group Financial Accountant",
        company: "Bradken",
    },
    {
        id: 2,
        logo: "/hmd_tagline-logo.svg",
        content: "When demoing Trullion, we were impressed with the functionality and the look and feel of the product. It became very apparent that without Trullion, we would be spending more time on manual calculations and reporting.",
        author: "Ville Räsänen",
        position: "Senior Finance Manager",
        company: "HMD Global",
    },
    {
        id: 3,
        logo: "/hmd_tagline-logo.svg",
        content: "Implementing Trullion has transformed our accounting workflow. The automated features have given our team back valuable time to focus on strategic initiatives rather than manual data entry.",
        author: "Sarah Johnson",
        position: "Chief Financial Officer",
        company: "TechGrowth",
    },
    {
        id: 4,
        logo: "/hmd_tagline-logo.svg",
        content: "The transition to Trullion was seamless. Their support team guided us through every step, and now our financial reporting is not only faster but more accurate than ever before.",
        author: "Michael Chen",
        position: "Director of Finance",
        company: "GlobalEdge",
    },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="border border-white/20 rounded-lg p-8 md:p-10 h-full flex flex-col">
        <div className="h-12 mb-8">
            <img
                src={testimonial.logo}
                alt={`${testimonial.company} logo`}
                className="h-full object-contain object-left"
            />
        </div>
        <p className="text-white text-lg md:text-xl mb-8 flex-grow">
            {testimonial.content}
        </p>
        <div className="mt-auto">
            <h3 className="text-xl md:text-2xl font-medium text-yellow-300 mb-1">
                {testimonial.author}
            </h3>
            <p className="text-white/80">
                {testimonial.position}
            </p>
        </div>
    </div>
);

const TestimonialCarousel = () => {
    const isMobile = useIsMobile();

    return (
        <section className="w-full bg-emerald-900 py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-12 md:mb-16">
                    What people are saying.
                </h2>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <div className="flex justify-end mb-10">
                        <div className="flex space-x-3">
                            <CarouselPrevious
                                className="relative inset-0 translate-y-0 bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 transition-all h-12 w-12 rounded-md"
                                variant="outline"
                                size="icon"
                            />
                            <CarouselNext
                                className="relative inset-0 translate-y-0 bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 transition-all h-12 w-12 rounded-md"
                                variant="outline"
                                size="icon"
                            />
                        </div>
                    </div>

                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.id}
                                className={`pl-4 ${isMobile ? 'basis-full' : 'basis-3/4'} md:basis-3/4`}
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
