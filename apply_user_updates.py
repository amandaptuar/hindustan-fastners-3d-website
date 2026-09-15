import re

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Automatic CoinFlipBadge Component
old_coin = """/* ─────────────────────────── 3D COIN FLIP COMPONENT ─────────────────────────── */
const CoinFlipBadge: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipCount, setFlipCount] = useState(0);

  const handleCoinClick = () => {
    setIsFlipped(!isFlipped);
    setFlipCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div
        className="perspective-1000 cursor-pointer select-none group"
        onClick={handleCoinClick}
        title="Click to Flip Coin between Hindustan Fasteners & Precision Forging"
      >
        {/* The 3D Rotating Coin with metallic chrome rim */}
        <div
          className={`relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full transform-style-preserve-3d transition-transform duration-700 ease-out shadow-2xl ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* SIDE A: Hindustan Fasteners (1970) */}
          <div className="absolute inset-0 backface-hidden rounded-full coin-metallic-rim p-2 flex items-center justify-center border-4 border-slate-600/80 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-4 text-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-white/60 pointer-events-none" />
              <img
                src="/logo/HF LOGO (1).png"
                alt="Hindustan Fasteners Logo"
                className="max-h-16 max-w-full object-contain mb-1 drop-shadow-sm group-hover:scale-105 transition-transform"
              />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-900">
                Hindustan Fasteners
              </span>
              <span className="text-[9px] font-mono font-bold text-blue-600">
                ESTABLISHED 1970
              </span>
            </div>
          </div>

          {/* SIDE B: Precision Forging & Stamping (1982) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-full coin-metallic-rim p-2 flex items-center justify-center border-4 border-slate-600/80 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-4 text-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-white/60 pointer-events-none" />
              <img
                src="/logo/PFS logo.png"
                alt="Precision Forging and Stamping Logo"
                className="max-h-16 max-w-full object-contain mb-1 drop-shadow-sm group-hover:scale-105 transition-transform"
              />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-900">
                Precision Forging
              </span>
              <span className="text-[9px] font-mono font-bold text-blue-600">
                EXPANDED 1982
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Subtitle */}
      <div className="mt-4 flex flex-col items-center">
        <button
          onClick={handleCoinClick}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/40 text-white text-xs font-mono font-bold hover:bg-slate-800 hover:border-blue-400 transition-all duration-300 shadow-md group"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
          <span>Click to Flip Coin: {isFlipped ? 'Viewing Precision Forging' : 'Viewing Hindustan Fasteners'}</span>
        </button>
        <span className="text-[11px] text-gray-400 mt-2 font-mono">
          Two Manufacturing Powerhouses under One Unified Roof (Flips: {flipCount})
        </span>
      </div>
    </div>
  );
};"""

new_coin = """/* ─────────────────────────── 3D AUTOMATIC COIN FLIP COMPONENT ─────────────────────────── */
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
        {/* The 3D Rotating Coin with metallic chrome rim */}
        <div
          className={`relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full transform-style-preserve-3d transition-transform duration-700 ease-out shadow-2xl ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* SIDE A: Hindustan Fasteners (1970) */}
          <div className="absolute inset-0 backface-hidden rounded-full coin-metallic-rim p-2 flex items-center justify-center border-4 border-slate-600/80 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-4 text-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-white/60 pointer-events-none" />
              <img
                src="/logo/HF LOGO (1).png"
                alt="Hindustan Fasteners Logo"
                className="max-h-16 max-w-full object-contain mb-1 drop-shadow-sm group-hover:scale-105 transition-transform"
              />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-900">
                Hindustan Fasteners
              </span>
              <span className="text-[9px] font-mono font-bold text-blue-600">
                ESTABLISHED 1970
              </span>
            </div>
          </div>

          {/* SIDE B: Precision Forging & Stamping (1982) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-full coin-metallic-rim p-2 flex items-center justify-center border-4 border-slate-600/80 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-4 text-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-white/60 pointer-events-none" />
              <img
                src="/logo/PFS logo.png"
                alt="Precision Forging and Stamping Logo"
                className="max-h-16 max-w-full object-contain mb-1 drop-shadow-sm group-hover:scale-105 transition-transform"
              />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-900">
                Precision Forging
              </span>
              <span className="text-[9px] font-mono font-bold text-blue-600">
                EXPANDED 1982
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <span className="text-[11px] text-gray-400 font-mono flex items-center gap-1.5">
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          Auto-Flipping: {isFlipped ? 'Precision Forging (1982)' : 'Hindustan Fasteners (1970)'}
        </span>
      </div>
    </div>
  );
};"""

