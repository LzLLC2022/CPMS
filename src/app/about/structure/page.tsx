import React from 'react';
import Image from 'next/image';

export default function OrganizationalStructurePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            {/* Top Left Image */}
            <Image 
              src="/about-structure-1.jpg" 
              alt="CTAF Secretariat"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h1 className="text-4xl font-extrabold text-primary-600 sm:text-5xl tracking-tight mb-4">
              CTAF’s Organizational<br/>Structure
            </h1>
            <h2 className="text-2xl font-bold text-primary-500">The CTAF Secretariat</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              CTAF’s heart is its Secretariat located in the GGGI Headquarters in Seoul, South Korea. 
              The CTAF Secretariat keeps everything running: managing budgets, administration and reporting, 
              while supporting projects from start to finish. It also shares results and insights globally, 
              builds connections with other funds and works continuously to expand CTAF’s network and reach.
            </p>
          </div>
        </div>
      </div>

      {/* Teal Section: Working Groups */}
      <div className="bg-[#11B59F] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Two Expert Working Groups</h2>
            <p className="text-lg opacity-90 max-w-4xl">
              The CTAF Secretariat is supported by two independent expert working groups, which review 
              and select all submitted projects. Their role is to ensure that every project CTAF funds 
              is innovative, feasible and impactful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Technology & Policy<br/>Expert Working Group (TPE W/G)</h3>
              <p className="opacity-90 leading-relaxed text-lg">
                This expert working group assesses whether a proposed technology is feasible and aligned 
                with national climate policy. It reviews climate impact, safeguards and partner capacity. 
                The group brings together 14 experts from research, industry, climate policy and business 
                and meets monthly.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Country & Regional<br/>Expert Working Group (CRE W/G)</h3>
              <p className="opacity-90 leading-relaxed text-lg">
                The Country and Regional Expert Working Group ensures that every project fits its local context. 
                It reviews regional conditions, national sustainability priorities and stakeholder readiness 
                and confirms government counterparts and local partners. The group meets every two months 
                and is composed of GGGI regional office representatives, North-North and North-South cooperation 
                experts and specialists from Korean domestic institutions, totaling 11 members.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Diagram Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
          <div className="lg:col-span-2 relative w-full h-[400px] lg:h-[600px] bg-gray-50 rounded-2xl flex items-center justify-center p-4">
            {/* Diagram Image */}
            <Image 
              src="/about-structure-diagram.png" 
              alt="Organizational Structure Diagram"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>
          <div className="lg:col-span-1">
            <p className="text-gray-600 text-lg leading-relaxed">
              Participants submit project proposals, which are then reviewed by the Technology 
              and Policy Working Group and the Country and Regional Expert Working Group before 
              undergoing a final review by the Project Steering Committee. Throughout the process, 
              the CTAF Secretariat provides support.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary-600">Project Steering Committee (PSC)</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The CTAF Project Steering Committee is CTAF’s highest governing body, meets quarterly 
              and is made up of senior, well-established experts in their fields. The CTAF Project 
              Steering Committee has the final say on which projects receive funding. It is chaired 
              by GGGI’s Deputy Director General Malle Fofana and the Director General for Research 
              Outcomes and Innovation at MSIT Lee Eun-young, supported by nine additional members 
              with senior experience in science, technology, and international cooperation.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary-600">Participants</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              CTAF participants are organizations whose project proposals have been reviewed and 
              selected for funding. For the 2026 cohort, all participating projects were submitted 
              by GGGI Country Offices through Regional Directorates.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
