import React from 'react';

export default function ProjectFundingPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl font-extrabold text-[#11B59F] sm:text-5xl tracking-tight mb-8">
          Project Funding offered by CTAF
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl leading-relaxed mb-16">
          CTAF splits the projects it funds into three types of projects. Pre-joint Study Project, 
          Demonstration Projects and Regional Strategy Initiative Projects:
        </p>

        {/* Three Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#11B59F] mb-6">
              Pre-joint Study Project<br/>(PJSP)
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-4 text-justify">
              <p>
                Pre-joint Studies lay the groundwork for future demonstrations and run for 6 
                months to a year. Once a pre-joint study is successfully completed, it can be 
                reassessed by the CTAF Steering Committee for selection as a full Demonstration 
                Project, or connected to other climate finance sources, such as the Green 
                Climate Fund (GCF). The likelihood of transitioning to the demonstration project 
                is approximately 85%.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#11B59F] mb-6">
              Demonstration Project<br/>(DMP)
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-4 text-justify">
              <p>
                Demonstration Projects test technology directly in the field and run for 1 to 
                1.5 years. A successful demonstration project proves the technology works under 
                real conditions, building the evidence needed to attract larger-scale investment. 
                From there, projects are expected to secure further funding with the support of 
                the CTAF Secretariat, for example, through GGGI’s internal funds, such as the 
                Korea Green New Deal Trust Fund, external sources like the World Bank, or 
                government and donor-country financing.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#11B59F] mb-6">
              Regional Strategy<br/>Initiative Project (RSIP)
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-4 text-justify">
              <p>
                While Pre-joint Study and Demonstration Projects are managed by GGGI Country 
                Offices, Regional Strategy Initiative Projects are managed by GGGI’s Regional 
                Directorates. Projects may run for 6 months or 1 year. These projects contribute 
                to the development of region-specific strategies and strategies for specific future 
                technology fields such as AI, NPU, Hydrogen, Aerospace, etc. Their outputs then 
                strategically inform pre-joint study and Demonstration projects across the region.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
