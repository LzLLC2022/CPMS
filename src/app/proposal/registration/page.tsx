"use client";

import React, { useState } from "react";

export default function ProposalRegistrationPage() {
  const ALL_COUNTRIES = ["South Korea", "United States", "Japan", "Vietnam", "Indonesia", "Philippines", "Fiji", "Mongolia", "Senegal", "Uganda", "Rwanda"];
const [step, setStep] = useState<1 | 2>(1);
  const [textLengths, setTextLengths] = useState<Record<string, number>>({});
  
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTextLengths(prev => ({
      ...prev,
      [e.target.name]: e.target.value.length
    }));
  };
  const [supportData, setSupportData] = useState<Record<'section1'|'section2'|'section3', {file: File | null; preview: string | null; title: string; desc: string}[]>>({
    section1: [{ file: null, preview: null, title: "", desc: "" }],
    section2: [{ file: null, preview: null, title: "", desc: "" }],
    section3: [{ file: null, preview: null, title: "", desc: "" }]
  });
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
    if (step === 1) {
      const data = new FormData(e.currentTarget);
      const obj = Object.fromEntries(data.entries());
      obj.intlPartnership = intlPartnership;
      obj.selectedCountries = selectedCountries.join(", ");
      obj.window = data.getAll("window").join(", ");
      
      const financing = [];
      if (financingOpts.gggi) financing.push(`GGGI: ${data.get("financing_gggi_spec") || ""}`);
      if (financingOpts.climate) financing.push(`Climate: ${data.get("financing_climate_spec") || ""}`);
      if (financingOpts.gov) financing.push(`Government: ${data.get("financing_gov_spec") || ""}`);
      if (financingOpts.private) financing.push(`Private: ${data.get("financing_private_spec") || ""}`);
      if (financingOpts.carbon) financing.push(`Carbon: ${data.get("financing_carbon_spec") || ""}`);
      if (financingOpts.others) financing.push(`Others: ${data.get("financing_others_spec") || ""}`);
      obj.financingOptions = financing.join(" | ");

      setFormData(obj);
      setStep(2);
    } else {
      setPreviewMode(true);
    }
  };

  const handleFinalSubmit = () => {
    alert("Proposal submitted successfully!");
    setFormData(null);
    setIntlPartnership("N");
    setSelectedCountries([]);
    setFinancingOpts({ gggi: false, climate: false, gov: false, private: false, carbon: false, others: false });
    setPreviewMode(false);
  };

