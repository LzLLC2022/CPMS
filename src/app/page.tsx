"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const role = localStorage.getItem("mockUserRole");
      setUserRole(role);
      setIsLoaded(true);
    };

    checkLoginStatus();
    
    window.addEventListener("storage", checkLoginStatus);
    window.addEventListener("authStateChange", checkLoginStatus);
    
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      window.removeEventListener("authStateChange", checkLoginStatus);
    };
  }, []);

  const handleRegistrationClick = () => {
    router.push('/proposal/registration');
  };

  if (!isLoaded) {
    return <div className="flex flex-1 w-full h-full bg-white"></div>;
  }

  if (userRole) {
    return (
      <div className="flex flex-1 flex-col w-full items-center justify-center py-20 px-4 bg-gray-50">
        <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center max-w-2xl w-full">
          <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            {userRole} Dashboard
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Welcome back! This dashboard is personalized for your role.
          </p>
          <p className="text-sm text-primary-600 font-medium italic">
            (The detailed features and metrics will be constructed later)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-4rem)] bg-gray-50">
      
      {/* Left Side - Information Menu */}
      <div className="flex-1 p-6 lg:p-12 xl:p-16 flex flex-col md:flex-row gap-6">
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
      <div className="flex-1 p-6 lg:p-12 xl:p-16 flex flex-col gap-6 justify-center max-w-2xl mx-auto w-full">
        
        {/* Proposal Submission */}
        <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
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

        {/* Check Progress Status */}
        <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
          <div className="bg-white px-6 py-4 border-b border-gray-100">
            <h2 className="text-[1.3rem] font-bold text-[#1A2530] flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              Check Progress Status
            </h2>
          </div>
          <div className="p-6 sm:p-8 flex flex-col">
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Enter your submission details below to check the current status of your proposal.
            </p>
            <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); router.push('/proposal'); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" placeholder="registered@email.com" className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11B59F] focus:border-transparent transition-shadow text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
                <input type="text" placeholder="e.g. CTAF-202X-MM-XXXX" className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11B59F] focus:border-transparent transition-shadow text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                <input type="password" placeholder="4-digit PIN" maxLength={4} className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11B59F] focus:border-transparent transition-shadow text-gray-900" />
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
