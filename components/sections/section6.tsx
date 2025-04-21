import { Card, CardContent } from "@/components/ui/card";
import { TextAnimate } from "../magicui/text-animate";

const bentoItems = [
    {
        bg: "bg-green-100",
        title: "Keep Every Possible Investor Deduction",
        description:
            "We forensically comb through your books to uncover every possible tax deduction - from granular property depreciation schedules to advanced Section 1031 exchange strategies. <br /> <br /> That means you get to pocket more of the cash flow from your hard-earned investment properties.",
    },
    {
        bg: "bg-orange-100",
        title: "Wave Goodbye to Tax Season Headaches",
        description:
            "Filing season is a breeze when you have our team of real estate CPAs handling all the complex reporting and filings. No more frantic last-minute scrambles or worrying about IRS audits - just send over your documents and enjoy the off-season.",
    },
];

const bentoItems2 = [
    {
        bg: "bg-purple-100",
        title: "Stay One Step Ahead of Ever-Changing Tax Laws",
        description:
            "With tax regulations in constant flux, it takes a dedicated real estate tax expert to keep you compliant and maximize your savings. Our advisors provide year-round strategic guidance, ensuring you capitalize on the latest deductions, credits, and wealth-building opportunities (think Opportunity Zones, loss carrybacks, and more).",
    },
    {
        bg: "bg-teal-100",
        title: "The Customized Wealth-Building Roadmap",
        description:
            "We build a comprehensive financial plan tailored to your unique goals, whether that's scaling your rental portfolio, perfecting your ground-up development model, or protecting the equity in your commercial real estate assets. <br /> <br /> Know exactly where your money is going and how to optimize every dollar for maximum returns.",
    },
]

export default function BentoGridSection() {
    return (
        <section className="px-4 md:px-12 py-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto text-center space-y-6 flex flex-col items-center">
                    <h2 className='bg-teal-100 decorated-all-corners inline-block px-4 py-1 text-xl font-semibold'>
                        Strategic Planning
                    </h2>
                    <TextAnimate className="text-4xl md:text-5xl font-semibold text-gray-900" delay={0.5} animation="slideUp" by="character">
                        Why Real Estate Investors Choose Us
                    </TextAnimate>
                    <TextAnimate className="text-4xl md:text-5xl font-semibold text-gray-900" delay={0.5} animation="slideUp" by="character">
                        And What They Walk Away With
                    </TextAnimate>
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
                                <p dangerouslySetInnerHTML={{ __html: item.description }} className="text-gray-700 text-lg" />
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
                                <p dangerouslySetInnerHTML={{ __html: item.description }} className="text-gray-700 text-lg" />

                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
