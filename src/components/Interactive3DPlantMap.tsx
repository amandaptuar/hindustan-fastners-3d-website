import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapPin,
  ExternalLink,
  Phone,
  Mail,
  Building2,
  Factory,
  Layers,
  Navigation,
  Compass,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export interface PlantLocationInfo {
  id: string;
  pinNumber: number;
  name: string;
  region: 'nashik' | 'pantnagar' | 'sambhajinagar';
  regionLabel: string;
  state: string;
  status: 'Active' | 'Upcoming Mega Plant';
  address: string;
  capacity: string;
  area: string;
  phone: string;
  email: string;
  googleQuery: string;
  lat: number;
  lng: number;
  latLabel: string;
  lngLabel: string;
}

export const plantLocationsData: PlantLocationInfo[] = [
  {
    id: 'nashik-plant-1',
    pinNumber: 1,
    name: 'Plant 1 — Cold Forging & Heading Bay',
    region: 'nashik',
    regionLabel: 'Satpur MIDC, Nashik',
    state: 'Maharashtra',
    status: 'Active',
    address: 'Plot 42 & 43, Satpur MIDC Industrial Area, Nashik - 422 007, Maharashtra',
    capacity: '18,000 MT / Year',
    area: '75,000 sq. mtr.',
    phone: '+91 (253) 235 0890',
    email: 'marketing@hfpfs.com',
    googleQuery: 'Plot+42+Satpur+MIDC+Industrial+Area+Nashik+Maharashtra+422007',
    lat: 19.9967,
    lng: 73.7380,
    latLabel: "19°59'48.2\"N",
    lngLabel: "73°44'16.8\"E"
  },
  {
    id: 'nashik-plant-2',
    pinNumber: 2,
    name: 'Plant 2 — Heavy Heading & Secondary Bay',
    region: 'nashik',
    regionLabel: 'Satpur MIDC, Nashik',
    state: 'Maharashtra',
    status: 'Active',
    address: 'Plot 58, Satpur MIDC Industrial Area, Nashik - 422 007, Maharashtra',
    capacity: '14,000 MT / Year',
    area: '55,000 sq. mtr.',
    phone: '+91 (253) 235 0890',
    email: 'marketing@hfpfs.com',
    googleQuery: 'Plot+58+Satpur+MIDC+Industrial+Area+Nashik+Maharashtra+422007',
    lat: 19.9982,
    lng: 73.7435,
    latLabel: "20°00'04.1\"N",
    lngLabel: "73°44'36.6\"E"
  },
  {
    id: 'nashik-plant-3',
    pinNumber: 3,
    name: 'Plant 3 — SCADA Furnace & Plating Line',
    region: 'nashik',
    regionLabel: 'Satpur MIDC, Nashik',
    state: 'Maharashtra',
    status: 'Active',
    address: 'Plot 112, Satpur MIDC Industrial Area, Nashik - 422 007, Maharashtra',
    capacity: '12,000 MT / Year',
    area: '40,000 sq. mtr.',
    phone: '+91 (253) 235 0890',
    email: 'marketing@hfpfs.com',
    googleQuery: 'Plot+112+Satpur+MIDC+Industrial+Area+Nashik+Maharashtra+422007',
    lat: 19.9940,
    lng: 73.7480,
    latLabel: "19°59'38.4\"N",
    lngLabel: "73°44'52.8\"E"
  },
  {
    id: 'pantnagar-plant',
    pinNumber: 4,
    name: 'Plant 4 & 5 — IIE Pantnagar Hub',
    region: 'pantnagar',
    regionLabel: 'Sector 7, IIE Pantnagar',
    state: 'Uttarakhand',
    status: 'Active',
    address: 'Plot 14 & 18, Sector 7, Integrated Industrial Estate (IIE) Pantnagar - 263 153, Uttarakhand',
    capacity: '10,000 MT / Year',
    area: '50,000 sq. mtr.',
    phone: '+91 (5944) 250 120',
    email: 'marketing@hfpfs.com',
    googleQuery: 'Sector+7+Integrated+Industrial+Estate+Pantnagar+Udham+Singh+Nagar+Uttarakhand+263153',
    lat: 29.0291,
    lng: 79.4051,
    latLabel: "29°01'44.8\"N",
    lngLabel: "79°24'18.3\"E"
  },
  {
    id: 'sambhajinagar-mega-plant',
    pinNumber: 5,
    name: 'Upcoming Mega Plant — Chhatrapati Sambhajinagar',
    region: 'sambhajinagar',
    regionLabel: 'AURIC / Shendra DMIC',
    state: 'Maharashtra',
    status: 'Upcoming Mega Plant',
    address: 'AURIC City, Shendra DMIC Smart Industrial Node, Chhatrapati Sambhajinagar, Maharashtra',
    capacity: 'Target +20,000 MT / Year',
    area: 'Upcoming Mega Campus',
    phone: '+91 (253) 235 0890',
    email: 'marketing@hfpfs.com',
    googleQuery: 'AURIC+City+Shendra+MIDC+Chhatrapati+Sambhajinagar+Maharashtra',
    lat: 19.8837,
    lng: 75.4636,
    latLabel: "19°53'02.4\"N",
    lngLabel: "75°27'48.9\"E"
  }
];

