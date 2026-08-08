import React from 'react';
import Link from 'next/link';

export default function SubmissionProcessPage() {
  const steps = [
    {
      num: 1,
      title: 'Submit the One-Page Proposal Form',
      desc: (
        <div className="space-y-5 text-left">
          <p>
            Submit a new proposal to the Climate Technology Accelerator Fund. Click the button below to start your application process. You will be guided through a step-by-step form.
          </p>
          <Link 
            href="/proposal" 
            className="inline-block w-full sm:w-auto px-6 py-3 bg-[#11B59F] hover:bg-[#0e9582] text-white text-center rounded-lg font-medium transition-colors"
          >
            Go to Submission
          </Link>
        </div>
      )
    },
    {
      num: 2,
      title: 'Review by the Two Working Groups',
      desc: 'The Technology and Policy Expert Working Group and the Country and Regional Expert Working Group review the submission and shortlist the most promising ideas.'
    },
    {
      num: 3,
      title: 'Submit the Five-Page Proposal Form & the Basic Budget Plan',
      desc: 'Shortlisted projects are invited to submit the filled-out Five-Page Proposal Form and the Basic One-Page Budget Plan Form.'
    },
    {
      num: 4,
      title: 'Final Review',
      desc: 'The Project Steering Committee selects the final projects and places each one either on the Demonstration Project track.'
    },
    {
      num: 5,
      title: 'Submit the Project Implementation Plan & the Detailed Budget Plan',
      desc: 'The final selected projects need to submit the filled-out Detailed Project Implementation Plan as well as the Detailed Budget Plan Form.'
    },
    {
      num: 6,
      title: 'Project Start & Implementation',
      desc: 'Continuously supported by CTAF Secretariat.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-extrabold text-[#11B59F] sm:text-5xl tracking-tight">
            Project Proposal Submission Process
          </h1>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-[#11B59F] sm:-ml-0.5 rounded-full opacity-20"></div>

          <div className="space-y-12 sm:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.num} 
                className={`relative flex flex-col sm:flex-row items-center ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Number Circle (Center for Desktop, Left for Mobile) */}
                <div className="absolute left-0 sm:left-1/2 -ml-3 sm:-ml-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#11B59F] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg z-10 border-4 border-white">
                  {step.num}
                </div>

                {/* Content Box */}
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                  index % 2 === 0 ? 'sm:pr-16 text-left sm:text-right' : 'sm:pl-16 text-left'
                }`}>
                  <div className="bg-[#F4FBF9] p-6 sm:p-8 rounded-2xl shadow-sm border border-[#E9F5F3] hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-[#11B59F] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
