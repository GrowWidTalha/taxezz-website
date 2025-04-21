"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="border-b border-gray-200 py-4 px-4 md:px-8 w-full">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        height={40}
                        width={140}
                        alt="Taxezz"
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-6 items-center font-poppins">
                    <Link href="/" className="font-bold hover:text-gray-600 transition">
                        Home
                    </Link>
                    <Link href="/about-us" className="hover:text-gray-600 transition">
                        About Us
                    </Link>
                    <Link href="/contact-us" className="hover:text-gray-600 transition">
                        Contact Us
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="hidden md:flex gap-4">
                    {/* <Button variant="outline" className="ring-1 text-lg ring-black px-6 ">
                        Contact Us
                    </Button> */}
                    <Button className="bg-black px-4 text-white text-lg">
                        Book a Call
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet >
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="flex flex-col gap-4 p-6">
                            <Link href="/" className="font-semibold text-lg hover:underline">
                                Home
                            </Link>
                            <Link href="/about-us" className="font-semibold text-lg hover:underline">
                                About Us
                            </Link>
                            <Link href="/contact-us" className="font-semibold text-lg hover:underline">
                                Contact Us
                            </Link>
                            <div className="mt-6 flex flex-col gap-3">
                                <Button className="bg-black text-white w-full">
                                    Book a Call
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
