import React from 'react';
import Image from 'next/image';

export default function CriteriaPage() {
  const tpeCriteria = [
    { name: 'Future-oriented climate technology', score: '20', desc: "Alignment with CTAF's focus on future-oriented and innovative climate technologies, including climate-tech, AI/AX, digital, clean technology, or other emerging solutions." },
    { name: 'Technical feasibility & maturity', score: '15', desc: 'Technical readiness, operational feasibility, and whether the proposed technology can be tested, adapted, or deployed within the expected CTAF implementation period.' },
    { name: 'Commercialization potential', score: '15', desc: 'Potential pathway toward commercialization, market uptake, business model development, or transition into a bankable or sustainable project.' },
    { name: 'Patent/IP potential', score: '10', desc: 'Potential to use, adapt, generate, or package intellectual property, patentable elements, technology know-how, or Korean climate technology advantages.' },
    { name: 'Demonstration effectiveness', score: '15', desc: 'Potential to generate visible, practical, and evidence-based demonstration outcomes within the CTAF project period.' },
    { name: 'Policy & regulatory linkage', score: '10', desc: 'Relevance to local government policy priorities, regulatory needs, standards, institutional frameworks, or policy improvement opportunities.' },
    { name: 'Social inclusion & job potential', score: '5', desc: 'Potential contribution to local employment, inclusion of vulnerable groups, gender or youth inclusion, and broader socioeconomic benefits.' },
    { name: 'Timeline & insight output', score: '10', desc: 'Likelihood of producing meaningful outputs, implementation insights, lessons learned, or input for CTAF insight reporting within the timeline.' },
  ];

  const creCriteria = [
    { name: 'Country demand & ownership', score: '20', desc: 'Clear demand from the country office, government counterparts, or local partners; degree of country ownership and implementation interest.' },
    { name: 'Regional relevance & strategic fit', score: '15', desc: 'Alignment with regional priorities, country context, GGGI regional strategy, and practical needs across the region.' },
    { name: 'Implementation readiness', score: '15', desc: 'Availability of local partners, institutional arrangements, data, sites, enabling conditions, and realistic implementation pathway.' },
    { name: 'Partnership & cooperation potential', score: '15', desc: 'Potential for regional, cross-country, North-North, North-South, or multi-stakeholder cooperation.' },
    { name: 'Scalability & replication potential', score: '15', desc: 'Potential for scale-up or replication beyond the initial country, including regional or global applicability.' },
    { name: 'Linkage with future financing', score: '10', desc: 'Potential to connect with existing funds, MDB/development finance, climate finance, ODA, private investment, or future CTAF funding.' },
    { name: 'Regional demonstration value', score: '5', desc: 'Potential to generate visible regional learning, showcase outcomes, or practical examples for other countries.' },
    { name: 'Risk & coordination considerations', score: '5', desc: 'Key implementation, coordination, political, regulatory, or stakeholder risks from the regional/country perspective.' },
  ];

  const pscCriteria = [
    { name: 'Future-oriented climate technology & Innovation', score: '20', desc: 'Technology readiness and maturity, innovation, comparative advantage over existing alternatives, technical feasibility, and evidence from previous pilots, demonstrations, or deployments.' },
    { name: 'Future Financing & Sustainability', score: '20', desc: 'Credibility of future financing pathways, potential for commercialization, investment mobilization, government adoption, long-term sustainability, and follow-on project development, including climate-tech, AI/AX, digital, clean technology, or other emerging solutions.' },
    { name: 'Demonstration Feasibility & Implementation Readiness', score: '20', desc: 'Suitability of the demonstration concept and site, implementation arrangements, partner capacity, permitting and operational feasibility, and overall likelihood of successful execution.' },
    { name: 'Scale-up, Replication & Knowledge Generation', score: '15', desc: 'Potential to generate meaningful evidence, support future decision-making, enable national expansion, cross-country replication, or broader technology transfer.' },
    { name: 'Strategic Relevance & Country Ownership', score: '15', desc: 'Relevance to national climate priorities, NDCs, NAPs, sector strategies, and government needs. Degree of country ownership, stakeholder engagement, and alignment with CTAF objectives.' },
    { name: 'Partnership & cooperation potential', score: '10', desc: 'Potential for regional, cross-country, North-North, North-South, or multi-stakeholder cooperation.' },
  ];

  const renderTable = (criteriaList: any[]) => (
    <div className="overflow-x-auto rounded-t-lg shadow-sm border-b border-gray-200">
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#11B59F] text-white text-lg">
            <th className="py-4 px-6 font-semibold w-1/4">Criteria</th>
            <th className="py-4 px-6 font-semibold text-center w-[10%]">Score</th>
            <th className="py-4 px-6 font-semibold w-auto">Evaluation Focus</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-base">
          {criteriaList.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-[#E9F5F3]' : 'bg-[#CDEBE5]'}>
              <td className="py-4 px-6 align-middle font-bold text-gray-800">{item.name}</td>
              <td className="py-4 px-6 align-middle text-center font-semibold text-gray-700">{item.score}</td>
              <td className="py-4 px-6 align-middle leading-relaxed pr-8">{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Top Header Section */}
        <div className="mb-24">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold text-[#11B59F] sm:text-5xl tracking-tight leading-tight">
              Criteria for Project Selection
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              CTAF gives priority to proposals that bring together a credible, advanced climate technology, 
              clear country ownership and local partnerships, measurable results for climate mitigation or 
              adaptation, attention to gender equality and social inclusion where relevant and a realistic 
              path to replication, commercialization or future financing.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              The full scoring matrix and selection criteria used by the two working groups as well as the 
              Project Steering Committee, can be found in the following tables.
            </p>
          </div>
        </div>

        {/* Scoring Matrix Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#11B59F] mb-6">Scoring Matrix</h2>
          <div className="overflow-x-auto rounded-t-lg shadow-sm border-b border-gray-200">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#11B59F] text-white text-lg">
                  <th colSpan={3} className="py-4 px-6 font-semibold text-center border-r border-[#0e9582]">Score Range</th>
                  <th className="py-4 px-6 font-semibold">Assessment</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-base">
                <tr className="bg-[#E9F5F3]">
                  <td className="py-4 px-6 text-center border-r border-[#CDEBE5]">16-20</td>
                  <td className="py-4 px-6 text-center border-r border-[#CDEBE5]">12-15</td>
                  <td className="py-4 px-6 text-center border-r border-[#CDEBE5]">8-10</td>
                  <td className="py-4 px-6 align-middle leading-relaxed">
                    Excellent. Strongly meets the criterion with compelling evidence and minimal weaknesses.
                  </td>
                </tr>
                <tr className="bg-[#CDEBE5]">
                  <td className="py-4 px-6 text-center border-r border-[#A8DCD2]">11-15</td>
                  <td className="py-4 px-6 text-center border-r border-[#A8DCD2]">9-11</td>
                  <td className="py-4 px-6 text-center border-r border-[#A8DCD2]">7-9</td>
                  <td className="py-4 px-6 align-middle leading-relaxed">
                    Good. Adequately meets the criterion with only minor weaknesses or uncertainties.
                  </td>
                </tr>
                <tr className="bg-[#E9F5F3]">
                  <td className="py-4 px-6 text-center border-r border-[#CDEBE5]">6-10</td>
                  <td className="py-4 px-6 text-center border-r border-[#CDEBE5]">5-8</td>
                  <td className="py-4 px-6 text-center border-r border-[#CDEBE5]">4-6</td>
                  <td className="py-4 px-6 align-middle leading-relaxed">
                    Fair. Partially meets the criterion but contains notable weaknesses, gaps, or risks.
                  </td>
                </tr>
                <tr className="bg-[#CDEBE5]">
                  <td className="py-4 px-6 text-center border-r border-[#A8DCD2]">0-5</td>
                  <td className="py-4 px-6 text-center border-r border-[#A8DCD2]">0-4</td>
                  <td className="py-4 px-6 text-center border-r border-[#A8DCD2]">0-3</td>
                  <td className="py-4 px-6 align-middle leading-relaxed">
                    Weak. Does not adequately address the criterion or lacks sufficient evidence.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TPE WG Review Criteria */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#11B59F] mb-6">
            Technology & Policy Expert Working Group<br/>Review Criteria
          </h2>
          {renderTable(tpeCriteria)}
        </div>

        {/* CRE WG Review Criteria */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#11B59F] mb-6">
            Country & Regional Expert Working Group<br/>Review Criteria
          </h2>
          {renderTable(creCriteria)}
        </div>

        {/* PSC Review Criteria */}
        <div>
          <h2 className="text-3xl font-bold text-[#11B59F] mb-6">
            CTAF Project Steering Committee Review Criteria
          </h2>
          {renderTable(pscCriteria)}
        </div>

      </div>
    </div>
  );
}
