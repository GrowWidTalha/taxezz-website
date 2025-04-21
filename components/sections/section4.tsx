import Image from "next/image";

export default function GenAIAccountingSection() {
    return (
        <section className="px-4 md:px-12 py-12 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Text Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                        Transforming how <br />accounting is done
                    </h2>
                    <p className="text-gray-600 mb-6 ">
                        Trullion’s platform uniquely uses GenAI for strategic accounting decisions like:
                    </p>
                    <ul className="space-y-4 text-gray-700 max-w-sm">
                        <li className="flex items-start gap-2 ">
                            <span className="text-lime-500 ">•</span>
                            <span>
                                Analyzing uploaded financial documents to provide tailored interpretations of IFRS policies.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-lime-500">•</span>
                            <span>
                                Answering complex financial queries, such as identifying and evaluating embedded leases of a certain value.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-lime-500 ">•</span>
                            <span>
                                Advising accounting leaders on updated compliance requirements and financial standards.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Right Side: Image of the UI */}
                <div className="flex justify-center bg-[#E9EFE7] p-10 rounded-2xl">
                    <div className="relative w-full max-w-md">
                        <Image
                            src={"/section3img.svg"}
                            alt="GenAI accounting UI screenshot"
                            className="rounded-2xl shadow-lg"
                            width={400}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
