"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // We use useEffect to check localStorage only on the client side to prevent hydration mismatch
  useEffect(() => {
    const checkLoginStatus = () => {
      const email = localStorage.getItem("mockUserEmail");
      const role = localStorage.getItem("mockUserRole");
      setUserEmail(email);
      setUserRole(role);
    };

    checkLoginStatus();
    
    // Listen for storage changes in case of cross-tab logins, or custom events in same tab
    window.addEventListener("storage", checkLoginStatus);
    window.addEventListener("authStateChange", checkLoginStatus);
    
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      window.removeEventListener("authStateChange", checkLoginStatus);
    };
  }, []);

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Coming Soon");
  };

  const handleLogout = () => {
    localStorage.removeItem("mockUserEmail");
    localStorage.removeItem("mockUserRole");
    window.dispatchEvent(new Event("authStateChange"));
    router.push("/");
  };

  return (
    <header className="relative flex items-center px-6 py-4 border-b border-gray-200 bg-white shadow-sm z-10 shrink-0 print:hidden">
      {/* Left - Logo & Title */}
      <div className="flex flex-1 items-center justify-start">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-12 w-12 sm:h-16 sm:w-16">
            <Image
              src="/ctaf_logo2.png"
              alt="CTAF Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 border-l-2 border-gray-200 pl-4 leading-tight">
            Climate Technology<br />
            Accelerator Fund
          </h1>
        </Link>
      </div>
      
      {/* Center - Main Menu */}
      <nav className="hidden sm:flex flex-1 items-center justify-center gap-8">
        {/* Proposal / Proposal List Menu */}
        {userRole === "Regional Director" || userRole === "Secretariat" ? (
          <Link 
            href="/proposal-list" 
            className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors py-2 block"
          >
            Proposal List
          </Link>
        ) : (
          <Link 
            href="/proposal" 
            className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors py-2 block"
          >
            Proposal
          </Link>
        )}

        {userRole === "Secretariat" && (
          <button onClick={handleComingSoon} className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors py-2">
            Classification
          </button>
        )}

        <div className="relative group">
          <Link 
            href="/notice" 
            className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors py-2 block"
          >
            Notice
          </Link>
          
          {/* Dropdown Menu */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 hidden group-hover:flex flex-col bg-white border border-gray-100 shadow-lg rounded-md py-2 w-32 z-50">
            <Link 
              href="/notice/notices" 
              className="px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              Notices
            </Link>
            <Link 
              href="/notice/news" 
              className="px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              News
            </Link>
          </div>
        </div>
      </nav>

      {/* Right - Login/Logout */}
      <div className="flex flex-1 items-center justify-end gap-4">
        {userEmail ? (
          <>
            <span className="text-sm text-gray-600 font-medium hidden sm:block">
              {userEmail}
            </span>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-md transition-colors shadow-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <Link 
            href="/login" 
            className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-md transition-colors shadow-sm"
          >
            Login
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden p-2 ml-2 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg sm:hidden flex flex-col py-4 px-6 gap-4 z-50">
          {userRole === "Regional Director" || userRole === "Secretariat" ? (
            <Link 
              href="/proposal-list" 
              className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Proposal List
            </Link>
          ) : (
            <Link 
              href="/proposal" 
              className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Proposal
            </Link>
          )}

          {userRole === "Secretariat" && (
            <button 
              onClick={(e) => { handleComingSoon(e); setIsMobileMenuOpen(false); }} 
              className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors text-left"
            >
              Classification
            </button>
          )}

          <div className="flex flex-col gap-2">
            <span className="text-[15px] font-bold text-gray-900">Notice</span>
            <div className="pl-4 flex flex-col gap-2">
              <Link 
                href="/notice/notices" 
                className="text-sm text-gray-700 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Notices
              </Link>
              <Link 
                href="/notice/news" 
                className="text-sm text-gray-700 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
