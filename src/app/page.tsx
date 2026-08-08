"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    <div className="flex flex-col lg:flex-row flex-1 w-full h-full">
      {/* Left Side - About CTAF */}
      <div className="flex-1 bg-[#18bc9c] flex flex-col justify-center items-start px-12 sm:px-20 xl:px-32 py-16 text-white min-h-[50vh] lg:min-h-0">
        <h2 className="text-4xl font-extrabold mb-8 text-primary-50">
          About CTAF
        </h2>
        <p className="text-lg leading-relaxed text-primary-100/90 text-justify">
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
      </div>

      {/* Right Side - Proposal Registration */}
      <div className="flex-1 bg-gray-50 flex flex-col justify-center items-center px-6 py-16 min-h-[50vh] lg:min-h-0">
        <div className="w-full max-w-lg bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
          <div className="bg-teal-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-teal-800 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Proposal Submission
            </h2>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Submit a new proposal to the Climate Technology Accelerator Fund. Click the button below to start your application process. You will be guided through a step-by-step form.
            </p>
            <button
              onClick={handleRegistrationClick}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm text-lg"
            >
              Go to Submission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
