import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Factory, MapPin, Sparkles, Navigation, Layers, ShieldCheck, CheckCircle2, Building, ArrowRight } from 'lucide-react';

export interface PlantLocationInfo {
  id: string;
  name: string;
  region: 'nashik' | 'pantnagar' | 'sambhajinagar';
  regionName: string;
  state: string;
  tag: string;
  status: 'Operational' | 'Upcoming Mega Plant';
  address: string;
  area: string;
  capacity: string;
  capabilities: string[];
  keyHighlight: string;
  phone: string;
  email: string;
  coords: { x: number; z: number };
}

export const plantLocationsData: PlantLocationInfo[] = [
  {
    id: 'nashik-plant-1',
    name: 'Manufacturing Plant 1 (Nashik)',
    region: 'nashik',
    regionName: 'Satpur MIDC, Nashik',
    state: 'Maharashtra',
    tag: 'Cold Forging & Heading Bay',
    status: 'Operational',
    address: 'Plot No. 42 & 43, Satpur MIDC Industrial Area, Nashik - 422 007, Maharashtra, India',
    area: '75,000 sq. mtr.',
    capacity: '18,000 MT / Year',
    capabilities: [
      'Multi-station high-speed cold headers (M4 to M24)',
      'Continuous metallurgical grain-flow wire drawing',
      'Automated optical laser sorting & dimensional verification',
      'High-tensile Grade 8.8, 10.9 & 12.9 standard bolt formers'
    ],
    keyHighlight: 'Primary Cold Heading & Heavy Wire Drawing Center',
    phone: '+91 (253) 235 0890',
    email: 'marketing@hfpfs.com',
    coords: { x: -3.2, z: 1.2 }
  },
  {
    id: 'nashik-plant-2',
    name: 'Manufacturing Plant 2 (Nashik)',
    region: 'nashik',
    regionName: 'Satpur MIDC, Nashik',
    state: 'Maharashtra',
    tag: '5/6-Die Heavy Heading & Secondary Bay',
    status: 'Operational',
    address: 'Plot No. 58, Satpur MIDC Industrial Area, Nashik - 422 007, Maharashtra, India',
    area: '55,000 sq. mtr.',
    capacity: '14,000 MT / Year',
    capabilities: [
      '5-Die & 6-Die progressive heavy heading formers',
      'In-house CNC machining, automated tapping & slotting',
      'Washer assembly thread rolling for captive SEMS fasteners',
      'Special wheel studs, banjo bolts & precision socket screws'
    ],
    keyHighlight: 'Multi-Die Complex Component Forging & In-House Tooling Bay',
    phone: '+91 (253) 235 0890',
    email: 'marketing@hfpfs.com',
    coords: { x: -2.2, z: 1.8 }
  },
  {
    id: 'nashik-plant-3',
    name: 'Manufacturing Plant 3 (Nashik)',
    region: 'nashik',
    regionName: 'Satpur MIDC, Nashik',
    state: 'Maharashtra',
    tag: 'SCADA Heat Treatment & PLC Plating',
    status: 'Operational',
    address: 'Plot No. 112, Satpur MIDC Industrial Area, Nashik - 422 007, Maharashtra, India',
    area: '40,000 sq. mtr.',
    capacity: '12,000 MT / Year',
    capabilities: [
      'Continuous mesh-belt SCADA hardening & tempering furnaces',
      'Automated PLC hoists for Trivalent Zinc & Phosphating',
      'Geomet & Dacromet Zinc Flake anti-corrosion coating (1500+ hrs SST)',
      'Technofour Eddy Current 100% NDT crack & hardness sorting'
    ],
    keyHighlight: 'SCADA Atmospheric Furnace Lines & PLC Automated Plating',
    phone: '+91 (253) 235 0890',
    email: 'marketing@hfpfs.com',
    coords: { x: -2.8, z: 0.2 }
  },
  {
    id: 'pantnagar-plant-1',
    name: 'Manufacturing Plant 4 (Pantnagar Unit 1)',
    region: 'pantnagar',
    regionName: 'Sector 7, Pantnagar',
    state: 'Uttarakhand',
    tag: 'Automotive Fasteners Production Hub',
    status: 'Operational',
    address: 'Plot No. 14, Sector 7, IIE Pantnagar, Udham Singh Nagar - 263 153, Uttarakhand, India',
    area: '30,000 sq. mtr.',
    capacity: '6,000 MT / Year',
    capabilities: [
      'Automotive OEM dedicated high-speed bolt and screw lines',
      'Just-In-Time (JIT) manufacturing for North India auto clusters',
      'NABL aligned quality testing and profile projectors',
      'Automated packaging, barcoded palletization & safety stock'
    ],
    keyHighlight: 'Dedicated North India Automotive OEM Fastener Line',
    phone: '+91 (5944) 250 120',
    email: 'marketing@hfpfs.com',
    coords: { x: 2.2, z: -2.8 }
  },
  {
    id: 'pantnagar-plant-2',
    name: 'Manufacturing Plant 5 (Pantnagar Unit 2)',
    region: 'pantnagar',
    regionName: 'Sector 7, Pantnagar',
    state: 'Uttarakhand',
    tag: 'Special Components & Stamping Bay',
    status: 'Operational',
    address: 'Plot No. 18, Sector 7, IIE Pantnagar, Udham Singh Nagar - 263 153, Uttarakhand, India',
    area: '20,000 sq. mtr.',
    capacity: '4,000 MT / Year',
    capabilities: [
      'Precision stamping & deep-draw bracket fabrication',
      'Specialty captive washer rolling & high-speed sub-assemblies',
      'Finished goods buffer inventory & EDI order replenishment',
      'Direct line feeding for commercial vehicles and tractors'
    ],
    keyHighlight: 'Precision Stamped Brackets, SEMS Assemblies & Logistics Hub',
    phone: '+91 (5944) 250 120',
    email: 'marketing@hfpfs.com',
    coords: { x: 3.4, z: -2.2 }
  },
  {
    id: 'sambhajinagar-mega-plant',
    name: 'Upcoming Mega Plant (Chhatrapati Sambhajinagar)',
    region: 'sambhajinagar',
    regionName: 'Shendra MIDC / DMIC',
    state: 'Maharashtra',
    tag: 'Next-Gen Smart Industry 4.0 Mega Plant',
    status: 'Upcoming Mega Plant',
    address: 'AURIC / Shendra DMIC Node, Chhatrapati Sambhajinagar (Aurangabad) - 431 154, Maharashtra, India',
    area: 'Upcoming Mega Expansion',
    capacity: 'Target +20,000 MT / Year',
    capabilities: [
      'Industry 4.0 connected smart forging and automated lines',
      'Electric Vehicle (EV) high-voltage lightweight alloy fasteners',
      'Solar-powered green manufacturing with zero liquid discharge (ZLD)',
      'Automated robotic material handling & automated storage (AS/RS)'
    ],
    keyHighlight: 'Upcoming Mega Facility for EV Fasteners, Green Tech & Global Exports',
    phone: '+91 (253) 235 0890',
    email: 'marketing@hfpfs.com',
    coords: { x: -0.2, z: 2.6 }
  }
];

