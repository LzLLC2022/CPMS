import React from 'react';
import Link from 'next/link';

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ABOUT_SECTIONS = [
  {
    title: 'About CTAF',
    description: 'Learn about the Climate Technology Accelerator Fund, our organizational structure, and our visual identity.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    links: [
      { name: 'CTAF?', href: '/about/ctaf' },
      { name: 'Organizational Structure', href: '/about/structure' },
      { name: 'Logo & Mascot', href: '/about/logo' },
    ]
  },
  {
    title: 'Project Submission',
    description: 'Discover funding opportunities, supported climate technologies, eligibility criteria, and submission processes.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    links: [
      { name: 'Project Funding offered by CTAF', href: '/about/funding' },
      { name: 'Climate Technologies supported by CTAF', href: '/about/technologies' },
      { name: 'Project Proposal Submission Process', href: '/about/submission-process' },
      { name: 'Project Proposal Eligibility', href: '/about/eligibility' },
      { name: 'Key Points to consider before applying', href: '/about/key-points' },
    ]
  },
  {
    title: 'Project Selection',
    description: 'Understand how projects are evaluated, our selection process, and the criteria we use for funding.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    links: [
      { name: 'CTAF’s Selection Process', href: '/about/selection-process' },
      { name: 'Criteria for Project Selection', href: '/about/criteria' },
    ]
  }
];

export default function AboutIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            About CTAF
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to know about the Climate Technology Accelerator Fund, from our mission to our funding processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ABOUT_SECTIONS.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="p-8 flex-1">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <Link 
                      key={linkIdx} 
                      href={link.href}
                      className="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-primary-600 shrink-0 mt-0.5 transition-colors" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700 transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
