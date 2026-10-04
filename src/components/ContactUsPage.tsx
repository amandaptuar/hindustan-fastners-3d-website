import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  UploadCloud,
  CheckCircle2,
  Building2,
  Factory,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  User
} from 'lucide-react';
import { Interactive3DPlantMap, plantLocationsData, PlantLocationInfo } from './Interactive3DPlantMap';

export const ContactUsPage: React.FC<{
  onBackToHome: () => void;
  onOpenCatalog: () => void;
}> = ({ onBackToHome, onOpenCatalog }) => {
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'nashik' | 'pantnagar' | 'sambhajinagar'>('all');
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(plantLocationsData[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    plantLocation: 'Satpur MIDC, Nashik (Maharashtra)',
    partCategory: 'Bolts, Nuts & Screws',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* ── TOP NAV STRIP ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-2.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 group text-left cursor-pointer min-w-0"
          >
            <div className="h-9 sm:h-11 px-2 sm:px-2.5 bg-white rounded-xl flex items-center gap-1.5 sm:gap-2 shadow-sm border border-gray-200 flex-shrink-0">
              <img src="/logo/HF LOGO (1).png" alt="HF" className="h-5 sm:h-7 w-auto object-contain" />
              <div className="h-4 sm:h-5 w-[1px] bg-gray-300" />
              <img src="/logo/PFS logo.png" alt="PFS" className="h-5 sm:h-7 w-auto object-contain" />
            </div>
            <div className="flex flex-col min-w-0 hidden sm:flex">
              <span className="font-display font-black text-xs sm:text-sm lg:text-[15px] tracking-wide text-gray-950 uppercase leading-tight group-hover:text-blue-600 transition">
                Hindustan Fasteners
              </span>
              <span className="font-display font-black text-xs sm:text-sm lg:text-[15px] tracking-wide text-gray-950 uppercase leading-tight group-hover:text-blue-600 transition">
                Precision Forging &amp; Stamping
              </span>
              <span className="text-[8.5px] sm:text-[10px] font-sans text-gray-500 italic leading-tight mt-0.5">
                Indian at heart with world class part
              </span>
            </div>
          </button>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={onOpenCatalog}
              className="hidden sm:inline-block text-xs font-mono font-bold text-gray-700 hover:text-blue-600 transition"
            >
              Product Catalogue →
            </button>
            <button
              onClick={onBackToHome}
              className="px-3 py-1.5 rounded-xl bg-gray-900 text-white text-[11px] sm:text-xs font-bold font-mono hover:bg-blue-600 transition shadow-sm"
            >
              ← Home
            </button>
          </div>
        </div>
      </header>

      {/* ── CONTACT HEADER & 3 QUICK CARDS ── */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
            <h1 className="text-xl sm:text-4xl font-black font-display text-gray-950 tracking-tight">
              Contact Us
            </h1>
            <p className="text-[11px] sm:text-sm text-gray-600 mt-1">
              Connect directly with our marketing and plant engineering desks.
            </p>
          </div>

          {/* 3 Quick Cards — stack on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 max-w-4xl mx-auto text-xs font-mono">
            {/* Email */}
            <a href="mailto:marketing@hfpfs.com" className="p-3 sm:p-3.5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3 shadow-sm active:scale-[0.98] transition">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-gray-500 font-semibold block uppercase">Email</span>
                <span className="font-bold text-blue-900 text-sm block truncate">marketing@hfpfs.com</span>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+912532350890" className="p-3 sm:p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 shadow-sm active:scale-[0.98] transition">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-semibold block uppercase">Call Us</span>
                <span className="font-bold text-emerald-900 text-sm block">+91 (253) 235 0890</span>
              </div>
            </a>

            {/* HQ Location */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-semibold block uppercase">Corporate HQ</span>
                <span className="font-bold text-gray-900 text-xs block">Satpur MIDC, Nashik, MH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP + RFQ FORM ── */}
      <section className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          {/* On mobile: map first, then form stacked below */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">

            {/* Map */}
            <div className="lg:col-span-7">
              <h2 className="text-base sm:text-xl font-black font-display text-gray-950 flex items-center gap-2 mb-2 sm:mb-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA4335]" /> Plant Location
              </h2>
              <Interactive3DPlantMap
                selectedRegion={selectedRegion}
                onSelectRegion={(reg) => {
                  setSelectedRegion(reg);
                  const matching = reg === 'all' ? plantLocationsData[0] : plantLocationsData.find(p => p.region === reg);
                  if (matching) setSelectedPlantId(matching.id);
                }}
                selectedPlantId={selectedPlantId}
                onSelectPlant={(plant) => setSelectedPlantId(plant.id)}
              />
            </div>

            {/* RFQ Form */}
            <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-4 sm:p-7 shadow-lg">
              <div className="mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-100">
                <h3 className="text-base sm:text-xl font-black font-display text-gray-950">
                  Request a Quote
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                  Send enquiry to <strong className="text-blue-900">marketing@hfpfs.com</strong>
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-6 sm:py-8 space-y-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-display text-gray-900">Enquiry Received!</h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 max-w-xs mx-auto">
                    Your request has been forwarded to <strong>marketing@hfpfs.com</strong>. We will reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 px-5 py-2 rounded-xl bg-gray-100 text-gray-800 text-xs font-mono font-bold hover:bg-gray-200 transition"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  {/* Name & Company — single column on mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-gray-700 mb-1 block">Your Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ramesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 sm:py-2 text-sm sm:text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-gray-700 mb-1 block">Company Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Auto Components Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2.5 sm:py-2 text-sm sm:text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-gray-700 mb-1 block">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 sm:py-2 text-sm sm:text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-gray-700 mb-1 block">Phone / WhatsApp *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 sm:py-2 text-sm sm:text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  {/* Plant & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-gray-700 mb-1 block">Plant Destination</label>
                      <select
                        value={formData.plantLocation}
                        onChange={(e) => setFormData({ ...formData, plantLocation: e.target.value })}
                        className="w-full px-2.5 py-2.5 sm:py-2 text-sm sm:text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none font-medium"
                      >
                        <option>Satpur MIDC, Nashik (Maharashtra)</option>
                        <option>IIE Pantnagar (Uttarakhand)</option>
                        <option>Chhatrapati Sambhajinagar (Mega Plant)</option>
                        <option>Global Export Division (USA &amp; Export)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-gray-700 mb-1 block">Product Category</label>
                      <select
                        value={formData.partCategory}
                        onChange={(e) => setFormData({ ...formData, partCategory: e.target.value })}
                        className="w-full px-2.5 py-2.5 sm:py-2 text-sm sm:text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none font-medium"
                      >
                        <option>Hex Bolts &amp; Banjo Screws</option>
                        <option>Wheel Studs &amp; Cylinder Bolts</option>
                        <option>Lock Nuts &amp; Flange Nuts</option>
                        <option>Washers (Belleville / SEMS / Spring)</option>
                        <option>Specialty &amp; Custom Fasteners</option>
                        <option>Custom Forging From Drawing</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[11px] font-semibold text-gray-700 mb-1 block">Part Details / Quantity *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="e.g. M10x50 Grade 10.9 Hex Bolt, Zinc Flake, 50,000 pcs/month..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 sm:py-2 text-sm sm:text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 transition resize-none"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <div className="relative border border-dashed border-gray-300 hover:border-blue-500 rounded-xl p-3 sm:p-2.5 text-center transition bg-gray-50 cursor-pointer">
                      <input type="file" accept=".pdf,.dwg,.step,.stp,.png,.jpg,.jpeg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <div className="flex items-center justify-center gap-2 text-[11px] text-gray-600">
                        <UploadCloud className="w-4 h-4 text-blue-600" />
                        <span>Upload Drawing or Photo (Optional)</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 sm:py-3 text-[11px] sm:text-xs font-bold font-mono tracking-wide flex items-center justify-center gap-2 shadow-md rounded-xl"
                  >
                    <Send className="w-3.5 h-3.5" />
                    SEND ENQUIRY
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── 3 PLANT ADDRESS CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200 text-xs">
            {/* Nashik */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <span className="font-bold font-display text-gray-950 flex items-center gap-1.5 mb-1 text-[13px] sm:text-sm">
                <Factory className="w-4 h-4 text-red-600" /> Nashik (3 Plants)
              </span>
              <p className="text-gray-600 leading-relaxed mb-2 text-[11px] sm:text-xs">
                Plot 42, 43, 58 &amp; 112, Satpur MIDC, Nashik - 422 007, Maharashtra
              </p>
              <a href="tel:+912532350890" className="text-gray-700 font-mono text-[11px] pt-2 border-t border-gray-100 flex items-center gap-1">
                <Phone className="w-3 h-3 text-blue-600" /> +91 (253) 235 0890
              </a>
            </div>

            {/* Pantnagar */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <span className="font-bold font-display text-gray-950 flex items-center gap-1.5 mb-1 text-[13px] sm:text-sm">
                <Factory className="w-4 h-4 text-red-600" /> Pantnagar (2 Plants)
              </span>
              <p className="text-gray-600 leading-relaxed mb-2 text-[11px] sm:text-xs">
                Plot 14 &amp; 18, Sector 7, IIE Pantnagar - 263 153, Uttarakhand
              </p>
              <a href="tel:+915944250120" className="text-gray-700 font-mono text-[11px] pt-2 border-t border-gray-100 flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-600" /> +91 (5944) 250 120
              </a>
            </div>

            {/* Sambhajinagar */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-amber-200 bg-amber-50/40 shadow-sm">
              <span className="font-bold font-display text-amber-950 flex items-center gap-1.5 mb-1 text-[13px] sm:text-sm">
                <Building2 className="w-4 h-4 text-amber-600" /> Sambhajinagar
              </span>
              <p className="text-gray-600 leading-relaxed mb-2 text-[11px] sm:text-xs">
                AURIC / Shendra DMIC, Chhatrapati Sambhajinagar, Maharashtra
              </p>
              <div className="text-amber-800 font-mono text-[11px] pt-2 border-t border-amber-200/60 font-bold">
                Upcoming Mega Plant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-200 py-4 sm:py-6 text-center text-[11px] sm:text-xs font-mono text-gray-500 px-3">
        © 2026 Hindustan Fasteners &amp; Precision Forging &amp; Stamping · marketing@hfpfs.com
      </footer>
    </div>
  );
};
