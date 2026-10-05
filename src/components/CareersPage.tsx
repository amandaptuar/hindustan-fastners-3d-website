import React, { useState } from 'react';
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  UploadCloud,
  CheckCircle2,
  ChevronLeft,
  Sparkles,
  Send,
  Building2,
  Users,
  Award,
  ShieldCheck,
} from 'lucide-react';

interface CareersPageProps {
  onBackToHome: () => void;
  onOpenCatalog?: () => void;
  onOpenContact?: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onBackToHome,
  onOpenCatalog,
  onOpenContact,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Cold Forging & Production',
    jobPosition: '',
    experience: '2 - 5 Years',
    currentCompany: '',
    message: '',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                &ldquo;Indian At Heart, World Class Parts&rdquo;
              </span>
            </div>
          </button>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {onOpenCatalog && (
              <button
                onClick={onOpenCatalog}
                className="hidden sm:inline-block text-xs font-mono font-bold text-gray-700 hover:text-blue-600 transition cursor-pointer"
              >
                Product Catalogue →
              </button>
            )}
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="hidden sm:inline-block text-xs font-mono font-bold text-gray-700 hover:text-blue-600 transition cursor-pointer"
              >
                Contact &amp; 3D Map
              </button>
            )}
            <button
              onClick={onBackToHome}
              className="px-3.5 py-1.5 rounded-xl bg-gray-900 text-white text-[11px] sm:text-xs font-bold font-mono hover:bg-blue-600 transition shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <section className="bg-gradient-to-b from-[#050B1A] via-[#0c162c] to-[#0A1224] text-white py-12 sm:py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.25),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> CAREERS &amp; VACANCY APPLICATION DESK
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white mb-3">
            BUILD YOUR CAREER WITH <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              INDIA'S PRECISION FASTENER LEADER
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
            Join <strong>750+ specialized engineering professionals</strong> shaping high-tensile bolts, nuts, cold forging, and stamping across 5 modern manufacturing plants in Nashik &amp; Pantnagar plus our upcoming Mega Plant in Sambhajinagar.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-xs font-mono">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-cyan-300 font-bold text-lg sm:text-xl">750+</div>
              <div className="text-slate-400 text-[10px] mt-0.5">Specialized Workforce</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-white font-bold text-lg sm:text-xl">36 Acres</div>
              <div className="text-slate-400 text-[10px] mt-0.5">5 Plants + Mega Plant</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-emerald-300 font-bold text-lg sm:text-xl">50+ Yrs</div>
              <div className="text-slate-400 text-[10px] mt-0.5">Manufacturing Legacy</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-amber-300 font-bold text-lg sm:text-xl">IATF &amp; BIS</div>
              <div className="text-slate-400 text-[10px] mt-0.5">Certified Safety &amp; Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT HR CONTACT INFO STRIP ── */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="mailto:hr@hfpfc.com"
              className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3.5 hover:bg-blue-100/70 transition shadow-sm group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-gray-500 font-mono font-bold block uppercase tracking-wider">Direct HR Email</span>
                <span className="font-bold font-mono text-blue-900 text-sm block truncate">hr@hfpfc.com</span>
              </div>
            </a>

            <a
              href="tel:+917888013673"
              className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3.5 hover:bg-emerald-100/70 transition shadow-sm group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-mono font-bold block uppercase tracking-wider">HR Helpline</span>
                <span className="font-bold font-mono text-emerald-900 text-sm block">+91 78880 13673</span>
              </div>
            </a>

            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-mono font-bold block uppercase tracking-wider">HR Head Office</span>
                <span className="font-bold text-gray-900 text-xs block">Satpur MIDC, Nashik, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT: PROMINENT JOB APPLICATION FORM ── */}
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-6 sm:p-10 shadow-xl">
            <div className="mb-6 pb-4 border-b border-gray-100 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold mb-2">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" /> Apply Online
              </div>
              <h2 className="text-xl sm:text-3xl font-black font-display text-gray-950">
                Submit Job Application
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Fill the details below to apply directly to our recruitment team at <strong className="text-blue-900 font-mono">hr@hfpfc.com</strong>
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900">Application Submitted Successfully!</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                  Thank you for applying, <strong>{formData.name}</strong>! Your application for <strong>{formData.jobPosition || formData.department}</strong> has been forwarded to our HR desk at <strong className="font-mono text-blue-900">hr@hfpfc.com</strong>.
                </p>
                <p className="text-xs text-gray-500">
                  Our HR recruitment team will review your CV and contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFileName(null);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-gray-900 text-white text-xs font-mono font-bold hover:bg-blue-600 transition cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1.5 block">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Ramesh Patil"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1.5 block">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1.5 block">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Department & Job Position */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1.5 block">
                      Preferred Department *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:bg-white font-medium"
                    >
                      <option>Cold Forging &amp; Production</option>
                      <option>Quality Assurance &amp; Metallurgy</option>
                      <option>Tool Room &amp; CAD/CAM</option>
                      <option>Secondary Machining &amp; CNC</option>
                      <option>Heat Treatment (SCADA)</option>
                      <option>Surface Finishing &amp; Plating</option>
                      <option>Plant Maintenance &amp; Electrical</option>
                      <option>Supply Chain &amp; Logistics</option>
                      <option>Marketing &amp; Technical Sales</option>
                      <option>Accounts &amp; Administration</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1.5 block">
                      Job Position / Role *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Cold Heading Operator / Quality Engineer"
                      value={formData.jobPosition}
                      onChange={(e) => setFormData({ ...formData, jobPosition: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Experience & Current Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1.5 block">
                      Total Experience Level *
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:bg-white font-medium"
                    >
                      <option>Fresher / Trainee</option>
                      <option>1 - 2 Years</option>
                      <option>2 - 5 Years</option>
                      <option>5 - 10 Years</option>
                      <option>10+ Years (Senior Lead / Manager)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1.5 block">
                      Current / Previous Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ABC Auto Components Pvt Ltd"
                      value={formData.currentCompany}
                      onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* CV / Resume Upload */}
                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1.5 block">
                    Upload Resume / CV (PDF, DOCX, DOC) *
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-2xl p-4 text-center transition bg-gray-50 hover:bg-blue-50/40 cursor-pointer">
                    <input
                      required
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-gray-600">
                      <UploadCloud className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">
                        {fileName ? (
                          <strong className="text-blue-900 font-mono">{fileName}</strong>
                        ) : (
                          'Click to select CV file from your device (.pdf, .docx, .doc)'
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Message / Cover Note */}
                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1.5 block">
                    Key Competencies / Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention machinery expertise, current CTC, expected CTC, notice period, or relocation preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-xs font-bold font-mono tracking-wider flex items-center justify-center gap-2 shadow-lg rounded-xl cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  SUBMIT APPLICATION TO HR DESK (hr@hfpfc.com)
                </button>

                <p className="text-[11px] text-gray-500 text-center font-mono">
                  Direct submission to HR recruitment desk: <strong>hr@hfpfc.com</strong> · Tel: <strong>+91 78880 13673</strong>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-xs font-mono text-gray-500 px-3">
        © 2026 Hindustan Fasteners &amp; Precision Forging &amp; Stamping · HR Recruitment: hr@hfpfc.com · Tel: +91 78880 13673
      </footer>
    </div>
  );
};
