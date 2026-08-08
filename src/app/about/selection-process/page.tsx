import React from 'react';
import Image from 'next/image';

export default function SelectionProcessPage() {
  const phases = [
    {
      num: 1,
      title: 'Initial Check',
      desc: 'The CTAF Secretariat reviews every submitted proposal for completeness and strategic fit. Only proposals that pass this initial check move forward.'
    },
    {
      num: 2,
      title: 'Review by the Technology & Policy Expert Working Group',
      desc: 'The Technology and Policy Expert Working Group assesses whether the proposed technology is credible, scalable and aligned with national climate policy.'
    },
    {
      num: 3,
      title: 'Review by the Country & Regional Expert Working Group',
      desc: 'Approved proposals move to the Country and Regional Expert Working Group, which reviews regional context, national sustainability priorities and stakeholder readiness.'
    },
    {
      num: 4,
      title: 'Final Approval by the CTAF Project Steering Committee',
      desc: 'Projects that clear both working groups go to the CTAF Project Steering Committee, which makes the final funding decision and determines whether the project follows the demonstration or pre-joint study track.'
    },
    {
      num: 5,
      title: 'Project Implementation',
      desc: 'Selected projects are supported by the CTAF Secretariat throughout implementation.'
    },
    {
      num: 6,
      title: 'Completion & Further Funding',
      desc: '', // We will render the detailed sections separately for #6
      detailed: (
        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Completed Regional Strategy Initiative Projects (RSI)</h4>
            <p className="text-gray-600 leading-relaxed text-justify">
              The results and learnings produced by Regional Strategy Initiative Projects are then used to inform strategy and further development of Pre-joint Study and Demonstration Projects in the region.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Completed Pre-Joint Study Project (PJSP)</h4>
            <p className="text-gray-600 leading-relaxed text-justify">
              Pre-joint Study Projects run for up to one year, with a possible six-month extension. Upon successful completion, projects have approximately an 85% chance of being selected as a demonstration project. The CTAF Secretariat also supports projects that have completed their pre-joint study successfully in securing follow-on funding from GGGI internal and external sources.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Completed Demonstration Projects (DMP)</h4>
            <p className="text-gray-600 leading-relaxed text-justify">
              The CTAF Secretariat supports successfully completed projects to attract follow-on financing, whether from GGGI's internal funds, external finance institutions such as the World Bank or the Green Climate Fund (GCF) or government and donor-country support.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        <h1 className="text-4xl font-extrabold text-[#11B59F] sm:text-5xl tracking-tight mb-16">
          CTAF’s Selection Process
        </h1>

        {/* Diagram Section */}
        <div className="mb-24 bg-gray-50 rounded-2xl p-4 sm:p-8 border border-gray-100 shadow-sm flex items-center justify-center w-full">
          <Image 
            src="/about-selection-diagram.png" 
            alt="CTAF Secretariat support diagram"
            width={1600}
            height={1000}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Phases Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          {phases.map((phase) => (
            <div key={phase.num} className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="text-8xl sm:text-9xl font-extrabold text-[#11B59F] leading-none" style={{ fontFamily: 'sans-serif' }}>
                  {phase.num}
                </span>
              </div>
              <div className="pt-2 sm:pt-4 flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {phase.title}
                </h3>
                {phase.desc && (
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {phase.desc}
                  </p>
                )}
                {phase.detailed && phase.detailed}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
