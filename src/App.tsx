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
  ChevronLeft,
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
  FileText,
  Search,
  Play,
  Pause,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Send,
  User,
  Volume2,
  VolumeX,
  Maximize2,
} from 'lucide-react';
import catalogData from './fasteners_catalog.json';
const InteractiveUnboltScroll = React.lazy(() =>
  import('./components/InteractiveUnboltScroll').then((m) => ({ default: m.InteractiveUnboltScroll }))
);
const ContactUsPage = React.lazy(() =>
  import('./components/ContactUsPage').then((m) => ({ default: m.ContactUsPage }))
);


/* ─────────────────────────── AUTHENTIC 3D NUT & BOLT SVGS & WATERMARKS ─────────────────────────── */
const NutSvg: React.FC<{
  className?: string;
  size?: number;
  opacity?: number;
  variant?: 'silver' | 'gold';
}> = ({
  className = '',
  size = 100,
  opacity = 0.95,
  variant = 'silver',
}) => {
  const uid = React.useId().replace(/:/g, '');
  const isGold = variant === 'gold';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        opacity,
        filter: isGold
          ? 'drop-shadow(0 14px 22px rgba(120, 80, 10, 0.42))'
          : 'drop-shadow(0 14px 22px rgba(15, 23, 42, 0.28))',
      }}
    >
      <defs>
        {/* Top Hex Face Metallic Brushed Sheen */}
        <linearGradient id={`topFace-${uid}`} x1="18" y1="10" x2="82" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#FFF7CF' : '#FFFFFF'} />
          <stop offset="25%" stopColor={isGold ? '#F5D268' : '#E2E8F0'} />
          <stop offset="65%" stopColor={isGold ? '#D4AF37' : '#CBD5E1'} />
          <stop offset="100%" stopColor={isGold ? '#967112' : '#64748B'} />
        </linearGradient>

        {/* Front-Left Facet Metallic Shadow */}
        <linearGradient id={`facetLeft-${uid}`} x1="18" y1="24" x2="50" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#A87F1B' : '#94A3B8'} />
          <stop offset="45%" stopColor={isGold ? '#78560B' : '#475569'} />
          <stop offset="100%" stopColor={isGold ? '#4A3403' : '#1E293B'} />
        </linearGradient>

        {/* Front-Right Facet Metallic Reflection */}
        <linearGradient id={`facetRight-${uid}`} x1="82" y1="52" x2="50" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#D9AF3A' : '#CBD5E1'} />
          <stop offset="50%" stopColor={isGold ? '#9C7514' : '#64748B'} />
          <stop offset="100%" stopColor={isGold ? '#5E4306' : '#334155'} />
        </linearGradient>

        {/* Inner Bore Cavity Deep 3D Shadow */}
        <linearGradient id={`innerHole-${uid}`} x1="50" y1="28" x2="50" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#140D03' : '#0F172A'} />
          <stop offset="45%" stopColor={isGold ? '#291D07' : '#1E293B'} />
          <stop offset="100%" stopColor={isGold ? '#0B0601' : '#020617'} />
        </linearGradient>

        {/* Helical Thread Specular Highlight */}
        <linearGradient id={`threadHighlight-${uid}`} x1="32" y1="0" x2="68" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#B88E23' : '#64748B'} />
          <stop offset="35%" stopColor={isGold ? '#FFF5C2' : '#FFFFFF'} />
          <stop offset="70%" stopColor={isGold ? '#FFE07A' : '#F1F5F9'} />
          <stop offset="100%" stopColor={isGold ? '#8F6B12' : '#94A3B8'} />
        </linearGradient>
      </defs>

      {/* 3D Vertical Flats (Front-Left & Front-Right Facets) */}
      <polygon points="18,52 50,66 50,92 18,78" fill={`url(#facetLeft-${uid})`} stroke={isGold ? '#3B2802' : '#0F172A'} strokeWidth="0.8" />
      <polygon points="50,66 82,52 82,78 50,92" fill={`url(#facetRight-${uid})`} stroke={isGold ? '#3B2802' : '#0F172A'} strokeWidth="0.8" />

      {/* Vertical Corner Chamfer Highlights */}
      <line x1="18" y1="52" x2="18" y2="78" stroke={isGold ? '#FFEBA8' : '#F8FAFC'} strokeWidth="1.2" strokeOpacity="0.85" />
      <line x1="50" y1="66" x2="50" y2="92" stroke="#FFFFFF" strokeWidth="2.2" strokeOpacity="0.95" />
      <line x1="82" y1="52" x2="82" y2="78" stroke={isGold ? '#8A630A' : '#475569'} strokeWidth="1.2" strokeOpacity="0.85" />

      {/* Bottom Chamfer Bevel Arcs */}
      <path d="M 18 78 Q 34 84 50 92" stroke={isGold ? '#5E4306' : '#334155'} strokeWidth="1.5" fill="none" />
      <path d="M 50 92 Q 66 84 82 78" stroke={isGold ? '#5E4306' : '#334155'} strokeWidth="1.5" fill="none" />

      {/* Top Hexagon Surface */}
      <polygon
        points="50,10 82,24 82,52 50,66 18,52 18,24"
        fill={`url(#topFace-${uid})`}
        stroke={isGold ? '#F5CF60' : '#E2E8F0'}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Top Chamfer Radial Bevel Lines */}
      <line x1="50" y1="10" x2="50" y2="25" stroke="#FFFFFF" strokeWidth="1.6" strokeOpacity="0.95" />
      <line x1="82" y1="24" x2="67" y2="33" stroke={isGold ? '#FFF7CC' : '#F1F5F9'} strokeWidth="1.2" strokeOpacity="0.8" />
      <line x1="82" y1="52" x2="67" y2="45" stroke={isGold ? '#7A560A' : '#475569'} strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="50" y1="66" x2="50" y2="51" stroke="#FFFFFF" strokeWidth="1.6" strokeOpacity="0.9" />
      <line x1="18" y1="52" x2="33" y2="45" stroke={isGold ? '#8F680E' : '#475569'} strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="18" y1="24" x2="33" y2="33" stroke={isGold ? '#FFF7CC' : '#F1F5F9'} strokeWidth="1.2" strokeOpacity="0.8" />

      {/* Top Chamfer Outer Ellipse Ring */}
      <ellipse cx="50" cy="38" rx="29" ry="17" stroke={isGold ? '#FFFADB' : '#F8FAFC'} strokeWidth="1" strokeOpacity="0.75" strokeDasharray="3 1.5" fill="none" />

      {/* Inner Cylindrical Bore Hole */}
      <ellipse cx="50" cy="38" rx="18.5" ry="11" fill={`url(#innerHole-${uid})`} stroke={isGold ? '#593E05' : '#334155'} strokeWidth="1.6" />

      {/* ───── AUTHENTIC HELICAL INTERNAL SCREW THREADS ───── */}
      <path d="M 33.5 35.5 C 38 39, 62 39, 66.5 35.5" stroke={isGold ? '#1A1103' : '#020617'} strokeWidth="2.6" fill="none" />
      <path d="M 33 35 C 38 38.5, 62 38.5, 67 35" stroke={`url(#threadHighlight-${uid})`} strokeWidth="1.6" fill="none" />

      <path d="M 32 39 C 38 43, 62 43, 68 39" stroke={isGold ? '#100A02' : '#020617'} strokeWidth="2.8" fill="none" />
      <path d="M 32 38.5 C 38 42.5, 62 42.5, 68 38.5" stroke={`url(#threadHighlight-${uid})`} strokeWidth="1.8" fill="none" />

      <path d="M 32.5 43 C 38 47.5, 62 47.5, 67.5 43" stroke={isGold ? '#0A0601' : '#020617'} strokeWidth="3" fill="none" />
      <path d="M 32.5 42.3 C 38 46.8, 62 46.8, 67.5 42.3" stroke={`url(#threadHighlight-${uid})`} strokeWidth="2" fill="none" />

      <path d="M 34 47 C 39 51, 61 51, 66 47" stroke={isGold ? '#080401' : '#020617'} strokeWidth="2.8" fill="none" />
      <path d="M 34 46.4 C 39 50.4, 61 50.4, 66 46.4" stroke={`url(#threadHighlight-${uid})`} strokeWidth="1.6" fill="none" />

      <path d="M 37 51 C 41 54.5, 59 54.5, 63 51" stroke={isGold ? '#050300' : '#020617'} strokeWidth="2.5" fill="none" />
      <path d="M 37 50.5 C 41 54, 59 54, 63 50.5" stroke={`url(#threadHighlight-${uid})`} strokeWidth="1.4" fill="none" strokeOpacity="0.9" />

      {/* Bore Rim Specular Highlights */}
      <path d="M 32 38 C 34 32, 66 32, 68 38" stroke="#FFFFFF" strokeWidth="1.3" strokeOpacity="0.95" fill="none" />
      <path d="M 32 38 C 34 44, 66 44, 68 38" stroke={isGold ? '#7A5306' : '#475569'} strokeWidth="1" strokeOpacity="0.75" fill="none" />
    </svg>
  );
};

/* ─────────────────────────── AUTHENTIC 3D HEX BOLT SVG ─────────────────────────── */
const BoltSvg: React.FC<{
  className?: string;
  size?: number;
  opacity?: number;
  rotation?: number;
  variant?: 'silver' | 'gold';
}> = ({
  className = '',
  size = 100,
  opacity = 0.95,
  rotation = 0,
  variant = 'silver',
}) => {
  const uid = React.useId().replace(/:/g, '');
  const isGold = variant === 'gold';

  return (
    <svg
      width={size}
      height={Math.round(size * 1.3)}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        opacity,
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
        filter: isGold
          ? 'drop-shadow(0 14px 22px rgba(120, 80, 10, 0.42))'
          : 'drop-shadow(0 14px 22px rgba(15, 23, 42, 0.28))',
      }}
    >
      <defs>
        {/* Top Hex Crown Sheen */}
        <linearGradient id={`boltHeadTop-${uid}`} x1="26" y1="8" x2="74" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#FFF7CF' : '#FFFFFF'} />
          <stop offset="30%" stopColor={isGold ? '#F5D268' : '#E2E8F0'} />
          <stop offset="70%" stopColor={isGold ? '#D4AF37' : '#CBD5E1'} />
          <stop offset="100%" stopColor={isGold ? '#967112' : '#64748B'} />
        </linearGradient>

        {/* Bolt Head Left Face (Shadowed) */}
        <linearGradient id={`boltHeadLeft-${uid}`} x1="26" y1="24" x2="50" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#A87F1B' : '#94A3B8'} />
          <stop offset="50%" stopColor={isGold ? '#78560B' : '#475569'} />
          <stop offset="100%" stopColor={isGold ? '#4A3403' : '#1E293B'} />
        </linearGradient>

        {/* Bolt Head Right Face (Specular Reflection) */}
        <linearGradient id={`boltHeadRight-${uid}`} x1="74" y1="24" x2="50" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#E5C158' : '#E2E8F0'} />
          <stop offset="45%" stopColor={isGold ? '#B38922' : '#94A3B8'} />
          <stop offset="100%" stopColor={isGold ? '#6E4F08' : '#334155'} />
        </linearGradient>

        {/* Cylindrical Shank Gradient (Unthreaded & Core) */}
        <linearGradient id={`boltShank-${uid}`} x1="36" y1="0" x2="64" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#5E4306' : '#334155'} />
          <stop offset="18%" stopColor={isGold ? '#B88E23' : '#94A3B8'} />
          <stop offset="40%" stopColor={isGold ? '#FFF2B2' : '#FFFFFF'} />
          <stop offset="65%" stopColor={isGold ? '#D4AF37' : '#CBD5E1'} />
          <stop offset="88%" stopColor={isGold ? '#916A10' : '#64748B'} />
          <stop offset="100%" stopColor={isGold ? '#422D02' : '#1E293B'} />
        </linearGradient>

        {/* Thread Crest Specular Gleam */}
        <linearGradient id={`threadGleam-${uid}`} x1="36" y1="0" x2="64" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#B08316' : '#64748B'} />
          <stop offset="25%" stopColor={isGold ? '#FFECA0' : '#F8FAFC'} />
          <stop offset="45%" stopColor={isGold ? '#FFFBE6' : '#FFFFFF'} />
          <stop offset="70%" stopColor={isGold ? '#FFDE6A' : '#E2E8F0'} />
          <stop offset="100%" stopColor={isGold ? '#785408' : '#475569'} />
        </linearGradient>

        {/* Thread Tooth Side Highlight */}
        <linearGradient id={`threadToothLeft-${uid}`} x1="34" y1="0" x2="38" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isGold ? '#E6BF4C' : '#CBD5E1'} />
          <stop offset="100%" stopColor={isGold ? '#7A5408' : '#475569'} />
        </linearGradient>
      </defs>

      {/* 1. Bolt Underhead Washer Flange (Integrated Washer Ring) */}
      <ellipse cx="50" cy="46" rx="28" ry="6" fill={isGold ? '#3D2903' : '#0F172A'} />
      <ellipse cx="50" cy="44.5" rx="27.5" ry="5.5" fill={`url(#boltHeadRight-${uid})`} stroke={isGold ? '#F5CF60' : '#CBD5E1'} strokeWidth="0.8" />

      {/* 2. Bolt Hex Head 3D Vertical Flats */}
      <polygon points="26,24 50,34 50,46 26,36" fill={`url(#boltHeadLeft-${uid})`} stroke={isGold ? '#3B2802' : '#0F172A'} strokeWidth="0.8" />
      <polygon points="50,34 74,24 74,36 50,46" fill={`url(#boltHeadRight-${uid})`} stroke={isGold ? '#3B2802' : '#0F172A'} strokeWidth="0.8" />

      {/* Vertical Edge Specular Highlights */}
      <line x1="26" y1="24" x2="26" y2="36" stroke={isGold ? '#FFE694' : '#F1F5F9'} strokeWidth="1.2" strokeOpacity="0.8" />
      <line x1="50" y1="34" x2="50" y2="46" stroke="#FFFFFF" strokeWidth="2.2" strokeOpacity="0.95" />
      <line x1="74" y1="24" x2="74" y2="36" stroke={isGold ? '#7A560A' : '#475569'} strokeWidth="1.2" strokeOpacity="0.8" />

      {/* 3. Bolt Hex Head Top Crown */}
      <polygon
        points="50,6 74,14 74,24 50,34 26,24 26,14"
        fill={`url(#boltHeadTop-${uid})`}
        stroke={isGold ? '#FCE082' : '#E2E8F0'}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Top Chamfer Radial Indents */}
      <ellipse cx="50" cy="20" rx="15" ry="7" stroke="#FFFFFF" strokeWidth="0.9" strokeDasharray="3 1.5" fill="none" opacity="0.85" />
      <line x1="50" y1="6" x2="50" y2="13" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.9" />
      <line x1="74" y1="14" x2="62" y2="18" stroke={isGold ? '#FFE9A0' : '#E2E8F0'} strokeWidth="1" strokeOpacity="0.75" />
      <line x1="26" y1="14" x2="38" y2="18" stroke={isGold ? '#FFE9A0' : '#E2E8F0'} strokeWidth="1" strokeOpacity="0.75" />

      {/* 4. Unthreaded Shank Body */}
      <rect x="36.5" y="46" width="27" height="18" fill={`url(#boltShank-${uid})`} />
      <line x1="47.5" y1="46" x2="47.5" y2="64" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />

      {/* 5. Thread Run-Out Transition */}
      <path d="M 36.5 64 Q 50 67 63.5 65" stroke={isGold ? '#4A3304' : '#1E293B'} strokeWidth="1.8" fill="none" />

      {/* 6. EXTERNAL HELICAL SCREW THREADS */}
      <rect x="37" y="64" width="26" height="52" fill={`url(#boltShank-${uid})`} />

      {/* Left Edge Teeth Profile */}
      <path d="
        M 37 65   L 34.5 67 L 37 69
        L 34.5 72 L 37 74
        L 34.5 77 L 37 79
        L 34.5 82 L 37 84
        L 34.5 87 L 37 89
        L 34.5 92 L 37 94
        L 34.5 97 L 37 99
        L 34.5 102 L 37 104
        L 34.5 107 L 37 109
        L 34.5 112 L 37 114
      " stroke={isGold ? '#2D1D03' : '#0F172A'} strokeWidth="1.2" fill={`url(#threadToothLeft-${uid})`} />

      {/* Right Edge Teeth Profile */}
      <path d="
        M 63 67   L 65.5 69 L 63 71
        L 65.5 74 L 63 76
        L 65.5 79 L 63 81
        L 65.5 84 L 63 86
        L 65.5 89 L 63 91
        L 65.5 94 L 63 96
        L 65.5 99 L 63 101
        L 65.5 104 L 63 106
        L 65.5 109 L 63 111
        L 65.5 114 L 63 116
      " stroke={isGold ? '#2D1D03' : '#0F172A'} strokeWidth="1.2" fill={isGold ? '#8C640D' : '#475569'} />

      {/* Diagonal Helical Thread Ridges */}
      <path d="M 34.5 67 Q 49 69 65.5 71.5" stroke={isGold ? '#1F1402' : '#0F172A'} strokeWidth="3" fill="none" />
      <path d="M 34.5 66 Q 49 68 65.5 70.5" stroke={`url(#threadGleam-${uid})`} strokeWidth="2.2" fill="none" />

      <path d="M 34.5 72 Q 49 74 65.5 76.5" stroke={isGold ? '#1F1402' : '#0F172A'} strokeWidth="3" fill="none" />
      <path d="M 34.5 71 Q 49 73 65.5 75.5" stroke={`url(#threadGleam-${uid})`} strokeWidth="2.2" fill="none" />

      <path d="M 34.5 77 Q 49 79 65.5 81.5" stroke={isGold ? '#1F1402' : '#0F172A'} strokeWidth="3" fill="none" />
      <path d="M 34.5 76 Q 49 78 65.5 80.5" stroke={`url(#threadGleam-${uid})`} strokeWidth="2.2" fill="none" />

      <path d="M 34.5 82 Q 49 84 65.5 86.5" stroke={isGold ? '#1F1402' : '#0F172A'} strokeWidth="3" fill="none" />
      <path d="M 34.5 81 Q 49 83 65.5 85.5" stroke={`url(#threadGleam-${uid})`} strokeWidth="2.2" fill="none" />

      <path d="M 34.5 87 Q 49 89 65.5 91.5" stroke={isGold ? '#1F1402' : '#0F172A'} strokeWidth="3" fill="none" />
      <path d="M 34.5 86 Q 49 88 65.5 90.5" stroke={`url(#threadGleam-${uid})`} strokeWidth="2.2" fill="none" />

      <path d="M 34.5 92 Q 49 94 65.5 96.5" stroke={isGold ? '#1F1402' : '#0F172A'} strokeWidth="3" fill="none" />
      <path d="M 34.5 91 Q 49 93 65.5 95.5" stroke={`url(#threadGleam-${uid})`} strokeWidth="2.2" fill="none" />

      <path d="M 34.5 97 Q 49 99 65.5 101.5" stroke={isGold ? '#1F1402' : '#0F172A'} strokeWidth="3" fill="none" />
      <path d="M 34.5 96 Q 49 98 65.5 100.5" stroke={`url(#threadGleam-${uid})`} strokeWidth="2.2" fill="none" />

      <path d="M 34.5 102 Q 49 104 65.5 106.5" stroke={isGold ? '#1F1402' : '#0F172A'} strokeWidth="3" fill="none" />
      <path d="M 34.5 101 Q 49 103 65.5 105.5" stroke={`url(#threadGleam-${uid})`} strokeWidth="2.2" fill="none" />

      <path d="M 34.5 107 Q 49 109 65.5 111.5" stroke={isGold ? '#1F1402' : '#0F172A'} strokeWidth="3" fill="none" />
      <path d="M 34.5 106 Q 49 108 65.5 110.5" stroke={`url(#threadGleam-${uid})`} strokeWidth="2.2" fill="none" />

      <path d="M 34.5 112 Q 49 114 65.5 116.5" stroke={isGold ? '#1F1402' : '#0F172A'} strokeWidth="3" fill="none" />
      <path d="M 34.5 111 Q 49 113 65.5 115.5" stroke={`url(#threadGleam-${uid})`} strokeWidth="2.2" fill="none" />

      {/* 7. Lead-in Chamfered Dog Point */}
      <polygon points="36,116 64,116 58,123 42,123" fill={isGold ? '#5E4306' : '#334155'} stroke={isGold ? '#291D04' : '#0F172A'} strokeWidth="0.8" />
      <ellipse cx="50" cy="123" rx="8" ry="2.8" fill={isGold ? '#1F1402' : '#0F172A'} stroke={isGold ? '#D4AF37' : '#CBD5E1'} strokeWidth="0.8" />
      <line x1="44" y1="123" x2="56" y2="123" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.9" />

      {/* Axial Specular Reflection line */}
      <line x1="47.5" y1="65" x2="47.5" y2="116" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="1.5 3.5" />
    </svg>
  );
};

