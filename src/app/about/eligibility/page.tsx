import React from 'react';

export default function EligibilityPage() {
  const keyPoints = [
    {
      num: 1,
      title: 'Ground your technology in a real problem.',
      desc: 'Your proposal must identify a specific country problem that is solved with your technology, a pilot location and a clear demand from a local counterpart.'
    },
    {
      num: 2,
      title: 'Make your impact trackable.',
      desc: 'Show how you will measure success. What are the quantifiable indicators and baseline assumptions? What is your MRV approach?'
    },
    {
      num: 3,
      title: "Define every partner's role.",
      desc: 'Do not just list partners by name, be specific. Define roles, who is responsible for which decisions and what each partner contributes - whether that is funding, expertise, resources or other things.'
    },
    {
      num: 4,
      title: 'Think beyond the pilot.',
      desc: "Show your project's route to larger funding sources like MDBs, commercialization, public program adaptation or replication."
    },
    {
      num: 5,
      title: 'Incomplete submissions are not reviewed.',
      desc: 'Only fully completed forms with all required components are considered. Drafts and incomplete templates will not be accepted.'
    },
    {
      num: 6,
      title: 'Take patents & collaboration into account.',
      desc: 'Consider the potential for patents to be utilized or identified during project implementation, while strengthening collaboration with other GGGI Country Offices.'
    }
  ];

  const pathwaySteps = [
    'Climate Challenge',
    'Technology Solution',
    'Demo.',
    'Evidence Generation',
    'Scale-up & Replication',
    'Future Financing',
    'Long-Term Climate Impact'
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Top Header Section - Teal Background */}
      <div className="bg-[#11B59F] text-white py-16 sm:py-24" style={{ transform: 'skewY(-2deg)', transformOrigin: 'top left', paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ transform: 'skewY(2deg)' }}>
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight mb-6">
            Project Proposal Eligibility
          </h1>
          <div className="space-y-4 max-w-4xl text-lg sm:text-xl leading-relaxed text-justify opacity-95">
            <p>
              CTAF welcomes proposals from a wide range of organizations, including government agencies, 
              research institutes, universities, NGOs, international organizations, private sector entities, GGGI 
              country offices and other autonomous institutes with a clear role in climate technology development, 
              piloting, or scale-up.
            </p>
            <p className="font-semibold mt-4">
              Please note: individual applicants are not eligible to apply.
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section - Key Points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white relative z-10 -mt-12 rounded-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#11B59F] mb-16">
          Key Points to consider before applying to CTAF
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {keyPoints.map((point) => (
            <div key={point.num} className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <span className="text-8xl sm:text-9xl font-extrabold text-[#11B59F] leading-none" style={{ fontFamily: 'sans-serif' }}>
                  {point.num}
                </span>
              </div>
              <div className="pt-2 sm:pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Pathway (Teal Background) */}
      <div className="bg-[#11B59F] text-white py-16 sm:py-24" style={{ transform: 'skewY(-2deg)', transformOrigin: 'bottom right' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ transform: 'skewY(2deg)' }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">
            Project proposals should demonstrate a credible pathway from:
          </h2>
          
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-2">
            {pathwaySteps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Chevron Shape representing a step */}
                <div className="flex-1 min-w-[120px] max-w-[160px] h-24 bg-white text-[#11B59F] font-bold text-sm sm:text-base flex items-center justify-center text-center px-4 py-2 relative"
                     style={{ 
                       clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)',
                       marginLeft: index === 0 ? '0' : '-15px'
                     }}>
                  {step}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
