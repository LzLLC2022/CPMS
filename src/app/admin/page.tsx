export default function AdminDashboard() {
  return (
    <div className="flex flex-1 flex-col w-full items-center justify-center py-20 px-4 bg-gray-50">
      <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center max-w-2xl w-full">
        <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Admin Dashboard
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          Welcome to the system administration area.
        </p>
        <p className="text-sm text-teal-600 font-medium italic">
          (The detailed admin features and settings will be constructed later)
        </p>
      </div>
    </div>
  );
}
