import React from 'react';
import Image from 'next/image';

export default function AboutCtafPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-primary-900 sm:text-5xl tracking-tight">
            About CTAF
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-primary-700 mx-auto">
            Bridging the gap between climate technology development and real-world deployment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        
        {/* Section 1: About CTAF */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 text-gray-600 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-primary-600 mb-6">About CTAF</h2>
            <p>
              The Climate Technology Accelerator Fund (CTAF) was launched in April 2026 by the 
              Global Green Growth Institute (GGGI) and South Korea’s Ministry of Science and ICT 
              (MSIT). It is based at GGGI’s headquarters in Seoul.
            </p>
            <p>
              CTAF takes innovative public climate technologies and brings them to the GGGI 
              member and partner countries that need them most. By supporting real-world 
              demonstrations on the ground, the fund helps these technologies prove their 
              commercial value and helps to connect them with larger international financing, 
              such as the Green Climate Fund (GCF).
            </p>
            <p>
              Backed by a commitment of KRW 21 billion (approximately USD 14.7 million) by the 
              MSIT over seven years, CTAF will support at least three new projects every year - 
              turning promising technologies into solutions and opening the door to the investment 
              needed to scale them.
            </p>
            <p>
              CTAF aims to grow into a larger multi-donor fund with broader participation from 
              countries and partner institutions and will continue working towards this mission.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
              {/* Placeholder for the top right image (Signing Ceremony) */}
              <div className="text-center text-gray-400 p-6">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium">Signing Ceremony Image</p>
                <p className="text-xs mt-1">Please replace with actual image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Stuck in the Lab */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
              {/* Placeholder for the bottom left image (Group Photo) */}
              <div className="text-center text-gray-400 p-6">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-sm font-medium">Group Photo Image</p>
                <p className="text-xs mt-1">Please replace with actual image</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-primary-600 mb-6 leading-snug">
              Stuck in the Lab, needed in the Field:<br/>
              The Global Issue solved with CTAF
            </h2>
            <p>
              Some of the world’s most promising climate technologies could help communities most 
              affected by climate change adapt and build resilience. But too often, these technologies 
              never reach the communities that need them most.
            </p>
            <p>
              Without the right investment and path to scale, even the strongest innovations remain 
              stuck in research and development. The challenge is proving its value to investors 
              and getting it to the places where it’s needed most.
            </p>
            <p>
              The Climate Technology Accelerator Fund (CTAF) was created to bridge this gap 
              between climate technology development and real-world deployment. By supporting 
              pilot projects in climate-vulnerable countries, CTAF helps prove what these technologies 
              can do and builds the case for the financing and investment needed to take them further.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
