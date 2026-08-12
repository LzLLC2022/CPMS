import ClassificationDetail from '@/components/ClassificationDetail';

export default function ClassificationProposalDetailPage({ params }: { params: { id: string } }) {
  return <ClassificationDetail id={params.id} />;
}
