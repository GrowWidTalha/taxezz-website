import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad, Square, Monitor, AlertTriangle, BarChart2, ChartArea as PresentationChart } from "lucide-react";

const features = [
    {
        icon: Gamepad,
        title: "Start with little to no configuration.",
    },
    {
        icon: Square,
        title: "Connect all of your financial and accounting systems.",
    },
    {
        icon: Monitor,
        title: "Instantly extract data from contracts and systems.",
    },
    {
        icon: BarChart2,
        title: "See what’s most relevant to you at a glance.",
    },
    {
        icon: AlertTriangle,
        title: "Get automated alerts when something needs attention.",
    },
    {
        icon: PresentationChart,
        title: "Report instantly to finance leadership and auditors.",
    },
];

export default function ModernAccountingWorkflows() {
    return (
        <section className="px-4 md:px-12 py-12 bg-muted">
            <div className="max-w-7xl mx-auto text-center space-y-6 flex flex-col items-center">
                <h2 className="decorated-all-corners max-w-fit  text-2xl bg-teal-200">Modern Accounting Workflows</h2>
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                    It&apos;s the little things that make your team great
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Trullion makes accountants’ day-to-day tasks faster, smoother, and more accurate. Fire up the platform, check your dashboard, and get to work with total confidence.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                    <Card key={idx} className="flex items-center space-x-4 p-4">
                        <div className="p-3 bg-background rounded-lg">
                            <feature.icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <CardContent className="p-0">
                            <h3 className="text-base font-medium text-gray-900">
                                {feature.title}
                            </h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
