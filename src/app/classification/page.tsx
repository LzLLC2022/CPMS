import SubmissionList from "@/components/SubmissionList";

export default function ClassificationPage() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 border-b pb-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Classification</h2>
        <p className="text-gray-600">
          This is the Classification page for the Secretariat.
        </p>
      </div>
      
      <SubmissionList role="Secretariat" listType="classification" />
    </div>
  );
}
