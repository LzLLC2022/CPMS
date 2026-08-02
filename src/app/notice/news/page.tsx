import Link from "next/link";
import { mockNews } from "@/lib/mockData";

export default function NewsList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">News</h2>
          <p className="text-gray-500 mt-2">Latest press releases and news articles.</p>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">No.</th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">Author</th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">Date</th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">Views</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockNews.map((news, idx) => (
              <tr key={news.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mockNews.length - idx}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  <Link href={`/notice/news/${news.id}`} className="hover:text-primary-600 transition-colors">
                    {news.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{news.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{news.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{news.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
