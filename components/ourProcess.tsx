import React from 'react';
import DataCapabilityCard from './dataCapibilityCard';

const DataCapabilitiesSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            {/* <h2 className="text-center text-3xl md:text-4xl font-bold text-zinc-800 mb-12">
                Under the hood: explore our data capabilities
            </h2> */}
            <div className="flex flex-col gap-6 w-full">
                <DataCapabilityCard
                    idx={0}
                    title="Portfolio Tax Strategy"
                    description="Transform your residential portfolio with strategic tax planning, entity structuring, and multi-state compliance solutions designed for growth."
                    bgColor="bg-[#DFE6D9]"
                    image="/data-extraction.svg"
                />

                <DataCapabilityCard
                    idx={1}
                    title="Development Tax Planning"
                    description="Navigate complex development projects with confidence through strategic tax structuring, cost segregation, and opportunity zone optimization."
                    bgColor="bg-[#00513C]"
                    textColor="text-white"
                    image="/data-validation.svg"
                />

                <DataCapabilityCard
                    idx={2}
                    title="Commercial Property Tax"
                    description="Protect and enhance your commercial property investments with sophisticated tax strategies and long-term wealth preservation planning."
                    bgColor="bg-[#D1E0C5]"
                    image="/data-reconciliation.svg"
                />
            </div>
        </section>
    );
};

export default DataCapabilitiesSection;
