"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const homeItems = [
    {
      num: "1",
      title: "CTAF Projects for the Benefit of All",
      desc: "Every project CTAF funds delivers benefits for everyone involved: local communities, participating industry, academia and donor governments."
    },
    {
      num: "2",
      title: "Partnering with Existing Funds & Initiatives",
      desc: "CTAF builds bridges and collaboration between existing funds and programs – including GGGI initiatives (KGNDTF, BKCF, CTF), World Bank, ADB and partner governments, turning separate efforts into a connected, collaborative network."
    },
    {
      num: "3",
      title: "Focus on Future-Oriented Climate Technology",
      desc: "CTAF moves beyond conventional solutions and invests in frontier technologies built for lasting impact."
    },
    {
      num: "4",
      title: "Quality Guided by Two Expert Working Groups",
      desc: "Two expert working groups review and select every project, ensuring quality and that CTAF backs the right ideas, in the right places, at the right time."
    },
    {
      num: "5",
      title: "Build to Scale: Enhancing Global Visibility & Scaling",
      desc: "Successful projects should not stay small. CTAF showcases results globally, supports promising technologies on their path to commercialization and continuously works to grow the CTAF’s reach and impact."
    }
  ];

  const [currentHomeSlide, setCurrentHomeSlide] = useState(0);
  const [secretariatTab, setSecretariatTab] = useState<'Submission Check' | 'Classification'>('Submission Check');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHomeSlide((prev) => (prev + 1) % homeItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  if (userRole === "Regional Director") {
    return (
      <div className="flex flex-1 flex-col w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Regional Director Dashboard
              </h2>
              <p className="text-gray-600 mt-2">Overview of project proposal statuses in your region.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-center items-center hover:shadow-md transition-shadow">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">Pending</span>
              <span className="text-5xl font-extrabold text-gray-800">12</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-center items-center hover:shadow-md transition-shadow">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">Under Review</span>
              <span className="text-5xl font-extrabold text-blue-600">5</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-center items-center hover:shadow-md transition-shadow">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">Revision Requested</span>
              <span className="text-5xl font-extrabold text-orange-500">3</span>
            </div>
          </div>
          
          <div className="mt-10 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Recent Proposals</h3>
              <button 
                onClick={() => router.push('/proposal-list/regional-director')}
                className="text-sm font-medium text-teal-600 hover:text-teal-700"
              >
                View All →
              </button>
            </div>
            <p className="text-gray-500 italic">Detailed proposal list will be integrated here.</p>
          </div>
        </div>
      </div>
    );
  }

  if (userRole === "Secretariat") {
    return (
      <div className="flex flex-1 flex-col w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Secretariat Dashboard
              </h2>
              <p className="text-gray-600 mt-2">Overview of all project submission statuses.</p>
            </div>
          </div>
          
          {/* Stats Section with Tabs */}
          <div className="mb-10">
            <div className="flex border-b border-gray-300">
              <button 
                className={`px-4 py-2 text-sm font-medium border-t border-l border-r ${secretariatTab === 'Submission Check' ? 'border-gray-300 bg-white text-gray-900 z-10' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setSecretariatTab('Submission Check')}
                style={{ marginBottom: '-1px' }}
              >
                Submission Check
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium border-t border-l border-r ${secretariatTab === 'Classification' ? 'border-gray-300 bg-white text-gray-900 z-10' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setSecretariatTab('Classification')}
                style={{ marginBottom: '-1px' }}
              >
                Classification
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-b-xl rounded-tr-xl shadow-sm border border-gray-300">
              {secretariatTab === 'Submission Check' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl border border-gray-200 flex flex-col justify-center items-center">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">Pending</span>
                    <span className="text-5xl font-extrabold text-gray-800">24</span>
                  </div>
                  <div className="p-6 rounded-xl border border-gray-200 flex flex-col justify-center items-center">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">Under Review</span>
                    <span className="text-5xl font-extrabold text-blue-600">15</span>
                  </div>
                  <div className="p-6 rounded-xl border border-gray-200 flex flex-col justify-center items-center">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">Revision Requested</span>
                    <span className="text-5xl font-extrabold text-orange-500">8</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border border-gray-200 flex flex-col justify-center items-center">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">Pending</span>
                    <span className="text-5xl font-extrabold text-gray-800">10</span>
                  </div>
                  
                  <div className="p-6 rounded-xl border border-gray-200 flex flex-col justify-center items-center">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6 text-center border-b border-gray-200 pb-2 w-full">Processing</span>
                    
                    <div className="flex w-full justify-around">
                      <div className="flex flex-col justify-center items-center">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">CRE WG</span>
                        <span className="text-5xl font-extrabold text-blue-600">1</span>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">TPE WG</span>
                        <span className="text-5xl font-extrabold text-blue-600">2</span>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">PSC</span>
                        <span className="text-5xl font-extrabold text-blue-600">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Recent List Section with Tabs */}
          <div>
            <div className="flex border-b border-gray-300">
              <button 
                className={`px-4 py-2 text-sm font-medium border-t border-l border-r ${secretariatTab === 'Submission Check' ? 'border-gray-300 bg-white text-gray-900 z-10' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setSecretariatTab('Submission Check')}
                style={{ marginBottom: '-1px' }}
              >
                Submission Check
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium border-t border-l border-r ${secretariatTab === 'Classification' ? 'border-gray-300 bg-white text-gray-900 z-10' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setSecretariatTab('Classification')}
                style={{ marginBottom: '-1px' }}
              >
                Classification
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-b-xl rounded-tr-xl shadow-sm border border-gray-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Recent Submissions</h3>
                <button 
                  onClick={() => router.push(secretariatTab === 'Submission Check' ? '/proposal-list/secretariat' : '/classification')}
                  className="text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  View All →
                </button>
              </div>
              <p className="text-gray-500 italic">Detailed submission list will be integrated here.</p>
            </div>
          </div>
        </div>
      </div>
    );
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
      {/* Left Side - CTAF Rolling Content */}
      <div className="flex-1 bg-[#18bc9c] relative flex flex-col min-h-[50vh] lg:min-h-0 overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center px-12 sm:px-20 xl:px-32">
          
          <div className="w-full relative h-[300px] flex items-center">
            {homeItems.map((item, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 flex items-center gap-8 transition-opacity duration-1000 ${idx === currentHomeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
              >
                <div className="flex-shrink-0">
                  <span className="text-[140px] font-extrabold text-white/20 leading-none" style={{ fontFamily: 'sans-serif' }}>
                    {item.num}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    {item.title}
                  </h2>
                  <p className="text-[17px] leading-relaxed text-white/90 text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-3 mt-12 justify-start">
            {homeItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHomeSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentHomeSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Proposal Registration */}
      <div className="flex-1 bg-gray-50 flex flex-col justify-center items-center px-6 py-16 min-h-[50vh] lg:min-h-0">
        <div className="w-full max-w-lg bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
          <div className="bg-teal-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-teal-800 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Project Submission
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
