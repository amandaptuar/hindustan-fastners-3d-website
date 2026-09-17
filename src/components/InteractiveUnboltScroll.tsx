import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, useScroll } from "framer-motion";
import { RotateCw, Layers, Eye } from "lucide-react";

export function InteractiveUnboltScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [manualScrub, setManualScrub] = useState<number | null>(null);
  const [currentProgress, setCurrentProgress] = useState(0);

  // Scroll tracking across section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Three.js Scene refs
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    boltGroup: THREE.Group;
    nutMesh: THREE.Mesh;
    washerMesh: THREE.Mesh;
    springWasherMesh: THREE.Mesh;
    materials: THREE.Material[];
    targetScroll: number;
    currentScroll: number;
  } | null>(null);

  const setStage = (p: number) => {
    setManualScrub(p);
    setCurrentProgress(p);
    if (sceneRef.current) {
      sceneRef.current.targetScroll = p;
    }
    setTimeout(() => {
      setManualScrub(null);
    }, 1200);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      36,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);
    camera.lookAt(0, 0, 0);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(6, 8, 8);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x0284c7, 2.2);
    rimLight.position.set(-7, -2, -4);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xfef08a, 1.2);
    fillLight.position.set(0, -5, 5);
    scene.add(fillLight);

    // Materials
    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.92,
      roughness: 0.2,
      wireframe: wireframe,
    });

    const threadMaterial = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.95,
      roughness: 0.16,
      wireframe: wireframe,
    });

    const goldNutMaterial = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.9,
      roughness: 0.22,
      wireframe: wireframe,
    });

    const washerMaterial = new THREE.MeshStandardMaterial({
      color: 0xcfd8dc,
      metalness: 0.96,
      roughness: 0.14,
      wireframe: wireframe,
    });

    const materials = [titaniumMaterial, threadMaterial, goldNutMaterial, washerMaterial];

    // Master Group
    const boltGroup = new THREE.Group();
    boltGroup.position.set(-0.3, 0, 0);
    boltGroup.scale.set(0.65, 0.65, 0.65);
    scene.add(boltGroup);

    // 1. Bolt Head (Hexagon + Flange)
    const hexHeadGeo = new THREE.CylinderGeometry(0.75, 0.75, 0.45, 6);
    const hexHeadMesh = new THREE.Mesh(hexHeadGeo, titaniumMaterial);
    hexHeadMesh.rotation.z = Math.PI / 2;
    hexHeadMesh.position.x = -1.6;
    boltGroup.add(hexHeadMesh);

    const flangeGeo = new THREE.CylinderGeometry(0.95, 0.95, 0.08, 32);
    const flangeMesh = new THREE.Mesh(flangeGeo, titaniumMaterial);
    flangeMesh.rotation.z = Math.PI / 2;
    flangeMesh.position.x = -1.35;
    boltGroup.add(flangeMesh);

    // 2. Shank
    const shankGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.8, 32);
    const shankMesh = new THREE.Mesh(shankGeo, titaniumMaterial);
    shankMesh.rotation.z = Math.PI / 2;
    shankMesh.position.x = -0.9;
    boltGroup.add(shankMesh);

    // 3. Threaded Section
    const threadGroup = new THREE.Group();
    const threadCylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(0.41, 0.41, 2.2, 32),
      threadMaterial
    );
    threadCylinder.rotation.z = Math.PI / 2;
    threadGroup.add(threadCylinder);

    for (let i = -1.0; i <= 1.0; i += 0.075) {
      const ridge = new THREE.Mesh(
        new THREE.TorusGeometry(0.43, 0.024, 12, 32),
        threadMaterial
      );
      ridge.rotation.y = Math.PI / 2;
      ridge.position.x = i;
      threadGroup.add(ridge);
    }
    threadGroup.position.x = 0.5;
    boltGroup.add(threadGroup);

    // 4. Spring Wave Washer
    const springWasherGeo = new THREE.TorusGeometry(0.58, 0.065, 16, 40);
    const springWasherMesh = new THREE.Mesh(springWasherGeo, washerMaterial);
    springWasherMesh.rotation.y = Math.PI / 2;
    springWasherMesh.position.x = -0.4;
    boltGroup.add(springWasherMesh);

    // 5. Flat Hardened Washer
    const flatWasherGeo = new THREE.CylinderGeometry(0.72, 0.72, 0.07, 32);
    const flatWasherMesh = new THREE.Mesh(flatWasherGeo, washerMaterial);
    flatWasherMesh.rotation.z = Math.PI / 2;
    flatWasherMesh.position.x = -0.2;
    boltGroup.add(flatWasherMesh);

    // 6. Lock Nut Group
    const nutGroup = new THREE.Group();
    const nutBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.72, 0.72, 0.5, 6),
      goldNutMaterial
    );
    nutBody.rotation.z = Math.PI / 2;
    nutGroup.add(nutBody);

    const nutFlange = new THREE.Mesh(
      new THREE.CylinderGeometry(0.88, 0.88, 0.08, 32),
      goldNutMaterial
    );
    nutFlange.rotation.z = Math.PI / 2;
    nutFlange.position.x = -0.26;
    nutGroup.add(nutFlange);

    nutGroup.position.x = 0.15; // Locked position
    boltGroup.add(nutGroup);

    boltGroup.rotation.y = 0.35;
    boltGroup.rotation.x = 0.15;

    sceneRef.current = {
      scene,
      camera,
      renderer,
      boltGroup,
      nutMesh: nutGroup as unknown as THREE.Mesh,
      washerMesh: flatWasherMesh,
      springWasherMesh: springWasherMesh,
      materials,
      targetScroll: 0,
      currentScroll: 0,
    };

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      if (window.innerWidth < 640) {
        camera.position.z = 9.5;
        boltGroup.scale.set(0.50, 0.50, 0.50);
      } else {
        camera.position.z = 7.5;
        boltGroup.scale.set(0.68, 0.68, 0.68);
      }
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse & Touch 360 drag rotation
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onStart = (clientX: number, clientY: number) => {
      isDragging = true;
      prevX = clientX;
      prevY = clientY;
    };

    const onMove = (clientX: number, clientY: number) => {
      if (!isDragging || !sceneRef.current) return;
      const deltaX = clientX - prevX;
      const deltaY = clientY - prevY;
      sceneRef.current.boltGroup.rotation.y += deltaX * 0.008;
      sceneRef.current.boltGroup.rotation.x += deltaY * 0.008;
      prevX = clientX;
      prevY = clientY;
    };

    const onEnd = () => {
      isDragging = false;
    };

    const onMouseDown = (e: MouseEvent) => onStart(e.clientX, e.clientY);
    const onMouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const onMouseUp = () => onEnd();

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onStart(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && isDragging) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onTouchEnd = () => onEnd();

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Render loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!sceneRef.current) return;

      const { currentScroll, targetScroll, boltGroup, nutMesh, washerMesh, springWasherMesh } = sceneRef.current;

      // Lerp for smooth animation
      sceneRef.current.currentScroll += (targetScroll - currentScroll) * 0.1;
      const p = Math.min(1.0, Math.max(0, sceneRef.current.currentScroll));

      // STAGE 1 & 2: Nut Unbolting
      if (p <= 0.55) {
        const nutNorm = p / 0.55;
        nutMesh.position.x = 0.15 + nutNorm * 1.55;
        nutMesh.rotation.x = nutNorm * Math.PI * 14;
        washerMesh.position.x = -0.2;
        springWasherMesh.position.x = -0.4;
      } 
      // STAGE 3 & 4: Exploded Component Separation
      else {
        const explodeNorm = (p - 0.55) / 0.45;
        nutMesh.position.x = 1.7 + explodeNorm * 1.6;
        nutMesh.rotation.x = Math.PI * 14 + explodeNorm * Math.PI * 2;
        nutMesh.rotation.y = explodeNorm * 0.35;

        washerMesh.position.x = -0.2 + explodeNorm * 0.65;
        springWasherMesh.position.x = -0.4 + explodeNorm * 0.35;

        boltGroup.position.y = Math.sin(explodeNorm * Math.PI) * 0.12;
      }

      if (autoRotate) {
        boltGroup.rotation.y += 0.012;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);

      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);

      renderer.dispose();
    };
  }, [autoRotate]);

  // Update wireframe mode
  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.materials.forEach((mat) => {
      (mat as THREE.MeshStandardMaterial).wireframe = wireframe;
    });
  }, [wireframe]);

  // Sync scroll progress smoothly
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (manualScrub === null) {
        const clamped = Math.min(1.0, Math.max(0, (latest - 0.2) / 0.5));
        setCurrentProgress(clamped);
        if (sceneRef.current) {
          sceneRef.current.targetScroll = clamped;
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, manualScrub]);

  return (
    <section ref={containerRef} className="relative bg-[#F8F9FA] border-t border-gray-200 py-3 sm:py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-3 relative z-10">
        {/* Background Grids & Ambient Glows */}
        <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-30" />

        {/* Compact Header Control Bar */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Interactive 3D Telemetry
            </div>
            <h2 className="mt-0.5 text-base sm:text-2xl font-black font-display tracking-tight text-gray-950">
              Scroll to Disassemble <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent">· High-Tensile Joint</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center gap-1 rounded-full bg-white p-1 border border-gray-200 shadow-sm">
              <button
                onClick={() => setStage(0)}
                className={`rounded-full px-3 py-1 text-[0.7rem] font-mono font-bold uppercase transition-all ${
                  currentProgress < 0.25 ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                0% Torqued
              </button>
              <button
                onClick={() => setStage(0.45)}
                className={`rounded-full px-3 py-1 text-[0.7rem] font-mono font-bold uppercase transition-all ${
                  currentProgress >= 0.25 && currentProgress < 0.65 ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                50% Unthreading
              </button>
              <button
                onClick={() => setStage(0.95)}
                className={`rounded-full px-3 py-1 text-[0.7rem] font-mono font-bold uppercase transition-all ${
                  currentProgress >= 0.65 ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                100% Exploded
              </button>
            </div>

            <button
              onClick={() => setWireframe((v) => !v)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm ${
                wireframe
                  ? "bg-blue-600 text-white shadow-blue-500/25"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{wireframe ? "Solid Mesh" : "CAD Wireframe"}</span>
            </button>

            <button
              onClick={() => setAutoRotate((v) => !v)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm ${
                autoRotate
                  ? "bg-amber-600 text-white shadow-amber-500/25"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <RotateCw className={`h-3.5 w-3.5 ${autoRotate ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">{autoRotate ? "Pause Orbit" : "360° Orbit"}</span>
            </button>
          </div>
        </div>

        {/* Center 3D Canvas Card */}
        <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden touch-pan-y">
          <canvas ref={canvasRef} className="h-full w-full object-contain outline-none" />

          {/* Dynamic Stage Breakdown Callout Badges (Non-blocking layout for mobile & desktop) */}
          {currentProgress > 0.15 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute inset-x-3 sm:inset-x-8 top-2.5 sm:top-1/2 sm:-translate-y-1/2 z-20"
            >
              {/* MOBILE VIEW ONLY: Top-anchored compact badge (0% blocking of center 3D bolt!) */}
              <div className="block sm:hidden max-w-[92%] mx-auto pointer-events-auto">
                {currentProgress < 0.50 ? (
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border-t-2 border-t-blue-600 border border-gray-200 text-center">
                    <span className="font-mono text-[0.6rem] font-bold text-blue-600 uppercase tracking-wider block">
                      STAGE 01 &amp; 02 · FLANGE HEAD &amp; LOCK NUT
                    </span>
                    <h4 className="font-display font-bold text-gray-950 text-xs mt-0.5">
                      Cold-Forged Flange &amp; Lock Nut
                    </h4>
                    <p className="text-[10px] text-gray-600 leading-tight mt-0.5">
                      Grade 10.9 Boron Steel with DIN 980V vibration-resistant lock nut.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border-t-2 border-t-cyan-600 border border-gray-200 text-center">
                    <span className="font-mono text-[0.6rem] font-bold text-cyan-600 uppercase tracking-wider block">
                      STAGE 03 &amp; 04 · WASHERS &amp; ROLLED SHANK
                    </span>
                    <h4 className="font-display font-bold text-gray-950 text-xs mt-0.5">
                      Hardened Washers &amp; Rolled M12 Shank
                    </h4>
                    <p className="text-[10px] text-gray-600 leading-tight mt-0.5">
                      38–45 HRC wave spring washer &amp; Class 6g cylindrical rolled threads.
                    </p>
                  </div>
                )}
              </div>

              {/* DESKTOP VIEW ONLY: Left & Right Side Callout Cards */}
              <div className="hidden sm:flex justify-between max-w-5xl mx-auto">
                {currentProgress < 0.50 ? (
                  <>
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border-l-4 border-l-blue-600 border border-gray-200/90 max-w-xs pointer-events-auto">
                      <span className="font-mono text-[0.65rem] font-bold text-blue-600 uppercase tracking-wider block">
                        STAGE 01 · FLANGE HEAD
                      </span>
                      <h4 className="font-display font-bold text-gray-950 text-sm">
                        Cold-Forged Hex Flange
                      </h4>
                      <p className="mt-0.5 text-xs text-gray-600 leading-snug">
                        Formed on 5-die header with integral bearing flange for uniform load distribution.
                      </p>
                    </div>

                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border-r-4 border-r-amber-500 border border-gray-200/90 text-right max-w-xs pointer-events-auto">
                      <span className="font-mono text-[0.65rem] font-bold text-amber-600 uppercase tracking-wider block">
                        STAGE 02 · LOCK NUT
                      </span>
                      <h4 className="font-display font-bold text-gray-950 text-sm">
                        Prevailing Torque Nut
                      </h4>
                      <p className="mt-0.5 text-xs text-gray-600 leading-snug">
                        Class 10 (DIN 980V) all-metal lock nut resisting severe dynamic engine shaking.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border-l-4 border-l-cyan-600 border border-gray-200/90 max-w-xs pointer-events-auto">
                      <span className="font-mono text-[0.65rem] font-bold text-cyan-600 uppercase tracking-wider block">
                        STAGE 03 · WASHERS
                      </span>
                      <h4 className="font-display font-bold text-gray-950 text-sm">
                        Hardened Wave &amp; Flat Washers
                      </h4>
                      <p className="mt-0.5 text-xs text-gray-600 leading-snug">
                        38–45 HRC wave spring washer designed to absorb joint settling under thermal expansion.
                      </p>
                    </div>

                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border-r-4 border-r-emerald-500 border border-gray-200/90 text-right max-w-xs pointer-events-auto">
                      <span className="font-mono text-[0.65rem] font-bold text-emerald-600 uppercase tracking-wider block">
                        STAGE 04 · THREADED SHANK
                      </span>
                      <h4 className="font-display font-bold text-gray-950 text-sm">
                        Rolled Thread Shank (M12)
                      </h4>
                      <p className="mt-0.5 text-xs text-gray-600 leading-snug">
                        Class 6g cylindrical rolled dies, boosting fatigue life by 25% over cut threads.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}

          <div className="pointer-events-none absolute bottom-2 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs text-gray-700 shadow-md border border-gray-200 font-mono">
            <Eye className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs">Click &amp; drag 360° · Scroll down to unscrew nut &amp; explode parts</span>
          </div>
        </div>

        {/* Compact Telemetry Footer HUD */}
        <div className="rounded-2xl border border-gray-200 bg-white px-4 sm:px-6 py-2.5 shadow-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-5 items-center">
            <div className="flex flex-col">
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-gray-500">Assembly State</span>
              <span className="font-display text-xs font-bold text-gray-950 truncate">
                {currentProgress < 0.15
                  ? "Fully Torqued"
                  : currentProgress < 0.55
                  ? "Unthreading (Pitch 1.75)"
                  : "Exploded Inspection"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-gray-500">Applied Torque</span>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-sm sm:text-base font-extrabold text-blue-600">
                  {Math.round(450 * Math.max(0, 1 - currentProgress * 2))}
                </span>
                <span className="text-[10px] font-mono text-gray-500">Nm</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-gray-500">Induced Clamp Force</span>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-sm sm:text-base font-extrabold text-amber-600">
                  {(72.5 * Math.max(0, 1 - currentProgress * 2)).toFixed(1)}
                </span>
                <span className="text-[10px] font-mono text-gray-500">kN</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-gray-500">Thread Engagement</span>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-sm sm:text-base font-extrabold text-gray-950">
                  {Math.max(0, 24.0 - currentProgress * 44).toFixed(1)}
                </span>
                <span className="text-[10px] font-mono text-gray-500">mm</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-4 lg:col-span-1 flex flex-col justify-center">
              <div className="flex justify-between text-[10px] font-mono text-gray-600 mb-0.5">
                <span>Disassembly Scrub</span>
                <span className="font-bold text-blue-600">{Math.round(currentProgress * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.005"
                value={currentProgress}
                onChange={(e) => setStage(parseFloat(e.target.value))}
                aria-label="Disassembly scrub slider"
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-blue-600 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
