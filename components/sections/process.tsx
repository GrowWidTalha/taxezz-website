import React from 'react'
import DataCapabilitiesSection from '../ourProcess'

const Process = () => {
    return (
        <section className=' flex flex-col w-full items-center justify-center text-center px-4 bg-white'>
            <div className=' w-full space-y-4'>
                <h2 className='bg-brand decorated-all-corners inline-block px-4 py-1 text-xl font-semibold'>
                    The Trullion Platform
                </h2>
                <h1 className='text-3xl  sm:text-4xl font-bold'>
                    Maximizing impact today,<br />
                    evolving for tomorrow
                </h1>
                <p className="text-base sm:text-lg">
                    Tap into Trullion’s advanced data capabilities and GenAI to automate workflows for processes like lease accounting, audits, and revenue recognition on a single platform. Simplify complex tasks, enhance accuracy, and maintain compliance with regulatory standards effortlessly.
                </p>
            </div>
            {/* <div className='mt-8'>
                <WorkflowDashboard />
            </div> */}

            <DataCapabilitiesSection />
        </section>
    )
}

export default Process
