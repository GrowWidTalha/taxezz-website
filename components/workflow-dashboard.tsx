"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function WorkflowDashboard() {
    const [activeSection, setActiveSection] = useState<"lease" | "audit" | "revenue">("lease")

    const sections = [
        {
            id: "lease",
            title: "1. Data Collection",
            description: "Submit your documents securely.",
            color: "bg-blue-50",
            image: "/taxezz-datacollection.svg?height=500&width=600",
        },
        {
            id: "audit",
            title: "2. Data Processing & Analysis",
            description: "Reconcile and organize data automatically.",
            color: "bg-purple-50",
            image: "/taxezz-dataprocessing.svg?height=500&width=600",
        },
        {
            id: "revenue",
            title: "3. Final Review & Filing",
            description: "Get expert approval for precise filing.",
            color: "bg-green-50",
            image: "/taxezz-finalreview.svg?height=500&width=600",
        },
    ];



    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center text-emerald-900 mb-8">
                Workflow automations: more time for what matters
            </h1>

            {/* Use a grid that becomes 3 columns on larger screens with equal height */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
                {/* Left Section: Button Cards */}
                <div className="flex flex-col  md:col-span-1">
                    {sections.map((section) => (
                        <motion.div
                            key={section.id}
                            layout
                            // @ts-ignore
                            onClick={() => setActiveSection(section.id)}
                            className={`rounded-lg border cursor-pointer overflow-hidden transition-all duration-300 ${activeSection === section.id ? section.color : "bg-white"
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-semibold">{section.title}</h2>
                                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-md">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>

                                {activeSection === section.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <p className="text-sm text-gray-600">{section.description}</p>
                                        <div>
                                            <Button
                                                variant="link"
                                                className="p-0 h-auto text-sm font-medium flex items-center gap-1 text-emerald-700"
                                            >
                                                Learn more
                                                <span className="flex items-center justify-center bg-emerald-700 text-white rounded-sm w-4 h-4">
                                                    <ArrowRight className="h-3 w-3" />
                                                </span>
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Section: Animated Image */}
                <div className="md:col-span-2">
                    <Card className="overflow-hidden border-0 shadow-lg h-full">
                        <CardContent className="p-0 h-full">
                            <div className=" h-48 grid grid-cols-6 gap-px">
                                {/* {Array.from({ length: 24 }).map((_, i) => (
                                    <div key={i} className="border-[0.5px] border-teal-800/30"></div>
                                ))} */}
                                {/* <motion.div
                                    className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-white"
                                    animate={{
                                        boxShadow: [
                                            "0 0 0 0 rgba(255,255,255,0.4)",
                                            "0 0 0 10px rgba(255,255,255,0)",
                                        ],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "loop",
                                    }} */}
                                {/* /> */}
                            </div>

                            {/* <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSection}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white"
                                >
                                    {activeSection === "lease" && (
                                        <img
                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f5b8ssq2dbyKWfyiFMeXiU2gxPR7QB.png"
                                            alt="Lease Accounting Interface"
                                            className="w-full h-auto"
                                        />
                                    )}
                                    {activeSection === "audit" && (
                                        <img
                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hchPOR49jr6Kg2HY41PHn7uIn1wfKq.png"
                                            alt="Audit Interface"
                                            className="w-full h-auto"
                                        />
                                    )}
                                    {activeSection === "revenue" && (
                                        <img
                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9qn1Y4x5LuDHjfbT4OFT1BRQM4wBnw.png"
                                            alt="Revenue Recognition Interface"
                                            className="w-full h-auto"
                                        />
                                    )}
                                </motion.div>
                            </AnimatePresence> */}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
