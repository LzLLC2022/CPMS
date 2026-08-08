import React from 'react';

export default function ClimateTechnologiesPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#11B59F] sm:text-5xl tracking-tight mb-6 max-w-4xl leading-tight">
            Climate Technologies supported<br/>by CTAF
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl leading-relaxed text-justify">
            CTAF is seeking the next generation of climate solutions and is particularly interested 
            in frontier technologies, from smart grids, satellite technologies to AI-driven early 
            warning systems. The focus lies on innovative and future-oriented climate technologies 
            that are practical and ready to make a difference. The technology used in the project 
            should be relevant for at least one of the following windows:
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto rounded-t-lg shadow-sm border-b border-gray-200">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#11B59F] text-white text-lg">
                <th className="py-4 px-6 font-semibold w-1/5">Window</th>
                <th className="py-4 px-6 font-semibold w-2/5">Funding Focus</th>
                <th className="py-4 px-6 font-semibold w-2/5">Examples of fundable Technology</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-base">
              {/* Row 1 */}
              <tr className="bg-[#E9F5F3]">
                <td className="py-6 px-6 align-top">Window 1</td>
                <td className="py-6 px-6 align-top leading-relaxed pr-12">
                  Bankable or sustainable project development, including climate technology pilots, 
                  feasibility, business model testing, and investment pipeline development.
                </td>
                <td className="py-6 px-6 align-middle leading-relaxed pr-12">
                  Agrivoltaics, AI green semiconductor, AI-enabled precision agriculture, Carbon-to-Value/CCU.
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="bg-[#CDEBE5]">
                <td className="py-6 px-6 align-top">Window 2</td>
                <td className="py-6 px-6 align-top leading-relaxed pr-12">
                  Green Climate Fund (GCF) or equivalent project development, including concept preparation, 
                  technical validation, MRV design, and project preparation for climate finance.
                </td>
                <td className="py-6 px-6 align-middle leading-relaxed pr-12">
                  Hybrid retrofit for legacy transport, AI-enabled point-of-purification for safe water access.
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="bg-[#E9F5F3]">
                <td className="py-6 px-6 align-top">Window 3</td>
                <td className="py-6 px-6 align-top leading-relaxed pr-12">
                  Policy and regulatory framework, capacity building, human-resource development, 
                  and further internationalization of CTAF.
                </td>
                <td className="py-6 px-6 align-middle leading-relaxed pr-12">
                  AI-NPU mobility, hydrogen mobility, fund internationalization, policy and regulatory support.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
