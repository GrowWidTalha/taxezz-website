import React from 'react'
import { Marquee } from '../magicui/marquee'
import Image from 'next/image'


const BRAND_LOGOS = [
    {
        name: "brand1",
        src: "/brand1.svg"
    },
    {
        name: "brand2",
        src: "/brand2.svg"
    },
    {
        name: "brand3",
        src: "/brand3.svg"
    },
    {
        name: "brand4",
        src: "/brand4.svg"
    },
    {
        name: "brand5",
        src: "/brand5.svg"
    },
]
const BrandLogos = () => {
    return (
        <section className='py-28 bg-white'>
            <Marquee className=''>
                {BRAND_LOGOS.map((brand, i) => (
                    <Image
                        src={brand.src}
                        alt={brand.name}
                        key={i}
                        width={100}
                        height={100}
                        className="object-contain mx-8 w-auto grayscale hover:grayscale-0 transition duration-300"
                    />
                ))}
            </Marquee>
        </section>
    )
}

export default BrandLogos
