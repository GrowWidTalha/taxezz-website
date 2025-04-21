import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface DataCapabilityCardProps {
    title: string;
    description: string;
    bgColor: string;
    textColor?: string;
    image: string;
    idx: number;
}

const DataCapabilityCard = ({
    title,
    description,
    bgColor,
    textColor = 'text-zinc-800',
    image,
    idx,
}: DataCapabilityCardProps) => {
    return (
        <div className={`rounded-lg  overflow-hidden ${bgColor} p-8 flex flex-col md:flex-row gap-6 items-center md:items-start w-full`}>
            <div className="md:w-1/2 space-y-4">
                <h3 className={`text-2xl text-left md:text-3xl font-semibold ${textColor}`}>{title}</h3>
                <p className={`${textColor} opacity-90 leading-relaxed max-w-md text-left`}>
                    {description}
                    <Button
                        variant="link"
                        className={`group inline-flex text-left gap-1 px-0 font-semibold transition-colors ${idx === 1 ? 'text-white hover:text-zinc-200' : 'text-zinc-900 hover:text-zinc-700'
                            }`}
                    >
                        Learn more
                        <ArrowRight
                            className={`w-4 h-4 transition-transform group-hover:translate-x-1`}
                        />
                    </Button>
                </p>

            </div>
            <div className="md:w-1/2 flex justify-center">
                <img
                    src={image}
                    alt={title}
                    className="rounded shadow-lg max-w-full h-auto max-h-[300px] object-cover"
                />
            </div>
        </div>
    );
};

export default DataCapabilityCard;
