import React from 'react';
import AboutSubNav from './AboutSubNav';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <AboutSubNav />
      {children}
    </div>
  );
}
