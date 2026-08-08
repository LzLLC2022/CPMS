import SubmissionList from '@/components/SubmissionList';

export default function SecretariatProposalListPage() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Secretariat - Submission Check</h2>
        <p className="text-gray-600">
          This page allows the Secretariat to manage, review, and process all proposals globally.
        </p>
      </div>

      <SubmissionList role="Secretariat" />
    </div>
  );
}
