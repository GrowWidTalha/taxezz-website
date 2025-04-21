"use client";

import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";
import { Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
    const isMobile = useIsMobile();

    return (
        <footer className="w-full bg-white text-gray-700">
            <div className="container mx-auto px-4 md:px-6 py-12 space-y-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Logo */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-8 bg-black"></div>
                            <span className="font-bold text-xl">TRULLION</span>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif text-[#6a7a68]">Products</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Lease Accounting</a></li>
                            <li><a href="#" className="hover:underline">Revenue Recognition</a></li>
                            <li><a href="#" className="hover:underline">Audit</a></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif text-[#6a7a68]">Solutions</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">For Accounting Teams</a></li>
                            <li><a href="#" className="hover:underline">For Audit Teams</a></li>
                            <li><a href="#" className="hover:underline">Partners</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif text-[#6a7a68]">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Resource Center</a></li>
                            <li><a href="#" className="hover:underline">Customer Stories</a></li>
                            <li><a href="#" className="hover:underline">Events</a></li>
                            <li><a href="#" className="hover:underline">Compliance Glossary</a></li>
                            <li><a href="#" className="hover:underline">The Complete Guide to IFRS 16</a></li>
                            <li><a href="#" className="hover:underline">Revenue Recognition Guide</a></li>
                            <li><a href="#" className="hover:underline">Lease Accounting Guide</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif text-[#6a7a68]">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* AI Capabilities */}
                <div>
                    <h3 className="text-xl font-serif text-[#6a7a68] mb-4">AI Capabilities</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
                        <a href="#" className="hover:underline">Data Validation</a>
                        <a href="#" className="hover:underline">Data Extraction</a>
                        <a href="#" className="hover:underline">Data Reconciliation</a>
                        <a href="#" className="hover:underline">GenAI</a>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                        <Youtube size={20} />
                    </a>
                    <a href="#" className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                        <Linkedin size={20} />
                    </a>
                </div>

                <Separator />

                {/* Footer Bottom */}
                <div className={`flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4`}>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Cookie Policy</a>
                    </div>
                    <div>© 2025 Trullion Inc.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
