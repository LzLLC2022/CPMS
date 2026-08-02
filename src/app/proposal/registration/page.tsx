"use client";

import React, { useState } from "react";

export default function ProposalRegistrationPage() {
  const ALL_COUNTRIES = ["South Korea", "United States", "Japan", "Vietnam", "Indonesia", "Philippines", "Fiji", "Mongolia", "Senegal", "Uganda", "Rwanda"];
  const [intlPartnership, setIntlPartnership] = useState("N");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const [financingOpts, setFinancingOpts] = useState<Record<string, boolean>>({
    gggi: false,
    climate: false,
    gov: false,
    private: false,
    carbon: false,
    others: false,
  });

  const handleFinancingChange = (key: string) => {
    setFinancingOpts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const filteredCountries = ALL_COUNTRIES.filter((c) => c.toLowerCase().includes(countrySearch.toLowerCase()));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const obj = Object.fromEntries(data.entries());
    obj.intlPartnership = intlPartnership;
    obj.selectedCountries = selectedCountries.join(", ");
    
    const financing = [];
    if (financingOpts.gggi) financing.push(`GGGI: ${data.get("financing_gggi_spec") || ""}`);
    if (financingOpts.climate) financing.push(`Climate: ${data.get("financing_climate_spec") || ""}`);
    if (financingOpts.gov) financing.push(`Government: ${data.get("financing_gov_spec") || ""}`);
    if (financingOpts.private) financing.push(`Private: ${data.get("financing_private_spec") || ""}`);
    if (financingOpts.carbon) financing.push(`Carbon: ${data.get("financing_carbon_spec") || ""}`);
    if (financingOpts.others) financing.push(`Others: ${data.get("financing_others_spec") || ""}`);
    obj.financingOptions = financing.join(" | ");

    setFormData(obj);
    setPreviewMode(true);
  };

  const handleFinalSubmit = () => {
    alert("Proposal submitted successfully!");
    setPreviewMode(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      {previewMode ? (
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Preview Proposal</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase">Contact Information</h3>
              <p className="mt-1 text-gray-900">{formData.contactPerson} ({formData.contactTitle}) - {formData.email}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase">A. Project Overview</h3>
              <p className="mt-1 text-gray-900"><span className="font-medium">Title:</span> {formData.projectTitle}</p>
              <p className="mt-1 text-gray-900"><span className="font-medium">International Partnerships:</span> {formData.intlPartnership}</p>
              {formData.intlPartnership === 'Y' && <p className="mt-1 text-gray-900"><span className="font-medium">Countries:</span> {formData.selectedCountries}</p>}
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase">B. Rationale & Value Proposition</h3>
              <p className="mt-1 text-gray-900"><span className="font-medium">TRL:</span> {formData.trl} | <span className="font-medium">CRL:</span> {formData.crl} | <span className="font-medium">Pilot:</span> {formData.pilot}</p>
              <p className="mt-2 text-gray-900 whitespace-pre-wrap">{formData.problem}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase">C. Future Financing</h3>
              <p className="mt-1 text-gray-900 whitespace-pre-wrap">{formData.financingOptions || 'None selected'}</p>
              <p className="mt-2 text-gray-900 whitespace-pre-wrap">{formData.financingRationale}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase">D. Risk Assessment & Patents</h3>
              <p className="mt-1 text-gray-900 whitespace-pre-wrap"><span className="font-medium">Regulatory Risk:</span> {formData.riskRegulatory}</p>
              <p className="mt-1 text-gray-900 whitespace-pre-wrap"><span className="font-medium">Climate Risk:</span> {formData.riskClimate}</p>
              <p className="mt-1 text-gray-900 whitespace-pre-wrap"><span className="font-medium">Patents:</span> {formData.patents}</p>
              <p className="mt-1 text-gray-900 whitespace-pre-wrap"><span className="font-medium">Communication:</span> {formData.commStrategy}</p>
            </div>
            
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-200 mt-8">
              <button onClick={() => setPreviewMode(false)} className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Back to Edit
              </button>
              <button onClick={handleFinalSubmit} className="px-6 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-md hover:bg-primary-500">
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">CTAF One-Page Proposal</h2>
        <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
          The One-Page Proposal is intended to reduce administrative burden and encourage diverse early-stage ideas; therefore, please be concise.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Verification PIN */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 border-l-4 border-l-primary-600">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap">Security PIN Code<span className="text-red-500 ml-1">*</span></h3>
              <div className="w-48">
                <input type="password" maxLength={6} className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none tracking-widest font-mono" name="pin" placeholder="****" required />
              </div>
            </div>
            <p className="text-sm text-gray-500">Please enter a PIN code. You will need this PIN to view or edit this proposal later.</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Person<span className="text-red-500 ml-1">*</span></label>
              <input type="text" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" name="contactPerson" placeholder="John Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title<span className="text-red-500 ml-1">*</span></label>
              <input type="text" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" name="contactTitle" placeholder="Project Manager" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email<span className="text-red-500 ml-1">*</span></label>
              <input type="email" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" name="email" placeholder="johndoe@example.com" required />
            </div>
          </div>
        </div>

        {/* SECTION A: PROJECT OVERVIEW */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="bg-primary-700 px-6 py-3 rounded-t-lg">
            <h3 className="text-white font-bold text-lg">A. PROJECT OVERVIEW</h3>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700">Title<span className="text-red-500 ml-1">*</span></label>
              <input type="text" name="projectTitle" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6">
              <h4 className="text-sm font-bold text-gray-900 border-b border-gray-200 pb-2">Sector / Technology Area</h4>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Window<span className="text-red-500 ml-1">*</span></label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" name="window" value="bankable" className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-600" />
                    <span className="text-sm text-gray-700">Bankable / Sustainable Project Development</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" name="window" value="gcf" className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-600" />
                    <span className="text-sm text-gray-700">GCF or Equivalent Project Development</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" name="window" value="policy" className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-600" />
                    <span className="text-sm text-gray-700">Policy / Regulatory, Capacity Building, Fund Internationalization</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700">International Partnerships<span className="text-red-500 ml-1">*</span></label>
                <p className="text-xs text-gray-500 mt-1 mb-2">Indicate Y if planned cross-country or regional cooperation, N if otherwise.</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="intl-partnership" value="Y" checked={intlPartnership === "Y"} onChange={(e) => setIntlPartnership(e.target.value)} className="h-4 w-4 text-primary-600" required /> Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="intl-partnership" value="N" checked={intlPartnership === "N"} onChange={(e) => setIntlPartnership(e.target.value)} className="h-4 w-4 text-primary-600" /> No
                  </label>
                </div>
              </div>

              {intlPartnership === "Y" && (
                <div>
                  <label className="block text-sm font-bold text-gray-700">Applicable Country(ies)<span className="text-red-500 ml-1">*</span></label>
                  <p className="text-xs text-gray-500 mt-1 mb-2">Rationale for country selection</p>
                  <div className="relative mt-2">
                    <div 
                      className="min-h-[38px] w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 bg-white cursor-text sm:text-sm flex flex-wrap gap-2 items-center"
                      onClick={() => setShowCountryDropdown(true)}
                    >
                      {selectedCountries.map((c) => (
                        <span key={c} className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded-md text-xs flex items-center gap-1">
                          {c}
                          <button type="button" onClick={(e) => { e.stopPropagation(); toggleCountry(c); }} className="hover:text-primary-900">&times;</button>
                        </span>
                      ))}
                      <input 
                        type="text" 
                        className="flex-1 outline-none bg-transparent min-w-[100px] text-sm" 
                        placeholder={selectedCountries.length === 0 ? "Select countries..." : ""}
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        onFocus={() => setShowCountryDropdown(true)}
                        onBlur={() => setTimeout(() => setShowCountryDropdown(false), 200)}
                      />
                    </div>
                    {showCountryDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto sm:text-sm">
                        {filteredCountries.length > 0 ? filteredCountries.map((c) => (
                          <div 
                            key={c} 
                            className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-primary-50 text-gray-900"
                            onClick={() => { toggleCountry(c); setCountrySearch(""); }}
                          >
                            <span className="block truncate">{c}</span>
                            {selectedCountries.includes(c) && (
                              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600">
                                ✓
                              </span>
                            )}
                          </div>
                        )) : (
                          <div className="py-2 px-3 text-gray-500">No matches found.</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SECTION B: PROJECT RATIONALE */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="bg-primary-700 px-6 py-3 rounded-t-lg">
            <h3 className="text-white font-bold text-lg">B. PROJECT RATIONALE & VALUE PROPOSITION</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6">
              <h4 className="text-sm font-bold text-gray-900 border-b border-gray-200 pb-2">Problem / Gap Addressed</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col h-full">
                  <label className="block text-sm font-bold text-gray-700 mb-2">TRL (Technology Readiness Level)<span className="text-red-500 ml-1">*</span></label>
                  <select name="trl" name="crl" className="mt-auto block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none bg-white" required>
                    <option value="">Select 1~9</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col h-full">
                  <label className="block text-sm font-bold text-gray-700 mb-2">CRL (Commercial Readiness Level)<span className="text-red-500 ml-1">*</span></label>
                  <select className="mt-auto block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none bg-white" required>
                    <option value="">Select 1~9</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col h-full">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Pilot experience<span className="text-red-500 ml-1">*</span></label>
                  <div className="flex gap-4 mt-auto py-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="pilot" value="Y" className="h-4 w-4 text-primary-600" required /> Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="pilot" value="N" className="h-4 w-4 text-primary-600" /> No
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Relevant background, baseline conditions, or existing initiatives if applicable.<span className="text-red-500 ml-1">*</span></label>
                <textarea name="problem" rows={3} className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Project Uniqueness / Differentiation<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Distinctive features and linkages to existing climate technology initiatives in the region.</p>
              <textarea name="financingRationale" rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700">Local Application & Expected Benefits<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Potential use cases, target beneficiaries, technology adoption, job creation, and socioeconomic benefits.</p>
              <textarea rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Scale-Up / Replication Potential<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Potential for expansion, policy adoption, market development, or replication across countries or regions.</p>
              <textarea rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>
          </div>
        </div>

        {/* SECTION C: FUTURE FINANCING */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="bg-primary-700 px-6 py-3 rounded-t-lg">
            <h3 className="text-white font-bold text-lg">C. FUTURE FINANCING OPPORTUNITIES</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.gggi} onChange={() => handleFinancingChange("gggi")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">GGGI or international cooperation programs</span>
                  {financingOpts.gggi && (
                    <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.climate} onChange={() => handleFinancingChange("climate")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">Climate finance or MDB/development finance opportunities</span>
                  {financingOpts.climate && (
                    <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.gov} onChange={() => handleFinancingChange("gov")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">Government or ODA-supported programs</span>
                  {financingOpts.gov && (
                    <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.private} onChange={() => handleFinancingChange("private")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">Private investment or commercialization opportunities</span>
                  {financingOpts.private && (
                    <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.carbon} onChange={() => handleFinancingChange("carbon")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">Carbon market opportunities</span>
                  {financingOpts.carbon && (
                    <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.others} onChange={() => handleFinancingChange("others")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">Others</span>
                  {financingOpts.others && (
                    <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Rationale for Future Financing Opportunities<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Plan to obtain larger-scale funding, investment, or proposal development after completion of CTAF support.</p>
              <textarea rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>
          </div>
        </div>

        {/* SECTION D: RISK ASSESSMENT */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="bg-primary-700 px-6 py-3 rounded-t-lg">
            <h3 className="text-white font-bold text-lg">D. RISK ASSESSMENT, NEW PATENT OPPORTUNITIES & COMMUNICATION PLAN</h3>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-800">Key Risks</label>
              <p className="text-xs text-gray-500 mt-1 mb-3">Potential risks related to climate, institutional capacity, E&S, finance, technology readiness, opposition from civic groups, and regulatory conditions.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700">Regulatory Risk<span className="text-red-500 ml-1">*</span></label>
                  <textarea name="riskRegulatory" rows={2} className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">Climate Risk<span className="text-red-500 ml-1">*</span></label>
                  <textarea name="riskClimate" rows={2} className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Utilization of existing patents & New Patent Opportunities<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Potential utilization of existing patents and development of new patent applications during project implementation (including indicative patent keywords).</p>
              <textarea name="patents" rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Communication & Visibility Strategy<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Preliminary approach for local promotion, communication channels, showcases and visibility activities.</p>
              <textarea name="commStrategy" rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>
          </div>
        </div>

        {/* Submission Info */}
        <div className="bg-gray-50 shadow-sm border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-sm text-gray-700 font-medium leading-relaxed">
            Completed proposals should be submitted to the designated CTAF focal point at GGGI.
            <br />
            For enquiries, please contact <a href="mailto:CTAF@gggi.org" className="text-primary-600 hover:underline font-bold">CTAF@gggi.org</a>
          </p>
        </div>

        {/* Submit Actions */}
        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
          
          <button type="submit" className="px-6 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-md hover:bg-primary-500 transition-colors shadow-sm">
            Submit Proposal
          </button>
        </div>
      </form>
        </>
      )}
    </div>
  );
}
