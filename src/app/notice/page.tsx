"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mockNotices, mockNews, NoticeItem } from "@/lib/mockData";

export default function NoticeDashboard() {
  const [currentNoticeIdx, setCurrentNoticeIdx] = useState(0);
  const [currentNewsIdx, setCurrentNewsIdx] = useState(0);

  // Auto-rolling logic
  useEffect(() => {
    const noticeInterval = setInterval(() => {
      setCurrentNoticeIdx((prev) => (prev + 1) % mockNotices.length);
    }, 4000); // 4 seconds

    const newsInterval = setInterval(() => {
      setCurrentNewsIdx((prev) => (prev + 1) % mockNews.length);
    }, 4500); // slightly different interval for organic feel

    return () => {
      clearInterval(noticeInterval);
      clearInterval(newsInterval);
    };
  }, []);

  const renderRollingCard = (item: NoticeItem, label: string, basePath: string) => (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/notice/${basePath}`} className="bg-primary-600 px-6 py-3 hover:bg-primary-700 transition-colors block">
        <h3 className="text-white font-bold text-lg tracking-wide uppercase">{label}</h3>
      </Link>
      <div className="p-8 flex flex-col flex-1 justify-center animate-fade-in-up">
        <div className="text-sm text-gray-500 mb-3">{item.date}</div>
        <Link href={`/notice/${basePath}/${item.id}`} className="block group">
          <h4 className="text-2xl font-extrabold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-4 leading-tight">
            {item.title}
          </h4>
        </Link>
        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {item.content}
        </p>
      </div>
      <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
        <Link 
          href={`/notice/${basePath}`}
          className="text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          View all {label.toLowerCase()} &rarr;
        </Link>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-80px)] bg-gray-50/50">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900">Notice & News</h2>
        <p className="text-gray-500 mt-2">Catch up on the latest announcements and updates.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[400px]">
        {/* Left Side - Notices */}
        {renderRollingCard(mockNotices[currentNoticeIdx], "Notices", "notices")}
        
        {/* Right Side - News */}
        {renderRollingCard(mockNews[currentNewsIdx], "News", "news")}
      </div>
    </div>
  );
}
