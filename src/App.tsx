import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  UploadCloud,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Microscope,
  Flame,
  Layers,
  Wrench,
  Target,
  Zap,
  Eye,
  Award,
  Factory,
  Cog,
  Check,
  RotateCcw,
  Building2,
  Truck,
  Gauge,
  Sliders,
  FileText,
  SlidersHorizontal,
} from 'lucide-react';

/* ─────────────────────────── QUOTE MODAL ─────────────────────────── */
const QuoteModal: React.FC<{ isOpen: boolean; onClose: () => void; product?: string }> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative border border-gray-100">
        <button
          onClick={() => { setSubmitted(false); onClose(); }}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Submitted Successfully</h3>
            <p className="text-sm text-gray-600 max-w-sm mx-auto mb-6">
              Assigned reference ticket <span className="font-mono font-bold text-blue-900">#HF-RFQ-{Math.floor(Math.random() * 9000 + 1000)}</span>. Our Satpur MIDC technical engineering desk will review your prints and reply within 24 hours.
            </p>
            <button onClick={() => { setSubmitted(false); onClose(); }} className="btn-primary">
              Close Portal
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-900" /> IATF 16949 Engineering RFQ Desk
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Request a Custom Quote</h3>
            <p className="text-xs text-gray-500 mb-4">
              Direct engineering inquiry to Hindustan Fasteners & Precision Forging & Stamping (Nashik Plants)
            </p>
            {product && (
              <div className="mb-4 p-2.5 rounded-lg bg-blue-50/70 border border-blue-200 text-xs font-mono text-blue-900 font-semibold">
                Target Product: {product}
              </div>
            )}
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Name *</label>
                  <input required type="text" placeholder="e.g. Rajesh Sharma" className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">OEM / Company Name *</label>
                  <input required type="text" placeholder="e.g. Automotive Tier-1 Ltd" className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Official Email *</label>
                  <input required type="email" placeholder="engineering@company.com" className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone / WhatsApp *</label>
                  <input required type="tel" placeholder="+91 98765 43210" className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Property Class</label>
                  <select className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 font-mono focus:border-blue-900">
                    <option>Class 8.8</option>
                    <option>Class 10.9</option>
                    <option>Class 12.9</option>
                    <option>Class 4.8 / 6.8</option>
                    <option>Custom OEM Spec</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Size (M4–M24)</label>
                  <input type="text" defaultValue="M10 × 65 mm" className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 font-mono focus:border-blue-900" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Surface Coating</label>
                  <select className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 font-mono focus:border-blue-900">
                    <option>Zinc Flake (Geomet)</option>
                    <option>Zinc Electroplating</option>
                    <option>Zinc Phosphating</option>
                    <option>Hot Dip Galvanized</option>
                    <option>Loctite Pre-Applied</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Upload 2D / 3D CAD Drawing (PDF · DWG · STEP)</label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-blue-900 transition bg-gray-50/80">
                  <input type="file" accept=".pdf,.dwg,.step,.stp,.iges,.dxf" onChange={(e) => { if (e.target.files?.[0]) setFileName(e.target.files[0].name); }} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <UploadCloud className="w-6 h-6 text-blue-900 mx-auto mb-1" />
                  <span className="text-xs font-medium text-gray-700 block">
                    {fileName ? `Attached: ${fileName}` : 'Click or drop OEM Drawing / Spec Sheet'}
                  </span>
                  <span className="text-[10px] text-gray-400 block mt-0.5">Max 50MB · Strict NDA Confidentiality Guaranteed</span>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 font-bold tracking-wide">
                SUBMIT RFQ TO TECHNICAL DESK →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────── CERTIFICATE MODAL ─────────────────────────── */
