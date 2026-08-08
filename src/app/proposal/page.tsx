'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProposalMainPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleRegistrationClick = () => {
    router.push('/proposal/registration');
  };

  const handleStatusCheckClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !regNumber || !pinCode) {
      alert('Please fill in all fields.');
      return;
    }
    
    const queryParams = new URLSearchParams({
      email,
      regNumber,
      pinCode,
    }).toString();
    
    router.push(`/proposal/status?${queryParams}`);
  };

  return (
  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto w-full pt-4 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* Left Side - Information Menu */}
      <div className="flex-1 flex flex-col sm:flex-row lg:flex-col gap-6 lg:pr-4">
        {/* Project Submission Card */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm p-8 flex flex-col transition-shadow hover:shadow-md">
          <div className="w-12 h-12 bg-[#E9F5F3] text-[#11B59F] rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Submission</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Discover funding opportunities, supported climate technologies, eligibility criteria, and submission processes.
          </p>
          <div className="flex flex-col gap-4 mt-auto">
            <Link href="/about/funding" className="flex items-center text-gray-600 hover:text-[#11B59F] transition-colors group">
              <span className="mr-3 text-gray-400 group-hover:text-[#11B59F]">→</span> Project Funding offered by CTAF
            </Link>
            <Link href="/about/technologies" className="flex items-center text-gray-600 hover:text-[#11B59F] transition-colors group">
              <span className="mr-3 text-gray-400 group-hover:text-[#11B59F]">→</span> Climate Technologies supported by CTAF
            </Link>
            <Link href="/about/submission-process" className="flex items-center text-gray-600 hover:text-[#11B59F] transition-colors group">
              <span className="mr-3 text-gray-400 group-hover:text-[#11B59F]">→</span> Project Proposal Submission Process
            </Link>
            <Link href="/about/eligibility" className="flex items-center text-gray-600 hover:text-[#11B59F] transition-colors group">
              <span className="mr-3 text-gray-400 group-hover:text-[#11B59F]">→</span> Project Proposal Eligibility
            </Link>
          </div>
        </div>

        {/* Project Selection Card */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm p-8 flex flex-col transition-shadow hover:shadow-md">
          <div className="w-12 h-12 bg-[#E9F5F3] text-[#11B59F] rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Selection</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Understand how projects are evaluated, our selection process, and the criteria we use for funding.
          </p>
          <div className="flex flex-col gap-4 mt-auto">
            <Link href="/about/selection-process" className="flex items-center text-gray-600 hover:text-[#11B59F] transition-colors group">
              <span className="mr-3 text-gray-400 group-hover:text-[#11B59F]">→</span> CTAF’s Selection Process
            </Link>
            <Link href="/about/criteria" className="flex items-center text-gray-600 hover:text-[#11B59F] transition-colors group">
              <span className="mr-3 text-gray-400 group-hover:text-[#11B59F]">→</span> Criteria for Project Selection
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Actions */}
      <div className="flex-1 flex flex-col gap-6 w-full max-w-xl mx-auto lg:max-w-none">
        
        {/* Proposal Submission Section */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
          <div className="bg-[#f2fcf9] px-6 py-4 border-b border-gray-100">
            <h2 className="text-[1.3rem] font-bold text-[#11B59F] flex items-center">
              <span className="text-2xl mr-2 font-normal">+</span> Proposal Submission
            </h2>
          </div>
          <div className="p-8 flex flex-col">
            <p className="text-gray-600 mb-8 leading-relaxed">
              Submit a new proposal to the Climate Technology Accelerator Fund. Click the button below to start your application process. You will be guided through a step-by-step form.
            </p>
            <button
              onClick={handleRegistrationClick}
              className="w-full bg-[#11B59F] hover:bg-[#0e9582] text-white font-medium py-3 px-4 rounded-md transition-colors text-[15px]"
            >
              Go to Submission
            </button>
          </div>
        </div>

        {/* Check Progress Status Section */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
          <div className="bg-white px-6 py-4 border-b border-gray-100">
            <h2 className="text-[1.3rem] font-bold text-[#1A2530] flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
              Check Progress Status
            </h2>
          </div>
          <div className="p-8 flex flex-col">
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Enter your submission details below to check the current status of your proposal.
            </p>
            <form onSubmit={handleStatusCheckClick} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11B59F] focus:border-transparent transition-shadow text-gray-900"
                  placeholder="registered@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="regNumber">Registration Number</label>
                <input
                  id="regNumber"
                  type="text"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11B59F] focus:border-transparent transition-shadow text-gray-900"
                  placeholder="e.g. CTAF-202X-MM-XXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="pinCode">PIN Code</label>
                <input
                  id="pinCode"
                  type="password"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11B59F] focus:border-transparent transition-shadow text-gray-900"
                  placeholder="4-digit PIN"
                  maxLength={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1C2B39] hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-md transition-colors text-[15px] mt-2"
              >
                Check Status
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
