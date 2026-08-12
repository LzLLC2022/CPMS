import ClassificationDetail from '@/components/ClassificationDetail';

export default async function ClassificationProposalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ClassificationDetail id={resolvedParams.id} />;
}
