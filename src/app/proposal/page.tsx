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
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto w-full pt-4 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* Left Side - About CTAF Content */}
      <div className="flex-1 bg-[#18bc9c] rounded-2xl p-8 lg:p-12 text-white flex flex-col justify-center shadow-md">
        <h2 className="text-3xl font-extrabold mb-6 text-white">
          About CTAF
        </h2>
        <p className="text-[17px] leading-relaxed text-white/90 text-justify mb-8">
          Established in 2026, the Climate Technology Accelerator Fund (CTAF)
          is a joint initiative between the Global Green Growth Institute (GGGI)
          and Korea’s Ministry of Science and ICT (MSIT). The fund matches
          South Korea’s advanced public climate technologies with global demand
          across GGGI’s overseas network to support international demonstration
          and localization. By bridging the gap between R&D and market entry,
          CTAF enhances the efficiency of green investments and drives the
          climate tech industry, directly contributing to the achievement of 2030
          Nationally Determined Contributions (NDCs). Through a KRW 21 billion
          commitment over seven years, the fund will support at least three
          global projects annually to accelerate high-impact climate solutions.
        </p>
        <div className="mt-auto">
          <Link href="/about" className="inline-flex items-center font-bold text-white hover:text-white/80 transition-colors group text-lg">
            Learn more about CTAF 
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
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
