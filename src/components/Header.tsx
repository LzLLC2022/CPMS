"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  
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
    <header className="flex items-center px-6 py-4 border-b border-gray-200 bg-white shadow-sm z-10 shrink-0">
      {/* Left - Logo & Title */}
      <div className="flex flex-1 items-center justify-start">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-12 w-32 sm:h-16 sm:w-40">
            <Image
              src="/logo.png"
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
          <div className="relative group">
            <Link 
              href="/proposal" 
              className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors py-2 block"
            >
              Proposal
            </Link>
            
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 hidden group-hover:flex flex-col bg-white border border-gray-100 shadow-lg rounded-md py-2 w-36 z-50">
              <Link 
                href="/proposal/registration" 
                className="px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                Registration
              </Link>
              <Link 
                href="/proposal/status" 
                className="px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                Status
              </Link>
            </div>
          </div>
        )}

        {userRole === "Secretariat" && (
          <button onClick={handleComingSoon} className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors py-2">
            Classification
          </button>
        )}

        <button onClick={handleComingSoon} className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors py-2">
          Notice
        </button>
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
      </div>
    </header>
  );
}
