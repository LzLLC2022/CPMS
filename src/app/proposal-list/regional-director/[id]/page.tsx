import ProposalDetail from '@/components/ProposalDetail';

export default function RegionalDirectorProposalDetailPage({ params }: { params: { id: string } }) {
  return <ProposalDetail id={params.id} role="Regional Director" />;
}
