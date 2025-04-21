import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";

const bentoItems = [
    {
        bg: "bg-green-100",
        title: "Flawless financial oversight",
        description:
            "Enjoy 100% confidence in your numbers, know exactly what your team is working on, and protect your company from unplanned risk.",
    },
    {
        bg: "bg-orange-100",
        title: "Accurate, compliant reporting workflows",
        description:
            "Use modern reporting methods for Rev Rec, Lease Accounting & more while meeting the global compliance requirements automatically.",
    },
];

const bentoItems2 = [
    {
        bg: "bg-purple-100",
        title: "Smarter reporting and analytics",
        description:
            "Enable the best business outcomes with automated, configurable reporting and unique insights into your financial data.",
    },
    {
        bg: "bg-teal-100",
        title: "Level up reporting",
        description:
            "Eliminate repetitive tasks and human error with automated data workflows, AI-enabled verification, and anomaly detection for a streamlined close.",
    },
]

export default function BentoGridSection() {
    return (
        <section className="px-4 md:px-12 py-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <Badge className="bg-teal-100 text-teal-800">Modern Accounting Workflows</Badge>
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                        It&apos;s the little things that make your team great
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Trullion makes accountants’ day-to-day tasks faster, smoother, and more accurate. Fire up the platform, check your dashboard, and get to work with total confidence.
                    </p>
                </div>

                {/* Bento-style grid: left column is twice as wide as right */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] mt-4">
                    {bentoItems.map((item, idx) => (
                        <Card
                            key={idx}
                            className={`${item.bg} m-0 rounded-xl shadow-sm p-12 flex flex-col justify-between`}>
                            <CardContent className="p-0">
                                <h3 className=" font-semibold text-gray-900 text-3xl mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr]">
                    {bentoItems2.map((item, idx) => (
                        <Card
                            key={idx}
                            className={`${item.bg} m-0 rounded-xl shadow-sm p-12 flex flex-col justify-between`}>
                            <CardContent className="p-0">
                                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
