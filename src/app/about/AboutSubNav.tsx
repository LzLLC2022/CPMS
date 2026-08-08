'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
  {
    title: 'About CTAF',
    links: [
      { name: 'CTAF?', href: '/about/ctaf' },
      { name: 'Organizational Structure', href: '/about/structure' },
      { name: 'Logo & Mascot', href: '/about/logo' },
    ]
  },
  {
    title: 'Project Submission',
    links: [
      { name: 'Project Funding offered by CTAF', href: '/about/funding' },
      { name: 'Climate Technologies supported by CTAF', href: '/about/technologies' },
      { name: 'Project Proposal Submission Process', href: '/about/submission-process' },
      { name: 'Project Proposal Eligibility', href: '/about/eligibility' },
    ]
  },
  {
    title: 'Project Selection',
    links: [
      { name: 'CTAF’s Selection Process', href: '/about/selection-process' },
      { name: 'Criteria for Project Selection', href: '/about/criteria' },
    ]
  }
];

export default function AboutSubNav() {
  const pathname = usePathname();
  
  if (pathname === '/about') return null; // Do not show on the main About page

  // Find the category that contains the current pathname
  const currentCategory = categories.find(cat => 
    cat.links.some(link => link.href === pathname)
  );

  if (!currentCategory) return null;

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col pt-6">
          {/* Parent Menu Title */}
          <div className="flex items-center justify-center text-lg font-bold text-gray-900 mb-6 whitespace-nowrap">
            {currentCategory.title}
          </div>

          {/* Sibling Tabs */}
          <div className="flex justify-center gap-8 overflow-x-auto">
            {currentCategory.links.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`pb-4 px-2 text-[15px] font-medium whitespace-nowrap transition-colors border-b-2 ${
                    isActive 
                      ? "border-[#11B59F] text-[#11B59F]" 
                      : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
