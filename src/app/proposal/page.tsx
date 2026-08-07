'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
    <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto w-full pt-4 pb-8">
      {/* Proposal Registration Section */}
      <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
        <div className="bg-teal-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-teal-800 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Proposal Registration
          </h2>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
            Submit a new proposal to the Climate Technology Accelerator Fund. Click the button below to start your application process. You will be guided through a step-by-step form.
          </p>
          <button
            onClick={handleRegistrationClick}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm"
          >
            Go to Registration
          </button>
        </div>
      </div>

      {/* Status Check Section */}
      <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
            Check Progress Status
          </h2>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-5 text-sm">
            Enter your submission details below to check the current status of your proposal.
          </p>
          <form onSubmit={handleStatusCheckClick} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-shadow"
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-shadow"
                placeholder="e.g. REG-202X-XXXX"
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-shadow"
                placeholder="4-digit PIN"
                maxLength={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm mt-2"
            >
              Check Status
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
