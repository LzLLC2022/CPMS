"use client";

import React, { useState } from "react";

export default function ProposalRegistrationPage() {
  const ALL_COUNTRIES = ["South Korea", "United States", "Japan", "Vietnam", "Indonesia", "Philippines", "Fiji", "Mongolia", "Senegal", "Uganda", "Rwanda"];
  const [intlPartnership, setIntlPartnership] = useState("N");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const filteredCountries = ALL_COUNTRIES.filter((c) => c.toLowerCase().includes(countrySearch.toLowerCase()));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Proposal submitted successfully!");
    // In a real app, you would gather form data and post it to an API here
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
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
              <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap">Security PIN Code</h3>
              <div className="w-48">
                <input type="password" maxLength={6} className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none tracking-widest font-mono" placeholder="****" required />
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
              <label className="block text-sm font-medium text-gray-700">Contact Person</label>
              <input type="text" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" placeholder="John Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" placeholder="Project Manager" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" placeholder="johndoe@example.com" required />
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
              <label className="block text-sm font-bold text-gray-700">Title</label>
              <input type="text" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6">
              <h4 className="text-sm font-bold text-gray-900 border-b border-gray-200 pb-2">Sector / Technology Area</h4>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Window</label>
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
                <label className="block text-sm font-bold text-gray-700">International Partnerships</label>
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
                  <label className="block text-sm font-bold text-gray-700">Applicable Country(ies)</label>
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
            <div>
              <label className="block text-sm font-medium text-gray-700">Problem / Gap Addressed</label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Relevant background, baseline conditions, or existing initiatives if applicable.</p>
              <textarea rows={3} className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">TRL (1~9)</label>
                <p className="text-xs text-gray-500 mt-1">Technology Readiness Level</p>
                <input type="number" min="1" max="9" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CRL (1~9)</label>
                <p className="text-xs text-gray-500 mt-1">Commercial Readiness Level</p>
                <input type="number" min="1" max="9" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pilot experience</label>
                <div className="flex gap-4 mt-4">
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
              <label className="block text-sm font-medium text-gray-700">Project Uniqueness / Differentiation</label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Distinctive features and linkages to existing climate technology initiatives in the region.</p>
              <textarea rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Local Application & Expected Benefits</label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Potential use cases, target beneficiaries, technology adoption, job creation, and socioeconomic benefits.</p>
              <textarea rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Scale-Up / Replication Potential</label>
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
            <p className="text-sm text-gray-600 font-medium italic">※ Multiple selections allowed</p>
            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-medium">GGGI or international cooperation programs</span>
                  <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" />
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-medium">Climate finance or MDB/development finance opportunities</span>
                  <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" />
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-medium">Government or ODA-supported programs</span>
                  <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" />
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-medium">Private investment or commercialization opportunities</span>
                  <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" />
                </div>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-700 font-medium">Carbon market opportunities</span>
                    <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" />
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-700 font-medium">Others</span>
                    <input type="text" placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" />
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Rationale for Future Financing Opportunities</label>
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
                  <label className="block text-xs font-medium text-gray-700">Regulatory Risk</label>
                  <textarea rows={2} className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">Climate Risk</label>
                  <textarea rows={2} className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Utilization of existing patents & New Patent Opportunities</label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Potential utilization of existing patents and development of new patent applications during project implementation (including indicative patent keywords).</p>
              <textarea rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Communication & Visibility Strategy</label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Preliminary approach for local promotion, communication channels, showcases and visibility activities.</p>
              <textarea rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>
          </div>
        </div>

        {/* Supporting Materials */}
        <div className="bg-gray-50 shadow-sm border border-gray-200 rounded-lg overflow-hidden border-dashed border-2">
          <div className="p-6 text-center">
            <h3 className="text-lg font-bold text-gray-900">Supporting Materials</h3>
            <p className="text-sm text-gray-500 mt-1 mb-6">
              Upload PROJECT PROCESS FLOW/DIAGRAM/IMAGES, RELEVANT DATA AND EVIDENCE, and VISUAL REFERENCES.
            </p>
            <div className="flex justify-center">
              <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                <span>Upload a file</span>
                <input type="file" className="sr-only" multiple />
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-3">PDF, PNG, JPG up to 10MB each</p>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
          <button type="button" className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
            Save Draft
          </button>
          <button type="submit" className="px-6 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-md hover:bg-primary-500 transition-colors shadow-sm">
            Submit Proposal
          </button>
        </div>
      </form>
    </div>
  );
}
