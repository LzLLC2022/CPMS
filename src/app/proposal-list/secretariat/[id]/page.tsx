import ProposalDetail from '@/components/ProposalDetail';

export default async function SecretariatProposalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ProposalDetail id={resolvedParams.id} role="Secretariat" />;
}