export const Interactive3DPlantMap: React.FC<{
  selectedRegion: 'all' | 'nashik' | 'pantnagar' | 'sambhajinagar';
  onSelectRegion: (region: 'all' | 'nashik' | 'pantnagar' | 'sambhajinagar') => void;
  selectedPlantId: string | null;
  onSelectPlant: (plant: PlantLocationInfo) => void;
}> = ({ selectedRegion, onSelectRegion, selectedPlantId, onSelectPlant }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});

  const [mapMode, setMapMode] = useState<'all' | 'nashik' | 'pantnagar' | 'sambhajinagar'>('all');

  // High-Resolution ESRI World Satellite Imagery URL
  const satelliteUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

  // Initialize Leaflet Satellite Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Create Map
    const map = L.map(mapContainerRef.current, {
      center: [22.8, 76.5],
      zoom: 5,
      minZoom: 4,
      maxZoom: 18,
      zoomControl: false,
      attributionControl: false
    });

    // Add Pure Satellite Layer
    L.tileLayer(satelliteUrl, {
      maxZoom: 19,
      subdomains: 'abcd'
    }).addTo(map);

    // Create custom pin icons for all 5 plants
    plantLocationsData.forEach((plant) => {
      const isMega = plant.status === 'Upcoming Mega Plant';
      const pinColor = isMega ? '#F59E0B' : '#2563EB';
      const glowColor = isMega ? 'rgba(245, 158, 11, 0.6)' : 'rgba(37, 99, 235, 0.6)';

      const customIcon = L.divIcon({
        className: 'custom-plant-pin',
        html: `
          <div class="relative group cursor-pointer" style="transform: translate(-50%, -100%);">
            <!-- Sonar Pulse Ring -->
            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500/40 animate-ping pointer-events-none"></span>
            
            <!-- 3D Pin Body -->
            <div class="relative flex flex-col items-center">
              <div style="background: linear-gradient(135deg, ${pinColor}, #1E3A8A); border: 2.5px solid #FFFFFF; box-shadow: 0 8px 20px ${glowColor};" 
                   class="w-8 h-10 sm:w-9 sm:h-11 rounded-t-full rounded-b-[45%] flex flex-col items-center justify-start pt-1 text-white font-mono font-black text-xs transition-transform hover:scale-115">
                <span class="text-[11px] font-black drop-shadow">${plant.pinNumber}</span>
                <svg class="w-3 h-3 text-white/90 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div class="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-indigo-950 -mt-0.5"></div>
            </div>

            <!-- Floating Label -->
            <div class="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-950/90 text-cyan-300 border border-slate-700 text-[9.5px] font-mono font-bold whitespace-nowrap shadow-lg pointer-events-none backdrop-blur-sm">
              ${plant.name.split('—')[0].trim()}
            </div>
          </div>
        `,
        iconSize: [36, 44],
        iconAnchor: [18, 44]
      });

      const marker = L.marker([plant.lat, plant.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        onSelectPlant(plant);
        map.flyTo([plant.lat, plant.lng], 16, { duration: 1.2 });
      });

      markersRef.current[plant.id] = marker;
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Handle flyTo when mapMode or selectedPlant changes
  const flyToRegion = (mode: 'all' | 'nashik' | 'pantnagar' | 'sambhajinagar') => {
    setMapMode(mode);
    onSelectRegion(mode);
    if (!mapInstanceRef.current) return;

    if (mode === 'all') {
      mapInstanceRef.current.flyTo([22.8, 76.5], 5.5, { duration: 1.5 });
    } else if (mode === 'nashik') {
      mapInstanceRef.current.flyTo([19.9965, 73.7420], 14.5, { duration: 1.5 });
    } else if (mode === 'pantnagar') {
      mapInstanceRef.current.flyTo([29.0291, 79.4051], 14.0, { duration: 1.5 });
    } else if (mode === 'sambhajinagar') {
      mapInstanceRef.current.flyTo([19.8837, 75.4636], 13.5, { duration: 1.5 });
    }
  };

  const handleSelectPlantCard = (plant: PlantLocationInfo) => {
    onSelectPlant(plant);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([plant.lat, plant.lng], 16, { duration: 1.4 });
    }
  };

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-slate-950 text-white relative">
      {/* ── TOP CONTROL HUD ── */}
      <div className="bg-slate-900/95 backdrop-blur-md px-3 sm:px-5 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 z-20 relative">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
            🛰️ SATELLITE RADAR VIEW · 5 PINS ACTIVE
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => flyToRegion('all')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold transition flex items-center gap-1.5 ${
              mapMode === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🇮🇳 All India (5 Pins)</span>
          </button>
          <button
            onClick={() => flyToRegion('nashik')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold transition flex items-center gap-1.5 ${
              mapMode === 'nashik'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>📍 Nashik Hub (3 Pins)</span>
          </button>
          <button
            onClick={() => flyToRegion('pantnagar')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold transition flex items-center gap-1.5 ${
              mapMode === 'pantnagar'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>📍 Uttarakhand</span>
          </button>
        </div>
      </div>

      {/* ── REAL LEAFLET SATELLITE MAP CANVAS ── */}
      <div className="relative w-full h-[400px] sm:h-[480px] bg-[#0c1626]">
        <div ref={mapContainerRef} className="w-full h-full z-10" />

        {/* Floating Zoom & Center Controls */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-30">
          <button
            onClick={() => mapInstanceRef.current?.zoomIn()}
            className="w-8 h-8 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white flex items-center justify-center border border-slate-700 shadow-md transition"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4 text-cyan-300" />
          </button>
          <button
            onClick={() => mapInstanceRef.current?.zoomOut()}
            className="w-8 h-8 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white flex items-center justify-center border border-slate-700 shadow-md transition"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4 text-cyan-300" />
          </button>
          <button
            onClick={() => flyToRegion('all')}
            className="w-8 h-8 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white flex items-center justify-center border border-slate-700 shadow-md transition"
            title="Reset All India View"
          >
            <RotateCcw className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
