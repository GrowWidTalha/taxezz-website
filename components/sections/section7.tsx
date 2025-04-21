import React from 'react';
import { TextAnimate } from '../magicui/text-animate';

const RealEstateTaxHero = () => {
    return (
        <section className="w-full px-4 py-16 text-center bg-white">
            <TextAnimate className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-4" delay={0.5} animation="slideUp" by="character">

                Tax expertise for your unique real estate needs
            </TextAnimate>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-10">
                Whether you're scaling a residential portfolio, developing new properties,
                or managing commercial investments, our specialized tax solutions drive success:
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                {[
                    'Portfolio Investors',
                    'Development Firms',
                    'Commercial Owners',
                    'Real Estate Syndicates',
                    'Family Offices',
                ].map((label) => (
                    <button
                        key={label}
                        className="bg-green-900 text-white font-medium px-6 py-3 rounded-md hover:bg-green-800 transition"
                    >
                        {label}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default RealEstateTaxHero;
