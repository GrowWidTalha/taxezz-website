"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const tabs = [
    {
        title: "Integrated full-service firm",
        description:
            "Our multidisciplinary capabilities and integrated approaches provide the wide ranging breadth and depth of experience, skills, and advanced technologies needed to help your organization thrive in all market conditions.",
        icon: "🔗",
    },
    {
        title: "Deep sector knowledge",
        description:
            "We bring deep insights into every sector we work in, allowing us to tailor solutions that meet the specific needs of your industry.",
        icon: "📚",
    },
    {
        title: "Innovation that works",
        description:
            "Our focus on practical innovation ensures that new ideas are not just imaginative, but also feasible and impactful.",
        icon: "💡",
    },
    {
        title: "KPMG Lighthouse",
        description:
            "A center of excellence for data-driven technologies like AI, machine learning, and advanced analytics.",
        icon: "🏛️",
    },
    {
        title: "Market-leading Alliances",
        description:
            "We leverage partnerships with leading tech providers to deliver comprehensive, scalable solutions.",
        icon: "🤝",
    },
];

export default function DifferentiatorsTabs() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = tabs[selectedIndex];

    return (
        <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What sets us apart</h2>
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
                    Our Differentiators
                </p>
                <ul className="space-y-2 bg-white">
                    {tabs.map((tab, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={cn(
                                "cursor-pointer px-4 py-3 border rounded flex justify-between items-center",
                                selectedIndex === index
                                    ? " font-semibold text-black border-r-2 border-teal-400 border-t-0 border-b-0 border-l-0  "
                                    : "text-gray-700 hover:bg-gray-50"
                            )}
                        >
                            {tab.title}
                            <span className="text-xl">›</span>
                        </li>
                    ))}
                </ul>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="custom-background p-8 rounded-xl shadow-md"
                >
                    <div className="text-3xl mb-2">{selected.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {selected.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">{selected.description}</p>
                    <Button className="border bg-transparent border-green-600 text-green-600 px-5 py-2 rounded-full text-sm hover:bg-green-100">
                        Learn more →
                    </Button>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
