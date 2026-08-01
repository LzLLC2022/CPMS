"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Coming Soon");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white shadow-sm z-10 shrink-0">
      <Link href="/" className="flex items-center gap-4">
        {/* Logo */}
        <div className="relative h-12 w-32 sm:h-16 sm:w-40">
          <Image
            src="/logo.png"
            alt="CTAF Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        {/* Title */}
        <h1 className="text-lg sm:text-xl font-bold text-gray-900 border-l-2 border-gray-200 pl-4 leading-tight">
          Climate Technology<br />
          Accelerator Fund
        </h1>
      </Link>
      
      {/* Right Menu */}
      <nav className="hidden sm:flex items-center gap-8 pr-4">
        <button onClick={handleComingSoon} className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors">
          Submission
        </button>
        <button onClick={handleComingSoon} className="text-[15px] font-bold text-gray-900 hover:text-primary-600 transition-colors">
          Notice
        </button>
      </nav>
    </header>
  );
}
