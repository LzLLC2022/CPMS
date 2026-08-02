"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabs = [
    { name: "Main", href: "/proposal" },
    { name: "Registration", href: "/proposal/registration" },
    { name: "Status", href: "/proposal/status" },
  ];

  return (
    <div className="flex flex-col w-full min-h-full">
      {/* Top Tab Bar */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={`
                    whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors
                    ${isActive 
                      ? "border-primary-500 text-primary-600" 
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {tab.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content Area for Proposal Pages */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}