const CertificateModal: React.FC<{ isOpen: boolean; onClose: () => void; certImg: string; certTitle: string; unit: string }> = ({
  isOpen,
  onClose,
  certImg,
  certTitle,
  unit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-hidden shadow-2xl p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
          <X className="w-4 h-4 text-gray-700" />
        </button>
        <div className="mb-4">
          <div className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider">{unit}</div>
          <h3 className="text-xl font-bold text-gray-900">{certTitle}</h3>
          <p className="text-xs text-gray-500">Issued by BSI Assurance UK Limited · Automotive IATF 16949:2016</p>
        </div>
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 max-h-[70vh] flex items-center justify-center p-2">
          <img src={certImg} alt={certTitle} className="max-h-full max-w-full object-contain shadow-sm" />
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────── ANIMATED COUNTER ─────────────────────────── */
const AnimatedCounter: React.FC<{ target: number; suffix?: string; prefix?: string; duration?: number }> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

/* ─────────────────────────── SCROLL REVEAL ─────────────────────────── */
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ─────────────────────────── MAIN APP ─────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>();
  const [activeStage, setActiveStage] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [certModal, setCertModal] = useState<{ isOpen: boolean; img: string; title: string; unit: string }>({
    isOpen: false,
    img: '',
    title: '',
    unit: '',
  });
  const [selectedProductTab, setSelectedProductTab] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openQuote = (prod?: string) => {
    setQuoteProduct(prod);
    setQuoteOpen(true);
    setMenuOpen(false);
  };

  const toggleCardFlip = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  /* ─── CORPORATE & TECHNICAL CAPABILITIES DATA ─── */

  // Top esteemed customer names
  const customersTrack1 = [
    { name: 'TATA MOTORS', tier: 'Commercial & Passenger' },
    { name: 'MAHINDRA & MAHINDRA', tier: 'Auto & Farm Equipment' },
    { name: 'BOSCH INDIA', tier: 'Automotive Systems' },
    { name: 'BAJAJ AUTO', tier: '2W & 3W Mobility' },
    { name: 'BHARAT FORGE', tier: 'Global Powertrain' },
    { name: 'ASHOK LEYLAND', tier: 'Heavy Commercial Vehicles' },
    { name: 'JOHN DEERE', tier: 'Agricultural Tractors' },
    { name: 'TVS MOTOR COMPANY', tier: 'Two-Wheeler Platform' },
    { name: 'ENDURANCE TECHNOLOGIES', tier: 'Suspension & Transmission' },
    { name: 'CUMMINS INDIA', tier: 'Diesel & Gas Engines' },
  ];

  const customersTrack2 = [
    { name: 'ESCORTS KUBOTA', tier: 'Agri Machinery' },
    { name: 'DANA CORPORATION', tier: 'Driveline & E-Propulsion' },
    { name: 'GABRIEL INDIA', tier: 'Ride Control Systems' },
    { name: 'BREMBO BRAKES', tier: 'Performance Braking' },
    { name: 'MARUTI SUZUKI TIER-1', tier: 'Chassis Fasteners' },
    { name: 'HERO MOTOCORP', tier: 'Motorcycle Assemblies' },
    { name: 'FORCE MOTORS', tier: 'Light Commercial & Utility' },
    { name: 'EICHER COMMERCIAL', tier: 'Trucks & Buses' },
    { name: 'GREAVES COTTON', tier: 'Engines & E-Mobility' },
    { name: 'UNITED STATES EXPORT', tier: 'Heavy Industrial Fasteners' },
  ];

  // 12 Plant Area & Facility Flip Cards
  const facilityCards = [
    {
      id: 1,
      category: 'plant',
      areaTag: 'Satpur MIDC Nashik · 4 Plant Campus',
      title: '1,60,000 SQ.M. Manufacturing Footprint',
      metric: '4 Modern Production Plants',
      img: '/images/pptx/slide-media-54.jpeg',
      shortDesc: 'Aerial view of Hindustan Fasteners campus across 1,60,000 square meters in Satpur MIDC, Nashik, Maharashtra.',
      backTitle: 'Integrated Fastener Manufacturing Ecosystem',
      backDepartment: 'Plant 1, 2, 3 & 4 · Satpur MIDC Nashik',
      equipment: 'Cold Forging Bay, Tooling Room, SCADA Furnaces, Plating Lines, Quality Labs',
      explanation: 'Spread across 1,60,000 square meters, our 4 fully integrated manufacturing plants in Satpur MIDC bring every critical fastener operation under one unified roof. This complete vertical integration guarantees end-to-end quality control and eliminates subcontractor dependencies.',
      pokaYoke: 'Single management control across wire drawing, cold heading, heat treatment, surface finishing, and automated optical sorting.',
      capacity: '36,000 MT per annum aggregate output capacity.',
    },
    {
      id: 2,
      category: 'plant',
      areaTag: 'Corporate & Engineering HQ',
      title: 'Administrative & Technical Center',
      metric: 'Est. 1970 & 1982',
      img: '/images/pptx/slide-media-5.jpeg',
      shortDesc: 'Corporate headquarters housing OEM application engineering, customer design review, and PPAP level 3/4 validation.',
      backTitle: 'Engineering & Customer Operations Hub',
      backDepartment: 'Corporate Headquarters · Nashik',
      equipment: 'CAD/CAM SolidWorks Stations, ERP Live Tracking, Customer RFQ Review Suite',
      explanation: 'Our modern headquarters coordinates automotive OEM drawings, reverse engineering from physical customer samples, supply chain planning, and global dispatch to destinations including the United States.',
      pokaYoke: 'Digitized contract review and feasibility audit prior to die tooling manufacturing.',
      capacity: '500+ Qualified Team Members across operations & metallurgy.',
    },
    {
      id: 3,
      category: 'forging',
      areaTag: 'Cold Forging Division',
      title: 'Multi-Station Cold Heading Production Bay',
      metric: 'M4 to M24 · Up to 300 mm',
      img: '/images/pptx/slide-media-70.jpeg',
      shortDesc: 'Spacious cold forging bay equipped with multi-station headers, overhead material cranes, and uninterrupted grain flow tooling.',
      backTitle: 'High-Tensile Cold Forging Operations',
      backDepartment: 'Heavy Cold Heading Department',
      equipment: 'Multi-Station High-Speed Cold Formers, Overhead Gantry Cranes, Coil Uncoilers',
      explanation: 'This high-capacity bay houses banks of multi-die cold formers producing high-tensile bolts, engine bolts, chassis fasteners, and wheel studs. Cold forging preserves continuous metallurgical grain flow without cutting fibers, dramatically boosting fatigue strength.',
      pokaYoke: 'In-line acoustic and optical wire-diameter sensors to prevent under-filled or sheared heads.',
      capacity: 'Over 1,00,000 fastener varieties manufactured.',
    },
    {
      id: 4,
      category: 'forging',
      areaTag: 'Cold Heading Workcells',
      title: 'Automated High-Speed Header Line',
      metric: 'Hundreds of strokes / min',
      img: '/images/pptx/slide-media-71.jpeg',
      shortDesc: 'Clean, green-floor automated header workcells with trained technicians operating high-speed bolt formers.',
      backTitle: 'Precision Bolt & Screw Heading Cell',
      backDepartment: 'Cold Heading Workcell #2',
      equipment: 'High-Speed Bolt Makers, Automated Lubrication Circulation, Part Chutes',
      explanation: 'Technicians oversee dedicated cold heading cells producing precision socket head cap screws, hex flange bolts, and specialty cold-formed blanks. Clean shop floor practices and standardized 5S maintenance ensure consistent zero-defect output.',
      pokaYoke: 'Hourly statistical process control (SPC) sampling with digital micrometers and go/no-go gauges.',
      capacity: 'Tensile classes 8.8, 10.9, and 12.9 high tensile.',
    },
    {
      id: 5,
      category: 'forging',
      areaTag: 'Heavy Forging & Forming',
      title: '5-Die & 6-Die Heavy Heading Center',
      metric: 'Extreme Geometry Repeatability',
      img: '/images/pptx/slide-media-8.jpeg',
      shortDesc: 'Heavy-duty multi-station former with elevated operator platform for large-diameter automotive chassis studs and special pins.',
      backTitle: 'Multi-Die Complex Component Forging',
      backDepartment: 'Heavy Forming Workstation',
      equipment: 'Multi-Station 5-Die / 6-Die Progressive Cold Header, Step-up Operator Console',
      explanation: 'Designed for intricate fastener geometries requiring multiple progressive reductions, flange upsets, and collar formations. This machine creates stepped fasteners, lock bolts, and transmission studs with zero material waste.',
      pokaYoke: 'Integrated tool load monitoring stops machine instantly if forging tonnage exceeds safe limits.',
      capacity: 'Bolt lengths from 10 mm up to 300 mm.',
    },
    {
      id: 6,
      category: 'forging',
      areaTag: 'Tooling & Secondary Machining',
      title: 'In-House Tooling & Secondary Machining Bay',
      metric: '100% In-House Management',
      img: '/images/pptx/slide-media-9.jpeg',
      shortDesc: 'Complete in-house secondary department: CNC turning, automatic tapping, slot milling, grooving, and bolt head trimming.',
      backTitle: 'Comprehensive Secondary Operations',
      backDepartment: 'Tooling & Secondary Machining Bay',
      equipment: 'Automatic Tappers, Slot Milling Units, Centerless Grinders, CNC Lathes, Trimmers',
      explanation: 'All secondary operations are completed in-house: Automatic Tapping, Slot Milling, Grinding, Grooving, Special Pointing, CNC Machining, Bolt Head Trimming, Washer Assembly Thread Rolling for SEMS, Nut Crimping, and Precision Drilling.',
      pokaYoke: 'Poka-yoke orientation fixtures ensure symmetric slotting and zero misaligned tapping.',
      capacity: 'Precision tolerances down to ±5 µm.',
    },
    {
      id: 7,
      category: 'heat',
      areaTag: 'SCADA Heat Treatment',
      title: 'Continuous Atmosphere SCADA Furnaces',
      metric: 'SCADA + Poka-Yoke Controls',
      img: '/images/pptx/slide-media-37.jpeg',
      shortDesc: 'Continuous mesh-belt hardening and tempering furnace line supervised by SCADA software with automated poka-yoke locks.',
      backTitle: 'Automated Hardening & Tempering',
      backDepartment: 'Heat Treatment Facility',
      equipment: 'SCADA Mesh-Belt Continuous Furnaces, Protective Atmosphere Generators, Oil Quench',
      explanation: 'Fasteners undergo continuous controlled hardening and tempering under an endothermic protective atmosphere to eliminate surface decarburization. SCADA monitors zone temperatures, atmosphere carbon potential, quench oil temperature, and conveyor speeds in real time.',
      pokaYoke: 'SCADA automated interlocking halts feed if temperature or carbon potential drifts by ±2°C.',
      capacity: 'Neutral hardening, carburizing, and stress relieving.',
    },
    {
      id: 8,
      category: 'heat',
      areaTag: 'Automated Plating',
      title: 'PLC-Controlled Automatic Plating Line',
      metric: 'Uniform Micron Coating',
      img: '/images/pptx/slide-media-35.jpeg',
      shortDesc: 'Automated multi-tank surface treatment line controlled by PLCs for Zinc Electroplating, Zinc Flake, and Phosphating.',
      backTitle: 'Anti-Corrosion Surface Finishing',
      backDepartment: 'Automated Plating & Coating Plant',
      equipment: 'PLC Overhead Hoists, Barrel & Rack Plating Tanks, Ultrasonic Cleaners, Dryers',
      explanation: 'In-house coatings include Trivalent Zinc Electroplating, Zinc Phosphating, Aluminium Zinc Flake Coating (Geomet/Dacromet), Hot Dip Galvanizing, and Loctite Microencapsulation. PLC hoists strictly control immersion times and current density.',
      pokaYoke: 'Automated chemistry dosers maintain bath balance; continuous bath temperature and pH logging.',
      capacity: 'Corrosion protection exceeding 1,000 to 1,500 hours salt spray.',
    },
    {
      id: 9,
      category: 'testing',
      areaTag: 'Non-Destructive Testing (NDT)',
      title: 'Technofour Multifect-EC Eddy Current Sorting',
      metric: '100% High-Speed NDT',
      img: '/images/pptx/slide-media-38.jpeg',
      shortDesc: 'Technofour Multifect-EC eddy current sorting bays for automated metallurgical structure, crack, and hardness inspection.',
      backTitle: 'Technofour Eddy Current Verification',
      backDepartment: 'Non-Destructive Testing Bay',
      equipment: 'Technofour Multifect-EC Systems, Automated Bowl Feeders, Dual Sorting Gates',
      explanation: 'High-speed eddy current sorting verifies that every fastener has reached the specified hardness profile and is completely free from surface seams, quenching cracks, or metallurgical mixing. Parts failing thresholds are automatically kicked into locked rejection bins.',
      pokaYoke: 'Dual optical verify gates prevent rejected bolts from bouncing back into acceptable bins.',
      capacity: 'Tests up to 300 parts per minute.',
    },
    {
      id: 10,
      category: 'warehouse',
      areaTag: 'Logistics & Safety Stock',
      title: 'Systematic Dispatch Storage Warehouse',
      metric: 'Minimum Buffer Maintained',
      img: '/images/pptx/slide-media-33.jpeg',
      shortDesc: 'Multi-level mezzanine warehouse maintaining minimum inventory safety buffers tailored to individual OEM consumption.',
      backTitle: 'Automated Packaging & Dispatch Store',
      backDepartment: 'Central Logistics & Warehousing',
      equipment: 'Two-Tier Heavy Pallet Racks, Mezzanine Deck, Automated Weighing & Packaging Lines',
      explanation: 'To eliminate critical line shortages for our automotive OEM clients, this systematic dispatch warehouse maintains dedicated safety buffer stock keyed to individual customer consumption patterns. Barcode and QR tracking ensure flawless FIFO dispatch.',
      pokaYoke: 'Barcode-driven dispatch verification matches customer purchase orders before gate exit.',
      capacity: 'Zero OEM line shortages achieved consistently.',
    },
    {
      id: 11,
      category: 'testing',
      areaTag: 'Quality Metrology Lab',
      title: 'Microstructure & Spectrometer Testing Lab',
      metric: 'NABL Aligned Metrology',
      img: '/images/quality-lab.jpg',
      shortDesc: 'In-house metallurgical lab equipped with optical emission spectrometer, image analyser, and UTM tensile machine.',
      backTitle: 'Complete Metallurgical & Mechanical Lab',
      backDepartment: 'Quality Assurance & Metallurgy',
      equipment: 'Optical Emission Spectrometer (OES), Microstructure Image Analyser, UTM, Rockwell & Vickers Testers, DFT Meter, Salt Spray Chamber',
      explanation: 'Incoming coils and finished fasteners are tested for chemical composition (C, Mn, Cr, Mo, B), grain structure, core and surface hardness, proof load, tensile elongation, and plating thickness per ASTM/ISO specifications.',
      pokaYoke: 'Layered audit protocol requires senior metallurgical sign-off before raw material release.',
      capacity: '&lt;5 PPM target with zero-defect philosophy.',
    },
    {
      id: 12,
      category: 'plant',
      areaTag: 'International Quality Accreditations',
      title: 'BSI IATF 16949:2016 Certified Operations',
      metric: 'BSI Certificate # 705083',
      img: '/images/pptx/slide-media-126.png',
      shortDesc: 'Official certificate of registration from BSI UK for both Hindustan Fasteners and Precision Forging & Stamping units.',
      backTitle: 'Global Automotive Quality Standard',
      backDepartment: 'Certified by British Standards Institution (BSI)',
      equipment: 'Quality Management Systems conforming to IATF 16949:2016 and ISO 9001:2015',
      explanation: 'Our manufacturing plants hold formal IATF 16949:2016 certification issued by BSI for "The Manufacture of High Tensile Fasteners". Every process from tool design to layered audit conforms to global automotive OEM Tier-1 criteria.',
      pokaYoke: 'Annual surveillance audits by BSI ensure continuous procedural rigor.',
      capacity: 'Scope covers cold and hot formed high tensile fasteners and components.',
    },
  ];

  // Filter facility cards
  const filteredCards = activeCategory === 'all'
    ? facilityCards
    : facilityCards.filter((c) => c.category === activeCategory);

  // 10 Manufacturing Journey Stages
  const stages = [
    { num: '01', title: 'RAW MATERIAL VERIFICATION', metric: 'Certified coils + Optical Emission Spectrometer chemistry analysis', icon: <Microscope className="w-5 h-5 text-orange-400" /> },
    { num: '02', title: 'INCOMING QUARANTINE', metric: 'Strict physical segregation into Accepted vs Rejected Quarantine Racks', icon: <ShieldCheck className="w-5 h-5 text-orange-400" /> },
    { num: '03', title: 'IN-HOUSE TOOL FABRICATION', metric: 'Dedicated tooling department fabricating carbide dies and heading punches', icon: <Wrench className="w-5 h-5 text-orange-400" /> },
    { num: '04', title: '5 & 6-DIE COLD FORGING', metric: 'Continuous metallurgical grain flow, high fatigue life, M4 to M24 capability', icon: <Factory className="w-5 h-5 text-orange-400" /> },
    { num: '05', title: 'SECONDARY IN-HOUSE OPERATIONS', metric: 'Automatic tapping, slot milling, grinding, grooving, trimming, and CNC turning', icon: <Cog className="w-5 h-5 text-orange-400" /> },
    { num: '06', title: 'SEMS WASHER THREAD ROLLING', metric: 'Single / double captive washer assembly rolling and precision thread rolling', icon: <Layers className="w-5 h-5 text-orange-400" /> },
    { num: '07', title: 'SCADA HEAT TREATMENT', metric: 'Continuous mesh belt hardening & tempering with SCADA Poka-Yoke interlocks', icon: <Flame className="w-5 h-5 text-orange-400" /> },
    { num: '08', title: 'AUTOMATIC PLC SURFACE COATING', metric: 'Trivalent Zinc, Zinc Flake (Geomet), Phosphating, Hot Dip, Loctite pre-applied', icon: <Zap className="w-5 h-5 text-orange-400" /> },
    { num: '09', title: 'TECHNOFOUR EDDY CURRENT SORTING', metric: 'Non-destructive 100% sorting for surface seams, hardness discrepancies & cracks', icon: <Gauge className="w-5 h-5 text-orange-400" /> },
    { num: '10', title: 'AUTOMATED PACKAGING & DISPATCH', metric: 'Customer minimum inventory safety buffer store + barcode batch traceability', icon: <Truck className="w-5 h-5 text-orange-400" /> },
  ];

  // Secondary Operations list
  const secondaryOperations = [
    { title: 'Automatic Tapping', desc: 'High-speed automated tapping for precision internal threads in flange and weld nuts.' },
    { title: 'Slot Milling', desc: 'Precision slotting for slotted nuts, castle nuts, and specialized screw drives.' },
    { title: 'Centerless & Cylindrical Grinding', desc: 'Sub-micron OD sizing for dowel pins, stepped fasteners, and critical shank diameters.' },
    { title: 'Precision Grooving', desc: 'Snap-ring grooves, O-ring channels, and relief necks machined to tight tolerances.' },
    { title: 'Special Pointing & Dog Points', desc: 'Chamfered lead-ins, pilot points, and dog points for automated robot assembly lines.' },
    { title: 'Multi-Axis CNC Machining', desc: 'High-precision turning, boring, and contouring for proprietary OEM specials.' },
    { title: 'Bolt Head Trimming', desc: 'Accurate hex, square, and specialized head trimming after cold heading.' },
    { title: 'SEMS Washer Assembly', desc: 'Single and double washer assembly thread rolling with captive captive washers.' },
    { title: 'Crimping of Nuts', desc: 'Controlled crimping for prevailing-torque all-metal self-locking nuts.' },
    { title: 'Precision Drilling', desc: 'Cross-hole drilling for cotter pin retention and weight-reduction cavities.' },
  ];

  // Product Tabs
  const productTabs = [
    {
      id: 'bolts',
      tabName: 'Bolts & Screws',
      range: 'M4 to M24 · Length 10 mm to 300 mm',
      classes: 'Class 8.8 · 10.9 · 12.9 High-Tensile',
      img: '/images/pptx/slide-media-46.jpeg',
      description: 'Manufactured through high-speed cold and hot forging with continuous metallurgical grain flow for exceptional shear and fatigue endurance.',
      items: ['Hex Flange Bolts', 'Automotive Chassis Bolts', 'Engine Cylinder Head Bolts', 'Suspension Pivot Bolts', 'Structural Hex Bolts', 'Wheel & Hub Studs', 'Torx Drive Screws', 'Countersunk Heavy Screws'],
      application: 'Automotive chassis, EV subframes, engine blocks, agricultural earthmovers, and wind turbine towers.',
      specs: 'Material: Medium carbon boron steel (10B21), SCM435, 42CrMo4 alloy steel.',
    },
    {
      id: 'sems',
      tabName: 'Combi Screws / SEMS',
      range: 'Pre-Assembled Captive Washer Fasteners',
      classes: 'Single & Double Captive Washers',
      img: '/images/pptx/slide-media-125.jpeg',
      description: 'SEMS combination screws with pre-assembled free-spinning captive plain, spring, or conical washers rolled directly onto the thread shank.',
      items: ['Single Washer Combi Screws', 'Double Washer SEMS Bolts', 'Conical Washer SEMS', 'External Tooth Lock Washer Screws', 'Terminal Block Electrical SEMS'],
      application: 'High-speed robotic assembly lines, automotive electrical modules, throttle bodies, and transmission covers.',
      specs: 'Eliminates lost washers, speeds assembly cycle by 35%, guarantees correct washer placement.',
    },
    {
      id: 'nuts',
      tabName: 'Precision Nuts',
      range: 'M4 to M36 · Class 8, 10, 12',
      classes: 'Flange, Nylock & T Weld Nuts',
      img: '/images/pptx/slide-media-95.jpeg',
      description: 'Precision forged and tapped nuts engineered to distribute high clamp loads without galling or loosening under intense harmonic vibration.',
      items: ['Heavy Hex Flange Nuts', 'Nylock Lock Nuts (Nylon Insert)', 'T Weld Nuts (Automotive Sheet Metal)', 'Prevailing Torque All-Metal Lock Nuts', 'Slotted / Castle Hex Nuts', 'Wheel Lug Nuts'],
      application: 'Automotive wheel hubs, vehicle subframes, exhaust manifolds, and steering linkages.',
      specs: 'Material: C1035, C1045, cold-forging boron steel with friction modifier topcoats.',
    },
    {
      id: 'studs',
      tabName: 'Studs & Pins',
      range: 'Double-End & Stepped Studs',
      classes: 'Grade 8.8 / 10.9 / 12.9',
      img: '/images/pptx/slide-media-97.jpeg',
      description: 'Engineered double-ended studs, interference-fit tap-end studs, and precision dowel pins for high-precision driveline alignment.',
      items: ['Automotive Wheel Studs', 'Cylinder Head Studs', 'Exhaust Manifold Studs', 'Double-End Threaded Studs', 'Hardened Clevis Pins', 'Differential Case Studs'],
      application: 'Engine heads, turbocharger flanges, heavy axle wheel mounts, and robotic pivots.',
      specs: 'Rolled threads on both ends with unthreaded middle collar for automated nut installation.',
    },
    {
      id: 'coatings',
      tabName: 'Advanced Coatings',
      range: 'In-House Surface Finishing Line',
      classes: 'Up to 1,500 Hours Salt Spray',
      img: '/images/pptx/slide-media-12.jpeg',
      description: 'Comprehensive in-house surface protection to withstand extreme automotive salt, chemical exposure, and humidity without hydrogen embrittlement.',
      items: ['Zinc Electroplating (Cr3+ Trivalent)', 'Zinc Phosphating (Microcrystalline)', 'Aluminium Zinc Flake (Geomet 500B / 321)', 'Hot Dip Galvanizing (ASTM A153)', 'Loctite Microencapsulation (Pre-Applied Adhesive)'],
      application: 'Chassis underside fasteners, marine structures, commercial vehicle underbodies, and engine fasteners.',
      specs: 'Controlled friction coefficient (µ = 0.10–0.16) for repeatable torque-tension clamp load.',
    },
    {
      id: 'catalog',
      tabName: 'Complete Catalog',
      range: 'Over 1,00,000 Varieties Available',
      classes: 'OEM Drawings & Reverse Engineering',
      img: '/images/pptx/slide-media-80.png',
      description: 'Master component matrix showcasing bolts, lock bolts, screws, SEMS, nuts, pins, studs, washers, and special cold formed parts.',
      items: ['Standard Fasteners (DIN / ISO / IS)', 'Special Cold Formed Components', 'Customer Exact OEM Drawings', 'Reverse Engineering from Samples', 'Bespoke Prototype Batches'],
      application: 'Serving automotive tier-1, defense, industrial machinery, and US export markets.',
      specs: 'Rapid CAD development, in-house tooling manufacturing, and PPAP level 3 documentation.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-gray-900 selection:bg-blue-900 selection:text-white overflow-x-hidden">

      {/* ════════════ MINIMAL SLEEK NAVIGATION ════════════ */}
      <header className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm py-3' : 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100'}`}>
        <div className="container-custom flex items-center justify-between">
          {/* Pure Clean Logo Only */}
          <a href="#" className="flex items-center group">
            <img
              src="/images/pptx/slide-media-22.png"
              alt="Hindustan Fasteners & Precision Forging and Stamping"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Essential Minimal Nav Links Only */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-gray-700">
            <a href="#products" className="hover:text-blue-900 transition-colors">Products</a>
            <a href="#gallery" className="hover:text-blue-900 transition-colors flex items-center gap-1.5 font-bold text-blue-900">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
              Plant Gallery
            </a>
            <a href="#quality" className="hover:text-blue-900 transition-colors">Quality &amp; Labs</a>
            <a href="#customers" className="hover:text-blue-900 transition-colors">Clients</a>
          </nav>

          {/* Minimal Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuote()}
              className="px-5 py-2.5 rounded-xl bg-gray-950 text-white text-xs font-bold hover:bg-blue-900 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5"
            >
              Request Quote →
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Minimal Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3 shadow-xl">
            <a href="#products" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">Products (1,00,000+ Items)</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="block text-blue-900 font-bold text-sm">3D Plant Area Flip Gallery</a>
            <a href="#quality" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">Quality &amp; Testing Labs</a>
            <a href="#customers" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">OEM Clients</a>
            <div className="pt-2">
              <button onClick={() => { setMenuOpen(false); openQuote(); }} className="w-full py-2.5 rounded-xl bg-blue-900 text-white text-xs font-bold">
                Submit RFQ Inquiry →
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ════════════ HERO SECTION — MOBILE & DESKTOP OPTIMIZED ════════════ */}
      <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Full Hero Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-car-exploded.jpg"
            alt="Exploded view of automobile showing precision fasteners and chassis connections"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="container-custom relative z-10 py-20 sm:py-28 lg:py-36 text-white">
          <Reveal>
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Hindustan Fasteners (1970) &amp; Precision Forging (1982)</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight leading-[1.02] mb-6">
              PRECISION FASTENERS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
                ENGINEERED FOR EXTREMES.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
              Cold and hot formed high-tensile fasteners (M4 to M24, length 10mm to 300mm). 4 manufacturing plants in Satpur MIDC, Nashik spread across 1,60,000 Sq.M., delivering 36,000 MT/year of zero-defect fastening solutions for automotive, EV, and heavy industrial applications.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
              <a
                href="#products"
                className="w-full sm:w-auto text-center px-7 py-4 rounded-xl bg-white text-gray-900 text-sm font-bold hover:bg-blue-50 transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 duration-300"
              >
                EXPLORE PRODUCT CATALOG →
              </a>
              <a
                href="#gallery"
                className="w-full sm:w-auto text-center px-7 py-4 rounded-xl bg-blue-900/80 text-white border border-blue-400/40 text-sm font-bold backdrop-blur-md hover:bg-blue-800 transition-all hover:-translate-y-0.5 duration-300 flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />
                VIEW 3D PLANT FLIP GALLERY
              </a>
              <button
                onClick={() => openQuote()}
                className="w-full sm:w-auto text-center px-6 py-4 rounded-xl bg-white/10 text-white border border-white/25 text-sm font-bold backdrop-blur-md hover:bg-white/20 transition"
              >
                REQUEST RFQ
              </button>
            </div>
          </Reveal>

          {/* Key PPT Metric Pills */}
          <Reveal delay={400}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/15 max-w-4xl text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold font-display text-cyan-300">
                  <AnimatedCounter target={36000} suffix=" MT" />
                </div>
                <div className="text-[10px] text-gray-300 uppercase tracking-wider mt-0.5">Annual Capacity</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold font-display text-white">
                  <AnimatedCounter target={160000} suffix=" m²" />
                </div>
                <div className="text-[10px] text-gray-300 uppercase tracking-wider mt-0.5">4 Plants · Satpur MIDC</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold font-display text-emerald-400">
                  <AnimatedCounter target={100000} suffix="+" />
                </div>
                <div className="text-[10px] text-gray-300 uppercase tracking-wider mt-0.5">Fastener Varieties</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold font-display text-orange-400">IATF 16949</div>
                <div className="text-[10px] text-gray-300 uppercase tracking-wider mt-0.5">BSI UK Certified</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════ AUTOMATIC INFINITE SCROLLERS (CLIENTS WE SERVE) ════════════ */}
      <section id="customers" className="py-14 sm:py-20 bg-slate-950 text-white overflow-hidden relative border-y border-slate-800">
        <div className="container-custom mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-blue-400" /> Esteemed Customer Network
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-white">
            TRUSTED BY INDIA'S &amp; GLOBAL LEADING OEMS
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Direct Tier-1 supplier to major automotive, tractor, defense, engine, and industrial manufacturers.
          </p>
        </div>

        {/* Track 1: Left to Right Marquee */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="animate-marquee-ltr gap-4">
            {[...customersTrack1, ...customersTrack1, ...customersTrack1].map((client, idx) => (
              <div
                key={`t1-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400 hover:bg-white/10 transition-all duration-300 whitespace-nowrap shadow-sm group"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                <div>
                  <div className="font-display font-black text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                    {client.name}
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    {client.tier}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Right to Left Marquee */}
        <div className="relative w-full overflow-hidden py-2 mt-2">
          <div className="animate-marquee-rtl gap-4">
            {[...customersTrack2, ...customersTrack2, ...customersTrack2].map((client, idx) => (
              <div
                key={`t2-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 whitespace-nowrap shadow-sm group"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                <div>
                  <div className="font-display font-black text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                    {client.name}
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    {client.tier}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
            Automatic Continuous Scroller · Hover over any client card to inspect
          </span>
        </div>
      </section>

      {/* ════════════ COMPANY PROFILE & VISION / VALUES ════════════ */}
      <section id="overview" className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-900 font-bold block mb-3">
                  Company Profile &amp; Legacy
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-gray-950 mb-6 leading-tight">
                  50+ YEARS OF PRECISION FORGING &amp; FASTENING EXCELLENCE
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  Founded in <strong className="text-gray-900 font-bold">1970</strong> as Hindustan Fasteners and expanded in <strong className="text-gray-900 font-bold">1982</strong> with Precision Forging and Stamping, we have grown into one of India’s foremost cold-formed fastener manufacturers with a turnover exceeding ₹120 Cr and an annual capacity of 36,000 Metric Tonnes.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  Operating out of 4 interconnected plants across 1,60,000 Sq.M. in Satpur MIDC, Nashik, we supply over 1,00,000 varieties of standard and specialized fasteners directly to major OEMs in India and export to demanding clients in the United States.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-gray-400 uppercase text-[10px] font-semibold">Established</div>
                    <div className="text-base font-bold text-gray-900 mt-0.5">1970 &amp; 1982</div>
                    <div className="text-[10px] text-blue-900 font-bold mt-1">5+ Decades Experience</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-gray-400 uppercase text-[10px] font-semibold">Turnover (FY 19-20)</div>
                    <div className="text-base font-bold text-gray-900 mt-0.5">₹120+ Crore</div>
                    <div className="text-[10px] text-emerald-700 font-bold mt-1">Consistent Growth</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-gray-400 uppercase text-[10px] font-semibold">Quality Standard</div>
                    <div className="text-base font-bold text-gray-900 mt-0.5">IATF 16949</div>
                    <div className="text-[10px] text-blue-900 font-bold mt-1">BSI Certified</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-gray-400 uppercase text-[10px] font-semibold">Workforce</div>
                    <div className="text-base font-bold text-gray-900 mt-0.5">500+ Specialists</div>
                    <div className="text-[10px] text-gray-500 mt-1">Metallurgy &amp; Tooling</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-gray-400 uppercase text-[10px] font-semibold">Production Space</div>
                    <div className="text-base font-bold text-gray-900 mt-0.5">1,60,000 m²</div>
                    <div className="text-[10px] text-gray-500 mt-1">Satpur MIDC Nashik</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-gray-400 uppercase text-[10px] font-semibold">Global Reach</div>
                    <div className="text-base font-bold text-gray-900 mt-0.5">United States</div>
                    <div className="text-[10px] text-cyan-700 font-bold mt-1">Worldwide Exports</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-900 relative group">
                  <img
                    src="/images/pptx/slide-media-5.jpeg"
                    alt="Hindustan Fasteners Corporate Facility in Satpur MIDC Nashik"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider mb-1">
                      Corporate Facility · Satpur MIDC, Nashik
                    </div>
                    <div className="text-lg font-bold font-display">
                      Hindustan Fasteners Pvt Ltd &amp; Precision Forging &amp; Stamping
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Vision, Mission & Core Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            <Reveal delay={100}>
              <div className="p-7 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-700/50 flex items-center justify-center mb-4 text-cyan-300">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-2">Strategic Vision</div>
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight mb-3">Our Vision</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    To be the leading fasteners manufacturer both domestically and globally by providing <strong className="text-white">complete fastening solutions under one roof</strong>.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/15 text-[11px] font-mono text-cyan-300 font-semibold">
                  Domestic &amp; Global Leadership
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center mb-4 text-emerald-300">
                    <Cog className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-emerald-300 font-bold mb-2">Operational Mission</div>
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight mb-3">Our Mission</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We strive to be a <strong className="text-white">customer-centric and quality-driven</strong> fastener manufacturer that provides complete fastening solutions tailored to individual customer needs.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/15 text-[11px] font-mono text-emerald-300 font-semibold">
                  Tailored OEM Solutions
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="p-7 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 text-white shadow-lg h-full flex flex-col justify-between border border-emerald-800/40">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-800/50 flex items-center justify-center mb-4 text-emerald-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-emerald-300 font-bold mb-2">Quality Value</div>
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight mb-3">Zero Defect Value</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We are committed to <strong className="text-white">ZERO DEFECT</strong> by removing quality hindrances at occurrence stage, not at inspection. One-stop solution, on-time delivery every time.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/15 text-[11px] font-mono text-emerald-300 font-semibold">
                  Zero Defect Occurrence Control
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════ 3D FLIP CARD GALLERY — "OUR AREA AND GALLERY" ════════════ */}
      <section id="gallery" className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-700 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <RotateCcw className="w-3.5 h-3.5 text-cyan-300" /> Interactive 3D Card Flip Gallery
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
                OUR AREA &amp; PLANT GALLERY
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Click or tap any photo below. The card will <strong className="text-cyan-300">flip in 3D</strong> to reveal an in-depth engineering explanation of that plant area, machinery, capacity, and zero-defect Poka-Yoke controls.
              </p>
            </Reveal>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Plant Areas (12)' },
              { id: 'plant', label: 'Campus & Infrastructure' },
              { id: 'forging', label: 'Cold Forging & Machining' },
              { id: 'heat', label: 'SCADA Heat & Plating' },
              { id: 'testing', label: 'Eddy Current & Labs' },
              { id: 'warehouse', label: 'Warehousing & Dispatch' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${activeCategory === cat.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 3D FLIP CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card) => {
              const isFlipped = !!flippedCards[card.id];
              return (
                <div
                  key={card.id}
                  className="perspective-1000 h-[440px] sm:h-[460px] cursor-pointer select-none group"
                  onClick={() => toggleCardFlip(card.id)}
                >
                  <div
                    className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 rounded-2xl shadow-xl ${isFlipped ? 'rotate-y-180' : ''}`}
                  >
                    {/* ── CARD FRONT ── */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/80 flex flex-col justify-between shadow-2xl">
                      <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-cyan-300 font-bold border border-white/10 uppercase">
                          {card.areaTag}
                        </div>
                        <div className="absolute top-3 right-3 bg-blue-900/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white font-bold border border-blue-400/30">
                          {card.metric}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                            {card.shortDesc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-700/70 flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                            <RotateCcw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                            Click to Flip Details
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 bg-slate-700/60 px-2 py-0.5 rounded">
                            Card #{card.id}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ── CARD BACK (180deg) ── */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 border-2 border-cyan-500/40 p-6 flex flex-col justify-between shadow-2xl">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800">
                            {card.backDepartment}
                          </span>
                          <span className="text-xs font-mono text-gray-400">Backside Spec</span>
                        </div>

                        <h3 className="text-lg font-bold font-display text-white mb-2">
                          {card.backTitle}
                        </h3>

                        <div className="space-y-2.5 text-xs text-gray-200 mb-4">
                          <div>
                            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block">Machinery &amp; Technology:</span>
                            <p className="text-gray-300 text-[11px] leading-snug">{card.equipment}</p>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block">What Is In This Picture:</span>
                            <p className="text-gray-300 text-[11px] leading-relaxed">{card.explanation}</p>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">Poka-Yoke &amp; Quality Control:</span>
                            <p className="text-gray-300 text-[11px] leading-snug">{card.pokaYoke}</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-gray-300 font-semibold">
                          {card.capacity}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleCardFlip(card.id); }}
                          className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-[11px] font-mono font-bold transition flex items-center gap-1 border border-cyan-500/30"
                        >
                          <RotateCcw className="w-3 h-3" /> Flip Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-xs font-mono text-gray-400">
            Tip: On mobile devices, tap directly on any card to flip between photo and engineering details.
          </div>
        </div>
      </section>

      {/* ════════════ COMPREHENSIVE PRODUCT CATALOG ════════════ */}
      <section id="products" className="py-24 sm:py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-900 font-bold block mb-3">
                Over 1,00,000 Fastener Varieties
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-gray-950 mb-4">
                ENGINEERED PRODUCT PORTFOLIO
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base text-gray-600 leading-relaxed">
                We manufacture over 1,00,000 varieties of standard and special fasteners to OEM drawings, customer specifications, and physical sample reverse engineering.
              </p>
            </Reveal>
          </div>

          {/* Product Tabs Header */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
            {productTabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setSelectedProductTab(idx)}
                className={`px-5 py-3 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${selectedProductTab === idx ? 'bg-gray-950 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {tab.tabName}
              </button>
            ))}
          </div>

          {/* Active Product Tab Content */}
          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div className="inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-mono font-bold mb-2">
                    {productTabs[selectedProductTab].classes}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-900">
                    {productTabs[selectedProductTab].tabName}
                  </h3>
                  <div className="text-xs font-mono text-gray-500 mt-1">
                    {productTabs[selectedProductTab].range}
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {productTabs[selectedProductTab].description}
                </p>

                <div>
                  <span className="text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider block mb-2">
                    Key Variants &amp; Geometries:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {productTabs[selectedProductTab].items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700 bg-white p-2 rounded-lg border border-gray-200">
                        <Check className="w-3.5 h-3.5 text-blue-900 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs space-y-1.5 font-mono">
                  <div>
                    <span className="text-gray-400 uppercase font-semibold">OEM Applications: </span>
                    <span className="text-gray-800">{productTabs[selectedProductTab].application}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 uppercase font-semibold">Specification: </span>
                    <span className="text-gray-800">{productTabs[selectedProductTab].specs}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => openQuote(productTabs[selectedProductTab].tabName)}
                    className="btn-primary py-3 text-xs font-bold"
                  >
                    REQUEST QUOTE FOR THIS PRODUCT →
                  </button>
                  <button
                    onClick={() => setCertModal({
                      isOpen: true,
                      img: '/images/pptx/slide-media-126.png',
                      title: 'IATF 16949 Certification for Fasteners',
                      unit: 'Hindustan Fasteners & PFS Units',
                    })}
                    className="px-4 py-3 rounded-xl border border-gray-300 hover:border-blue-900 text-xs font-mono font-bold text-gray-700 transition"
                  >
                    VIEW IATF 16949 CERT
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white p-3 group">
                  <img
                    src={productTabs[selectedProductTab].img}
                    alt={productTabs[selectedProductTab].tabName}
                    className="w-full h-80 sm:h-96 object-contain rounded-xl group-hover:scale-105 transition-transform duration-700 bg-gray-50"
                  />
                  <div className="p-3 text-center text-xs font-mono text-gray-500">
                    High-definition engineering component portfolio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ IN-HOUSE SECONDARY OPERATIONS ════════════ */}
      <section id="secondary" className="py-20 sm:py-28 bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-900 font-bold block mb-3">
                In-House Capabilities · Single Management Control
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-gray-950 mb-4">
                COMPLETE IN-HOUSE SECONDARY OPERATIONS
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                All production operations are under one management control. Eliminating outside sub-contractors gives Hindustan Fasteners total control over lead times, dimensional precision, and zero-defect quality.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {secondaryOperations.map((op, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-blue-900/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 font-mono font-bold text-xs flex items-center justify-center mb-3 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display font-bold text-sm text-gray-900 mb-2">
                      {op.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {op.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-[10px] font-mono text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> In-House Managed
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SCADA HEAT TREATMENT & PLC PLATING ════════════ */}
      <section id="manufacturing" className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-400 font-bold block mb-3">
                Thermal &amp; Chemical Processing
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
                SCADA HEAT-TREATMENT &amp; PLC AUTOMATIC PLATING
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base text-gray-300 leading-relaxed">
                Critical fasteners require calibrated metallurgical transformation and advanced corrosion barriers. Our continuous furnaces operate under SCADA supervision with built-in Poka-Yoke interlocks for zero process variance.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* SCADA Furnaces */}
            <Reveal delay={100}>
              <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="rounded-2xl overflow-hidden mb-6 h-56 bg-slate-950">
                    <img
                      src="/images/pptx/slide-media-37.jpeg"
                      alt="Continuous SCADA Heat Treatment Furnaces"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-md bg-orange-950 text-orange-300 text-[11px] font-mono font-bold mb-3 border border-orange-800">
                    SCADA Controlled Mesh-Belt Furnaces
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-3">
                    Continuous Controlled Atmosphere Furnaces
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Continuous heat treatment furnaces running with automated SCADA software monitor carbon potential, heating zone temperatures, oil agitation, and tempering dwell times.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono space-y-1 text-gray-300">
                    <div className="text-orange-400 font-bold">Poka-Yoke Control Arrangements:</div>
                    <div>• Automated feed-stop if furnace temperature fluctuates ±2°C</div>
                    <div>• Endothermic atmosphere prevents decarburization</div>
                    <div>• Consistent core and surface hardness per ISO 898-1</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* PLC Plating */}
            <Reveal delay={200}>
              <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="rounded-2xl overflow-hidden mb-6 h-56 bg-slate-950">
                    <img
                      src="/images/pptx/slide-media-35.jpeg"
                      alt="PLC Controlled Automatic Plating Line"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-md bg-cyan-950 text-cyan-300 text-[11px] font-mono font-bold mb-3 border border-cyan-800">
                    Automatic PLC Plating &amp; Coatings
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-3">
                    Automated Surface Finishing Line
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Automatic plating utilizes PLC control to guarantee exact immersion timing, uniform current density, and chemical concentrations across every batch.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono space-y-1 text-gray-300">
                    <div className="text-cyan-400 font-bold">In-House Coating Capabilities:</div>
                    <div>• Zinc Electroplating (Trivalent Cr3+ RoHS)</div>
                    <div>• Aluminium Zinc Flake Coating (Geomet 500B / Dacromet)</div>
                    <div>• Zinc Phosphating, Hot Dip Galvanizing &amp; Loctite Encapsulation</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 10-Stage Journey Selector */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
              THE 10-STAGE VERTICAL MANUFACTURING PIPELINE
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Click any stage button to inspect its process details and engineering quality gates.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {stages.map((st, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStage(i)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${activeStage === i ? 'bg-orange-500 text-white border-orange-400 shadow-lg' : 'bg-slate-800 text-gray-300 border-slate-700 hover:bg-slate-700'}`}
                >
                  <span className="mr-1.5 opacity-70">{st.num}</span>{st.title.split(' ')[0]}
                </button>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                {stages[activeStage].icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-orange-400 font-mono font-bold text-sm">Stage {stages[activeStage].num}</span>
                  <span className="text-gray-600">/</span>
                  <h4 className="text-lg font-bold font-display text-white">{stages[activeStage].title}</h4>
                </div>
                <p className="text-sm text-gray-300">{stages[activeStage].metric}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ QUALITY & TESTING FACILITIES ════════════ */}
      <section id="quality" className="py-24 sm:py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-900 font-bold block mb-3">
                Advanced Metallurgical Testing &amp; Quality Control
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-gray-950 mb-4">
                INSPECTION &amp; TESTING FACILITIES
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base text-gray-600 leading-relaxed">
                Equipped with in-house spectrometer, microstructure image analyser, UTM tensile testing, Technofour eddy current sorting, and salt spray testing. Strict physical quarantine separates accepted vs rejected raw material and WIP, backed by an active Kaizen continuous improvement culture.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Chemical Spectrometer',
                spec: 'Optical Emission Analysis',
                desc: 'Verifies carbon, manganese, chromium, molybdenum and boron content for every raw wire coil before heading.',
                tag: 'Chemical Metallurgy',
              },
              {
                title: 'Microstructure Analyser',
                spec: 'Image Analysis System',
                desc: 'Examines metallurgical grain size, decarburization depth, and tempered martensite transformation phases.',
                tag: 'Phase Integrity',
              },
              {
                title: 'Rockwell Hardness (HRC/HRB)',
                spec: 'Hardness Testers',
                desc: 'Checks surface and core hardness on cross-sectioned fasteners to confirm proper tempering cycle.',
                tag: 'ISO 898-1 Audit',
              },
              {
                title: 'DFT Plating Meter',
                spec: 'Magnetic & Eddy Current',
                desc: 'Measures coating thickness in microns to assure corrosion protection compliance without excess build-up.',
                tag: 'Plating Metrology',
              },
              {
                title: 'Universal Testing (UTM)',
                spec: 'Up to 1000 kN Capacity',
                desc: 'Measures proof load, ultimate tensile strength (UTS), wedge tensile, and elongation percentage.',
                tag: 'Tensile Strength',
              },
              {
                title: 'Technofour Eddy Current',
                spec: '100% Non-Destructive',
                desc: 'Automated high-speed sorting detects surface cracks, material mix-ups, and hardness discrepancies.',
                tag: 'Technofour Line',
              },
              {
                title: 'Salt Spray Chamber',
                spec: 'ASTM B117 (Up to 1,500 hrs)',
                desc: 'Accelerated corrosion chamber audits red rust and white rust resistance for automotive zinc-flake finishes.',
                tag: 'Corrosion Testing',
              },
              {
                title: 'Optical Vision Sorting',
                spec: '100% Dimensional Sorting',
                desc: 'High-speed camera vision stations verify pitch, head diameter, length, and thread runout automatically.',
                tag: '<5 PPM Target',
              },
            ].map((facility, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-blue-900/30 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-blue-900 font-bold uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded inline-block mb-3">
                      {facility.tag}
                    </div>
                    <h3 className="font-display font-bold text-base text-gray-900 mb-1">
                      {facility.title}
                    </h3>
                    <div className="text-xs font-mono text-gray-400 mb-3">{facility.spec}</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{facility.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200 text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> In-House Verified
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Incoming Material Quarantine & Kaizen Continuous Improvement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-blue-900 text-white">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 mb-2">
                Quarantine Protocol &amp; Physical Segregation
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight mb-4">
                Strict Physical Segregation &amp; Layered Audit
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed mb-6">
                Separate designated physical areas are established for Ok and Rejected material. Rejected materials are quarantined immediately and detailed supplier root-cause analysis is mandated.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                  <div className="text-cyan-300 font-bold">Accepted Material</div>
                  <div className="text-[11px] text-gray-300 mt-1">Verified with senior metallurgical test sign-off</div>
                </div>
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-400/30">
                  <div className="text-red-300 font-bold">Rejected Quarantine</div>
                  <div className="text-[11px] text-gray-300 mt-1">Locked physical containment with 8D analysis</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gray-900 text-white">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-300 mb-2">
                Continuous Improvement &amp; Quality Excellence
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight mb-4">
                KAIZEN Continuous Improvement Approach
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Active involvement of all 500+ team members in continuous improvement initiatives, with weekly appreciation and recognition of significant productivity, safety, and quality enhancements.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-300">
                <span className="px-3 py-1.5 rounded-lg bg-white/10">Weekly Kaizen Meetings</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10">5S Shopfloor Standards</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10">Poka-Yoke Mistake-Proofing</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10">Zero Defect Culture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ OFFICIAL IATF 16949 CERTIFICATES SHOWCASE ════════════ */}
      <section id="certificates" className="py-20 sm:py-28 bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-900 font-bold block mb-3">
                British Standards Institution (BSI) Registered
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-gray-950 mb-4">
                AUTHENTIC IATF 16949:2016 CERTIFICATES
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Click to inspect our official British Standards Institution (BSI) Certificates of Registration for both Hindustan Fasteners Private Limited and Precision Forging and Stamping units.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Cert 1 */}
            <Reveal delay={100}>
              <div
                onClick={() => setCertModal({
                  isOpen: true,
                  img: '/images/pptx/slide-media-126.png',
                  title: 'Precision Forging and Stamping · IATF 16949:2016',
                  unit: 'Plot No. 25/1/1, MIDC Satpur, Nashik 422 007, India',
                })}
                className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-blue-900 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="h-64 rounded-xl overflow-hidden bg-gray-100 mb-4 border border-gray-200 p-2 flex items-center justify-center">
                  <img
                    src="/images/pptx/slide-media-126.png"
                    alt="Precision Forging and Stamping BSI Certificate"
                    className="max-h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="text-xs font-mono text-blue-900 font-bold uppercase tracking-wider mb-1">
                  BSI Certificate No. 705083-002
                </div>
                <h3 className="text-lg font-bold font-display text-gray-900 mb-2">
                  Precision Forging and Stamping
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Scope: The Manufacture of High Tensile Fasteners · Satpur MIDC Nashik
                </p>
                <div className="text-xs font-mono text-blue-900 font-bold flex items-center gap-1 group-hover:underline">
                  Click to View Full Certificate →
                </div>
              </div>
            </Reveal>

            {/* Cert 2 */}
            <Reveal delay={200}>
              <div
                onClick={() => setCertModal({
                  isOpen: true,
                  img: '/images/pptx/slide-media-129.png',
                  title: 'Hindustan Fasteners Private Limited · IATF 16949:2016',
                  unit: 'E 30, MIDC Satpur, Nashik 422 007, India',
                })}
                className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-blue-900 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="h-64 rounded-xl overflow-hidden bg-gray-100 mb-4 border border-gray-200 p-2 flex items-center justify-center">
                  <img
                    src="/images/pptx/slide-media-129.png"
                    alt="Hindustan Fasteners Private Limited BSI Certificate"
                    className="max-h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="text-xs font-mono text-blue-900 font-bold uppercase tracking-wider mb-1">
                  BSI Certificate No. 705083-001
                </div>
                <h3 className="text-lg font-bold font-display text-gray-900 mb-2">
                  Hindustan Fasteners Private Limited
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Scope: The Manufacture of High Tensile Fasteners · E 30 MIDC Satpur
                </p>
                <div className="text-xs font-mono text-blue-900 font-bold flex items-center gap-1 group-hover:underline">
                  Click to View Full Certificate →
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════ CALL TO ACTION / RFQ ════════════ */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-950 via-blue-950 to-slate-950 text-white text-center relative overflow-hidden">
        <div className="container-custom max-w-3xl relative z-10">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300 font-bold block mb-4">
              OEM Engineering Partnership
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight mb-6 leading-tight">
              HAVE AN OEM DRAWING OR FASTENING REQUIREMENT?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
              From sample reverse engineering to 5-die cold forging, SCADA heat treatment, and automated optical inspection, Hindustan Fasteners engineers the connection.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openQuote()}
                className="px-8 py-4 rounded-xl bg-white text-gray-950 text-sm font-bold hover:bg-cyan-50 transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
              >
                REQUEST A DETAILED RFQ →
              </button>
              <a
                href="tel:+912532350890"
                className="px-8 py-4 rounded-xl bg-white/10 text-white border border-white/25 text-sm font-bold backdrop-blur-md hover:bg-white/20 transition-all"
              >
                CALL NASHIK PLANT DESK
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/pptx/slide-media-22.png"
                  alt="Hindustan Fasteners & PFS Logo"
                  className="h-10 w-auto object-contain bg-white/90 p-1 rounded-lg"
                />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
                Established 1970 &amp; 1982. 4 manufacturing plants in Satpur MIDC, Nashik across 1,60,000 m². High-tensile cold and hot formed fasteners (M4 to M24) for automotive, EV, and global OEM assemblies.
              </p>
              <div className="text-xs font-mono text-cyan-300 font-semibold">
                IATF 16949:2016 Certified · BSI Certificate 705083
              </div>
            </div>

            <div>
              <div className="text-gray-400 font-semibold uppercase tracking-wider text-xs mb-3">Plant Locations</div>
              <p className="text-gray-300 text-xs leading-relaxed">
                4 Plants in Satpur MIDC,<br />
                Nashik 422 007,<br />
                Maharashtra, India
              </p>
              <p className="mt-3 text-[11px] text-gray-500 font-mono">Total Area: 1,60,000 Sq.M.</p>
            </div>

            <div>
              <div className="text-gray-400 font-semibold uppercase tracking-wider text-xs mb-3">Quick Navigation</div>
              <ul className="space-y-1.5 text-xs text-gray-300 font-medium">
                <li><a href="#overview" className="hover:text-cyan-300 transition">Company Profile</a></li>
                <li><a href="#gallery" className="hover:text-cyan-300 transition">3D Plant Flip Gallery</a></li>
                <li><a href="#products" className="hover:text-cyan-300 transition">Product Catalog (1,00,000+)</a></li>
                <li><a href="#secondary" className="hover:text-cyan-300 transition">Secondary In-House Operations</a></li>
                <li><a href="#quality" className="hover:text-cyan-300 transition">Inspection &amp; Testing Labs</a></li>
              </ul>
            </div>

            <div>
              <div className="text-gray-400 font-semibold uppercase tracking-wider text-xs mb-3">Contact Desk</div>
              <p className="text-gray-300 text-xs mb-2 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <a href="tel:+912532350890" className="hover:text-blue-400 transition">+91 (253) 235 0890</a>
              </p>
              <p className="text-gray-300 text-xs mb-3 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href="mailto:engineering@hindustanfasteners.com" className="text-blue-400 hover:underline">
                  engineering@hindustanfasteners.com
                </a>
              </p>
              <button
                onClick={() => openQuote()}
                className="px-3.5 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-[11px] font-bold font-mono transition"
              >
                SUBMIT DRAWING / RFQ →
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px] font-mono">
            <span>© 2026 Hindustan Fasteners Private Limited &amp; Precision Forging &amp; Stamping.</span>
            <span>IATF 16949:2016 · BSI Registered · 36,000 MT Annual Capacity · Satpur MIDC Nashik</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} product={quoteProduct} />
      <CertificateModal
        isOpen={certModal.isOpen}
        onClose={() => setCertModal((prev) => ({ ...prev, isOpen: false }))}
        certImg={certModal.img}
        certTitle={certModal.title}
        unit={certModal.unit}
      />
    </div>
  );
}
