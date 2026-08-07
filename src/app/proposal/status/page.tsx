'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function StatusContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryEmail = searchParams.get('email') || '';
  const queryRegNum = searchParams.get('regNumber') || '';
  const queryPin = searchParams.get('pinCode') || '';

  const [email, setEmail] = useState(queryEmail);
  const [regNumber, setRegNumber] = useState(queryRegNum);
  const [pinCode, setPinCode] = useState(queryPin);

  const [isSearched, setIsSearched] = useState(false);
  const [statusResult, setStatusResult] = useState<null | string>(null);

  useEffect(() => {
    if (queryEmail && queryRegNum && queryPin) {
      setIsSearched(true);
      setStatusResult('Under Review');
    }
  }, [queryEmail, queryRegNum, queryPin]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      email,
      regNumber,
      pinCode,
    });
    router.push(`/proposal/status?${params.toString()}`);
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto w-full pt-4 pb-8">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="bg-teal-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-teal-800 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            Check Proposal Status
          </h2>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-sm">
            Please enter your registration details to check the current progress of your proposal.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
                  placeholder="registered@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
                <input
                  type="text"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
                  placeholder="e.g. CTAF-YYYY-MM-NNNN"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                <input
                  type="password"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
                  placeholder="4-digit PIN"
                  maxLength={4}
                  required
                />
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2.5 px-8 rounded-lg transition-colors shadow-sm"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {isSearched && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Status Result
            </h3>
          </div>
          <div className="p-8">
            <div className="flex flex-col items-center justify-center py-6">
              <div className="text-gray-500 mb-3 font-medium">Current Status for <span className="text-gray-800">{queryRegNum}</span></div>
              <div className="text-3xl font-bold text-teal-700 bg-teal-50 py-3 px-10 rounded-full border border-teal-200 shadow-sm">
                {statusResult}
              </div>
              <div className="mt-8 text-sm text-gray-600 text-center max-w-lg bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p>Your proposal is currently being reviewed by our committee. You will be notified via email (<strong>{queryEmail}</strong>) once the status changes to the next phase.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProposalStatusPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading status...</div>}>
      <StatusContent />
    </Suspense>
  );
}