const WatermarkNut: React.FC<{ className?: string; size?: number; variant?: 'silver' | 'gold' }> = ({
  className = '',
  size = 380,
  variant = 'silver',
}) => (
  <div className={`absolute pointer-events-none select-none z-0 ${className}`}>
    <NutSvg size={size} opacity={0.16} variant={variant} />
  </div>
);

const WatermarkBolt: React.FC<{ className?: string; size?: number; rotation?: number; variant?: 'silver' | 'gold' }> = ({
  className = '',
  size = 380,
  rotation = -12,
  variant = 'silver',
}) => (
  <div className={`absolute pointer-events-none select-none z-0 ${className}`}>
    <BoltSvg size={size} opacity={0.15} rotation={rotation} variant={variant} />
  </div>
);

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-gray-200 rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-gray-900">
        <button
          onClick={() => { setSubmitted(false); onClose(); }}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">Quote Request Received!</h3>
            <p className="text-sm text-gray-600 max-w-sm mx-auto mb-6">
              Assigned reference ticket <span className="font-mono font-bold text-blue-600">#HF-{Math.floor(Math.random() * 9000 + 1000)}</span>. Our plant engineering team in Satpur MIDC, Nashik will review your details and send you a simple, clear price quote within 24 hours.
            </p>
            <button onClick={() => { setSubmitted(false); onClose(); }} className="btn-primary">
              Done &amp; Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-[11px] font-mono font-bold tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Fast &amp; Easy Price Quote
            </div>
            <h3 className="text-2xl font-bold font-display text-gray-900 mb-1">Get an Easy Fastener Quote</h3>
            <p className="text-xs text-gray-500 mb-4">
              Direct from Hindustan Fasteners &amp; Precision Forging (Satpur MIDC, Nashik)
            </p>
            {product && (
              <div className="mb-4 p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono text-blue-900 flex items-center justify-between">
                <span>Selected Fastener: <strong>{product}</strong></span>
                <span className="text-[10px] bg-blue-100 px-2 py-0.5 rounded text-blue-900 font-bold">Auto-Attached</span>
              </div>
            )}
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                  <input required type="text" placeholder="e.g. Ramesh Patel" className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Company / Workshop Name *</label>
                  <input required type="text" placeholder="e.g. Auto Components Ltd" className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input required type="email" placeholder="contact@example.com" className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile / WhatsApp Number *</label>
                  <input required type="tel" placeholder="+91 98765 43210" className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Strength Grade</label>
                  <select className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 border border-gray-300 text-gray-900 font-mono focus:border-blue-500">
                    <option>Standard Steel (4.8 / 6.8)</option>
                    <option>High Tensile (Grade 8.8)</option>
                    <option>Extra Heavy (Grade 10.9)</option>
                    <option>Extreme Strength (Grade 12.9)</option>
                    <option>Not Sure / Recommend Me</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Approximate Size</label>
                  <input type="text" defaultValue="M10 x 65 mm" className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 border border-gray-300 text-gray-900 font-mono focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Surface Finish</label>
                  <select className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 border border-gray-300 text-gray-900 font-mono focus:border-blue-500">
                    <option>Silver Zinc Plating</option>
                    <option>Rust-Proof Zinc Flake</option>
                    <option>Black Phosphated</option>
                    <option>Hot Dip Galvanized</option>
                    <option>Standard Plain Oil</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Got a Photo or Drawing? (Optional)</label>
                <div className="relative border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-xl p-4 text-center transition bg-gray-50">
                  <input type="file" accept=".pdf,.dwg,.step,.stp,.png,.jpg,.jpeg" onChange={(e) => { if (e.target.files?.[0]) setFileName(e.target.files[0].name); }} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <UploadCloud className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <span className="text-xs font-medium text-gray-700 block">
                    {fileName ? `Attached: ${fileName}` : 'Click here to upload sample photo, drawing, or PDF'}
                  </span>
                  <span className="text-[10px] text-gray-500 block mt-0.5">We will match your sample or drawing exactly</span>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 text-sm font-bold tracking-wide">
                SUBMIT FOR INSTANT PLANT QUOTE →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────── BIG PRODUCT DIALOGUE BOX ─────────────────────────── */
