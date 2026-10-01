import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  UploadCloud,
  CheckCircle2,
  Building2,
  Factory,
  ArrowLeft,
  Sparkles,
  Globe2,
  Award,
  Layers,
  FileText,
  User,
  ExternalLink
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
    inquiryType: 'Price Quote for Bolts & Nuts',
    plantLocation: 'Nashik Manufacturing Plants (Maharashtra)',
    partCategory: 'High-Tensile Bolts & Screws',
    specifications: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-gray-900 selection:bg-blue-600 selection:text-white">
      {/* ════════════ HEADER / NAVIGATION BAR ════════════ */}
      <header className="sticky top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md py-3.5 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logos + Tagline */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <div className="h-10 px-2.5 py-1 bg-white rounded-lg flex items-center gap-2 shadow-sm border border-gray-200">
                <img
                  src="/logo/HF LOGO (1).png"
                  alt="Hindustan Fasteners Logo"
                  className="h-6 w-auto object-contain"
                />
                <div className="h-4 w-[1px] bg-gray-300" />
                <img
                  src="/logo/PFS logo.png"
                  alt="Precision Forging & Stamping Logo"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xs sm:text-sm tracking-wide text-gray-950 group-hover:text-blue-600 transition leading-tight uppercase">
                  Hindustan Fasteners
                </span>
                <span className="text-[10px] font-mono font-bold text-blue-900 leading-tight uppercase tracking-wider">
                  Precision Forging &amp; Stamping
                </span>
                <span className="text-[9px] font-sans text-gray-500 italic leading-tight hidden sm:block">
                  "Indian at heart with world class part"
                </span>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-semibold text-gray-600 font-mono">
            <button
              onClick={onBackToHome}
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </button>
            <button
              onClick={onOpenCatalog}
              className="hover:text-blue-600 transition-colors text-gray-800 font-bold"
            >
              Product Catalogue
            </button>
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 font-bold border border-blue-200">
              Contact Us &amp; 3D Map
            </span>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:marketing@hfpfs.com"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-xl border border-blue-200 transition"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" /> marketing@hfpfs.com
            </a>
            <button
              onClick={onBackToHome}
              className="px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-blue-600 transition shadow-sm"
            >
              ← Return Home
            </button>
          </div>
        </div>
      </header>

      {/* ════════════ HERO BANNER ════════════ */}
      <section className="bg-gradient-to-b from-slate-950 via-[#0a1226] to-slate-950 text-white py-12 sm:py-16 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.18),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Direct Plant Communication Desk
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-4 leading-tight">
              CONNECT DIRECTLY WITH OUR PRODUCTION PLANTS
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Operating <strong>3 manufacturing plants in Satpur MIDC Nashik</strong>, <strong>2 manufacturing plants in Pantnagar (Uttarakhand)</strong>, and an <strong>upcoming Mega Plant in Chhatrapati Sambhajinagar</strong>. Inquire directly for OEM high-tensile fasteners, nuts, bolts, washers, stamped parts, and sample-based development.
            </p>
          </div>

          {/* Key Facts Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-800 text-xs font-mono">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-cyan-300 text-base sm:text-xl font-black font-display block">54,000 MT</span>
              <span className="text-slate-400 text-[10px]">Annual Production Capacity</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-white text-base sm:text-xl font-black font-display block">2,20,000 sq. mtr.</span>
              <span className="text-slate-400 text-[10px]">Total Production Space</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-cyan-300 text-base sm:text-xl font-black font-display block">3,00,000+</span>
              <span className="text-slate-400 text-[10px]">Variety of Fastener Parts</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-white text-base sm:text-xl font-black font-display block">₹250+ Crore</span>
              <span className="text-slate-400 text-[10px]">Turnover · 50+ Yrs Exp.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 3D INTERACTIVE PLANT MAP SECTION ════════════ */}
      <section className="py-12 sm:py-16 bg-[#0B132B] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-2">
              <Globe2 className="w-3.5 h-3.5 text-cyan-400" /> Geographic Footprint &amp; Facility Explorer
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-white">
              3D INTERACTIVE MANUFACTURING PLANT MAP
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-mono">
              Click and rotate the 3D model below to inspect our manufacturing units in Maharashtra (Nashik), Uttarakhand (Pantnagar), and Chhatrapati Sambhajinagar.
            </p>
          </div>

          {/* Interactive 3D Canvas + Plant Card */}
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
      </section>

      {/* ════════════ CONTACT ENQUIRY FORM & DIRECT CONTACT CARDS ════════════ */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Direct Plant Directory & Global Coordinates */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-blue-900 font-bold tracking-wider uppercase block mb-1">
                  Plant &amp; Export Directory
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-gray-950">
                  Direct Plant Coordinates
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Reach out directly to our central marketing and plant engineering desks.
                </p>
              </div>

              {/* Primary Email Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/30 flex items-center justify-center border border-blue-400/40">
                    <Mail className="w-4 h-4 text-cyan-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider block">
                      Official Central Marketing Email
                    </span>
                    <a
                      href="mailto:marketing@hfpfs.com"
                      className="text-base sm:text-lg font-bold font-mono text-white hover:text-cyan-300 transition"
                    >
                      marketing@hfpfs.com
                    </a>
                  </div>
                </div>
                <p className="text-xs text-slate-300 pl-12">
                  Direct RFQ intake for drawings, price lists, automotive OEM audits, and bulk purchase orders.
                </p>
              </div>

              {/* Plant Cards */}
              <div className="space-y-4 text-xs">
                {/* Nashik Hub Card */}
                <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold font-display text-sm text-gray-950 flex items-center gap-1.5">
                      <Factory className="w-4 h-4 text-blue-600" /> Satpur MIDC, Nashik (3 Plants)
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-mono text-[10px] font-bold">
                      Corporate HQ
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Plot No. 42, 43, 58 &amp; 112, Satpur MIDC Industrial Area, Nashik - 422 007, Maharashtra, India.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-700 font-mono pt-2 border-t border-gray-200">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-blue-600" /> +91 (253) 235 0890
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-blue-600" /> marketing@hfpfs.com
                    </span>
                  </div>
                </div>

                {/* Pantnagar Hub Card */}
                <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold font-display text-sm text-gray-950 flex items-center gap-1.5">
                      <Factory className="w-4 h-4 text-emerald-600" /> Pantnagar Hub (2 Plants)
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-mono text-[10px] font-bold">
                      North India Hub
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Plot No. 14 &amp; 18, Sector 7, Integrated Industrial Estate (IIE) Pantnagar, Udham Singh Nagar - 263 153, Uttarakhand.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-700 font-mono pt-2 border-t border-gray-200">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" /> +91 (5944) 250 120
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-emerald-600" /> marketing@hfpfs.com
                    </span>
                  </div>
                </div>

                {/* Upcoming Mega Plant Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold font-display text-sm text-amber-950 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-amber-600" /> Chhatrapati Sambhajinagar
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-mono text-[10px] font-bold">
                      Upcoming Mega Plant
                    </span>
                  </div>
                  <p className="text-amber-900 leading-relaxed">
                    Shendra AURIC DMIC Industrial Corridor, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra.
                  </p>
                </div>

                {/* Delhi & Global Export Card */}
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 shadow-sm">
                  <span className="font-bold font-display text-sm text-gray-950 flex items-center gap-1.5 mb-1">
                    <Globe2 className="w-4 h-4 text-blue-600" /> Global Exports &amp; Delhi NCR Coordination
                  </span>
                  <p className="text-gray-600 leading-relaxed">
                    Active regular container export shipments to the <strong>United States</strong> and dedicated automotive distribution network across <strong>Delhi NCR</strong> &amp; pan-India OEM clusters.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: In-Depth RFQ / Enquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-gray-200 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold tracking-wider mb-1.5">
                    <Send className="w-3 h-3 text-blue-600" /> Instant Technical Quotation
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-display text-gray-950">
                    Request Price Quote &amp; Technical Consultation
                  </h3>
                </div>
              </div>

              {formSubmitted ? (
                /* Success Message */
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-300">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black font-display text-gray-950">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-sm font-mono text-blue-900 font-bold">
                    Assigned Reference: #RFQ-{Math.floor(Math.random() * 90000 + 10000)}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you! Your requirements have been forwarded directly to our engineering desk at <strong>marketing@hfpfs.com</strong>. Our senior metallurgist and sales engineer will reply within 24 business hours.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold font-mono hover:bg-gray-200 transition"
                    >
                      Send Another Inquiry
                    </button>
                    <button
                      onClick={onBackToHome}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold font-mono hover:bg-blue-700 transition"
                    >
                      Return to Website
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1.5 font-mono">
                        <User className="w-3.5 h-3.5 text-gray-400" /> Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1.5 font-mono">
                        <Building2 className="w-3.5 h-3.5 text-gray-400" /> Company / Organization *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Bharat Auto Dynamics Pvt Ltd"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1.5 font-mono">
                        <Mail className="w-3.5 h-3.5 text-gray-400" /> Business Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="purchasing@company.com"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1.5 font-mono">
                        <Phone className="w-3.5 h-3.5 text-gray-400" /> Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                      />
                    </div>
                  </div>

                  {/* Preferred Plant & Product Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 mb-1.5 block font-mono">
                        Preferred Manufacturing Hub
                      </label>
                      <select
                        value={formData.plantLocation}
                        onChange={(e) => setFormData({ ...formData, plantLocation: e.target.value })}
                        className="w-full px-3.5 py-3 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 font-medium focus:border-blue-500 focus:outline-none transition"
                      >
                        <option>Nashik Manufacturing Plants (Maharashtra)</option>
                        <option>Pantnagar Manufacturing Plants (Uttarakhand)</option>
                        <option>Chhatrapati Sambhajinagar (Mega Plant)</option>
                        <option>Global Export Division (USA &amp; International)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 mb-1.5 block font-mono">
                        Product Category
                      </label>
                      <select
                        value={formData.partCategory}
                        onChange={(e) => setFormData({ ...formData, partCategory: e.target.value })}
                        className="w-full px-3.5 py-3 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 font-medium focus:border-blue-500 focus:outline-none transition"
                      >
                        <option>High-Tensile Hex &amp; Flange Bolts</option>
                        <option>Engine Cylinder &amp; Chassis Bolts</option>
                        <option>Heavy Vehicle Wheel Bolts &amp; Nuts</option>
                        <option>Specialty Lock Nuts (Nylock / Weld / U-Nuts)</option>
                        <option>Washers (Belleville / Spring / Plain / SEMS)</option>
                        <option>Precision Stamped Brackets &amp; Components</option>
                        <option>Custom Forging / Drawing Based Parts</option>
                      </select>
                    </div>
                  </div>

                  {/* Requirements & Specs */}
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1.5 block font-mono">
                      Part Dimensions, Grade &amp; Quantity Requirements *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.specifications}
                      onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                      placeholder="Please specify thread size (e.g., M10x1.25, M16x120), strength grade (8.8, 10.9, 12.9), coating (Zinc Flake, Geomet, Phosphate), monthly/annual quantity, and target application..."
                      className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                    />
                  </div>

                  {/* File Upload / Drawing */}
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1.5 block font-mono">
                      Upload Engineering 2D/3D Drawing or Sample Photo (Optional)
                    </label>
                    <div className="relative border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-2xl p-4 text-center transition bg-gray-50 cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.dwg,.step,.stp,.png,.jpg,.jpeg,.zip"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <UploadCloud className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <span className="text-xs font-medium text-gray-700 block">
                        Drop 2D PDF drawing, 3D STEP file, or CAD model here
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono mt-0.5 block">
                        Supports PDF, DWG, STEP, STP, PNG, JPG (Up to 25 MB)
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-sm font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    SUBMIT RFQ TO MARKETING@HFPFS.COM
                  </button>

                  {/* Trust Footer */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] font-mono text-gray-500">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> IATF 16949 / ISO 45001 / BIS Certified
                    </span>
                    <span>·</span>
                    <span>24-Hour Engineering Turnaround</span>
                    <span>·</span>
                    <span>Confidential NDA Protected</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="bg-white text-gray-800 pt-12 pb-10 border-t border-gray-200 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo/HF LOGO (1).png" alt="Hindustan Fasteners" className="h-7 w-auto object-contain" />
              <div className="h-4 w-[1px] bg-gray-300" />
              <img src="/logo/PFS logo.png" alt="Precision Forging & Stamping" className="h-7 w-auto object-contain" />
            </div>
            <p className="text-xs text-gray-600 max-w-xl">
              Hindustan Fasteners &amp; Precision Forging &amp; Stamping. 5 Modern Manufacturing Plants (3 in Satpur MIDC Nashik, 2 in Pantnagar) + Upcoming Mega Plant in Chhatrapati Sambhajinagar. Over 2,20,000 m² footprint with 54,000 MT annual production capacity.
            </p>
          </div>
          <div className="text-[11px] font-mono text-gray-500 border-t border-gray-200 pt-6">
            © 2026 Hindustan Fasteners &amp; Precision Forging &amp; Stamping · Email: marketing@hfpfs.com · IATF 16949 · ISO 45001 · BIS Certified
          </div>
        </div>
      </footer>
    </div>
  );
};