const handleSupportFileChange = (section: 'section1' | 'section2' | 'section3', index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const preview = file ? URL.createObjectURL(file) : null;
    setSupportData((prev) => {
      const newSec = [...prev[section]];
      if (newSec[index].preview) {
        URL.revokeObjectURL(newSec[index].preview as string);
      }
      newSec[index] = { ...newSec[index], file, preview };
      return { ...prev, [section]: newSec };
    });
  };

  const handleSupportTitleChange = (section: 'section1' | 'section2' | 'section3', index: number, value: string) => {
    setSupportData((prev) => {
      const newSec = [...prev[section]];
      newSec[index] = { ...newSec[index], title: value };
      return { ...prev, [section]: newSec };
    });
  };

  const handleSupportDescChange = (section: 'section1' | 'section2' | 'section3', index: number, value: string) => {
    setSupportData((prev) => {
      const newSec = [...prev[section]];
      newSec[index] = { ...newSec[index], desc: value };
      return { ...prev, [section]: newSec };
    });
  };

  const addSupportItem = (section: 'section1' | 'section2' | 'section3') => {
    if (supportData[section].length >= 3) return;
    setSupportData((prev) => ({
      ...prev,
      [section]: [...prev[section], { file: null, preview: null, title: "", desc: "" }]
    }));
  };

  const removeSupportItem = (section: 'section1' | 'section2' | 'section3', index: number) => {
    setSupportData((prev) => {
      const newSec = [...prev[section]];
      if (newSec[index].preview) {
        URL.revokeObjectURL(newSec[index].preview as string);
      }
      newSec.splice(index, 1);
      return { ...prev, [section]: newSec };
    });
  };

  const renderSupportSection = (
    title: string,
    sectionKey: 'section1' | 'section2' | 'section3',
    subtitle?: string
  ) => (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
      <div className="bg-primary-700 px-6 py-3 rounded-t-lg flex justify-between items-center">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        {supportData[sectionKey].length < 3 && (
          <button type="button" onClick={() => addSupportItem(sectionKey)} className="text-sm bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded transition-colors shadow-sm">
            + Add Item
          </button>
        )}
      </div>
      <div className="p-6 space-y-6">
        {subtitle && <p className="text-sm text-gray-500 font-medium">{subtitle}</p>}
        {supportData[sectionKey].map((item, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg relative bg-gray-50/50 hover:bg-gray-50 transition-colors shadow-sm">
            {supportData[sectionKey].length > 1 && (
              <button 
                type="button" 
                onClick={() => removeSupportItem(sectionKey, index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold bg-white px-2 py-0.5 rounded shadow-sm border border-red-100 text-xs"
              >
                &times; Remove
              </button>
            )}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <label className="block text-sm font-bold text-gray-700 mb-2">Image Attachment</label>
                <input type="file" accept="image/*" onChange={(e) => handleSupportFileChange(sectionKey, index, e)} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 transition-colors cursor-pointer mb-4" />
                {item.preview && (
                  <div className="relative flex-1 w-full min-h-[12rem] border border-gray-200 rounded-md overflow-hidden bg-white mt-auto">
                    <img src={item.preview} alt="Preview" className="absolute inset-0 w-full h-full object-contain p-2" />
                  </div>
                )}
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
                  <input 
                    type="text"
                    value={item.title}
                    onChange={(e) => handleSupportTitleChange(sectionKey, index, e.target.value)}
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none bg-white" 
                    placeholder="Enter title here..."
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                  <textarea 
                    value={item.desc}
                    onChange={(e) => handleSupportDescChange(sectionKey, index, e.target.value)}
                    className="block w-full flex-1 min-h-[10rem] rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none bg-white resize-none" 
                    placeholder="Enter description here..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto py-8">
      {previewMode ? (
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-8 print:border-none print:shadow-none print:p-0">
          <div className="flex justify-between items-center border-b pb-4 mb-6 print:hidden">
            <h2 className="text-2xl font-bold text-gray-900">Preview Proposal</h2>
            <button onClick={() => window.print()} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 flex items-center gap-2">
              Print / Save as PDF
            </button>
          </div>
          <div className="hidden print:block mb-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center">CTAF One-Page Proposal ({step}/2)</h2>
          </div>
          
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 print:border-none print:shadow-none print:p-0">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5 print:border-b-2 print:border-gray-800">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div><label className="block text-sm font-medium text-gray-500">Contact Person</label><span className="mt-1 block text-gray-900 font-medium">{formData.contactPerson}</span></div>
                <div><label className="block text-sm font-medium text-gray-500">Title</label><span className="mt-1 block text-gray-900 font-medium">{formData.contactTitle}</span></div>
                <div><label className="block text-sm font-medium text-gray-500">Email</label><span className="mt-1 block text-gray-900 font-medium">{formData.email}</span></div>
              </div>
            </div>
            
            {/* SECTION A */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg print:border-none print:shadow-none">
              <div className="bg-primary-700 px-6 py-3 rounded-t-lg print:bg-transparent print:text-black print:px-0 print:border-b-2 print:border-gray-800">
                <h3 className="text-white font-bold text-lg print:text-gray-900">A. PROJECT OVERVIEW</h3>
              </div>
              <div className="p-6 space-y-6 print:px-0">
                <div>
                  <label className="block text-sm font-bold text-gray-700">Title</label>
                  <div className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm bg-gray-50 print:bg-white print:ring-0 print:p-0">{formData.projectTitle}</div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700">Sector / Technology Area</label>
                  <div className="mt-2 bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6 print:bg-white print:border-none print:p-0">
                    <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Window</label>
                    <div className="text-sm text-gray-900 capitalize">{formData.window ? formData.window.replace(/,/g, ', ') : 'None'}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">International Partnerships</label>
                    <div className="mt-1 text-sm text-gray-900">{formData.intlPartnership}</div>
                  </div>
                  {formData.intlPartnership === 'Y' && (
                    <div>
                      <label className="block text-sm font-bold text-gray-700">Applicable Country(ies)</label>
                      <div className="mt-1 text-sm text-gray-900">{formData.selectedCountries}</div>
                    </div>
                  )}
                </div>
                </div>
              </div>
            </div>

            {/* SECTION B */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg print:border-none print:shadow-none">
              <div className="bg-primary-700 px-6 py-3 rounded-t-lg print:bg-transparent print:text-black print:px-0 print:border-b-2 print:border-gray-800">
                <h3 className="text-white font-bold text-lg print:text-gray-900">B. PROJECT RATIONALE & VALUE PROPOSITION</h3>
              </div>
              <div className="p-6 space-y-6 print:px-0">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Problem / Gap Addressed</label>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6 print:bg-white print:border-none print:p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">TRL</label>
                      <div className="text-sm text-gray-900">{formData.trl}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">CRL</label>
                      <div className="text-sm text-gray-900">{formData.crl}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Pilot experience</label>
                      <div className="text-sm text-gray-900">{formData.pilot}</div>
                    </div>
                  </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Relevant background, baseline conditions, or existing initiatives</label>
                      <div className="mt-2 text-sm text-gray-900 whitespace-pre-wrap">{formData.problem}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700">Project Uniqueness / Differentiation</label>
                  <div className="mt-2 text-sm text-gray-900 whitespace-pre-wrap">{formData.uniqueness}</div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Local Application & Expected Benefits</label>
                  <div className="mt-2 text-sm text-gray-900 whitespace-pre-wrap">{formData.localApp}</div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Scale-Up / Replication Potential</label>
                  <div className="mt-2 text-sm text-gray-900 whitespace-pre-wrap">{formData.scaleUp}</div>
                </div>
              </div>
            </div>

            {/* SECTION C */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg print:border-none print:shadow-none">
              <div className="bg-primary-700 px-6 py-3 rounded-t-lg print:bg-transparent print:text-black print:px-0 print:border-b-2 print:border-gray-800">
                <h3 className="text-white font-bold text-lg print:text-gray-900">C. FUTURE FINANCING OPPORTUNITIES</h3>
              </div>
              <div className="p-6 space-y-6 print:px-0">
                <div>
                  <label className="block text-sm font-bold text-gray-700">Selected Options</label>
                  <div className="mt-2 text-sm text-gray-900 whitespace-pre-wrap leading-relaxed">{formData.financingOptions ? formData.financingOptions.split(' | ').map((opt: string, i: number) => <div key={i}>??{opt}</div>) : 'None selected'}</div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Rationale for Future Financing Opportunities</label>
                  <div className="mt-2 text-sm text-gray-900 whitespace-pre-wrap">{formData.financingRationale}</div>
                </div>
              </div>
            </div>

            {/* SECTION D */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg print:border-none print:shadow-none">
              <div className="bg-primary-700 px-6 py-3 rounded-t-lg print:bg-transparent print:text-black print:px-0 print:border-b-2 print:border-gray-800">
                <h3 className="text-white font-bold text-lg print:text-gray-900">D. RISK ASSESSMENT, NEW PATENT OPPORTUNITIES & COMMUNICATION PLAN</h3>
              </div>
              <div className="p-6 space-y-6 print:px-0">
                <div>
                  <label className="block text-sm font-bold text-gray-800">Key Risks</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Regulatory Risk</label>
                      <div className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{formData.riskRegulatory}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Climate Risk</label>
                      <div className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{formData.riskClimate}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Utilization of existing patents & New Patent Opportunities</label>
                  <div className="mt-2 text-sm text-gray-900 whitespace-pre-wrap">{formData.patents}</div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Communication & Visibility Strategy</label>
                  <div className="mt-2 text-sm text-gray-900 whitespace-pre-wrap">{formData.commStrategy}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-200 mt-8 print:hidden">
              <button onClick={() => setPreviewMode(false)} className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 shadow-sm">
                Back to Edit
              </button>
              <button onClick={handleFinalSubmit} className="px-6 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-md hover:bg-primary-500 shadow-sm">
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>      ) : (
        <>
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">CTAF One-Page Proposal ({step}/2)</h2>
        <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
          The One-Page Proposal is intended to reduce administrative burden and encourage diverse early-stage ideas; therefore, please be concise.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {step === 1 && (
          <>
        
        {/* Verification PIN */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 border-l-4 border-l-primary-600">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap">Security PIN Code<span className="text-red-500 ml-1">*</span></h3>
              <div className="w-48">
                <input type="password" maxLength={6} className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none tracking-widest font-mono" name="pin" defaultValue={formData?.pin || ""} placeholder="****" required />
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
              <input type="text" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" name="contactPerson" defaultValue={formData?.contactPerson || ""} placeholder="John Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title<span className="text-red-500 ml-1">*</span></label>
              <input type="text" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" name="contactTitle" defaultValue={formData?.contactTitle || ""} placeholder="Project Manager" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email<span className="text-red-500 ml-1">*</span></label>
              <input type="email" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" name="email" defaultValue={formData?.email || ""} placeholder="johndoe@example.com" required />
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
              <div className="flex justify-end text-xs text-gray-500 mb-1">{textLengths['projectTitle'] || (formData?.projectTitle?.length || 0)}</div>
              <input type="text" onChange={handleTextChange} name="projectTitle" defaultValue={formData?.projectTitle || ""} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700">Sector / Technology Area</label>
              <div className="mt-2 bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6">
                <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Window<span className="text-red-500 ml-1">*</span></label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" name="window" value="bankable" defaultChecked={formData?.window?.includes("bankable")} className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-600" />
                    <span className="text-sm text-gray-700">Bankable / Sustainable Project Development</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" name="window" value="gcf" defaultChecked={formData?.window?.includes("gcf")} className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-600" />
                    <span className="text-sm text-gray-700">GCF or Equivalent Project Development</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" name="window" value="policy" defaultChecked={formData?.window?.includes("policy")} className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-600" />
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
                                ??
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
        </div>

        {/* SECTION B: PROJECT RATIONALE */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <div className="bg-primary-700 px-6 py-3 rounded-t-lg">
            <h3 className="text-white font-bold text-lg">B. PROJECT RATIONALE & VALUE PROPOSITION</h3>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Problem / Gap Addressed</label>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col h-full">
                  <label className="block text-sm font-bold text-gray-700 mb-2">TRL (Technology Readiness Level)<span className="text-red-500 ml-1">*</span></label>
                  <select name="trl" defaultValue={formData?.trl || ""} className="mt-auto block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none bg-white" required>
                    <option value="">Select 1~9</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col h-full">
                  <label className="block text-sm font-bold text-gray-700 mb-2">CRL (Commercial Readiness Level)<span className="text-red-500 ml-1">*</span></label>
                  <select name="crl" defaultValue={formData?.crl || ""} className="mt-auto block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none bg-white" required>
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
                      <input type="radio" name="pilot" value="Y" defaultChecked={formData?.pilot === "Y"} className="h-4 w-4 text-primary-600" required /> Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="pilot" value="N" defaultChecked={formData?.pilot === "N"} className="h-4 w-4 text-primary-600" /> No
                    </label>
                  </div>
                </div>
              </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Relevant background, baseline conditions, or existing initiatives if applicable.<span className="text-red-500 ml-1">*</span></label>
                  <div className="flex justify-end text-xs text-gray-500 mb-1">{textLengths['problem'] || (formData?.problem?.length || 0)}</div>
                  <textarea onChange={handleTextChange} name="problem" defaultValue={formData?.problem || ""} rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Project Uniqueness / Differentiation<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Distinctive features and linkages to existing climate technology initiatives in the region.</p>
              <div className="flex justify-end text-xs text-gray-500 mb-1">{textLengths['uniqueness'] || (formData?.uniqueness?.length || 0)}</div>
              <textarea onChange={handleTextChange} name="uniqueness" defaultValue={formData?.uniqueness || ""} rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700">Local Application & Expected Benefits<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Potential use cases, target beneficiaries, technology adoption, job creation, and socioeconomic benefits.</p>
              <div className="flex justify-end text-xs text-gray-500 mb-1">{textLengths['localApp'] || (formData?.localApp?.length || 0)}</div>
              <textarea onChange={handleTextChange} name="localApp" defaultValue={formData?.localApp || ""} rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Scale-Up / Replication Potential<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Potential for expansion, policy adoption, market development, or replication across countries or regions.</p>
              <div className="flex justify-end text-xs text-gray-500 mb-1">{textLengths['scaleUp'] || (formData?.scaleUp?.length || 0)}</div>
              <textarea onChange={handleTextChange} name="scaleUp" defaultValue={formData?.scaleUp || ""} rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
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
                    <input type="text" name="financing_gggi_spec" defaultValue={formData?.financing_gggi_spec || ""} placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.climate} onChange={() => handleFinancingChange("climate")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">Climate finance or MDB/development finance opportunities</span>
                  {financingOpts.climate && (
                    <input type="text" name="financing_climate_spec" defaultValue={formData?.financing_climate_spec || ""} placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.gov} onChange={() => handleFinancingChange("gov")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">Government or ODA-supported programs</span>
                  {financingOpts.gov && (
                    <input type="text" name="financing_gov_spec" defaultValue={formData?.financing_gov_spec || ""} placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.private} onChange={() => handleFinancingChange("private")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">Private investment or commercialization opportunities</span>
                  {financingOpts.private && (
                    <input type="text" name="financing_private_spec" defaultValue={formData?.financing_private_spec || ""} placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.carbon} onChange={() => handleFinancingChange("carbon")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">Carbon market opportunities</span>
                  {financingOpts.carbon && (
                    <input type="text" name="financing_carbon_spec" defaultValue={formData?.financing_carbon_spec || ""} placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" checked={financingOpts.others} onChange={() => handleFinancingChange("others")} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-bold">Others</span>
                  {financingOpts.others && (
                    <input type="text" name="financing_others_spec" defaultValue={formData?.financing_others_spec || ""} placeholder="Please specify" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required />
                  )}
                </div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Rationale for Future Financing Opportunities<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Plan to obtain larger-scale funding, investment, or proposal development after completion of CTAF support.</p>
              <textarea name="financingRationale" defaultValue={formData?.financingRationale || ""} rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
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
                  <textarea name="riskRegulatory" defaultValue={formData?.riskRegulatory || ""} rows={2} className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">Climate Risk<span className="text-red-500 ml-1">*</span></label>
                  <textarea name="riskClimate" defaultValue={formData?.riskClimate || ""} rows={2} className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Utilization of existing patents & New Patent Opportunities<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Potential utilization of existing patents and development of new patent applications during project implementation (including indicative patent keywords).</p>
              <textarea name="patents" defaultValue={formData?.patents || ""} rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">Communication & Visibility Strategy<span className="text-red-500 ml-1">*</span></label>
              <p className="text-xs text-gray-500 mt-1 mb-2">Preliminary approach for local promotion, communication channels, showcases and visibility activities.</p>
              <textarea name="commStrategy" defaultValue={formData?.commStrategy || ""} rows={3} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm outline-none" required></textarea>
            </div>
          </div>
        </div>

          </>
        )}

        {step === 2 && (
          <>
            <div className="bg-gray-50 border-l-4 border-l-primary-600 p-4 rounded-md mb-6 shadow-sm">
              <p className="text-sm font-medium text-gray-700">
                Please provide supporting materials according to the guidelines below. You can attach up to 3 images per section along with their descriptions.
              </p>
            </div>

            {renderSupportSection("1. PROJECT PROCESS FLOW/ DIAGRAM/ IMAGES", "section1", "* Encouraging the use of AI tools such as ChatGPT and Gemini for image generation to reduce unnecessary time demands")}
            {renderSupportSection("2. PROJECT-RELEVANT DATA AND EVIDENCE", "section2", "* Inclusion of credible key data or graphs to support and reinforce the first-page content (preferably focused on country-specific information)")}
            {renderSupportSection("3. VISUAL REFERENCES", "section3", "* Presentation of project impacts before and after implementation, including collaboration among industry, academia, research institutes, governments, and GGGI country offices")}
          </>
        )}

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
          {step === 1 && (
            <button type="submit" className="px-6 py-2.5 text-sm font-bold text-white bg-primary-600 rounded-md hover:bg-primary-500 transition-colors shadow-sm tracking-wide">
              NEXT (2/2)
            </button>
          )}
          {step === 2 && (
            <>
              <button type="button" onClick={() => setStep(1)} className="px-6 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm tracking-wide">
                PREV (1/2)
              </button>
              <button type="submit" className="px-6 py-2.5 text-sm font-bold text-white bg-primary-600 rounded-md hover:bg-primary-500 transition-colors shadow-sm tracking-wide">
                Submit Proposal
              </button>
            </>
          )}
        </div>
      </form>
        </>
      )}
    </div>
  );
}

