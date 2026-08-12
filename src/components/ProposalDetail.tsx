"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProposalDetailProps {
  id: string;
  role: 'Regional Director' | 'Secretariat';
}

type ModalType = 'None' | 'CompleteReview' | 'RequestRevision' | 'Reject' | 'Next';

export default function ProposalDetail({ id, role }: ProposalDetailProps) {
  const router = useRouter();
  const [activeModal, setActiveModal] = useState<ModalType>('None');

  // Modal form states
  const [reviewTarget, setReviewTarget] = useState('');
  const [opinion, setOpinion] = useState('');

  let mockStatus = 'Pending';
  if (id === 'CTAF-2026-10-0002') mockStatus = 'Under Review';
  if (id === 'CTAF-2026-10-0003') mockStatus = 'Revision Requested';
  if (id === 'CTAF-2026-10-0004') mockStatus = 'Completed';
  if (id === 'CTAF-2026-10-0005') mockStatus = 'Rejected';

  // Mock proposal data
  const proposal = {
    id: id,
    title: 'Solar Powered Irrigation System',
    region: 'Asia',
    country: 'Vietnam',
    proposer: 'John Doe',
    email: 'applicant1@gggi.org',
    date: '2026-10-15',
    status: mockStatus,
    abstract: 'This proposal aims to implement solar-powered irrigation systems to improve agricultural resilience and reduce greenhouse gas emissions in rural Vietnam. The project involves installing 50 units across 3 provinces, benefiting over 500 smallholder farmers.',
    budget: '$500,000',
    duration: '24 Months'
  };

  const closeModal = () => {
    setActiveModal('None');
    setReviewTarget('');
    setOpinion('');
  };

  const handleSubmit = (actionType: string) => {
    console.log(`Action: ${actionType}`, { reviewTarget, opinion });
    // Simulate action success
    alert(`Successfully processed action: ${actionType}`);
    closeModal();
  };

  return (
    <div className="flex flex-col max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Proposal Details</h2>
        <p className="text-gray-600">Review the proposal information and perform necessary actions.</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
          <div>
            <span className="block text-sm font-medium text-gray-500 mb-1">Proposal Number</span>
            <span className="block text-lg font-semibold text-gray-900">{proposal.id}</span>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-500 mb-1">Status</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 border border-gray-200">
              {proposal.status}
            </span>
          </div>
          
          <div className="md:col-span-2">
            <span className="block text-sm font-medium text-gray-500 mb-1">Project Title</span>
            <span className="block text-xl font-semibold text-gray-900">{proposal.title}</span>
          </div>
          
          <div>
            <span className="block text-sm font-medium text-gray-500 mb-1">Region / Country</span>
            <span className="block text-base text-gray-900">{proposal.region} / {proposal.country}</span>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-500 mb-1">Proposer</span>
            <span className="block text-base text-gray-900">{proposal.proposer} ({proposal.email})</span>
          </div>
          
          <div>
            <span className="block text-sm font-medium text-gray-500 mb-1">Estimated Budget</span>
            <span className="block text-base text-gray-900">{proposal.budget}</span>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-500 mb-1">Project Duration</span>
            <span className="block text-base text-gray-900">{proposal.duration}</span>
          </div>

          <div className="md:col-span-2 mt-4">
            <span className="block text-sm font-medium text-gray-500 mb-2">Abstract</span>
            <p className="text-gray-800 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
              {proposal.abstract}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-between">
        <button 
          onClick={() => {
            if (role === 'Regional Director') {
              router.push('/proposal-list/regional-director');
            } else {
              router.push('/proposal-list/secretariat');
            }
          }}
          className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors shadow-sm"
        >
          List
        </button>
        <div className="flex flex-wrap gap-3">
          {proposal.status === 'Pending' && (
            <button 
              onClick={() => setActiveModal('Next')}
              className="px-6 py-2.5 bg-[#11B59F] text-white rounded-lg hover:bg-[#0e9582] font-medium shadow-sm transition-colors"
            >
              Next
            </button>
          )}
          {proposal.status === 'Under Review' && (
            <>
              <button 
                onClick={() => setActiveModal('CompleteReview')}
                className="px-6 py-2.5 bg-[#11B59F] text-white rounded-lg hover:bg-[#0e9582] font-medium shadow-sm transition-colors"
              >
                Complete Review
              </button>
              <button 
                onClick={() => setActiveModal('RequestRevision')}
                className="px-6 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium shadow-sm transition-colors"
              >
                Request Revision
              </button>
              <button 
                onClick={() => setActiveModal('Reject')}
                className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium shadow-sm transition-colors"
              >
                Reject
              </button>
            </>
          )}
        </div>
      </div>

      {/* Complete Review Modal */}
      {activeModal === 'CompleteReview' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">Complete Review</h3>
            </div>
            <div className="p-6">
              {role === 'Secretariat' && (
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Review Completion Category *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="reviewTarget" value="Target" checked={reviewTarget === 'Target'} onChange={(e) => setReviewTarget(e.target.value)} className="text-teal-600 focus:ring-teal-500" />
                      <span>Target</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="reviewTarget" value="Not Target" checked={reviewTarget === 'Not Target'} onChange={(e) => setReviewTarget(e.target.value)} className="text-teal-600 focus:ring-teal-500" />
                      <span>Not Target</span>
                    </label>
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Opinion</label>
                <textarea 
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                  placeholder="Enter optional opinion..."
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 min-h-[100px] resize-y"
                ></textarea>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
              <button onClick={closeModal} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-medium">Cancel</button>
              <button onClick={() => handleSubmit('Complete Review')} className="px-4 py-2 bg-[#11B59F] text-white rounded-lg hover:bg-[#0e9582] font-medium shadow-sm disabled:opacity-50" disabled={role === 'Secretariat' && !reviewTarget}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* Request Revision Modal */}
      {activeModal === 'RequestRevision' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-gray-100 bg-orange-50">
              <h3 className="text-lg font-bold text-orange-900">Request Revision</h3>
            </div>
            <div className="p-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Revision Request Opinion *</label>
                <textarea 
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                  placeholder="Enter detailed reason for revision..."
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 min-h-[120px] resize-y"
                ></textarea>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
              <button onClick={closeModal} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-medium">Cancel</button>
              <button onClick={() => handleSubmit('Request Revision')} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium shadow-sm disabled:opacity-50" disabled={!opinion.trim()}>Submit Request</button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {activeModal === 'Reject' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-gray-100 bg-red-50">
              <h3 className="text-lg font-bold text-red-900">Reject</h3>
            </div>
            <div className="p-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rejection Reason *</label>
                <textarea 
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                  placeholder="Enter detailed reason for rejection..."
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 min-h-[120px] resize-y"
                ></textarea>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
              <button onClick={closeModal} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-medium">Cancel</button>
              <button onClick={() => handleSubmit('Reject')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium shadow-sm disabled:opacity-50" disabled={!opinion.trim()}>Reject Proposal</button>
            </div>
          </div>
        </div>
      )}

      {/* Next Modal */}
      {activeModal === 'Next' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">Confirm Next Status</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700">Are you sure you want to change the status to the next step?</p>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
              <button onClick={closeModal} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-medium">Cancel</button>
              <button onClick={() => handleSubmit('Next')} className="px-4 py-2 bg-[#11B59F] text-white rounded-lg hover:bg-[#0e9582] font-medium shadow-sm">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
