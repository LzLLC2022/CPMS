import ProposalDetail from '@/components/ProposalDetail';

export default async function RegionalDirectorProposalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ProposalDetail id={resolvedParams.id} role="Regional Director" />;
}
