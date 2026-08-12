import ProposalDetail from '@/components/ProposalDetail';

export default function SecretariatProposalDetailPage({ params }: { params: { id: string } }) {
  return <ProposalDetail id={params.id} role="Secretariat" />;
}
