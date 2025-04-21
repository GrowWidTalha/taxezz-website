import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Building2, Globe, Activity, RefreshCcw, UserCheck } from "lucide-react";
import { TextAnimate } from "../magicui/text-animate";

const features = [
    {
        icon: Briefcase, // Replace with appropriate icon
        title: "Proactive tax planning from day one",
    },
    {
        icon: Building2, // Replace with appropriate icon
        title: "Strategic entity structuring for optimal tax efficiency",
    },
    {
        icon: Globe, // Replace with appropriate icon
        title: "Seamless multi-state compliance management",
    },
    {
        icon: Activity, // Replace with appropriate icon
        title: "Real-time tax position monitoring",
    },
    {
        icon: RefreshCcw, // Replace with appropriate icon
        title: "Quarterly strategy reviews and adjustments",
    },
    {
        icon: UserCheck, // Replace with appropriate icon
        title: "Direct access to senior tax professionals",
    },
];

export default function ModernAccountingWorkflows() {
    return (
        <section className="px-4 md:px-12 py-12 bg-muted">
            <div className="max-w-7xl mx-auto text-center space-y-6 flex flex-col items-center">
                <h2 className='bg-teal-100 decorated-all-corners inline-block px-4 py-1 text-xl font-semibold'>
                    Modern Accounting Workflows</h2>
                <TextAnimate className="text-4xl md:text-5xl font-semibold text-gray-900" delay={0.5} animation="slideUp" by="character">
                    It's the expertise that
                </TextAnimate>
                <TextAnimate className="text-4xl md:text-5xl font-semibold text-gray-900" delay={0.5} animation="slideUp" by="character">
                    makes your investments thrive
                </TextAnimate>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Our tax professionals deliver
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
