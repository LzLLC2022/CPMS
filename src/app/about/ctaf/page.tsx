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
              {/* Top right image (Signing Ceremony) */}
              <Image 
                src="/about-ctaf-1.jpg" 
                alt="Signing Ceremony"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Stuck in the Lab */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
              {/* Bottom left image (Group Photo) */}
              <Image 
                src="/about-ctaf-2.jpg" 
                alt="CTAF Group Photo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
