import ProposalDetail from '@/components/ProposalDetail';

export default function ClassificationProposalDetailPage({ params }: { params: { id: string } }) {
  return <ProposalDetail id={params.id} role="Secretariat" listType="classification" />;
}
