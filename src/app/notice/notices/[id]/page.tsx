import Link from "next/link";
import { mockNotices } from "@/lib/mockData";
import { notFound } from "next/navigation";

export default function NoticeDetail({ params }: { params: { id: string } }) {
  const notice = mockNotices.find((n) => n.id === params.id);

  if (!notice) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="mb-8">
        <Link href="/notice/notices" className="text-sm font-semibold text-primary-600 hover:text-primary-700">
          &larr; Back to Notices
        </Link>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-200 bg-gray-50">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-4">{notice.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div><span className="font-medium text-gray-700">Author:</span> {notice.author}</div>
            <div><span className="font-medium text-gray-700">Date:</span> {notice.date}</div>
            <div><span className="font-medium text-gray-700">Views:</span> {notice.views}</div>
          </div>
        </div>
        <div className="px-8 py-10 min-h-[300px] text-gray-800 leading-relaxed whitespace-pre-wrap text-[15px]">
          {notice.content}
        </div>
      </div>
    </div>
  );
}