export const Interactive3DPlantMap: React.FC<{
  selectedRegion: 'all' | 'nashik' | 'pantnagar' | 'sambhajinagar';
  onSelectRegion: (region: 'all' | 'nashik' | 'pantnagar' | 'sambhajinagar') => void;
  selectedPlantId: string | null;
  onSelectPlant: (plant: PlantLocationInfo) => void;
}> = ({ selectedRegion, onSelectRegion, selectedPlantId, onSelectPlant }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const markersRef = useRef<{ id: string; mesh: THREE.Group; plant: PlantLocationInfo }[]>([]);
  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0.55, y: -0.3 });
  const currentRotationRef = useRef({ x: 0.55, y: -0.3 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060c1d);
    scene.fog = new THREE.FogExp2(0x060c1d, 0.045);
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 11, 14);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x60a5fa, 2.2);
    dirLight.position.set(8, 16, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const pointLightOrange = new THREE.PointLight(0xf59e0b, 2.0, 20);
    pointLightOrange.position.set(-3, 4, 1);
    scene.add(pointLightOrange);

    const pointLightCyan = new THREE.PointLight(0x38bdf8, 2.5, 25);
    pointLightCyan.position.set(2, 5, -2);
    scene.add(pointLightCyan);

    // 5. Ground / Interactive Map Platform
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Base Island Disc
    const baseGeo = new THREE.CylinderGeometry(8.5, 9.0, 0.5, 64);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0c1938,
      metalness: 0.6,
      roughness: 0.35,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.25;
    baseMesh.receiveShadow = true;
    rootGroup.add(baseMesh);

    // Grid Overlay on Top
    const gridHelper = new THREE.GridHelper(15, 30, 0x3b82f6, 0x1e3a8a);
    gridHelper.position.y = 0.02;
    rootGroup.add(gridHelper);

    // Outer Glowing Ring
    const ringGeo = new THREE.RingGeometry(8.5, 8.8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.04;
    rootGroup.add(ringMesh);

    // Glowing Concentric Range Rings for Indian Manufacturing Corridors
    const createRangeRing = (radius: number, color: number, opacity: number) => {
      const g = new THREE.RingGeometry(radius - 0.04, radius + 0.04, 64);
      const m = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity });
      const r = new THREE.Mesh(g, m);
      r.rotation.x = -Math.PI / 2;
      r.position.y = 0.03;
      rootGroup.add(r);
    };
    createRangeRing(3.2, 0x60a5fa, 0.35);
    createRangeRing(5.2, 0x38bdf8, 0.25);
    createRangeRing(7.2, 0x818cf8, 0.2);

    // 6. Connecting High-Tech Laser Arc Lines between Plants
    const createArcLine = (v1: THREE.Vector3, v2: THREE.Vector3, color: number) => {
      const mid = new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5);
      mid.y += 2.2;
      const curve = new THREE.QuadraticBezierCurve3(v1, mid, v2);
      const points = curve.getPoints(40);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.65, linewidth: 2 });
      const arc = new THREE.Line(lineGeo, lineMat);
      rootGroup.add(arc);
    };

    const nashikPos = new THREE.Vector3(-2.8, 0.1, 1.0);
    const pantnagarPos = new THREE.Vector3(2.8, 0.1, -2.5);
    const sambhajiPos = new THREE.Vector3(-0.2, 0.1, 2.6);

    createArcLine(nashikPos, pantnagarPos, 0x38bdf8);
    createArcLine(nashikPos, sambhajiPos, 0xf59e0b);
    createArcLine(pantnagarPos, sambhajiPos, 0xa855f7);

    // 7. 3D Factory Building Models & Floating Location Markers
    markersRef.current = [];

    const buildingMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.2,
    });
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.5,
      roughness: 0.3,
    });
    const orangeRoofMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.6,
      roughness: 0.3,
    });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.7,
      roughness: 0.1,
    });

    plantLocationsData.forEach((plant) => {
      const group = new THREE.Group();
      group.position.set(plant.coords.x, 0, plant.coords.z);

      // Industrial Building Complex (3D Factory with shed roof, chimney & windows)
      const isMega = plant.id === 'sambhajinagar-mega-plant';
      const bWidth = isMega ? 1.4 : 0.9;
      const bLength = isMega ? 1.4 : 1.1;
      const bHeight = isMega ? 0.9 : 0.6;

      // Factory main block
      const bGeo = new THREE.BoxGeometry(bWidth, bHeight, bLength);
      const bMesh = new THREE.Mesh(bGeo, buildingMat);
      bMesh.position.y = bHeight / 2;
      bMesh.castShadow = true;
      bMesh.receiveShadow = true;
      group.add(bMesh);

      // Factory Roof
      const roofGeo = new THREE.ConeGeometry(bWidth * 0.7, 0.4, 4);
      const roofMesh = new THREE.Mesh(roofGeo, isMega ? orangeRoofMat : roofMat);
      roofMesh.rotation.y = Math.PI / 4;
      roofMesh.position.y = bHeight + 0.2;
      roofMesh.castShadow = true;
      group.add(roofMesh);

      // Glowing Glass Strip
      const windowGeo = new THREE.BoxGeometry(bWidth * 0.85, 0.12, bLength * 1.02);
      const windowMesh = new THREE.Mesh(windowGeo, glassMat);
      windowMesh.position.y = bHeight * 0.55;
      group.add(windowMesh);

      // Industrial Chimney / Exhaust Stack
      const chimGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.9, 12);
      const chimMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.7 });
      const chimMesh = new THREE.Mesh(chimGeo, chimMat);
      chimMesh.position.set(bWidth * 0.35, bHeight + 0.35, -bLength * 0.3);
      chimMesh.castShadow = true;
      group.add(chimMesh);

      // Floating Hologram Pin & Indicator
      const pinGroup = new THREE.Group();
      pinGroup.position.y = bHeight + 1.2;

      // Glowing Diamond Marker
      const diamGeo = new THREE.OctahedronGeometry(0.24, 0);
      const diamMat = new THREE.MeshStandardMaterial({
        color: isMega ? 0xf59e0b : plant.region === 'pantnagar' ? 0x10b981 : 0x38bdf8,
        emissive: isMega ? 0xd97706 : plant.region === 'pantnagar' ? 0x059669 : 0x0284c7,
        emissiveIntensity: 1.2,
        metalness: 0.9,
        roughness: 0.1,
      });
      const diamMesh = new THREE.Mesh(diamGeo, diamMat);
      diamMesh.name = 'diamond';
      pinGroup.add(diamMesh);

      // Holographic Light Pillar Stem
      const stemGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.9, 8);
      const stemMat = new THREE.MeshBasicMaterial({
        color: isMega ? 0xf59e0b : 0x38bdf8,
        transparent: true,
        opacity: 0.75,
      });
      const stemMesh = new THREE.Mesh(stemGeo, stemMat);
      stemMesh.position.y = -0.45;
      pinGroup.add(stemMesh);

      group.add(pinGroup);
      rootGroup.add(group);

      markersRef.current.push({
        id: plant.id,
        mesh: group,
        plant,
      });
    });

    // 8. Animation & Render Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotation dampening
      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.08;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.08;

      rootGroup.rotation.x = currentRotationRef.current.x;
      rootGroup.rotation.y = currentRotationRef.current.y + (isDraggingRef.current ? 0 : elapsedTime * 0.05);

      // Animate floating diamond markers
      markersRef.current.forEach((m, idx) => {
        const pin = m.mesh.children[m.mesh.children.length - 1] as THREE.Group;
        if (pin) {
          pin.position.y = 1.6 + Math.sin(elapsedTime * 2.5 + idx * 0.8) * 0.12;
          const diamond = pin.getObjectByName('diamond');
          if (diamond) {
            diamond.rotation.y = elapsedTime * 2.0;
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // 9. Interactive Drag & Mouse Handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMouseRef.current.x;
      const deltaY = e.clientY - prevMouseRef.current.y;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };

      targetRotationRef.current.y += deltaX * 0.007;
      targetRotationRef.current.x = Math.max(0.15, Math.min(1.1, targetRotationRef.current.x + deltaY * 0.007));
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch Handlers
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseRef.current.x;
      const deltaY = e.touches[0].clientY - prevMouseRef.current.y;
      prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      targetRotationRef.current.y += deltaX * 0.008;
      targetRotationRef.current.x = Math.max(0.15, Math.min(1.1, targetRotationRef.current.x + deltaY * 0.008));
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domElem.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 450;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElem.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  // Filter plants based on region
  const filteredPlants = selectedRegion === 'all'
    ? plantLocationsData
    : plantLocationsData.filter((p) => p.region === selectedRegion);

  const activePlant = plantLocationsData.find((p) => p.id === selectedPlantId) || filteredPlants[0];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch">
      {/* 3D Visualizer Canvas Box */}
      <div className="w-full lg:w-7/12 flex flex-col rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden relative">
        {/* Top Control Strip */}
        <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-[11px] font-mono font-bold tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Interactive 3D Manufacturing Network
            </div>
            <h4 className="text-white font-bold font-display text-sm sm:text-base">
              Explore 5 Operational Plants + 1 Upcoming Mega Plant
            </h4>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
            <span>Drag to rotate</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          </div>
        </div>

        {/* Region Filter Buttons */}
        <div className="px-4 py-3 bg-slate-900/60 border-b border-slate-800/80 flex flex-wrap items-center gap-2 z-10 text-xs font-mono">
          <button
            onClick={() => onSelectRegion('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              selectedRegion === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            🇮🇳 All Facilities ({plantLocationsData.length})
          </button>
          <button
            onClick={() => onSelectRegion('nashik')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              selectedRegion === 'nashik'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            Nashik, MH (3 Plants)
          </button>
          <button
            onClick={() => onSelectRegion('pantnagar')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              selectedRegion === 'pantnagar'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/40 border border-emerald-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            Pantnagar, UK (2 Plants)
          </button>
          <button
            onClick={() => onSelectRegion('sambhajinagar')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              selectedRegion === 'sambhajinagar'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/40 border border-amber-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            Chhatrapati Sambhajinagar (Mega Plant)
          </button>
        </div>

        {/* 3D Viewport Container */}
        <div ref={mountRef} className="w-full h-[360px] sm:h-[440px] cursor-grab active:cursor-grabbing relative">
          {/* Overlay Quick Specs */}
          <div className="absolute bottom-3 left-3 right-3 pointer-events-none flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-400 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-xl border border-slate-800">
            <span className="text-cyan-300 font-bold">● Total Space: 2,20,000 sq. mtr.</span>
            <span className="text-blue-300 font-bold">● Aggregate Output: 54,000 MT/Year</span>
            <span className="text-emerald-300 font-bold">● 3,00,000+ Fastener Varieties</span>
          </div>
        </div>

        {/* Plant Selector Pills Below Canvas */}
        <div className="p-3 bg-slate-900/90 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-2">
          {filteredPlants.map((plant) => {
            const isSelected = activePlant?.id === plant.id;
            return (
              <button
                key={plant.id}
                onClick={() => onSelectPlant(plant)}
                className={`p-2.5 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-400 text-white shadow-md ring-1 ring-blue-500'
                    : 'bg-slate-800/50 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-300 font-bold flex items-center justify-between">
                  <span>{plant.state}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] ${plant.status === 'Operational' ? 'bg-emerald-950 text-emerald-300' : 'bg-amber-950 text-amber-300'}`}>
                    {plant.status === 'Operational' ? 'Active' : 'Upcoming'}
                  </span>
                </div>
                <div className="text-xs font-bold font-display text-white truncate mt-0.5">{plant.name}</div>
                <div className="text-[10px] text-slate-400 truncate">{plant.tag}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Plant In-Depth Information Panel */}
      <div className="w-full lg:w-5/12 flex flex-col justify-between rounded-3xl bg-white border border-gray-200 shadow-xl p-5 sm:p-7 text-gray-900">
        {activePlant ? (
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider mb-2 border ${
                  activePlant.status === 'Operational'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}>
                  <Building className="w-3.5 h-3.5" /> {activePlant.regionName} · {activePlant.state}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-display text-gray-950 leading-snug">
                  {activePlant.name}
                </h3>
                <p className="text-xs font-mono text-blue-900 font-bold mt-0.5">
                  {activePlant.keyHighlight}
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-[#FAFAF9] border border-gray-200">
                <span className="text-[10px] font-mono text-gray-500 font-semibold block">Production Area</span>
                <span className="text-sm font-bold text-gray-950">{activePlant.area}</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FAFAF9] border border-gray-200">
                <span className="text-[10px] font-mono text-gray-500 font-semibold block">Annual Capacity</span>
                <span className="text-sm font-bold text-blue-900">{activePlant.capacity}</span>
              </div>
            </div>

            {/* Address */}
            <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-950 block mb-0.5">Facility Address</span>
                  <span className="text-gray-700 leading-relaxed">{activePlant.address}</span>
                </div>
              </div>
            </div>

            {/* Core Capabilities */}
            <div>
              <span className="text-xs font-mono text-gray-500 font-bold uppercase tracking-wider block mb-2">
                Plant Engineering Capabilities:
              </span>
              <ul className="space-y-2">
                {activePlant.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-700 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Plant Contact Strip */}
            <div className="pt-3 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div>
                <span className="text-[10px] text-gray-500 block">Plant Telephone:</span>
                <a href={`tel:${activePlant.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-gray-900 hover:text-blue-600 transition">
                  {activePlant.phone}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 block">Inquiry Email:</span>
                <a href={`mailto:${activePlant.email}`} className="font-bold text-blue-900 hover:text-blue-700 transition">
                  {activePlant.email}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
