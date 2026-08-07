"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRegistrationClick = () => {
    router.push('/proposal/registration');
  };

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
              Proposal Registration
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
              Go to Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
