import React from 'react';
import Image from 'next/image';

export default function LogoAndMascotPage() {
  return (
    <div className="min-h-screen bg-white pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-[#11B59F] sm:text-5xl tracking-tight">
            CTAF Logo & Mascot
          </h1>
          <h2 className="text-2xl font-semibold text-[#11B59F] opacity-80">
            Symbolism & Meaning of the Logo
          </h2>
        </div>

        {/* Logo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Logo Image */}
          <div className="relative w-full h-[250px] sm:h-[350px] bg-white flex items-center justify-center">
            <Image 
              src="/about-logo-ctaf.png" 
              alt="CTAF Logo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Logo Details Table */}
          <div className="flex flex-col">
            <div className="border-b border-gray-300 py-4 flex flex-col sm:flex-row sm:gap-8">
              <div className="w-full sm:w-1/3 font-bold text-[#11B59F] mb-2 sm:mb-0">Letter C</div>
              <div className="w-full sm:w-2/3 text-gray-700">Represents CTAF & Climate</div>
            </div>
            <div className="border-b border-gray-300 py-4 flex flex-col sm:flex-row sm:gap-8">
              <div className="w-full sm:w-1/3 font-bold text-[#11B59F] mb-2 sm:mb-0">Innovation &<br/>Acceleration</div>
              <div className="w-full sm:w-2/3 text-gray-700">Fluid lines in motion<br/>capturing forward movement</div>
            </div>
            <div className="border-b border-gray-300 py-4 flex flex-col sm:flex-row sm:gap-8">
              <div className="w-full sm:w-1/3 font-bold text-[#11B59F] mb-2 sm:mb-0">Collaboration &<br/>Connection</div>
              <div className="w-full sm:w-2/3 text-gray-700">Multiple lines that move together<br/>symbolize partnership &<br/>connection</div>
            </div>
            <div className="border-b border-gray-300 py-4 flex flex-col sm:flex-row sm:gap-8 items-center">
              <div className="w-full sm:w-1/3 font-bold text-[#11B59F] mb-4 sm:mb-0">GGGI Alignment</div>
              <div className="w-full sm:w-2/3 text-gray-700 flex items-center gap-4">
                <div className="relative w-24 h-12">
                  <Image 
                    src="/about-logo-gggi.png"
                    alt="GGGI and CTAF alignment"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div>
                  <p>Same color</p>
                  <p>Same font</p>
                  <p>Cube structure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mascot Section */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          {/* Mascot Details */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold text-[#11B59F] mb-6">Why a Frog?</h2>
            <div className="border-b border-gray-300 py-4 flex flex-col sm:flex-row sm:gap-8">
              <div className="w-full sm:w-1/3 font-bold text-[#11B59F] mb-2 sm:mb-0">Innovation</div>
              <div className="w-full sm:w-2/3 text-gray-700">Frog's metamorphosis reflects adaptability and growth</div>
            </div>
            <div className="border-b border-gray-300 py-4 flex flex-col sm:flex-row sm:gap-8">
              <div className="w-full sm:w-1/3 font-bold text-[#11B59F] mb-2 sm:mb-0">Bridging Gaps</div>
              <div className="w-full sm:w-2/3 text-gray-700">Frogs easily leap from one place to another, just like CTAF helps technology leap from the laboratory into the field</div>
            </div>
            <div className="border-b border-gray-300 py-4 flex flex-col sm:flex-row sm:gap-8">
              <div className="w-full sm:w-1/3 font-bold text-[#11B59F] mb-2 sm:mb-0">Climate &<br/>Sustainability</div>
              <div className="w-full sm:w-2/3 text-gray-700">Frogs are bioindicators symbolizing environmental health</div>
            </div>
            <div className="border-b border-gray-300 py-4 flex flex-col sm:flex-row sm:gap-8">
              <div className="w-full sm:w-1/3 font-bold text-[#11B59F] mb-2 sm:mb-0">Prosperity</div>
              <div className="w-full sm:w-2/3 text-gray-700">Thriving on land & water, frogs symbolize wisdom and prosperity</div>
            </div>
          </div>

          {/* Mascot Image Placeholder */}
          <div className="hidden lg:block">
            {/* The image is absolutely positioned to rest on the bottom bar */}
          </div>
        </div>

      </div>

      {/* Mascot Image (Absolute to rest on the bar) */}
      <div className="absolute bottom-0 right-10 lg:right-32 w-[250px] sm:w-[350px] h-[350px] sm:h-[450px] z-20 pointer-events-none">
        <Image 
          src="/about-logo-mascot.png" 
          alt="CTAF Frog Mascot"
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 1024px) 250px, 350px"
        />
      </div>

      {/* Bottom Green Bar */}
      <div className="w-full h-12 sm:h-16 bg-[#11B59F] relative z-10"></div>

    </div>
  );
}