const ProductDetailModal: React.FC<{
  product: any | null;
  onClose: () => void;
  onOpenQuote: (name: string) => void;
}> = ({ product, onClose, onOpenQuote }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-md animate-fadeIn" onClick={onClose}>
      <div
        className="bg-white border-2 border-gray-200 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 flex items-center justify-center transition shadow-sm z-20"
          aria-label="Close dialogue box"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold tracking-wider">
            {product.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold flex items-center gap-1">
            <Check className="w-3 h-3" /> IATF 16949 Certified
          </span>
          <span className="text-[11px] font-mono text-gray-500 ml-auto hidden sm:inline-block">
            Satpur MIDC, Nashik Plant
          </span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-black font-display text-gray-950 mb-6 leading-tight">
          {product.name}
        </h3>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
          {/* Left Column: Big Studio Image */}
          <div className="md:col-span-6 bg-gradient-to-b from-slate-50/90 via-white to-slate-100/80 rounded-2xl overflow-hidden p-4 sm:p-6 flex flex-col items-center justify-center border border-slate-200 shadow-sm relative group min-h-[320px]">
            <img loading="lazy" decoding="async"
              src={product.img}
              alt={product.name}
              className="max-h-72 sm:max-h-80 w-full object-contain filter drop-shadow-2xl scale-110 group-hover:scale-120 transition-transform duration-500 relative z-10"
            />
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-[11px] font-mono text-slate-700 shadow-sm relative z-10">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>3D Precision Engineered Studio Showcase</span>
            </div>
          </div>

          {/* Right Column: Engineering Details */}
          <div className="md:col-span-6 space-y-4 text-sm text-gray-700">
            {/* Simple Words Explanation */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
              <span className="text-xs font-mono text-blue-900 font-extrabold block mb-1">
                What This Fastener Is &amp; How It Works:
              </span>
              <p className="text-gray-800 leading-relaxed text-xs sm:text-sm">
                {product.desc}
              </p>
            </div>

            {/* Standard Sizes & Specs */}
            <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-gray-200">
              <span className="text-[11px] font-mono text-gray-500 font-bold block mb-1">
                Available Dimensions &amp; Specs:
              </span>
              <p className="text-blue-900 font-mono font-bold text-xs sm:text-sm">
                {product.specs}
              </p>
            </div>

            {/* Vehicle & Machinery Applications */}
            <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-gray-200">
              <span className="text-[11px] font-mono text-gray-500 font-bold block mb-1">
                Real-World Applications:
              </span>
              <p className="text-gray-900 font-medium text-xs sm:text-sm">
                {product.use}
              </p>
            </div>

            {/* Manufacturing Quality Gates */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700">
                <span className="text-gray-500 block text-[10px]">Cold Forging</span>
                <strong className="text-gray-950 font-bold">5 &amp; 6-Die Formers</strong>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700">
                <span className="text-gray-500 block text-[10px]">Quality Gate</span>
                <strong className="text-emerald-700 font-bold">100% Eddy Current</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => { onClose(); onOpenQuote(product.name); }}
            className="btn-primary w-full sm:flex-1 py-3.5 text-xs sm:text-sm font-bold shadow-lg"
          >
            REQUEST PRICE QUOTE FOR THIS ITEM →
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 text-xs sm:text-sm font-bold text-gray-800 transition"
          >
            Close Dialogue
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────── 25 PROCESS DETAIL MODAL ─────────────────────────── */
const ProcessDetailModal: React.FC<{
  process: any | null;
  onClose: () => void;
  onOpenQuote: (processName: string) => void;
}> = ({ process, onClose, onOpenQuote }) => {
  if (!process) return null;

  const isNationalBenchmark = process.id === 2;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-md animate-fadeIn" onClick={onClose}>
      <div
        className="bg-white border-2 border-gray-200 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 flex items-center justify-center transition shadow-sm z-20"
          aria-label="Close dialogue"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-mono font-black shadow-xs">
            Process #{process.num} of 25
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold">
            {process.categoryLabel}
          </span>
          {isNationalBenchmark && (
            <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-black flex items-center gap-1">
              ★ India's Biggest Cold Forging Machines
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-black font-display text-gray-950 mb-4">
          {process.title}
        </h3>

        {isNationalBenchmark && (
          <div className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-2 border-amber-400/50">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 mb-1">
              <span>🇮🇳</span>
              <span>INDIA'S NATIONAL BENCHMARK SPECIFICATIONS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-white border border-amber-300 shadow-xs">
                <span className="text-gray-500 text-[10px] block">India's Max Cold Forged Length</span>
                <strong className="text-amber-900 font-bold text-sm">Up to M16 x 375 mm</strong>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-amber-300 shadow-xs">
                <span className="text-gray-500 text-[10px] block">India's Max Cold Forging Diameter</span>
                <strong className="text-blue-900 font-bold text-sm">Up to M30 Diameter</strong>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3.5 mb-6 text-sm text-gray-700">
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
            <span className="text-xs font-mono text-blue-900 font-extrabold block mb-1">
              Process Overview:
            </span>
            <p className="text-gray-800 leading-relaxed text-xs sm:text-sm">
              {process.desc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-gray-200">
            <span className="text-[11px] font-mono text-gray-500 font-bold block mb-1">
              Machinery &amp; Technology Deployed:
            </span>
            <p className="text-gray-950 font-medium text-xs sm:text-sm">
              {process.details}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-[11px] font-mono text-emerald-900 font-bold block mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Why It Matters for Automotive &amp; Industrial Reliability:
            </span>
            <p className="text-emerald-950 font-medium text-xs sm:text-sm">
              {process.importance}
            </p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => { onClose(); onOpenQuote(`Process Capability: ${process.title}`); }}
            className="btn-primary w-full sm:flex-1 py-3.5 text-xs sm:text-sm font-bold shadow-lg"
          >
            ENQUIRE ABOUT THIS PROCESS / CAPABILITY →
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 text-xs sm:text-sm font-bold text-gray-800 transition"
          >
            Close Window
          </button>
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

/* ─────────────────────────── 3D AUTOMATIC COIN FLIP COMPONENT ─────────────────────────── */
const CoinFlipBadge: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="perspective-1000 select-none group">
        {/* The 3D Rotating Coin with metallic greyish steel rim */}
        <div
          className={`relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full transform-style-preserve-3d transition-transform duration-700 ease-out shadow-2xl ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* SIDE A: Hindustan Fasteners (1970) */}
          <div className="absolute inset-0 backface-hidden rounded-full coin-metallic-rim p-2 sm:p-2.5 flex items-center justify-center border-4 border-slate-500/80 shadow-[0_0_30px_rgba(148,163,184,0.45)]">
            <div className="w-full h-full rounded-full coin-metallic-face flex flex-col items-center justify-center p-3 sm:p-4 text-center shadow-inner relative overflow-hidden border border-slate-400/50">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-400/20 via-transparent to-white/70 pointer-events-none" />
              <img decoding="async"
                src="/logo/HF LOGO (1).png"
                alt="Hindustan Fasteners Logo"
                className="max-h-16 sm:max-h-20 md:max-h-24 max-w-[88%] object-contain mb-1 drop-shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="text-[10px] sm:text-[11px] font-mono font-extrabold tracking-tight text-slate-900 leading-tight">
                Hindustan Fasteners
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-blue-900 leading-tight">
                Established 1970
              </span>
            </div>
          </div>

          {/* SIDE B: Precision Forging & Stamping (1982) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-full coin-metallic-rim p-2 sm:p-2.5 flex items-center justify-center border-4 border-slate-500/80 shadow-[0_0_30px_rgba(148,163,184,0.45)]">
            <div className="w-full h-full rounded-full coin-metallic-face flex flex-col items-center justify-center p-3 sm:p-4 text-center shadow-inner relative overflow-hidden border border-slate-400/50">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-400/20 via-transparent to-white/70 pointer-events-none" />
              <img decoding="async"
                src="/logo/PFS logo.png"
                alt="Precision Forging and Stamping Logo"
                className="max-h-16 sm:max-h-20 md:max-h-24 max-w-[88%] object-contain mb-1 drop-shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="text-[10px] sm:text-[11px] font-mono font-extrabold tracking-tight text-slate-900 leading-tight">
                Precision Forging
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-blue-900 leading-tight">
                Expanded 1982
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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

/* ─────────────────────────── SEPARATE DEDICATED CATALOGUE PAGE ─────────────────────────── */
const DedicatedCatalogPage: React.FC<{
  onBackToHome: () => void;
  onOpenQuote: (name?: string) => void;
  onSelectProduct: (product: any) => void;
}> = ({ onBackToHome, onOpenQuote, onSelectProduct }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = catalogData.filter((item: any) => {
    const matchesCat =
      activeCategory === 'all' ||
      (activeCategory === 'bolts' && item.category === 'Bolts & Screws') ||
      (activeCategory === 'specialty' && item.category === 'Specialty Fasteners') ||
      (activeCategory === 'screws' && item.category === 'Specialized Screws') ||
      (activeCategory === 'advanced' && item.category === 'Advanced Drive Systems') ||
      (activeCategory === 'nuts' && item.category === 'Nuts & Lock Nuts') ||
      (activeCategory === 'washers' && item.category === 'Washers & Components') ||
      (activeCategory === 'pins' && (item.category === 'Pins & Special Bolts' || item.category === 'Studs & Rods'));

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.use.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-gray-900 flex flex-col font-sans">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900 text-xs font-mono font-bold transition shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>← Back to Home Page</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="h-9 px-2.5 bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
              <img decoding="async" src="/logo/HF LOGO (1).png" alt="Hindustan Fasteners" className="h-6 w-auto object-contain" />
            </div>
            <div className="h-9 px-2.5 bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
              <img decoding="async" src="/logo/PFS logo.png" alt="Precision Forging" className="h-6 w-auto object-contain" />
            </div>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="btn-primary text-xs px-4 sm:px-6 py-2 sm:py-2.5 font-bold font-mono"
          >
            Get Price Quote →
          </button>
        </div>
      </header>

      {/* Compact Catalogue Header */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-black font-display tracking-tight text-gray-950">
              Fasteners Catalogue
            </h1>
            <p className="text-xs text-gray-500 mt-0.5 font-medium">
              {catalogData.length} products · M4 to M24 · IATF 16949 Certified
            </p>
          </div>
          <button
            onClick={() => onOpenQuote()}
            className="btn-nav-quote text-xs px-5 py-2.5 font-extrabold flex-shrink-0"
          >
            Get Quote →
          </button>
        </div>
      </section>

      {/* Catalogue Filter & Search Bar */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-[61px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex overflow-x-auto sm:flex-wrap items-center gap-2 no-scrollbar pb-1 -mx-2 px-2 sm:mx-0 sm:px-0">
            {[
              { id: 'all', label: `All Fasteners (${catalogData.length})` },
              { id: 'bolts', label: 'Heavy Bolts & Screws' },
              { id: 'specialty', label: 'Specialty Fasteners' },
              { id: 'screws', label: 'Specialized Screws' },
              { id: 'advanced', label: 'Advanced Drive Systems' },
              { id: 'nuts', label: 'Lock Nuts & Clips' },
              { id: 'washers', label: 'Washers & Components' },
              { id: 'pins', label: 'Pins & Studs' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shadow-sm ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white border border-blue-500 font-extrabold shadow-md ring-2 ring-blue-400/40'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bolt, nut, screw, size..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white transition shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* Product Cards Grid with "little little info of products" */}
      <section className="py-12 sm:py-16 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between mb-8 text-xs font-mono text-gray-600">
            <span>Showing <strong>{filteredItems.length}</strong> of {catalogData.length} fasteners</span>
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-blue-600 font-bold hover:underline">
                Clear Search Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item: any) => (
              <div
                key={item.id}
                onClick={() => onSelectProduct(item)}
                className="rounded-2xl bg-white border border-gray-200 hover:border-blue-400 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Clean 3D Studio Showcase */}
                  <div className="w-full h-52 sm:h-56 rounded-2xl bg-gradient-to-b from-slate-50/90 via-white to-slate-100/70 p-2 sm:p-3 flex items-center justify-center relative mb-4 border border-slate-200/80 group-hover:border-blue-400 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-xl scale-115 group-hover:scale-125 transition-all duration-300 relative z-10"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono text-cyan-300 font-bold opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm z-20 flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Inspect
                    </span>
                  </div>

                  {/* Little Info of Products */}
                  <span className="text-[10px] font-mono text-blue-600 font-bold tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-gray-950 group-hover:text-blue-600 transition-colors line-clamp-1 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100 text-[11px] font-mono text-gray-700 mb-2">
                    <span className="text-gray-400 block text-[9px] ">Standard Specs:</span>
                    <span className="line-clamp-1 font-semibold text-gray-900">{item.specs}</span>
                  </div>
                </div>

                <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 line-clamp-1 max-w-[140px]">
                    {item.use}
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); onSelectProduct(item); }}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-900 hover:text-white text-[11px] font-mono font-bold transition flex items-center gap-1 border border-blue-200"
                  >
                    Dialogue Box →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-gray-500 font-mono text-sm bg-white rounded-2xl border border-gray-200 p-8 max-w-md mx-auto">
              <Search className="w-8 h-8 text-gray-300 mx-auto mb-3" />
              <p className="font-bold text-gray-800 mb-1">No fasteners found</p>
              <p className="text-xs text-gray-500 mb-4">Try searching for generic terms like 'bolt', 'nut', or 'stud'.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="btn-primary text-xs px-4 py-2"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Bottom Return to Home Card */}
          <div className="mt-16 p-8 rounded-3xl bg-white border-2 border-gray-200 shadow-lg text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="font-display font-black text-xl text-gray-950">Finished Browsing the Catalogue?</h4>
              <p className="text-xs text-gray-600 mt-1">Return to the main page to see the 10-Stage Pipeline, In-House Operations, and 50-Year Legacy.</p>
            </div>
            <button
              onClick={onBackToHome}
              className="btn-dark px-6 py-3.5 text-xs font-bold whitespace-nowrap"
            >
              ← Back to Main Home Page
            </button>
          </div>
        </div>
      </section>

      {/* Dedicated Page Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 px-4 text-center text-xs font-mono text-gray-500">
        <span>Hindustan Fasteners &amp; Precision Forging · Satpur MIDC, Nashik 422 007 · IATF 16949 Certified</span>
      </footer>
    </div>
  );
};

/* ─────────────────────────── HERO VIDEO SHOWCASE COMPONENT (OPTIMIZED FAST STREAMING) ─────────────────────────── */
const HeroVideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(37,99,235,0.3)] transition-all duration-500 hover:shadow-[0_25px_65px_rgba(37,99,235,0.4)]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/hero-nuts.jpg"
        className="w-full h-full object-cover"
      >
        <source src="/videos/hero-showcase.mp4" type="video/mp4" />
        <source src="/videos/PixVerse_V6_Image_Text_540P_Create_a_60second_ (2).mp4" type="video/mp4" />
        <source src="/VIDEOS/PixVerse_V6_Image_Text_540P_Create_a_60second_ (2).mp4" type="video/mp4" />
      </video>
    </div>
  );
};

/* ─────────────────────────── MAIN APPLICATION ─────────────────────────── */
export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalog' | 'contact'>('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>();
  const [selectedCatalogItem, setSelectedCatalogItem] = useState<any | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  // Catalog State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Split catalog into 2 tracks for smooth continuous horizontal scrollers
  const catalogTrack1 = catalogData.slice(0, Math.ceil(catalogData.length / 2));
  const catalogTrack2 = catalogData.slice(Math.ceil(catalogData.length / 2));

  // 10-Stage Pipeline Presentation State
  const [presentationStage, setPresentationStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');

  // 3D Plant Flip Gallery State
  const [galleryCategory, setGalleryCategory] = useState<string>('all');
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isGalleryAutoPlaying, setIsGalleryAutoPlaying] = useState(false);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  // 25 In-House Manufacturing Processes State
  const [processCategory, setProcessCategory] = useState<string>('all');
  const [processSearchQuery, setProcessSearchQuery] = useState<string>('');
  const [selectedProcess, setSelectedProcess] = useState<any | null>(null);

  const toggleCardFlip = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // URL Hash routing for dedicated page support
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.includes('catalog')) {
        setCurrentView('catalog');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.includes('contact')) {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openCatalogPage = () => {
    window.location.hash = '#/catalog';
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openContactPage = () => {
    window.location.hash = '#/contact';
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openHomePage = () => {
    window.location.hash = '';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-play timer for presentation slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setSlideDirection('right');
      setPresentationStage((prev) => (prev + 1) % 10);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      nextStage();
    } else if (distance < -minSwipeDistance) {
      prevStage();
    }
  };

  const goToStage = (newStage: number) => {
    setSlideDirection(newStage >= presentationStage ? 'right' : 'left');
    setPresentationStage(newStage);
  };

  const nextStage = () => {
    setSlideDirection('right');
    setPresentationStage((prev) => (prev + 1) % 10);
  };

  const prevStage = () => {
    setSlideDirection('left');
    setPresentationStage((prev) => (prev > 0 ? prev - 1 : 9));
  };

  // Auto-scroll active mobile chip into view smoothly
  useEffect(() => {
    const activePill = document.getElementById(`mob-pill-${presentationStage}`);
    if (activePill) {
      activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [presentationStage]);

  const openQuote = (prod?: string) => {
    setQuoteProduct(prod);
    setQuoteOpen(true);
    setMenuOpen(false);
  };

  /* ─── DATA: 10-STAGE PIPELINE (EXACT PROMPT STAGES + EASY LANGUAGE) ─── */
  const presentationStages = [
    {
      num: '01',
      buttonCode: '01RAW',
      shortName: 'Raw Material',
      stageTitle: 'RAW MATERIAL SPECTROMETRY',
      metric: '100% OES Spectrometer Chemical Testing',
      simpleExpl: 'Laser spectrometry testing of raw steel coils to verify exact carbon and alloy chemistry before forging.',
      whyItMatters: 'Guarantees zero hidden impurities or weak steel.',
      icon: <Microscope className="w-7 h-7 text-blue-600" />,
      tag: 'Chemical Verification Gate',
      equipment: 'Optical Emission Spectrometer (OES)',
    },
    {
      num: '02',
      buttonCode: '02INCOMING',
      shortName: 'Quarantine',
      stageTitle: 'INCOMING QUARANTINE',
      metric: 'Physical Segregation into Red / Green Racks',
      simpleExpl: 'Approved steel coils go to green racks; unverified bundles stay locked in red quarantine racks.',
      whyItMatters: 'Defective raw steel can never touch production machines.',
      icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
      tag: 'Quarantine Gate',
      equipment: 'Physical Segregation Racks & Audits',
    },
    {
      num: '03',
      buttonCode: '03IN-HOUSE',
      shortName: 'Tooling Fab',
      stageTitle: 'IN-HOUSE TOOL FABRICATION',
      metric: 'Tungsten Carbide Die Grinding',
      simpleExpl: 'Our in-house master toolmakers carve tungsten carbide dies down to hair-thin precision.',
      whyItMatters: 'Instant tool replacements and sub-micron accuracy.',
      icon: <Wrench className="w-7 h-7 text-blue-600" />,
      tag: 'Tooling Gate',
      equipment: 'Carbide Die Grinders & EDM Cutters',
    },
    {
      num: '04',
      buttonCode: '045',
      shortName: '5 & 6-Die Forge',
      stageTitle: '5 & 6-DIE COLD FORGING',
      metric: 'Continuous Metallurgical Grain Flow (M4 to M24)',
      simpleExpl: 'High-speed 5 & 6-die formers hammer steel wire into bolts without cutting internal metal grains.',
      whyItMatters: 'Unbroken grain lines stop bolts from snapping under vibration.',
      icon: <Factory className="w-7 h-7 text-blue-600" />,
      tag: 'Cold Forging Gate',
      equipment: '5-Die & 6-Die Cold Formers',
    },
    {
      num: '05',
      buttonCode: '05SECONDARY',
      shortName: 'Secondary Ops',
      stageTitle: 'SECONDARY IN-HOUSE OPERATIONS',
      metric: 'Automatic Tapping, Slotting & CNC Turning',
      simpleExpl: 'Automatic slot milling, tapping, grooving, and CNC turning completed 100% under one roof.',
      whyItMatters: 'Faster turnaround and zero vendor dependency.',
      icon: <Cog className="w-7 h-7 text-blue-600" />,
      tag: 'Secondary Machining Gate',
      equipment: 'CNC Lathes & Centerless Grinders',
    },
    {
      num: '06',
      buttonCode: '06SEMS',
      shortName: 'SEMS Washers',
      stageTitle: 'SEMS WASHER THREAD ROLLING',
      metric: 'Captive Pre-Assembled Washer Rolling',
      simpleExpl: 'Washers are loaded onto bolt shanks before thread rolling so they spin freely but never fall off.',
      whyItMatters: 'Accelerates vehicle assembly and prevents missing washers.',
      icon: <Layers className="w-7 h-7 text-blue-600" />,
      tag: 'Captive SEMS Gate',
      equipment: 'Rotary Die Thread Rollers',
    },
    {
      num: '07',
      buttonCode: '07SCADA',
      shortName: 'SCADA Furnace',
      stageTitle: 'SCADA HEAT TREATMENT',
      metric: 'Continuous Mesh-Belt SCADA Hardening & Tempering',
      simpleExpl: 'Continuous mesh furnaces harden bolts 24/7 with computer temperature locks.',
      whyItMatters: 'Locks in high tensile strength while keeping core toughness.',
      icon: <Flame className="w-7 h-7 text-blue-600" />,
      tag: 'SCADA Thermal Gate',
      equipment: 'Mesh-Belt Furnaces + SCADA',
    },
    {
      num: '08',
      buttonCode: '08AUTOMATIC',
      shortName: 'PLC Plating',
      stageTitle: 'AUTOMATIC PLC SURFACE COATING',
      metric: 'Zinc, Geomet Zinc Flake & Phosphating',
      simpleExpl: 'Robotic hoists apply protective coatings like trivalent zinc, Geomet, or phosphating.',
      whyItMatters: 'Protects fasteners against rust for up to 1,500+ salt-spray hours.',
      icon: <Zap className="w-7 h-7 text-blue-600" />,
      tag: 'PLC Plating Gate',
      equipment: 'Automated Barrel & Rack Lines',
    },
    {
      num: '09',
      buttonCode: '09TECHNOFOUR',
      shortName: 'Eddy Current',
      stageTitle: 'TECHNOFOUR EDDY CURRENT SORTING',
      metric: '100% High-Speed NDT Electronic Scanning',
      simpleExpl: 'Every single bolt passes magnetic eddy-current scanners to detect surface cracks or hardness flaws.',
      whyItMatters: '100% non-destructive sorting ensures zero defective parts.',
      icon: <Gauge className="w-7 h-7 text-blue-600" />,
      tag: '100% NDT Gate',
      equipment: 'Technofour Multifect-EC Systems',
    },
    {
      num: '10',
      buttonCode: '10AUTOMATED',
      shortName: 'Dispatch & QR',
      stageTitle: 'AUTOMATED PACKAGING & DISPATCH',
      metric: 'Safety Stock Store & Barcode Traceability',
      simpleExpl: 'Fasteners are weighed, packed, QR-labeled, and stocked in customer buffer stores.',
      whyItMatters: 'Guarantees on-time delivery with complete coil traceability.',
      icon: <Truck className="w-7 h-7 text-blue-600" />,
      tag: 'Safety Stock Gate',
      equipment: 'Automated Packaging & Barcode Lines',
    },
  ];

  /* ─── DATA: 25 IN-HOUSE MANUFACTURING & FINISHING PROCESSES ─── */
  const manufacturingProcesses = [
    {
      id: 1,
      num: '01',
      title: 'Raw Material Testing',
      category: 'testing',
      categoryLabel: 'Material & Testing',
      tag: '100% OES Spectrometry',
      badge: 'Chemical & Mechanical Gate',
      desc: '100% Optical Emission Spectrometer (OES) chemical alloy verification, tensile elongation checks, microstructure grain analysis, and inclusion grading on all incoming wire rod coils before cold heading.',
      details: 'Optical Emission Spectrometer (OES), Microstructure Image Analyser, UTM, Digital Hardness Testers.',
      importance: 'Guarantees zero hidden impurities or off-chemistry coils before cold heading begins.',
    },
    {
      id: 2,
      num: '02',
      title: 'Cold Forging',
      category: 'forging',
      categoryLabel: 'Forging & Forming',
      tag: 'India\'s Biggest: M16x375 & M30',
      badge: 'National Benchmark',
      desc: 'Multi-station progressive cold heading preserving continuous metallurgical grain flow without cutting metal fibers. Houses India\'s biggest cold forging machines forging lengths up to M16 x 375mm and diameters up to M30.',
      details: '5-Die & 6-Die Formers, Multi-Station High Speed Bolt Makers, Continuous Uninterrupted Grain Tooling.',
      importance: 'Unbroken grain lines prevent fatigue fractures under extreme automotive engine & chassis vibrations.',
    },
    {
      id: 3,
      num: '03',
      title: 'Hot Forging',
      category: 'forging',
      categoryLabel: 'Forging & Forming',
      tag: 'Heavy Chassis & Large Formats',
      badge: 'High-Tonnage Induction',
      desc: 'Induction-heated precision high-tonnage forging for heavy automotive chassis fasteners, large diameter flange bolts, heavy structural anchors, and specialized high-tensile components.',
      details: 'Induction Billet Heaters, Mechanical & Friction Drop Forging Presses, Flash Trimming Presses.',
      importance: 'Forms high-density large-diameter fasteners beyond typical cold-heading tonnage limits.',
    },
    {
      id: 4,
      num: '04',
      title: 'Warm Forging',
      category: 'forging',
      categoryLabel: 'Forging & Forming',
      tag: 'Complex Alloy Plasticity',
      badge: 'Controlled Thermal Flow',
      desc: 'Temperature-controlled forging between ambient and hot forging ranges, reducing forging tonnage while improving material plasticity, dimensional tolerances, and surface smoothness on tough alloy steels.',
      details: 'Atmosphere-controlled preheaters, progressive warm forming dies with thermal barrier tooling.',
      importance: 'Enables intricate geometric upsets on tough alloy steels with near-net-shape tolerances.',
    },
    {
      id: 5,
      num: '05',
      title: 'Flat Thread Rolling',
      category: 'thread',
      categoryLabel: 'Thread & Rolling',
      tag: 'High-Speed Reciprocal Rolling',
      badge: 'Work-Hardened Threads',
      desc: 'High-speed reciprocal flat die thread rolling producing uniform, burnished screw threads with unbroken grain flow lines, superior root radii, and significantly elevated fatigue life.',
      details: 'High-speed flat die thread rolling machines with laser pitch alignment and automatic bowl feed.',
      importance: 'Rolled threads are up to 30% stronger than cut threads due to continuous compressive grain flow.',
    },
    {
      id: 6,
      num: '06',
      title: 'Circular Thread Rolling',
      category: 'thread',
      categoryLabel: 'Thread & Rolling',
      tag: 'Heavy Diameter & Cylindrical Dies',
      badge: 'Zero Pitch Error',
      desc: 'Hydraulic 2-roll and 3-roll cylindrical die rolling for large-diameter studs, lead screws, precision tie-rods, and heavy machine threads with zero pitch error and mirror surface finish.',
      details: '2-Die and 3-Die Hydraulic Cylindrical Rollers with programmable feed rate and pressure controls.',
      importance: 'Provides ultra-precise pitch repeatability on large-diameter transmission and chassis studs.',
    },
    {
      id: 7,
      num: '07',
      title: 'Heat Treatment (Mesh Belt Furnaces)',
      category: 'heat',
      categoryLabel: 'Thermal & Heat Treatment',
      tag: 'Continuous SCADA Interlocked',
      badge: 'Grade 8.8, 10.9 & 12.9',
      desc: 'SCADA-interlocked continuous mesh-belt hardening and tempering furnaces under protective endothermic atmosphere to prevent decarburization, ensuring precise Grade 8.8, 10.9, and 12.9 mechanical properties.',
      details: 'Continuous mesh belt hardening furnace, oil quench tank, wash station, tempering furnace + SCADA.',
      importance: 'Locks in extreme tensile strength while preserving vital core impact toughness.',
    },
    {
      id: 8,
      num: '08',
      title: 'Acid Zinc Plating',
      category: 'plating',
      categoryLabel: 'Surface Treatments & Plating',
      tag: 'High-Brightness Trivalent',
      badge: 'Bright Lustrous Barrier',
      desc: 'Automated acid zinc electroplating delivering high-brightness decorative and protective zinc deposits with uniform thickness, excellent throwing power, and blue or yellow trivalent passivation.',
      details: 'Automated barrel & rack electroplating lines, ultrasonic cleaners, trivalent passivation baths.',
      importance: 'Delivers aesthetic brilliance and corrosion protection for general automotive and industrial hardware.',
    },
    {
      id: 9,
      num: '09',
      title: 'Alkaline Zinc Plating',
      category: 'plating',
      categoryLabel: 'Surface Treatments & Plating',
      tag: 'Exceptional Thickness Uniformity',
      badge: 'Cyanide-Free OEM Spec',
      desc: 'Cyanide-free alkaline zinc electroplating offering superior thickness distribution across deep recesses, complex geometries, and internal fastener bores for stringent automotive OEM specs.',
      details: 'PLC-controlled hoist transporters, alkaline zinc electrolyte tanks, continuous chemical dosers.',
      importance: 'Ensures even plating thickness from head to tip on threaded parts without edge build-up.',
    },
    {
      id: 10,
      num: '10',
      title: 'Zinc Nickel Plating (Zn-Ni)',
      category: 'plating',
      categoryLabel: 'Surface Treatments & Plating',
      tag: '1,500+ Hours Salt Spray NSS',
      badge: 'Under-the-Hood OEM Standard',
      desc: 'High-performance Zinc-Nickel alloy electroplating (12-15% Ni) providing extreme corrosion resistance (>1,500 hrs NSS) and high thermal resistance for under-the-hood automotive environments.',
      details: 'Automated multi-tank Zn-Ni line, continuous temperature/pH logging, passivation and nano-sealers.',
      importance: 'Premier automotive standard for extreme salt, engine heat, and galvanic corrosion resistance.',
    },
    {
      id: 11,
      num: '11',
      title: 'Zinc Phosphating',
      category: 'plating',
      categoryLabel: 'Surface Treatments & Plating',
      tag: 'Cold Forming & Oil Retention',
      badge: 'Micro-Crystalline Conversion',
      desc: 'Fine-crystal zinc phosphate conversion coating providing robust corrosion protection, excellent oil absorption for wear resistance, and reduced friction for automotive assembly torque tensioning.',
      details: 'Multi-stage immersion phosphating line, de-greasing baths, activator tanks, hot oil sealers.',
      importance: 'Provides tight torque-tension repeatability during automated vehicle assembly.',
    },
    {
      id: 12,
      num: '12',
      title: 'Manganese Phosphating',
      category: 'plating',
      categoryLabel: 'Surface Treatments & Plating',
      tag: 'Heavy Load Anti-Galling',
      badge: 'Extreme Pressure Lubrication',
      desc: 'Heavy manganese phosphate coating tailored for gears, engine fasteners, and sliding components to eliminate metal-to-metal galling, scuffing, and seizing under extreme contact pressures.',
      details: 'Hot manganese phosphate immersion tanks, ultrasonic rinses, heavy rust preventive oil dip.',
      importance: 'Prevents thread galling and seizing during high-torque power tool assembly.',
    },
    {
      id: 13,
      num: '13',
      title: 'Zinc Aluminium Flake Coating',
      category: 'plating',
      categoryLabel: 'Surface Treatments & Plating',
      tag: 'Non-Electrolytic Zero Hydrogen Embrittlement',
      badge: 'Geomet / Dacromet Process',
      desc: 'Dip-spin Geomet / Dacromet zinc-aluminium flake coating providing extreme anti-corrosion barrier with zero risk of hydrogen embrittlement for ultra-high-tensile Class 10.9 and 12.9 fasteners.',
      details: 'Automated dip-spin coating centrifuges, continuous convection curing ovens, topcoat applicators.',
      importance: 'Mandatory for Grade 10.9/12.9 critical safety fasteners where acid embrittlement is unacceptable.',
    },
    {
      id: 14,
      num: '14',
      title: 'Copper Tin Plating',
      category: 'plating',
      categoryLabel: 'Surface Treatments & Plating',
      tag: 'High Electrical Conductivity',
      badge: 'Solderable & Anti-Seize',
      desc: 'Specialized copper and tin electroplating for electrical grounding fasteners, battery terminals, high-conductivity electrical connections, and anti-seize high-temperature applications.',
      details: 'Electrolytic copper strike and matte/bright tin baths with micro-thickness controls.',
      importance: 'Low electrical resistance and high solderability for EV battery packs and wiring harness grounds.',
    },
    {
      id: 15,
      num: '15',
      title: 'Centerless Grinding',
      category: 'machining',
      categoryLabel: 'Precision Secondary & Machining',
      tag: 'Sub-Micron Dimensional Precision',
      badge: '±5 µm Tolerance',
      desc: 'High-precision in-feed and thru-feed centerless grinding achieving mirror shank surface finish and tight cylindrical tolerances down to ±5 microns for dowel pins and valve components.',
      details: 'High-precision thru-feed and in-feed centerless grinding machines with diamond dressing units.',
      importance: 'Produces mirror-smooth shanks required for precision locating pins and hydraulic valve studs.',
    },
    {
      id: 16,
      num: '16',
      title: 'Auto Grooving',
      category: 'machining',
      categoryLabel: 'Precision Secondary & Machining',
      tag: 'Circlip & O-Ring Retention',
      badge: 'High-Speed Precision Turning',
      desc: 'High-speed automatic grooving stations cutting precision snap-ring grooves, circlip recesses, and seal seating channels into fastener shanks with exact depth control.',
      details: 'Multi-slide automatic grooving machines with optical position sensors and carbide cutters.',
      importance: 'Ensures snap rings and rubber seals seat securely without slippage or shearing.',
    },
    {
      id: 17,
      num: '17',
      title: 'Auto Drilling',
      category: 'machining',
      categoryLabel: 'Precision Secondary & Machining',
      tag: 'Safety Lock-Wire & Cotter Holes',
      badge: 'Burr-Free Cross Drilling',
      desc: 'Multi-spindle automated drilling machines performing precision cross-drilling, axial holes, and lock-wire apertures across bolt tips and hex heads with zero burr formation.',
      details: 'Rotary transfer auto-drilling centers with high-pressure coolant and drill breakage detection.',
      importance: 'Crucial for aviation and racing safety lock-wiring and automotive cotter pin assembly.',
    },
    {
      id: 18,
      num: '18',
      title: 'CNC (Computer Numerical Control)',
      category: 'machining',
      categoryLabel: 'Precision Secondary & Machining',
      tag: 'Custom OEM Contour Turning',
      badge: 'Multi-Axis Precision',
      desc: 'Multi-axis CNC lathes and turning centers machining complex custom geometry, eccentric contours, precision steps, and low-volume aerospace / defense prototype fasteners.',
      details: 'Multi-axis CNC turning centers, live tooling, Renishaw probe metrology, CAD/CAM CAMWorks.',
      importance: 'Enables rapid turnaround of complex bespoke OEM designs directly from 3D CAD files.',
    },
    {
      id: 19,
      num: '19',
      title: 'Optical Sorting',
      category: 'testing',
      categoryLabel: 'Material & Testing',
      tag: '100% 360° Laser & Glass Disc',
      badge: 'Zero Defect <5 PPM',
      desc: 'High-speed glass disc optical sorting machines using high-resolution 360° cameras and lasers to verify 100% head dimensions, thread pitch, shank straightness, and surface defects at up to 600 PPM.',
      details: 'Multi-camera glass disc optical sorters, eddy current integration, pneumatic blow-off gates.',
      importance: 'Guarantees zero defective or mixed parts reach customer automotive robotic assembly lines.',
    },
    {
      id: 20,
      num: '20',
      title: 'Micro Encapsulation (MEC)',
      category: 'plating',
      categoryLabel: 'Surface Treatments & Plating',
      tag: 'Pre-Applied Threadlocker Adhesives',
      badge: 'Loctite / 3M MEC Process',
      desc: 'Automated pre-application of microencapsulated adhesives (Loctite / 3M MEC) on bolt threads that activate upon assembly to provide vibration-proof locking and pressure tight sealing.',
      details: 'Continuous 360° adhesive coating machines with convection drying and visual inspection.',
      importance: 'Eliminates liquid threadlocker mess on customer assembly lines; locks threads permanently.',
    },
    {
      id: 21,
      num: '21',
      title: 'Serration Rolling',
      category: 'thread',
      categoryLabel: 'Thread & Rolling',
      tag: 'Under-Head Anti-Rotation Teeth',
      badge: 'Vibration-Proof Grip',
      desc: 'Dedicated rotary and flat rolling of under-head locking serrations, axial splines, and knurls that bite into mating surfaces to prevent loosening under dynamic vibrations.',
      details: 'Specialized profile serration dies, hydraulic rolling machines with tooth depth monitors.',
      importance: 'Locks fastener into mating chassis plates, preventing back-off without separate washers.',
    },
    {
      id: 22,
      num: '22',
      title: 'Combi / Sem Screw Rolling',
      category: 'thread',
      categoryLabel: 'Thread & Rolling',
      tag: 'Captive Pre-Assembled Washers',
      badge: 'Speed Assembly Design',
      desc: 'High-speed automated assembly units loading captive plain, spring, or Belleville washers onto blanks prior to thread rolling, permanently retaining the washer on the screw shank.',
      details: 'Dual-feed hopper assembly machines feeding washers directly onto headed blanks before rolling.',
      importance: 'Prevents dropped or missing washers on vehicle assembly lines, slashing assembly time.',
    },
    {
      id: 23,
      num: '23',
      title: 'Special Pointing',
      category: 'machining',
      categoryLabel: 'Precision Secondary & Machining',
      tag: 'Robotic Assembly Pilot Lead-In',
      badge: 'Dog, Cone & Pilot Tips',
      desc: 'High-speed pointing and chamfering machines carving dog points, cone points, pilot tips, and cup points for effortless guidance during high-speed automated factory robot assembly.',
      details: 'Automatic pointing lathes with carbide form tools and continuous pneumatic part indexing.',
      importance: 'Prevents cross-threading when automated robotic nut-runners drive bolts into tapped holes.',
    },
    {
      id: 24,
      num: '24',
      title: 'Bending Machines',
      category: 'machining',
      categoryLabel: 'Precision Secondary & Machining',
      tag: 'U-Bolts, J-Bolts & Suspension Hooks',
      badge: 'Hydraulic & CNC Forming',
      desc: 'Heavy hydraulic and CNC wire bending machines forming precise U-bolts, eye bolts, J-bolts, and custom chassis bracket hangers with repeatable angles and zero wall thinning.',
      details: 'CNC 3D wire benders, heavy hydraulic mandrel bending presses with angle compensation.',
      importance: 'Maintains uniform tensile cross-section across bend radii for heavy truck suspension U-bolts.',
    },
    {
      id: 25,
      num: '25',
      title: 'Presses (Stamping & Forming)',
      category: 'forging',
      categoryLabel: 'Forging & Forming',
      tag: 'Heavy Precision Stamping',
      badge: 'Washers, Clips & Brackets',
      desc: 'High-tonnage mechanical and hydraulic stamping presses manufacturing precision washers, lock clips, automotive stamped brackets, retaining plates, and Belleville disc springs.',
      details: 'Progressive stamping presses (30T to 250T), de-coilers, straighteners, and carbide tooling dies.',
      importance: 'Produces high-precision spring washers and stamped automotive bracketry under one roof.',
    },
  ];

  /* ─── DATA: 10 SECONDARY OPERATIONS (FOR SMOOTH AUTO SLIDER) ─── */
  const secondaryOperations = [
    { num: '01', title: 'Automatic Tapping', desc: 'Fast, automated tapping to create smooth, clean internal threads inside flange and weld nuts without metal burrs.' },
    { num: '02', title: 'Slot Milling', desc: 'Precision carving of screwdriver slots and castle nut slots so drivers and safety pins fit like a glove.' },
    { num: '03', title: 'Centerless Grinding', desc: 'Micro-grinding the outer bolt shank until it is mirror-smooth and accurate down to a fraction of a millimeter.' },
    { num: '04', title: 'Precision Grooving', desc: 'Cutting smooth grooves into bolts to hold rubber O-rings or snap-rings firmly in place.' },
    { num: '05', title: 'Special Pointing', desc: 'Rounding or chamfering the tip of the bolt so robotic factory arms can slide bolts into screw holes effortlessly.' },
    { num: '06', title: 'CNC Machining', desc: 'High-precision computerized turning and contouring for unique custom fasteners made to customer blueprints.' },
    { num: '07', title: 'Bolt Head Trimming', desc: 'Shaping crisp hexagonal, square, or special multi-lobe head corners that spanners and sockets grip easily.' },
    { num: '08', title: 'SEMS Washer Assembly', desc: 'Rolling captive washers permanently onto screw shanks so washers can spin freely but never fall off.' },
    { num: '09', title: 'Crimping of Nuts', desc: 'Controlled squeezing of all-metal lock nuts to create a vibration-proof grip that never loosens.' },
    { num: '10', title: 'Precision Cross-Drilling', desc: 'Drilling clean tiny holes across bolt tips for safety cotter pins or safety lock-wires.' },
  ];

  /* ─── CLIENT LOGOS (38 OEM & TIER-1 CLIENTS) ─── */
  const customersTrack1 = [
    { name: 'Tata Motors', logo: '/logo/tata-motors-logo.jpeg' },
    { name: 'Force Motors', logo: '/logo/force-motor.jpeg' },
    { name: 'Cummins', logo: '/logo/cummins.jpeg' },
    { name: 'FIAT', logo: '/logo/fiat.jpeg' },
    { name: 'VinFast', logo: '/logo/vinfast.jpeg' },
    { name: 'SANY', logo: '/logo/sany.jpeg' },
    { name: 'VST Tillers Tractors', logo: '/logo/vst.jpeg' },
    { name: 'JBM Group', logo: '/logo/jbm.jpeg' },
    { name: 'TMTL - Eicher Engines', logo: '/logo/tmtl.jpeg' },
    { name: 'Sharda Motor', logo: '/logo/sharda.jpeg' },
    { name: 'Automann USA', logo: '/logo/automann.jpeg' },
    { name: 'Craftsman Automation', logo: '/logo/craftman.jpeg' },
    { name: 'Tata International', logo: '/logo/tata-international.jpeg' },
    { name: 'FRAP Italy', logo: '/logo/frap-italy.jpeg' },
    { name: 'Gestamp', logo: '/logo/genstamp.jpeg' },
    { name: 'CIE Automotive', logo: '/logo/cie.jpeg' },
    { name: 'Lear Corporation', logo: '/logo/lear.jpeg' },
    { name: 'Parker Hannifin', logo: '/logo/parker.jpeg' },
    { name: 'Kinetic Engineering', logo: '/logo/kinetic.jpeg' },
  ];

  const customersTrack2 = [
    { name: 'Mitsubishi Electric', logo: '/logo/mitsubhi.jpeg' },
    { name: 'IAC Group', logo: '/logo/iac.jpeg' },
    { name: 'RSB Transmissions', logo: '/logo/rsb.jpeg' },
    { name: 'Panse Group', logo: '/logo/panse.jpeg' },
    { name: 'Mungi Engineers', logo: '/logo/mungi.jpeg' },
    { name: 'Munjal Showa', logo: '/logo/munjal.jpeg' },
    { name: 'Kay Jay Forgings', logo: '/logo/kay-jay.jpeg' },
    { name: 'Takshi Auto', logo: '/logo/takshi.jpeg' },
    { name: 'Autoline Industries', logo: '/logo/autoine.jpeg' },
    { name: 'Rucha Group', logo: '/logo/ruchaa.jpeg' },
    { name: 'Mahabal Auto', logo: '/logo/mahabal.jpeg' },
    { name: 'Pooja Castings', logo: '/logo/pooja-casting.jpeg' },
    { name: 'Rollon Hydraulics', logo: '/logo/rollon.jpeg' },
    { name: 'Victoria', logo: '/logo/victoria.jpeg' },
    { name: 'Gloria', logo: '/logo/gloria.jpeg' },
    { name: 'MSL Driveline', logo: '/logo/msl.jpeg' },
    { name: 'ALF Engineering', logo: '/logo/alf.jpeg' },
    { name: 'Aakar Foundry', logo: '/logo/aakarr.jpeg' },
    { name: 'Belrise Industries', logo: '/logo/OIP (3).jpeg' },
  ];

  /* ─── 12 PLANT AREA & FACILITY FLIP CARDS ─── */
  const facilityCards = [
    {
      id: 1,
      category: 'plant',
      areaTag: 'Satpur MIDC Nashik & Pantnagar · 5 Plants + Mega Plant',
      title: '2,20,000 SQ.M. Manufacturing Footprint',
      metric: '5 Plants + Mega Expansion',
      img: '/images/pptx/slide-media-54.jpeg',
      shortDesc: 'Hindustan Fasteners & Precision Forging operations spread across 2,20,000 sq. mtr. across Nashik, Pantnagar, and upcoming Sambhajinagar Mega Plant.',
      backTitle: 'Integrated Fastener Manufacturing Ecosystem',
      backDepartment: 'Plant 1, 2, 3 & 4 · Satpur MIDC, Nashik',
      equipment: 'Cold Forging Bay, Tooling Room, SCADA Furnaces, Plating Lines, Quality Labs',
      explanation: 'Spread across 2,20,000 sq. mtr., our 5 fully integrated manufacturing plants in Satpur MIDC Nashik and Pantnagar Uttarakhand (along with our upcoming Chhatrapati Sambhajinagar Mega Plant) bring every critical fastener operation under unified control.',
      qualityControl: 'Single management control across wire drawing, cold heading, heat treatment, surface finishing, and automated optical sorting.',
      capacity: '54,000 MT per annum aggregate output capacity.',
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
      qualityControl: 'Digitized contract review and feasibility audit prior to die tooling manufacturing.',
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
      qualityControl: 'In-line acoustic and optical wire-diameter sensors to prevent under-filled or sheared heads.',
      capacity: 'Over 3,00,000+ fastener, nut, washer & component varieties manufactured.',
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
      qualityControl: 'Hourly statistical process control (SPC) sampling with digital micrometers and go/no-go gauges.',
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
      qualityControl: 'Integrated tool load monitoring stops machine instantly if forging tonnage exceeds safe limits.',
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
      qualityControl: 'Precision orientation fixtures ensure symmetric slotting and zero misaligned tapping.',
      capacity: 'Precision tolerances down to ±5 µm.',
    },
    {
      id: 7,
      category: 'heat',
      areaTag: 'SCADA Heat Treatment',
      title: 'Continuous Atmosphere SCADA Furnaces',
      metric: 'SCADA Automated Controls',
      img: '/images/pptx/slide-media-37.jpeg',
      shortDesc: 'Continuous mesh-belt hardening and tempering furnace line supervised by SCADA software with automated interlocking.',
      backTitle: 'Automated Hardening & Tempering',
      backDepartment: 'Heat Treatment Facility',
      equipment: 'SCADA Mesh-Belt Continuous Furnaces, Protective Atmosphere Generators, Oil Quench',
      explanation: 'Fasteners undergo continuous controlled hardening and tempering under an endothermic protective atmosphere to eliminate surface decarburization. SCADA monitors zone temperatures, atmosphere carbon potential, quench oil temperature, and conveyor speeds in real time.',
      qualityControl: 'SCADA automated interlocking halts feed if temperature or carbon potential drifts by ±2°C.',
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
      qualityControl: 'Automated chemistry dosers maintain bath balance; continuous bath temperature and pH logging.',
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
      qualityControl: 'Dual optical verify gates prevent rejected bolts from bouncing back into acceptable bins.',
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
      qualityControl: 'Barcode-driven dispatch verification matches customer purchase orders before gate exit.',
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
      qualityControl: 'Layered audit protocol requires senior metallurgical sign-off before raw material release.',
      capacity: '<5 PPM target with zero-defect philosophy.',
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
      explanation: 'Our manufacturing plants hold formal IATF 16949:2016, ISO 45001, BIS and ISO 9001 certifications issued by BSI for "The Manufacture of High Tensile Fasteners and Precision Forged & Stamped Components". Every process from tool design to layered audit conforms to global automotive OEM Tier-1 criteria.',
      qualityControl: 'Annual surveillance audits by BSI ensure continuous procedural rigor.',
      capacity: 'Scope covers cold and hot formed high tensile fasteners and components.',
    },
  ];

  const filteredGalleryCards = galleryCategory === 'all'
    ? facilityCards
    : facilityCards.filter((c) => c.category === galleryCategory);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (!galleryScrollRef.current) return;
    const container = galleryScrollRef.current;
    const cardWidth = container.querySelector<HTMLElement>('.gallery-card-item')?.offsetWidth || 360;
    const gap = 20;
    const scrollAmount = cardWidth + gap;
    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToGalleryIndex = (idx: number) => {
    if (!galleryScrollRef.current) return;
    const container = galleryScrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>('.gallery-card-item');
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveGalleryIndex(idx);
    }
  };

  const handleGalleryScroll = () => {
    if (!galleryScrollRef.current) return;
    const container = galleryScrollRef.current;
    const cards = Array.from(container.querySelectorAll<HTMLElement>('.gallery-card-item'));
    if (!cards.length) return;
    const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const diff = Math.abs(containerCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    setActiveGalleryIndex(closestIndex);
  };

  useEffect(() => {
    if (!isGalleryAutoPlaying) return;
    const timer = setInterval(() => {
      if (!galleryScrollRef.current) return;
      const total = filteredGalleryCards.length;
      if (total <= 1) return;
      const nextIdx = (activeGalleryIndex + 1) % total;
      scrollToGalleryIndex(nextIdx);
    }, 4500);
    return () => clearInterval(timer);
  }, [isGalleryAutoPlaying, activeGalleryIndex, filteredGalleryCards.length]);

  useEffect(() => {
    if (galleryScrollRef.current) {
      galleryScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
    setActiveGalleryIndex(0);
  }, [galleryCategory]);

  /* ─── FILTER CATALOG ITEMS ─── */
  const filteredCatalog = catalogData.filter((item: any) => {
    const matchesCat =
      activeCategory === 'all' ||
      (activeCategory === 'bolts' && item.category === 'Bolts & Screws') ||
      (activeCategory === 'specialty' && item.category === 'Specialty Fasteners') ||
      (activeCategory === 'screws' && item.category === 'Specialized Screws') ||
      (activeCategory === 'advanced' && item.category === 'Advanced Drive Systems') ||
      (activeCategory === 'nuts' && item.category === 'Nuts & Lock Nuts') ||
      (activeCategory === 'washers' && item.category === 'Washers & Components') ||
      (activeCategory === 'pins' && (item.category === 'Pins & Special Bolts' || item.category === 'Studs & Rods'));

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.use.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  /* ─── FILTER 25 MANUFACTURING PROCESSES ─── */
  const filteredProcesses = manufacturingProcesses.filter((proc) => {
    const matchesCategory =
      processCategory === 'all' ||
      (processCategory === 'forging' && proc.category === 'forging') ||
      (processCategory === 'thread' && proc.category === 'thread') ||
      (processCategory === 'heat_plating' && (proc.category === 'heat' || proc.category === 'plating')) ||
      (processCategory === 'machining' && proc.category === 'machining') ||
      (processCategory === 'testing' && proc.category === 'testing');

    const matchesSearch =
      processSearchQuery.trim() === '' ||
      proc.title.toLowerCase().includes(processSearchQuery.toLowerCase()) ||
      proc.desc.toLowerCase().includes(processSearchQuery.toLowerCase()) ||
      proc.details.toLowerCase().includes(processSearchQuery.toLowerCase()) ||
      proc.tag.toLowerCase().includes(processSearchQuery.toLowerCase()) ||
      proc.badge.toLowerCase().includes(processSearchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

    /* ─────────────────────────── RENDER DEDICATED CONTACT US & 3D MAP VIEW ─────────────────────────── */
  if (currentView === 'contact') {
    return (
      <div className="min-h-screen bg-[#FAFAF9] text-gray-900 font-sans">
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-950 text-white font-mono text-sm">Loading 3D Map &amp; Contact Desk...</div>}>
          <ContactUsPage
            onBackToHome={openHomePage}
            onOpenCatalog={openCatalogPage}
          />
        </React.Suspense>
        <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} product={quoteProduct} />
        <ProductDetailModal
          product={selectedCatalogItem}
          onClose={() => setSelectedCatalogItem(null)}
          onOpenQuote={(name) => openQuote(name)}
        />
        <ProcessDetailModal
          process={selectedProcess}
          onClose={() => setSelectedProcess(null)}
          onOpenQuote={(name) => openQuote(name)}
        />
      </div>
    );
  }

  /* ─────────────────────────── RENDER DEDICATED CATALOGUE VIEW ─────────────────────────── */
  if (currentView === 'catalog') {
    return (
      <div className="min-h-screen bg-[#FAFAF9] text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
        <DedicatedCatalogPage
          onBackToHome={openHomePage}
          onOpenQuote={openQuote}
          onSelectProduct={(item) => setSelectedCatalogItem(item)}
        />
        <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} product={quoteProduct} />
        <ProductDetailModal
          product={selectedCatalogItem}
          onClose={() => setSelectedCatalogItem(null)}
          onOpenQuote={(name) => openQuote(name)}
        />
        <ProcessDetailModal
          process={selectedProcess}
          onClose={() => setSelectedProcess(null)}
          onOpenQuote={(name) => openQuote(name)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-gray-900 selection:bg-blue-600 selection:text-white overflow-x-hidden">

      {/* ════════════ HEADER / NAVIGATION ════════════ */}
      <header className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 py-3 shadow-md' : 'bg-white/80 backdrop-blur-md py-4 border-b border-gray-200/80'
      }`}>
        <div className="container-custom flex items-center justify-between">
          {/* Both Logos: Hindustan Fasteners & Precision Forging */}
          <a href="#" onClick={(e) => { e.preventDefault(); openHomePage(); }} className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
            <div className="h-10 sm:h-12 px-2.5 sm:px-3 py-1 bg-white rounded-xl flex items-center gap-2 sm:gap-2.5 shadow-sm border border-gray-200">
              <img decoding="async"
                src="/logo/HF LOGO (1).png"
                alt="Hindustan Fasteners"
                className="h-6 sm:h-8 w-auto object-contain"
              />
              <div className="h-5 sm:h-6 w-[1.5px] bg-gray-300" />
              <img decoding="async"
                src="/logo/PFS logo.png"
                alt="Precision Forging & Stamping"
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-black text-[13px] sm:text-[15px] lg:text-[16px] tracking-wide text-gray-950 group-hover:text-blue-600 transition leading-tight uppercase">
                Hindustan Fasteners
              </span>
              <span className="font-display font-black text-[13px] sm:text-[15px] lg:text-[16px] tracking-wide text-gray-950 group-hover:text-blue-600 transition leading-tight uppercase">
                Precision Forging &amp; Stamping
              </span>
              <span className="text-[9.5px] sm:text-[11px] lg:text-[11.5px] font-sans text-gray-500 font-medium italic leading-tight mt-0.5">
                Indian at heart with world class part
              </span>
            </div>
          </a>

          {/* Nav Links — Sequence: About -> 25 Processes -> Process Pipeline -> Quality/Photos -> Catalogue -> Contact Us */}
          <nav className="hidden md:flex items-center gap-5 text-[13px] font-semibold text-gray-600">
            <a href="#overview" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#processes" className="hover:text-blue-600 transition-colors font-bold text-blue-900 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>Processes (25)</span>
            </a>
            <a href="#pipeline" className="hover:text-blue-600 transition-colors">Pipeline</a>
            <a href="#gallery" className="hover:text-blue-600 transition-colors">Quality / Photos</a>
            <button
              onClick={openCatalogPage}
              className="hover:text-blue-600 transition-colors text-gray-800 font-bold"
            >
              Catalogue
            </button>
            <button
              onClick={openContactPage}
              className="hover:text-blue-600 transition-colors text-blue-900 font-bold"
            >
              Contact Us &amp; 3D Map
            </button>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => openQuote()}
              className="btn-nav-quote text-xs px-4 py-2 font-extrabold shadow-md "
            >
              Get Quote →
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-950 hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown — Sequence: About -> 25 Processes -> Process Pipeline -> Quality/Photos -> Catalogue -> Contact Us */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-5 py-4 space-y-3.5 shadow-xl animate-fadeIn">
            <a href="#overview" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">About Us</a>
            <a href="#processes" onClick={() => setMenuOpen(false)} className="block text-blue-900 font-bold text-sm flex items-center justify-between">
              <span>25 Manufacturing Processes</span>
              <span className="text-[10px] bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-mono font-bold">25 Suite</span>
            </a>
            <a href="#pipeline" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">10-Stage Pipeline</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">Quality / Photos</a>
            <button
              onClick={() => { setMenuOpen(false); openCatalogPage(); }}
              className="block w-full text-left text-gray-900 font-bold text-sm"
            >
              Product Catalogue →
            </button>
            <button
              onClick={() => { setMenuOpen(false); openContactPage(); }}
              className="block w-full text-left text-blue-600 font-bold text-sm"
            >
              Contact Us &amp; 3D Map →
            </button>
            <div className="pt-2">
              <button onClick={() => { setMenuOpen(false); openQuote(); }} className="w-full py-2.5 rounded-xl btn-nav-quote text-xs font-extrabold ">
                Get Price Quote →
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ════════════ HERO SECTION (DARK NAVY BLUE & TECHNICAL HIGH-CONTRAST) ════════════ */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050B1A] text-white border-b border-slate-800">
        {/* Ambient Lighting & Technical Blueprint Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,0.20),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.12),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none opacity-60" />

        {/* Floating decorations removed per user request */}

        {/* High-Resolution Automotive Exploded Precision Fasteners Photography Background */}
        <div className="absolute inset-0">
          <img decoding="async"
            src="/images/hero-car-exploded.jpg"
            alt="Automotive exploded view showing precision fasteners and chassis connections"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A] via-[#050B1A]/85 sm:via-[#050B1A]/60 to-[#050B1A]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-transparent to-[#050B1A]/40" />
        </div>

        <div className="container-custom relative z-10 py-14 sm:py-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-8 items-center">
            {/* 1. Left Side: Headline, Paragraph, Actions (Col 1-5) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Reveal delay={50}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-4 w-fit">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Indian at heart with world class part
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-black font-display tracking-tight leading-[1.15] mb-3 text-white">
                  STRONG FASTENERS.<br />
                  <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                    MADE FOR REAL-WORLD MACHINES.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed mb-5 font-normal">
                  Manufacturing over <strong>3,00,000+ varieties of high-strength bolts, nuts, screws, washers, and custom forged parts</strong>. Across 5 modern manufacturing plants (3 in Satpur MIDC Nashik, 2 in Pantnagar Uttarakhand) plus our upcoming Mega Plant in Chhatrapati Sambhajinagar, we produce 54,000 tonnes of zero-defect fasteners every year for India’s top vehicle OEMs and global exports.
                </p>
              </Reveal>

              <Reveal delay={250}>
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 mb-4">
                  <button
                    onClick={openCatalogPage}
                    className="btn-primary text-xs font-bold px-6 py-3 shadow-xl w-full sm:w-auto text-center"
                  >
                    EXPLORE ALL BOLTS &amp; NUTS ({catalogData.length}) →
                  </button>
                  <button
                    onClick={openContactPage}
                    className="px-5 py-3 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-white text-xs font-bold border border-blue-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
                  >
                    3D Plant Map &amp; Contact
                  </button>
                  <button
                    onClick={() => openQuote()}
                    className="px-5 py-3 rounded-xl bg-slate-900/90 text-white hover:bg-slate-800 text-xs font-bold border border-white/20 shadow-md transition hover:-translate-y-0.5 w-full sm:w-auto text-center"
                  >
                    Request Price Quote
                  </button>
                </div>
              </Reveal>
            </div>

            {/* 2. Right Side: Large Prominent Video Showcase (Col 7-12) */}
            <div className="lg:col-span-7 my-2 lg:my-0 self-center">
              <Reveal delay={150}>
                <div className="w-full max-w-3xl mx-auto">
                  <HeroVideoPlayer />
                </div>
              </Reveal>
            </div>

            {/* 3. High-Contrast Key Facts & Certifications Boxes (Col 1-12) */}
            <div className="lg:col-span-12 pt-6 sm:pt-8 border-t border-white/15 mt-6 lg:mt-10">
              <Reveal delay={350}>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-mono">
                  {/* Box 1: Annual Capacity */}
                  <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:border-blue-500/50 hover:bg-white/10 transition-all">
                    <div className="text-lg sm:text-2xl font-black font-display text-cyan-300">
                      <AnimatedCounter target={54000} suffix=" MT" />
                    </div>
                    <div className="text-[10px] text-slate-300 font-bold tracking-wider mt-0.5">Annual Capacity</div>
                  </div>

                  {/* Box 2: Total Footprint */}
                  <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:border-blue-500/50 hover:bg-white/10 transition-all">
                    <div className="text-lg sm:text-2xl font-black font-display text-white">
                      <AnimatedCounter target={220000} suffix=" m²" />
                    </div>
                    <div className="text-[10px] text-slate-300 font-bold tracking-wider mt-0.5">5 Plants + Mega Plant</div>
                  </div>

                  {/* Box 3: Variety */}
                  <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:border-blue-500/50 hover:bg-white/10 transition-all">
                    <div className="text-lg sm:text-2xl font-black font-display text-cyan-300">
                      <AnimatedCounter target={300000} suffix="+" />
                    </div>
                    <div className="text-[10px] text-slate-300 font-bold tracking-wider mt-0.5">Part Varieties</div>
                  </div>

                  {/* Box 4: ISO 45001 */}
                  <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:border-emerald-500/50 hover:bg-white/10 transition-all">
                    <div className="text-sm sm:text-base font-black font-display text-emerald-300">ISO 45001</div>
                    <div className="text-[10px] text-emerald-400 tracking-wider mt-0.5 font-bold">Health &amp; Safety Certified</div>
                  </div>

                  {/* Box 5: BIS Certified */}
                  <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:border-amber-500/50 hover:bg-white/10 transition-all">
                    <div className="text-sm sm:text-base font-black font-display text-amber-300">BIS CERTIFIED</div>
                    <div className="text-[10px] text-amber-400 tracking-wider mt-0.5 font-bold">Indian Standards Approved</div>
                  </div>

                  {/* Box 6: IATF 16949 */}
                  <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:border-blue-500/50 hover:bg-white/10 transition-all">
                    <div className="text-sm sm:text-base font-black font-display text-white">IATF 16949</div>
                    <div className="text-[10px] text-blue-400 tracking-wider mt-0.5 font-bold">BSI UK Certified</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 3D COIN FLIP & CLIENT NETWORK (DARK NAVY BLUE THEME EXACTLY AS REQUESTED) ════════════ */}

      <section id="customers" className="py-14 sm:py-20 bg-slate-950 text-white overflow-hidden relative border-y border-slate-800">
        {/* Subtle Ambient Lighting Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Bolt & Nut SVGs & Floating Accents in Precision Chrome Stainless Silver */}
        <WatermarkBolt className="left-1/2 -top-16 -translate-x-1/2 opacity-10" size={460} rotation={-15} variant="silver" />
        <div className="absolute top-1/4 left-10 pointer-events-none animate-float-3 hidden lg:block z-10">
          <BoltSvg size={95} opacity={0.8} rotation={12} variant="silver" />
        </div>
        <div className="absolute bottom-16 right-12 pointer-events-none animate-float-1 hidden lg:block z-10">
          <NutSvg size={105} opacity={0.8} variant="silver" />
        </div>

        <div className="container-custom mb-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-mono font-bold tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-blue-400" /> ESTEEMED CUSTOMER NETWORK
          </div>

          {/* 3D COIN FLIP BADGE */}
          <CoinFlipBadge />

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mt-4">
            TRUSTED BY INDIA'S &amp; GLOBAL LEADING OEMS
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2 font-medium">
            Direct Tier-1 Supplier to Major Automotive, Tractor, Defense, Engine, and Industrial Manufacturers.
          </p>
        </div>

        {/* Track 1: Left to Right Marquee */}
        <div className="relative w-full overflow-hidden py-3">
          <div className="animate-marquee-ltr gap-5 flex items-center">
            {[...customersTrack1, ...customersTrack1, ...customersTrack1].map((client, idx) => (
              <div
                key={`t1-${idx}`}
                className="w-40 sm:w-48 h-20 sm:h-24 p-3 sm:p-4 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-md hover:shadow-xl hover:shadow-cyan-500/20 border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 hover:scale-105 group cursor-pointer"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Right to Left Marquee */}
        <div className="relative w-full overflow-hidden py-3 mt-3">
          <div className="animate-marquee-rtl gap-5 flex items-center">
            {[...customersTrack2, ...customersTrack2, ...customersTrack2].map((client, idx) => (
              <div
                key={`t2-${idx}`}
                className="w-40 sm:w-48 h-20 sm:h-24 p-3 sm:p-4 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-md hover:shadow-xl hover:shadow-cyan-500/20 border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 hover:scale-105 group cursor-pointer"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <span className="text-[11px] font-mono text-gray-500 tracking-widest">
            AUTOMATIC CONTINUOUS OEM LOGO STREAM · 38+ TIER-1 GLOBAL CLIENTS
          </span>
        </div>
      </section>

      {/* ════════════ 10-STAGE VERTICAL MANUFACTURING PIPELINE ════════════ */}
      <section id="pipeline" className="py-14 sm:py-24 bg-[#FAFAF9] border-t border-gray-200 relative overflow-hidden">
        {/* Ambient background SVGs & Watermarks */}
        <WatermarkNut className="-right-20 top-12" size={460} />
        <WatermarkBolt className="-left-24 bottom-12" size={440} rotation={-18} />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold tracking-wider mb-2 sm:mb-3 shadow-xs">
                <Cog className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '10s' }} />
                100% In-House Continuous Process
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-gray-950 mb-2 sm:mb-3">
                10-STAGE MANUFACTURING PIPELINE
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto px-4">
                Click or swipe any stage below to inspect process details and quality gates.
              </p>
            </Reveal>
          </div>

          {/* Desktop & Tablet Stage Buttons Bar */}
          <div className="hidden sm:grid grid-cols-5 lg:grid-cols-10 gap-2 mt-8 mb-6">
            {presentationStages.map((st, idx) => {
              const isActive = idx === presentationStage;
              const isPassed = idx < presentationStage;
              return (
                <button
                  key={st.buttonCode}
                  onClick={() => goToStage(idx)}
                  className={`p-2 rounded-xl font-mono text-center transition-all duration-300 flex flex-col items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-400/40 scale-105 font-bold'
                      : isPassed
                      ? 'bg-emerald-50 text-emerald-950 border-emerald-300 font-semibold'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <span className={`text-[10px] font-bold block ${isActive ? 'text-blue-100' : isPassed ? 'text-emerald-700' : 'text-gray-400'}`}>
                    Stage {st.num}
                  </span>
                  <span className="text-[11px] font-bold font-display line-clamp-1 my-0.5">
                    {st.shortName}
                  </span>
                  <span className={`text-[9px] font-mono px-1 py-0.5 rounded font-bold ${
                    isActive ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {st.buttonCode}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Horizontal Scrollable Stage Bar */}
          <div className="flex sm:hidden items-center gap-2 overflow-x-auto no-scrollbar py-2 mb-4 px-1" style={{ WebkitOverflowScrolling: 'touch' }}>
            {presentationStages.map((st, idx) => {
              const isActive = idx === presentationStage;
              const isPassed = idx < presentationStage;
              return (
                <button
                  key={`mob-stage-${st.buttonCode}`}
                  id={`mob-pill-${idx}`}
                  onClick={() => goToStage(idx)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-1.5 border cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-300'
                      : isPassed
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                      : 'bg-white text-gray-700 border-gray-200'
                  }`}
                >
                  <span className="text-[10px] opacity-80">#{st.num}</span>
                  <span>{st.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── MOBILE DEDICATED ACTIVE STAGE CARD (EXCLUSIVELY FOR MOBILE VIEW — NO CLIPPING, ZERO OVERFLOW) ─── */}
        <div className="block sm:hidden container-custom">
          {(() => {
            const st = presentationStages[presentationStage];
            return (
              <div className="rounded-2xl bg-white border-2 border-blue-600 shadow-xl p-3.5 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
                <div>
                  {/* Top Header Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-mono font-black shadow-xs">
                        Stage {st.num} of 10
                      </span>
                      <span className="text-[10px] font-mono font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                        {st.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">
                      ID: <strong className="text-gray-900">{st.buttonCode}</strong>
                    </span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-base font-black font-display tracking-tight text-gray-950 mb-2">
                    {st.stageTitle}
                  </h3>

                  {/* Metric Banner */}
                  <div className="p-2 rounded-lg bg-blue-50/80 border border-blue-200 text-xs font-semibold text-blue-950 font-mono mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    <span className="leading-snug">{st.metric}</span>
                  </div>

                  {/* Main Section: Concise Explanation + Quality Gate */}
                  <div className="space-y-2 mb-3">
                    {/* Process Explanation */}
                    <div className="p-2.5 rounded-xl bg-[#FAFAF9] border border-gray-200 text-xs text-gray-800 leading-snug">
                      <span className="text-[10px] font-mono text-blue-900 font-bold block mb-0.5">
                        Process Explanation:
                      </span>
                      <p className="text-gray-700 font-normal text-xs">{st.simpleExpl}</p>
                    </div>

                    {/* Quality Gate */}
                    <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span><strong className="text-emerald-900">Quality Gate:</strong> {st.whyItMatters}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Bottom Controls Ribbon */}
                <div className="pt-2 border-t border-gray-200 flex flex-col gap-2">
                  {/* 10-Dot Progress Indicator */}
                  <div className="flex items-center justify-center gap-1.5 py-0.5">
                    {presentationStages.map((_, dotIdx) => (
                      <button
                        key={`mob-active-dot-${dotIdx}`}
                        onClick={() => goToStage(dotIdx)}
                        className={`transition-all duration-300 rounded-full ${
                          dotIdx === presentationStage
                            ? 'w-6 h-2 bg-blue-600'
                            : dotIdx < presentationStage
                            ? 'w-2 h-2 bg-emerald-500'
                            : 'w-2 h-2 bg-gray-300'
                        }`}
                        aria-label={`Go to stage ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 w-full">
                    <button
                      onClick={prevStage}
                      className="flex-1 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-mono font-bold transition flex items-center justify-center gap-1 cursor-pointer active:scale-95"
                    >
                      <ChevronLeft className="w-4 h-4" /> Previous
                    </button>
                    <button
                      onClick={nextStage}
                      className="flex-1 btn-primary py-2 text-xs font-bold font-mono cursor-pointer flex items-center justify-center gap-1 active:scale-95 shadow-sm"
                    >
                      Next Stage →
                    </button>
                  </div>

                  <div className="text-[10px] font-mono text-gray-500 text-center">
                    Stage <strong>{st.num} of 10</strong> · Satpur MIDC, Nashik
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* ─── DESKTOP & TABLET SLIDING STAGE CARDS TRACK (EXCLUSIVELY FOR SM/MD/LG SCREENS) ─── */}
        <div className="hidden sm:block relative w-full overflow-hidden">
          <div className="container-custom relative">
            {/* Desktop Prev / Next Navigation Arrows */}
            <button
              onClick={prevStage}
              className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-gray-300 shadow-xl items-center justify-center hover:bg-blue-50 text-gray-900 transition hover:scale-105 group cursor-pointer"
              aria-label="Previous manufacturing stage"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-blue-600 transition-colors" />
            </button>
            <button
              onClick={nextStage}
              className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-gray-300 shadow-xl items-center justify-center hover:bg-blue-50 text-gray-900 transition hover:scale-105 group cursor-pointer"
              aria-label="Next manufacturing stage"
            >
              <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-blue-600 transition-colors" />
            </button>

            {/* Continuous Sliding Flex Track */}
            <div
              className="flex gap-3 sm:gap-6 transition-transform duration-500 ease-out will-change-transform items-stretch"
              style={{
                transform: `translateX(calc(50% - ${(presentationStage + 0.5)} * min(840px, 92vw) - ${presentationStage} * 16px))`,
              }}
            >
              {presentationStages.map((st, idx) => {
                const isActive = idx === presentationStage;
                const isNext = idx === presentationStage + 1;
                const isPrev = idx < presentationStage;

                return (
                  <div
                    key={`card-${st.buttonCode}`}
                    onClick={() => { if (!isActive) goToStage(idx); }}
                    className={`w-[min(840px,92vw)] flex-shrink-0 rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 transition-all duration-500 flex flex-col justify-between relative overflow-hidden ${
                      isActive
                        ? 'bg-white border-2 border-blue-600 shadow-2xl ring-4 ring-blue-500/15 scale-100 opacity-100 z-20'
                        : isNext
                        ? 'bg-white/95 border-2 border-dashed border-blue-300 shadow-md scale-95 opacity-75 hover:opacity-100 cursor-pointer z-10'
                        : isPrev
                        ? 'bg-white/90 border border-emerald-300 shadow-md scale-95 opacity-65 hover:opacity-95 cursor-pointer z-10'
                        : 'bg-white/80 border border-gray-200 shadow-sm scale-90 opacity-40 hover:opacity-80 cursor-pointer z-0'
                    }`}
                  >
                    {/* Non-active Preview Ribbon */}
                    {!isActive && (
                      <div className={`mb-2 px-3 py-1 rounded-xl text-xs font-mono font-bold flex items-center justify-between ${
                        isNext ? 'bg-blue-50 text-blue-900 border border-blue-200' : 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      }`}>
                        <span className="truncate">{isNext ? `👉 UPCOMING: ${st.buttonCode}` : `✓ GATE PASSED (STAGE ${st.num})`}</span>
                        <span className="text-[10px] underline flex-shrink-0 ml-2">Inspect →</span>
                      </div>
                    )}

                    {/* Active Card Content */}
                    <div>
                      {/* Top Header Badge Row */}
                      <div className="flex items-center justify-between gap-2 mb-1 sm:mb-3">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] sm:text-xs font-mono font-black shadow-xs">
                            Stage {st.num}
                          </span>
                          <span className="text-[10px] sm:text-xs font-mono font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                            {st.tag}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-gray-500">
                          ID: <strong className="text-gray-900">{st.buttonCode}</strong>
                        </span>
                      </div>

                      {/* Stage Title */}
                      <h3 className="text-sm sm:text-2xl font-black font-display tracking-tight text-gray-950 mb-1 sm:mb-3">
                        {st.stageTitle}
                      </h3>

                      {/* Metric Banner */}
                      <div className="p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-blue-50/80 border border-blue-200 text-[11px] sm:text-sm font-semibold text-blue-950 font-mono mb-1.5 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                        <span className="leading-tight sm:leading-snug">{st.metric}</span>
                      </div>

                      {/* Main Section: Concise Explanation + Quality Gate */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1.5 sm:gap-6 items-stretch mb-1.5 sm:mb-4">
                        <div className="lg:col-span-8 space-y-1.5 sm:space-y-3">
                          {/* Plain English Explanation */}
                          <div className="p-2 sm:p-4 rounded-lg sm:rounded-xl bg-[#FAFAF9] border border-gray-200 text-xs sm:text-sm text-gray-800 leading-snug sm:leading-relaxed">
                            <span className="text-[10px] sm:text-xs font-mono text-blue-900 font-bold tracking-wider block mb-0.5">
                              Process Explanation:
                            </span>
                            <p className="text-gray-700 font-normal text-xs sm:text-sm">{st.simpleExpl}</p>
                          </div>

                          {/* Quality Gate */}
                          <div className="p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] sm:text-xs text-emerald-950 font-medium flex items-center gap-1.5 sm:gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                            <span><strong className="text-emerald-900">Quality Gate:</strong> {st.whyItMatters}</span>
                          </div>
                        </div>

                        {/* Station Graphic Badge */}
                        <div className="hidden lg:flex lg:col-span-4 flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 border-2 border-blue-200 text-center shadow-sm">
                          <div className="w-14 h-14 rounded-2xl bg-white border-2 border-blue-300 text-blue-600 flex items-center justify-center mb-2 shadow-md relative">
                            {st.icon}
                            <div className="absolute -top-1.5 -right-1.5 bg-blue-900 text-white font-mono text-[9px] font-black px-1.5 py-0.5 rounded-full border border-blue-400">
                              #{st.num}
                            </div>
                          </div>
                          <div className="text-[10px] font-mono text-blue-900 font-bold">
                            Station #{st.num} · {st.buttonCode}
                          </div>
                          <div className="text-xs font-bold text-gray-900 mt-0.5">
                            {st.equipment}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Controls Ribbon */}
                    <div className="pt-2 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          onClick={(e) => { e.stopPropagation(); prevStage(); }}
                          className="flex-1 sm:flex-none px-3.5 py-1.5 sm:py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-mono font-bold transition flex items-center justify-center gap-1 cursor-pointer active:scale-95"
                        >
                          <ChevronLeft className="w-4 h-4" /> Previous
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); nextStage(); }}
                          className="flex-1 sm:flex-none btn-primary px-4 py-1.5 sm:py-2 text-xs font-bold font-mono cursor-pointer flex items-center justify-center gap-1 active:scale-95 shadow-sm"
                        >
                          Next Stage →
                        </button>
                      </div>

                      <div className="text-[11px] font-mono text-gray-500 text-center sm:text-right">
                        Stage <strong>{st.num} of 10</strong> · Satpur MIDC, Nashik
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 3D FLIP CARD GALLERY SCROLLER — "OUR AREA AND GALLERY" ════════════ */}
      <section id="gallery" className="py-8 sm:py-16 bg-[#060C1B] text-white relative overflow-hidden border-t border-slate-800">
        {/* Ambient background glow orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-950/90 border border-cyan-500/40 text-cyan-300 text-[11px] sm:text-xs font-mono font-bold tracking-wider mb-2 sm:mb-3 shadow-sm">
                <RotateCcw className="w-3.5 h-3.5 text-cyan-300" /> Interactive Plant Tour · 3D Cards
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-1.5 sm:mb-3">
                Our Area &amp; Plant Gallery
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xs sm:text-sm text-gray-300 px-2 sm:px-4">
                Explore Our Satpur MIDC, India Campus. Tap Any Photo To <strong className="text-cyan-300">Flip In 3D</strong> For Technical Specs.
              </p>
            </Reveal>
          </div>

          {/* Horizontal Scrollable Category Filter Pills (Mobile Friendly) */}
          <div className="w-full mb-3 sm:mb-6">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 sm:justify-center w-full" style={{ WebkitOverflowScrolling: 'touch' }}>
              {[
                { id: 'all', label: 'All Areas (12)' },
                { id: 'plant', label: 'Campus & Infrastructure (2)' },
                { id: 'forging', label: 'Cold Forging & Machining (4)' },
                { id: 'heat', label: 'SCADA Heat & Plating (2)' },
                { id: 'testing', label: 'Eddy Current & Labs (2)' },
                { id: 'warehouse', label: 'Warehousing & Dispatch (1)' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setGalleryCategory(cat.id)}
                  className={`flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer active:scale-95 ${
                    galleryCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 ring-2 ring-cyan-400/50'
                      : 'bg-slate-800/90 text-gray-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scroller Control Ribbon (Desktop & Tablet Only — Hidden on Mobile) */}
          <div className="hidden sm:flex items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-6 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-md">
            {/* Left: Active Area Count */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950 border border-cyan-700/70 text-cyan-300 font-mono font-bold text-xs shadow-xs ">
                Area {String(activeGalleryIndex + 1).padStart(2, '0')} / {String(filteredGalleryCards.length).padStart(2, '0')}
              </span>
              <span className="text-xs font-display font-bold text-white hidden md:inline truncate max-w-xs ">
                {filteredGalleryCards[activeGalleryIndex]?.title || ''}
              </span>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsGalleryAutoPlaying(!isGalleryAutoPlaying)}
                className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 border transition cursor-pointer active:scale-95 ${
                  isGalleryAutoPlaying
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                    : 'bg-slate-700 text-gray-300 border-slate-600 hover:text-white'
                }`}
              >
                {isGalleryAutoPlaying ? <Pause className="w-3.5 h-3.5 text-cyan-300" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isGalleryAutoPlaying ? 'Pause Tour' : 'Auto-Slide'}</span>
              </button>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollGallery('left')}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-700 hover:bg-blue-600 active:bg-blue-700 text-white border border-slate-600 hover:border-blue-400 flex items-center justify-center transition cursor-pointer active:scale-95 shadow-sm"
                  aria-label="Previous plant area"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => scrollGallery('right')}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white border border-blue-400 flex items-center justify-center transition cursor-pointer active:scale-95 shadow-md shadow-blue-600/30"
                  aria-label="Next plant area"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── HORIZONTAL SMOOTH CARD SCROLLER ─── */}
        <div className="relative w-full">
          {/* Subtle edge gradients for desktop depth */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-[#060C1B] to-transparent pointer-events-none z-10 hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-[#060C1B] to-transparent pointer-events-none z-10 hidden sm:block" />

          <div
            ref={galleryScrollRef}
            onScroll={handleGalleryScroll}
            className="flex gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-1 sm:py-3 px-4 sm:px-12 md:px-20 no-scrollbar scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
          >
            {filteredGalleryCards.map((card, idx) => {
              const isFlipped = !!flippedCards[card.id];
              const isActive = activeGalleryIndex === idx;

              return (
                <div
                  key={card.id}
                  className={`gallery-card-item perspective-1000 w-[84vw] max-w-[320px] sm:w-[360px] md:w-[390px] h-[370px] sm:h-[440px] flex-shrink-0 snap-center cursor-pointer select-none group transition-all duration-300 ${
                    isActive ? 'scale-100 ring-2 ring-cyan-500/60 rounded-2xl shadow-cyan-900/20' : 'scale-[0.98] opacity-90 hover:opacity-100'
                  }`}
                  onClick={() => toggleCardFlip(card.id)}
                >
                  <div
                    className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 rounded-2xl shadow-2xl ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* ── CARD FRONT ── */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-slate-800/95 border border-slate-700/80 flex flex-col justify-between shadow-2xl">
                      {/* Photo Header */}
                      <div className="relative h-40 sm:h-52 w-full overflow-hidden bg-slate-950 flex-shrink-0">
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-mono text-cyan-300 font-bold border border-white/10 tracking-wider shadow">
                          {card.areaTag}
                        </div>
                        <div className="absolute top-2 right-2 bg-blue-900/90 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-mono text-white font-bold border border-blue-400/40 shadow">
                          {card.metric}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                      </div>

                      {/* Card Content */}
                      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800/60">
                              Area #{String(card.id).padStart(2, '0')}
                            </span>
                            <span className="text-xs font-mono text-gray-400">
                              Satpur MIDC, India
                            </span>
                          </div>
                          <h3 className="text-sm sm:text-base font-bold font-display text-white mb-1 group-hover:text-cyan-300 transition-colors line-clamp-1 sm:line-clamp-2">
                            {card.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {card.shortDesc}
                          </p>
                        </div>

                        {/* Front Bottom Bar — High contrast action callout */}
                        <div className="pt-2 border-t border-slate-700/70 flex items-center justify-between mt-1">
                          <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-800/50">
                            <RotateCcw className="w-3.5 h-3.5 text-cyan-300 group-hover:rotate-180 transition-transform duration-500" />
                            Tap Card To 3D Flip ↻
                          </span>
                          <span className="text-xs font-mono tracking-wider text-gray-400 bg-slate-700/70 px-2 py-0.5 rounded">
                            Spec Backside
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ── CARD BACK (180deg) ── */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-y-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 border-2 border-cyan-500/60 p-3 sm:p-4 flex flex-col justify-between shadow-2xl">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 bg-cyan-950/90 px-2.5 py-1 rounded border border-cyan-700 shadow-sm">
                            {card.backDepartment}
                          </span>
                          <span className="text-xs font-mono text-gray-400">Area #{card.id} Spec</span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold font-display text-white mb-1.5 leading-tight">
                          {card.backTitle}
                        </h3>

                        <div className="space-y-1.5 text-xs text-gray-200 mb-1">
                          <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 border border-cyan-900/60">
                            <span className="text-xs font-mono text-cyan-400 font-bold block mb-0.5">Machinery &amp; Tech:</span>
                            <p className="text-gray-300 text-xs leading-relaxed">{card.equipment}</p>
                          </div>
                          <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                            <span className="text-xs font-mono text-cyan-400 font-bold block mb-0.5">What Is In This Picture:</span>
                            <p className="text-gray-300 text-xs leading-relaxed">{card.explanation}</p>
                          </div>
                          <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60">
                            <span className="text-xs font-mono text-emerald-400 font-bold block mb-0.5">Engineering Quality Gate:</span>
                            <p className="text-emerald-200 text-xs leading-relaxed">{card.qualityControl}</p>
                          </div>
                        </div>
                      </div>

                      {/* Back Bottom Bar */}
                      <div className="pt-2 border-t border-white/15 flex items-center justify-between mt-auto">
                        <span className="text-xs font-mono text-cyan-300/80 font-semibold truncate max-w-[150px] sm:max-w-[180px]">
                          {card.capacity}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleCardFlip(card.id); }}
                          className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-mono font-bold transition flex items-center gap-1 border border-cyan-500/40 cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> Flip Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── BOTTOM CONTROLS & PROGRESS BAR ─── */}
        <div className="container-custom mt-3 sm:mt-6 relative z-10">
          {/* Glowing Continuous Progress Bar */}
          <div className="max-w-xs sm:max-w-md mx-auto w-full h-1 sm:h-1.5 bg-slate-800/90 rounded-full overflow-hidden mb-2.5 border border-slate-700/60">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300"
              style={{
                width: `${((activeGalleryIndex + 1) / Math.max(filteredGalleryCards.length, 1)) * 100}%`,
              }}
            />
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap px-2 mb-2 sm:mb-3">
            {filteredGalleryCards.map((_, dotIdx) => (
              <button
                key={`dot-${dotIdx}`}
                onClick={() => scrollToGalleryIndex(dotIdx)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeGalleryIndex === dotIdx
                    ? 'w-5 sm:w-7 bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]'
                    : 'w-1.5 sm:w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Jump to area ${dotIdx + 1}`}
              />
            ))}
          </div>

          <div className="text-center text-[10px] sm:text-[11px] font-mono text-gray-400">
            Tip: Swipe cards horizontally on mobile. Tap any photo card to flip in 3D for engineering specifications.
          </div>
        </div>
      </section>

      {/* ════════════ 25 IN-HOUSE MANUFACTURING & FINISHING PROCESSES (CONTINUOUS SCROLLER) ════════════ */}
      <section id="processes" className="py-16 sm:py-24 bg-white border-t border-gray-200 relative overflow-hidden">
        {/* Anchor compatibility for existing #secondary links */}
        <div id="secondary" className="absolute -top-20" />

        {/* Floating Bolt & Nut SVG Watermarks & Animations */}
        <WatermarkBolt className="-left-20 -bottom-20" size={420} rotation={20} />
        <div className="absolute top-10 right-12 pointer-events-none animate-float-3 hidden sm:block z-0">
          <BoltSvg size={80} opacity={0.85} rotation={-10} />
        </div>
        <div className="absolute bottom-10 left-10 pointer-events-none animate-float-2 hidden sm:block z-0">
          <NutSvg size={75} opacity={0.8} />
        </div>

        <div className="container-custom relative z-10 mb-8 sm:mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>100% In-House Integrated Manufacturing Suite · Zero Subcontractors</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-gray-950 mb-3">
            25 WORLD-CLASS MANUFACTURING &amp; FINISHING PROCESSES
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Complete fastener engineering under one roof — from chemical spectrometry &amp; India's largest cold forging (M16x375mm &amp; M30) to continuous SCADA heat treatment and 1,500+ hour corrosion protection.
          </p>
        </div>

        {/* ─── CONTINUOUS AUTOMATIC MARQUEE SLIDER OF ALL 25 PROCESSES ─── */}
        <div className="relative w-full overflow-hidden py-3">
          <div className="animate-marquee-ltr gap-4">
            {[...manufacturingProcesses, ...manufacturingProcesses].map((proc, idx) => (
              <div
                key={`proc-ltr-${proc.id}-${idx}`}
                onClick={() => setSelectedProcess(proc)}
                className={`w-72 sm:w-80 p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between flex-shrink-0 shadow-sm hover:shadow-xl group cursor-pointer select-none ${
                  proc.id === 2
                    ? 'bg-gradient-to-br from-blue-50 via-white to-amber-50/50 border-2 border-amber-400 hover:border-amber-500 ring-2 ring-amber-300/30'
                    : 'bg-[#FAFAF9] border-gray-200 hover:border-blue-400 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center transition-colors ${
                      proc.id === 2
                        ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                        : 'bg-blue-50 border border-blue-200 text-blue-900 group-hover:bg-blue-600 group-hover:text-white'
                    }`}>
                      #{proc.num}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                      proc.id === 2
                        ? 'bg-amber-100 border border-amber-300 text-amber-900 font-black'
                        : 'bg-emerald-50 border border-emerald-300 text-emerald-800'
                    }`}>
                      <Check className="w-3 h-3" /> {proc.id === 2 ? '★ National Benchmark' : '100% In-House'}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base text-gray-950 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
                    {proc.title}
                  </h3>

                  <div className="mb-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      proc.id === 2
                        ? 'bg-amber-400/20 text-amber-950 border border-amber-400/40'
                        : 'bg-blue-50 text-blue-900 border border-blue-200'
                    }`}>
                      {proc.tag}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {proc.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-400 truncate max-w-[150px]">{proc.categoryLabel}</span>
                  <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">Inspect →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4 text-[11px] font-mono text-gray-500">
          ✦ 100% In-House Operations · Hover to pause conveyor · Click any capability card to inspect technical specifications
        </div>
      </section>

      {/* ════════════ FASTENERS & BOLTS SHOWCASE SCROLLER (CONTINUOUS SLIDER) ════════════ */}
      <section id="catalog" className="pt-16 sm:pt-20 pb-4 sm:pb-6 bg-[#F8F9FA] border-t border-gray-200 relative overflow-hidden">
        {/* Floating Bolt & Nut SVG Watermarks & Animations */}
        <WatermarkBolt className="right-[-60px] top-16" size={480} rotation={-15} />
        <WatermarkNut className="left-[-100px] bottom-32" size={460} />
        <div className="absolute top-24 right-10 pointer-events-none animate-float-1 hidden lg:block z-10">
          <BoltSvg size={95} opacity={0.9} rotation={14} />
        </div>
        <div className="absolute bottom-24 left-10 pointer-events-none animate-float-3 hidden lg:block z-10">
          <NutSvg size={90} opacity={0.9} />
        </div>

        <div className="container-custom relative z-10 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Interactive Product Slider · Click Any Card
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-gray-950">
                OUR NUTS, BOLTS, WASHERS &amp; COMPONENTS SHOWCASE
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                Click any product card below to inspect technical specifications for hex bolts, lock nuts, Belleville washers, and precision stamped components.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 flex-shrink-0">
              <button
                onClick={openCatalogPage}
                className="btn-primary text-xs px-6 py-3.5 font-bold font-mono shadow-md flex items-center gap-2"
              >
                <span>OPEN FULL CATALOGUE PAGE (ALL 24)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Continuous Automatic Scroller — Track 1 (Right to Left) */}
        <div className="relative w-full overflow-hidden py-3">
          <div className="animate-marquee-products-rtl gap-5">
            {[...catalogTrack1, ...catalogTrack1, ...catalogTrack1].map((item: any, idx: number) => (
              <div
                key={`track1-${item.id}-${idx}`}
                onClick={() => setSelectedCatalogItem(item)}
                className="w-64 sm:w-80 p-3 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-shrink-0 shadow-sm cursor-pointer group"
              >
                <div>
                  <div className="w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-b from-slate-50/90 via-white to-slate-100/70 p-2 sm:p-3 flex items-center justify-center relative mb-3 border border-slate-200/80 group-hover:border-blue-400 group-hover:shadow-md transition-all duration-300 overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-xl scale-115 group-hover:scale-125 transition-all duration-300 relative z-10"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono text-cyan-300 font-bold opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm z-20 flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Details
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-blue-600 font-bold tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-base text-gray-950 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-500 line-clamp-1 max-w-[150px]">{item.use}</span>
                  <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Automatic Scroller — Track 2 (Left to Right) */}
        <div className="relative w-full overflow-hidden py-3">
          <div className="animate-marquee-products-ltr gap-5">
            {[...catalogTrack2, ...catalogTrack2, ...catalogTrack2].map((item: any, idx: number) => (
              <div
                key={`track2-${item.id}-${idx}`}
                onClick={() => setSelectedCatalogItem(item)}
                className="w-64 sm:w-80 p-3 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-shrink-0 shadow-sm cursor-pointer group"
              >
                <div>
                  <div className="w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-b from-slate-50/90 via-white to-slate-100/70 p-2 sm:p-3 flex items-center justify-center relative mb-3 border border-slate-200/80 group-hover:border-blue-400 group-hover:shadow-md transition-all duration-300 overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-xl scale-115 group-hover:scale-125 transition-all duration-300 relative z-10"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono text-cyan-300 font-bold opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm z-20 flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Details
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-blue-600 font-bold tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-base text-gray-950 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-500 line-clamp-1 max-w-[150px]">{item.use}</span>
                  <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Linking to Dedicated Page */}
        <div className="container-custom mt-6 sm:mt-8 relative z-10">
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-blue-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <span className="text-xs font-mono text-blue-900 font-bold tracking-wider block mb-1">
                Looking for specific fasteners or want to search by size?
              </span>
              <h3 className="text-lg sm:text-2xl font-black font-display text-gray-950">
                Browse Our Complete Fasteners Grid Catalogue
              </h3>
              <p className="text-xs text-gray-600 mt-1 max-w-xl">
                Explore all 24 bolts and nuts with category filters, live keyword search, and detailed specification summaries on our dedicated catalogue page.
              </p>
            </div>
            <button
              onClick={openCatalogPage}
              className="btn-primary px-6 py-3 text-xs font-bold whitespace-nowrap shadow-md flex-shrink-0"
            >
              OPEN FULL CATALOGUE PAGE →
            </button>
          </div>
        </div>
      </section>

      {/* ════════════ 3D NUT & BOLT DISASSEMBLY SHOWCASE ════════════ */}
      <React.Suspense fallback={<div className="h-64 flex items-center justify-center bg-gray-50 text-xs font-mono text-gray-400">Loading 3D interactive viewer...</div>}>
        <InteractiveUnboltScroll />
      </React.Suspense>

      {/* ════════════ COMPANY PROFILE & 50-YEAR LEGACY (LIGHT THEME) ════════════ */}
      <section id="overview" className="pt-2 sm:pt-4 pb-10 sm:pb-14 bg-white relative overflow-hidden">
        {/* Floating Bolt & Nut SVG Watermarks & Animations */}
        <WatermarkNut className="-left-28 top-1/4" size={520} />
        <div className="absolute top-16 right-16 pointer-events-none animate-float-2 hidden sm:block z-0">
          <BoltSvg size={85} opacity={0.85} rotation={-16} />
        </div>
        <div className="absolute bottom-16 left-1/3 pointer-events-none animate-float-1 hidden sm:block z-0">
          <NutSvg size={75} opacity={0.8} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-8 sm:mb-10">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold tracking-widest mb-2">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" /> Company Profile &amp; Legacy
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-gray-950 mb-3 sm:mb-4 leading-tight">
                  50+ YEARS OF FASTENING EXCELLENCE
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                  Founded in <strong className="text-blue-900">1970</strong> and expanded in <strong className="text-blue-900">1982</strong>, we operate 5 modern manufacturing plants across 2,20,000 sq. mtr. in Satpur MIDC Nashik and Pantnagar Uttarakhand, with an upcoming Mega Plant in Chhatrapati Sambhajinagar. Producing 54,000 MT annually with ₹250+ Crore turnover, we serve India’s top vehicle OEMs, and global exports to the United States and Italy.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Established</div>
                    <div className="text-sm font-bold text-gray-950 mt-0.5">1970 &amp; 1982</div>
                    <div className="text-[10px] text-blue-900 font-bold mt-0.5">50+ Years Experience</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Turnover</div>
                    <div className="text-sm font-bold text-blue-900 mt-0.5">₹250+ Crore</div>
                    <div className="text-[10px] text-emerald-700 font-bold mt-0.5">Rapid Expansion</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Accreditations</div>
                    <div className="text-sm font-bold text-gray-950 mt-0.5">IATF 16949 &amp; ISO 45001</div>
                    <div className="text-[10px] text-blue-900 font-bold mt-0.5">BIS &amp; BSI Certified</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Workforce</div>
                    <div className="text-sm font-bold text-gray-950 mt-0.5">500+ Specialists</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">Metallurgy &amp; Tooling</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Production Space</div>
                    <div className="text-sm font-bold text-gray-950 mt-0.5">2,20,000 sq. mtr.</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">Nashik, Pantnagar &amp; Sambhajinagar</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Global Reach</div>
                    <div className="text-sm font-bold text-blue-900 mt-0.5">United States &amp; Italy</div>
                    <div className="text-[10px] text-blue-600 font-bold mt-0.5">Worldwide Exports</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl bg-gray-100 relative group">
                  <img loading="lazy" decoding="async"
                    src="/images/pptx/slide-media-5.jpeg"
                    alt="Hindustan Fasteners Corporate Facility in Satpur MIDC, Nashik"
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                    <div className="text-[11px] font-mono text-cyan-300 font-bold tracking-wider mb-0.5">
                      Corporate Facility · Satpur MIDC, Nashik
                    </div>
                    <div className="text-base font-bold font-display">
                      Hindustan Fasteners Pvt Ltd
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Strategic Vision, Mission & Zero Defect in Light Theme */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5 pt-4 sm:pt-6 border-t border-gray-200">
            <Reveal delay={100}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFAF9] border border-blue-200 text-gray-900 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-2 sm:mb-3">
                    <Target className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-blue-900 font-bold mb-1">Strategic Vision</div>
                  <h3 className="text-base sm:text-lg font-bold font-display tracking-tight mb-2 text-gray-950">Our Vision</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    To be the leading fasteners manufacturer both domestically and globally by providing <strong className="text-blue-900">Complete fastening solutions under one roof</strong>.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-[10px] sm:text-[11px] font-mono text-blue-900 font-bold">
                  Domestic &amp; Global Leadership
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFAF9] border border-gray-200 text-gray-900 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-gray-200 text-gray-800 flex items-center justify-center mb-2 sm:mb-3">
                    <Cog className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-gray-500 font-bold mb-1">Operational Mission</div>
                  <h3 className="text-base sm:text-lg font-bold font-display tracking-tight mb-2 text-gray-950">Our Mission</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    We strive to be a <strong className="text-gray-950">Customer-centric and quality-driven</strong> Fastener manufacturer that provides complete fastening solutions tailored to individual customer needs.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-[10px] sm:text-[11px] font-mono text-gray-600 font-bold">
                  Tailored OEM Solutions
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFAF9] border border-emerald-300 text-gray-900 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 sm:mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-emerald-800 font-bold mb-1">Quality Value</div>
                  <h3 className="text-base sm:text-lg font-bold font-display tracking-tight mb-2 text-gray-950">Zero Defect Value</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    We are committed to <strong className="text-emerald-800">Zero Defect</strong> by removing quality hindrances at occurrence stage, not at inspection. One-stop solution, on-time delivery every time.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-[10px] sm:text-[11px] font-mono text-emerald-800 font-bold">
                  Zero Defect Occurrence Control
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════ CALL TO ACTION / RFQ (LIGHT LUXURY) ════════════ */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-950 text-center relative overflow-hidden border-t border-gray-200">
        {/* Floating Bolt & Nut SVG Watermarks & Animations */}
        <WatermarkBolt className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={480} rotation={-20} />
        <div className="absolute top-12 left-12 pointer-events-none animate-float-1 hidden sm:block z-0">
          <BoltSvg size={85} opacity={0.85} rotation={15} />
        </div>
        <div className="absolute bottom-12 right-12 pointer-events-none animate-float-2 hidden sm:block z-0">
          <NutSvg size={85} opacity={0.85} />
        </div>

        <div className="container-custom max-w-3xl relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" /> OEM &amp; Industrial Inquiries
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight mb-6 leading-tight text-gray-950">
              HAVE A DRAWING, SAMPLE OR BULK ORDER?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10">
              Whether you need 10,000 standard hex bolts or a custom forged prototype from your sample, we provide direct plant pricing and certified quality.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => openQuote()}
                className="btn-primary px-8 py-4 text-sm font-bold shadow-xl w-full sm:w-auto text-center"
              >
                GET AN INSTANT PRICE QUOTE →
              </button>
              <a
                href="tel:+912532350890"
                className="btn-dark px-8 py-4 text-sm font-bold"
              >
                CALL OUR NASHIK PLANT DESK
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="bg-white text-gray-800 pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-gray-200 shadow-inner text-center">
        <div className="container-custom max-w-5xl mx-auto flex flex-col items-center">
          {/* Logos & Company Bio — Centered */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-10 px-3.5 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm">
                <img decoding="async"
                  src="/logo/HF LOGO (1).png"
                  alt="Hindustan Fasteners Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="h-10 px-3.5 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm">
                <img decoding="async"
                  src="/logo/PFS logo.png"
                  alt="Precision Forging and Stamping Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-3">
              Hindustan Fasteners (1970) &amp; Precision Forging &amp; Stamping (1982). Operating 5 modern manufacturing plants across 2,20,000 sq. mtr. in Satpur MIDC Nashik and Pantnagar Uttarakhand, with upcoming Mega Plant in Chhatrapati Sambhajinagar. Supplying India’s top vehicle OEMs, and exporting to the United States &amp; Italy.
            </p>
            <div className="text-xs font-mono text-blue-900 font-bold bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
              IATF 16949:2016 · ISO 45001 · BIS Certified · BSI Registered
            </div>
          </div>

          {/* Centered Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full mb-8 sm:mb-12 text-center">
            {/* Col 1: Plant Locations */}
            <div className="flex flex-col items-center text-center">
              <div className="text-gray-950 font-bold tracking-wider text-xs mb-3 font-mono">Manufacturing Hubs</div>
              <p className="text-gray-600 text-xs leading-relaxed">
                3 Plants in Satpur MIDC, Nashik (MH)<br />
                2 Plants in Pantnagar (UK)<br />
                Upcoming Mega Plant in Chhatrapati Sambhajinagar
              </p>
              <p className="mt-2 text-[11px] text-blue-900 font-mono font-bold">Total Area: 2,20,000 sq. mtr.</p>
            </div>

            {/* Col 2: Quick Navigation */}
            <div className="flex flex-col items-center text-center">
              <div className="text-gray-950 font-bold tracking-wider text-xs mb-3 font-mono">Quick Navigation</div>
              <ul className="space-y-2 text-xs text-gray-600 font-medium flex flex-col items-center">
                <li><a href="#overview" className="hover:text-blue-600 transition">Company Profile &amp; Legacy</a></li>
                <li><a href="#pipeline" className="hover:text-blue-600 transition">10-Stage Process Pipeline</a></li>
                <li><a href="#gallery" className="hover:text-blue-600 transition">Plant Gallery &amp; Facilities</a></li>
                <li><button onClick={openCatalogPage} className="hover:text-blue-600 transition">Product Catalogue ({catalogData.length})</button></li>
                <li><button onClick={openContactPage} className="text-blue-600 font-bold hover:underline">Contact Us &amp; 3D Map</button></li>
              </ul>
            </div>

            {/* Col 3: Central Plant Contact */}
            <div className="flex flex-col items-center text-center">
              <div className="text-gray-950 font-bold tracking-wider text-xs mb-3 font-mono">Central Marketing Desk</div>
              <p className="text-gray-700 text-xs mb-1.5 flex items-center justify-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <a href="tel:+912532350890" className="hover:text-blue-600 transition">+91 (253) 235 0890</a>
              </p>
              <p className="text-gray-700 text-xs mb-3 flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <a href="mailto:marketing@hfpfs.com" className="hover:text-blue-600 font-bold text-blue-900 transition">marketing@hfpfs.com</a>
              </p>
              <button
                onClick={() => openQuote()}
                className="px-4 py-2 rounded-lg btn-nav-quote text-[11px] font-bold font-mono shadow-sm "
              >
                Request Price Quote →
              </button>
            </div>
          </div>

          {/* Bottom Copyright & Specs — Centered */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200 flex flex-col items-center justify-center gap-2 text-gray-500 text-[10px] sm:text-[11px] font-mono text-center w-full">
            <span>© 2026 Hindustan Fasteners Private Limited &amp; Precision Forging &amp; Stamping.</span>
            <span>IATF 16949 · ISO 45001 · BIS Certified · 54,000 MT Annual Output · marketing@hfpfs.com</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} product={quoteProduct} />
      <ProductDetailModal
        product={selectedCatalogItem}
        onClose={() => setSelectedCatalogItem(null)}
        onOpenQuote={(name) => openQuote(name)}
      />
      <ProcessDetailModal
        process={selectedProcess}
        onClose={() => setSelectedProcess(null)}
        onOpenQuote={(name) => openQuote(name)}
      />

            {/* ════════════ FLOATING SCROLL TO TOP BUTTON (BOTTOM RIGHT) ════════════ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-[90] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-950/90 text-white shadow-2xl hover:bg-blue-600 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-cyan-400/40 backdrop-blur-md group ${
          scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
        title="Scroll to Top"
        style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.5), 0 0 20px rgba(56,189,248,0.3)' }}
      >
        <ChevronLeft className="w-6 h-6 rotate-90 group-hover:-translate-y-0.5 transition-transform text-cyan-300" />
      </button>

      {/* ════════════ FLOATING ENQUIRY CTA BUTTON (BOTTOM LEFT) ════════════ */}
      <button
        onClick={() => { setEnquiryOpen(true); setEnquirySubmitted(false); }}
        className="fixed bottom-6 left-6 z-[90] w-14 h-14 sm:w-auto sm:h-auto sm:px-5 sm:py-3.5 rounded-full sm:rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl hover:shadow-blue-600/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 group border-2 border-blue-400/40"
        aria-label="Send Enquiry"
        style={{ boxShadow: '0 8px 32px rgba(37, 99, 235, 0.45), 0 0 0 4px rgba(37, 99, 235, 0.12)' }}
      >
        <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-mono font-bold text-xs tracking-wide">Send Enquiry</span>
      </button>

      {/* ════════════ ENQUIRY / CONTACT FORM DIALOGUE BOX ════════════ */}
      {enquiryOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={() => setEnquiryOpen(false)}>
          <div
            className="bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl relative text-gray-900"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            {/* Dialogue Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 px-5 sm:px-7 pt-5 sm:pt-6 pb-3 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-[10px] font-mono font-bold tracking-wider mb-1.5">
                    <MessageCircle className="w-3 h-3 text-blue-600" /> Quick Enquiry Form
                  </div>
                  <h3 className="text-lg sm:text-xl font-black font-display text-gray-950">Send Us Your Enquiry</h3>
                </div>
                <button
                  onClick={() => setEnquiryOpen(false)}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition"
                  aria-label="Close enquiry form"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="px-5 sm:px-7 py-5 sm:py-6">
              {enquirySubmitted ? (
                /* ── SUCCESS STATE ── */
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-gray-900 mb-2">Enquiry Sent Successfully!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto mb-2">
                    Reference: <span className="font-mono font-bold text-blue-600">ENQ-{Math.floor(Math.random() * 9000 + 1000)}</span>
                  </p>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto mb-6">
                    Our engineering team at Satpur MIDC, Nashik will review your enquiry and respond within 24 hours.
                  </p>
                  <button onClick={() => setEnquiryOpen(false)} className="btn-primary px-6 py-2.5 text-sm">
                    Done & Close
                  </button>
                </div>
              ) : (
                /* ── ENQUIRY FORM ── */
                <form onSubmit={(e) => { e.preventDefault(); setEnquirySubmitted(true); }} className="space-y-4">
                  {/* Info Strip */}
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Direct enquiry to <strong>Hindustan Fasteners & Precision Forging</strong>, Satpur MIDC, Nashik. We respond within 24 hours.</span>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1">
                        <User className="w-3 h-3 text-gray-400" /> Your Name *
                      </label>
                      <input required type="text" placeholder="e.g. Ramesh Patel" className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1">
                        <Building2 className="w-3 h-3 text-gray-400" /> Company Name *
                      </label>
                      <input required type="text" placeholder="e.g. Auto Components Ltd" className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1">
                        <Mail className="w-3 h-3 text-gray-400" /> Email Address *
                      </label>
                      <input required type="email" placeholder="contact@example.com" className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1">
                        <Phone className="w-3 h-3 text-gray-400" /> Phone / WhatsApp *
                      </label>
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                    </div>
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1 block">Enquiry Type</label>
                    <select className="w-full px-3 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 font-medium focus:border-blue-500 focus:outline-none transition">
                      <option>Price Quote for Fasteners</option>
                      <option>Bulk / OEM Order Enquiry</option>
                      <option>Custom Forging / Special Part</option>
                      <option>Sample or Drawing Based Quote</option>
                      <option>Export / International Enquiry</option>
                      <option>General Question / Plant Visit</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1 block">Your Message / Requirements *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe the fasteners you need, approximate quantities, sizes (e.g. M10 x 65), strength grade, surface finish, or paste your drawing reference..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                    />
                  </div>

                  {/* Drawing Upload */}
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1 block">Attach Drawing / Photo (Optional)</label>
                    <div className="relative border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-xl p-3 text-center transition bg-gray-50 cursor-pointer">
                      <input type="file" accept=".pdf,.dwg,.step,.stp,.png,.jpg,.jpeg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <UploadCloud className="w-5 h-5 text-blue-600 mx-auto mb-0.5" />
                      <span className="text-xs font-medium text-gray-600 block">Click to upload drawing, sample photo, or PDF</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-primary w-full py-3.5 text-sm font-bold tracking-wide flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    SEND ENQUIRY TO HINDUSTAN FASTENERS
                  </button>

                  {/* Footer Trust Strip */}
                  <div className="flex items-center justify-center gap-4 pt-1 text-[10px] font-mono text-gray-400">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-500" /> IATF 16949 Certified</span>
                    <span>·</span>
                    <span>Satpur MIDC, Nashik</span>
                    <span>·</span>
                    <span>24hr Response</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
