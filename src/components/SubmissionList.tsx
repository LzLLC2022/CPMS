"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface SubmissionListProps {
  role: 'Regional Director' | 'Secretariat';
  fixedRegion?: string;
}

// Mock Data
const MOCK_PROPOSALS = [
  { id: 'CTAF-2026-10-0001', region: 'Asia', country: 'Vietnam', title: 'Solar Powered Irrigation System', email: 'applicant1@gggi.org', date: '2026-10-15', status: 'Pending' },
  { id: 'CTAF-2026-10-0002', region: 'Africa', country: 'Rwanda', title: 'Urban Waste to Energy', email: 'applicant2@gggi.org', date: '2026-10-16', status: 'Under Review' },
  { id: 'CTAF-2026-10-0003', region: 'Asia', country: 'Indonesia', title: 'Peatland Restoration Tech', email: 'applicant3@gggi.org', date: '2026-10-17', status: 'Revision Requested' },
  { id: 'CTAF-2026-10-0004', region: 'Latin America', country: 'Colombia', title: 'Smart Grid Implementation', email: 'applicant4@gggi.org', date: '2026-10-18', status: 'Completed' },
  { id: 'CTAF-2026-10-0005', region: 'Asia', country: 'Philippines', title: 'Coastal Flooding Early Warning', email: 'applicant5@gggi.org', date: '2026-10-19', status: 'Rejected' },
  { id: 'CTAF-2026-10-0006', region: 'Africa', country: 'Senegal', title: 'Green Hydrogen Production', email: 'applicant6@gggi.org', date: '2026-10-20', status: 'Pending' },
];

const getStatusOptions = (role: string) => {
  if (role === 'Secretariat') {
    return ['Pending', 'Under Review', 'Revision Requested', 'Completed', 'Rejected', 'Under RD Review'];
  }
  return ['Pending', 'Under Review', 'Revision Requested', 'Completed', 'Rejected'];
};

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Pending': return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'Under Review': return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'Revision Requested': return 'bg-orange-50 text-orange-700 border-orange-200';
    case 'Completed': 
    case 'Completed (Subject to Classification)': 
    case 'Completed (Not Subject to Classification)': return 'bg-teal-50 text-teal-700 border-teal-200';
    case 'Rejected': return 'bg-red-50 text-red-700 border-red-200';
    case 'Under RD Review': return 'bg-purple-50 text-purple-700 border-purple-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function SubmissionList({ role, fixedRegion }: SubmissionListProps) {
  // Search States
  const [region, setRegion] = useState(fixedRegion || '');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [proposalNo, setProposalNo] = useState('');
  const [statuses, setStatuses] = useState<string[]>(['Pending', 'Under Review', 'Revision Requested']);
  const [completedSubStatus, setCompletedSubStatus] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStatusToggle = (status: string) => {
    setStatuses(prev => 
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const handleReset = () => {
    setRegion(fixedRegion || '');
    setCountry('');
    setEmail('');
    setProposalNo('');
    setStatuses(['Pending', 'Under Review', 'Revision Requested']);
    setCompletedSubStatus('All');
    setStartDate('');
    setEndDate('');
  };

  // Filter Mock Data
  const filteredProposals = MOCK_PROPOSALS.filter(p => {
    if (region && p.region !== region) return false;
    if (country && p.country.toLowerCase() !== country.toLowerCase()) return false;
    if (email && !p.email.toLowerCase().includes(email.toLowerCase())) return false;
    if (proposalNo && !p.id.toLowerCase().includes(proposalNo.toLowerCase())) return false;
    
    if (statuses.length > 0) {
      if (p.status.startsWith('Completed')) {
        if (!statuses.includes('Completed')) return false;
        if (role === 'Secretariat') {
          if (completedSubStatus === 'Classification' && p.status !== 'Completed (Subject to Classification)') return false;
          if (completedSubStatus === 'Non Classification' && p.status !== 'Completed (Not Subject to Classification)') return false;
        }
      } else {
        if (!statuses.includes(p.status)) return false;
      }
    }

    if (startDate && new Date(p.date) < new Date(startDate)) return false;
    if (endDate && new Date(p.date) > new Date(endDate)) return false;
    return true;
  });

  return (
    <div className="flex flex-col gap-8">
      
      {/* Filter Panel */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-3 border-gray-100">Search Conditions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Region */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
            <select 
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              disabled={role === 'Regional Director'}
              className={`w-full p-2.5 border rounded-lg outline-none transition-colors ${role === 'Regional Director' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500'}`}
            >
              <option value="">All Regions</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="Latin America">Latin America</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <select 
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
            >
              <option value="">All Countries</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Colombia">Colombia</option>
              <option value="Philippines">Philippines</option>
              <option value="Senegal">Senegal</option>
            </select>
          </div>

          {/* Proposal No */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Proposal Number</label>
            <input 
              type="text" 
              placeholder="e.g., CTAF-2026-..."
              value={proposalNo}
              onChange={(e) => setProposalNo(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Proposer Email</label>
            <input 
              type="text" 
              placeholder="e.g., test@gggi.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Registration Date */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Registration Date</label>
            <div className="flex items-center gap-2">
              <input 
                type="date" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
              <span className="text-gray-500">-</span>
              <input 
                type="date" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Status */}
          <div className="md:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-3">Status</label>
            <div className="flex flex-wrap gap-4 items-center">
              {getStatusOptions(role).map(status => (
                <div key={status} className="flex items-center gap-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={statuses.includes(status)}
                      onChange={() => handleStatusToggle(status)}
                      className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                    />
                    <span className="text-gray-700 group-hover:text-gray-900">{status}</span>
                  </label>
                  {status === 'Completed' && role === 'Secretariat' && statuses.includes('Completed') && (
                    <select
                      value={completedSubStatus}
                      onChange={(e) => setCompletedSubStatus(e.target.value)}
                      className="p-1 border border-gray-300 rounded outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-sm bg-white"
                    >
                      <option value="All">All</option>
                      <option value="Classification">Classification</option>
                      <option value="Non Classification">Non Classification</option>
                    </select>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
          <button 
            onClick={handleReset}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
          >
            Reset
          </button>
          <button 
            className="px-6 py-2.5 bg-[#11B59F] text-white rounded-lg hover:bg-[#0e9582] font-medium shadow-sm transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h3 className="text-lg font-bold text-gray-900">Search Results</h3>
          <span className="text-sm font-medium text-gray-500">Total {filteredProposals.length} item(s)</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
                <th className="py-4 px-6 font-semibold w-40">Proposal No</th>
                <th className="py-4 px-6 font-semibold">Region / Country</th>
                <th className="py-4 px-6 font-semibold">Title</th>
                <th className="py-4 px-6 font-semibold">Proposer Email</th>
                <th className="py-4 px-6 font-semibold w-32">Date</th>
                <th className="py-4 px-6 font-semibold w-40">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredProposals.length > 0 ? (
                filteredProposals.map((proposal, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
                    <td className="py-4 px-6 font-medium text-gray-900">{proposal.id}</td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-700">{proposal.region}</span>
                        <span className="text-gray-500 text-xs">{proposal.country}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-800 line-clamp-1">{proposal.title}</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{proposal.email}</td>
                    <td className="py-4 px-6 text-gray-500 whitespace-nowrap">{proposal.date}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusBadgeColor(proposal.status)}`}>
                        {proposal.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-gray-500">
                    No proposals match the given criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}