assert old_coin in content, "old_coin not found"
content = content.replace(old_coin, new_coin, 1)


# 2. Both Logos in Navbar
old_nav_logo = """          {/* Single Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); openHomePage(); }} className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="h-9 sm:h-10 px-2 py-0.5 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200">
              <img
                src="/logo/HF LOGO (1).png"
                alt="Hindustan Fasteners"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="font-display font-black text-[13px] tracking-wide text-gray-950 group-hover:text-blue-600 transition leading-tight">
                HINDUSTAN FASTENERS
              </span>
              <span className="text-[9px] font-mono font-bold text-gray-500 leading-tight">
                EST. 1970 · Nashik
              </span>
            </div>
          </a>"""

new_nav_logo = """          {/* Both Logos: Hindustan Fasteners & Precision Forging */}
          <a href="#" onClick={(e) => { e.preventDefault(); openHomePage(); }} className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0">
            <div className="h-9 sm:h-10 px-2 py-0.5 bg-white rounded-lg flex items-center gap-1.5 sm:gap-2 shadow-sm border border-gray-200">
              <img
                src="/logo/HF LOGO (1).png"
                alt="Hindustan Fasteners"
                className="h-5 sm:h-6 w-auto object-contain"
              />
              <div className="h-4 w-[1px] bg-gray-300" />
              <img
                src="/logo/PFS logo.png"
                alt="Precision Forging & Stamping"
                className="h-5 sm:h-6 w-auto object-contain"
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="font-display font-black text-[12px] tracking-wide text-gray-950 group-hover:text-blue-600 transition leading-tight">
                HINDUSTAN FASTENERS &amp; PRECISION FORGING
              </span>
              <span className="text-[9px] font-mono font-bold text-gray-500 leading-tight">
                EST. 1970 &amp; 1982 · Satpur MIDC, Nashik
              </span>
            </div>
          </a>"""

assert old_nav_logo in content, "old_nav_logo not found"
content = content.replace(old_nav_logo, new_nav_logo, 1)


# 3. Hero Badge & Text update
old_hero_badge_and_text = """          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 backdrop-blur-md border border-blue-500/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>50+ Years of Manufacturing Excellence · Satpur MIDC, Nashik</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight leading-[1.05] mb-6 text-white">
              STRONG FASTENERS.<br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                MADE FOR REAL-WORLD MACHINES.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              We make over <strong>1,00,000 varieties of high-strength bolts, nuts, screws, and custom forged parts</strong>. Across 4 modern plants in Satpur MIDC, Nashik, we produce 36,000 tonnes of certified, zero-defect fasteners every year for India’s top vehicle makers and global exports.
            </p>
          </Reveal>"""

new_hero_badge_and_text = """          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 backdrop-blur-md border border-blue-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>IATF 16949 Certified · Nashik Manufacturing Campus</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight leading-[1.05] mb-6 text-white">
              STRONG FASTENERS.<br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                MADE FOR REAL-WORLD MACHINES.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              We make over <strong>1,00,000 varieties of high-strength bolts, nuts, screws, and custom forged parts</strong>. Across 4 modern plants in Satpur MIDC, Nashik, we produce 36,000 tonnes of certified, zero-defect fasteners every year for India’s top vehicle makers and global exports.
            </p>
          </Reveal>"""

assert old_hero_badge_and_text in content, "old_hero_badge_and_text not found"
content = content.replace(old_hero_badge_and_text, new_hero_badge_and_text, 1)

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("App.tsx header, coin flip, and hero updated!")
