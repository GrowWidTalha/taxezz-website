import React from 'react';
import DataCapabilityCard from './dataCapibilityCard';

const DataCapabilitiesSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-zinc-800 mb-12">
                Under the hood: explore our data capabilities
            </h2>
            <div className="flex flex-col gap-6 w-full">
                <DataCapabilityCard
                    idx={0}
                    title="Data Extraction"
                    description="Leverage advanced AI and computer vision technologies to transform unstructured data from PDFs into structured, actionable formats efficiently and accurately. "
                    bgColor="bg-[#DFE6D9]"
                    image="/data-extraction.svg"
                />

                <DataCapabilityCard
                    idx={1}
                    title="Data Validation"
                    description="Enhance data integrity across documents with advanced mathematical checks, version comparison, and discrepancy highlighting."
                    bgColor="bg-[#00513C]"
                    textColor="text-white"
                    image="/data-validation.svg"
                />

                <DataCapabilityCard
                    idx={2}
                    title="Data Reconciliation"
                    description="Automate manual matching exercises like vouching and tracing using simple rule-based logic."
                    bgColor="bg-[#D1E0C5]"
                    image="/data-reconciliation.svg"
                />
            </div>
        </section>
    );
};

export default DataCapabilitiesSection;
