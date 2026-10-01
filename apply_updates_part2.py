import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Header / Navigation Bar
old_header_brand = """          {/* Both Logos: Hindustan Fasteners & Precision Forging */}
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

new_header_brand = """          {/* Both Logos: Hindustan Fasteners & Precision Forging */}
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
              <span className="font-display font-black text-[12px] tracking-wide text-gray-950 group-hover:text-blue-600 transition leading-tight uppercase">
                Hindustan Fasteners
              </span>
              <span className="text-[10px] font-mono font-bold text-blue-900 leading-tight uppercase tracking-wider">
                Precision Forging &amp; Stamping
              </span>
              <span className="text-[9px] font-sans text-gray-500 italic leading-tight">
                "Indian at heart with world class part"
              </span>
            </div>
          </a>"""

content = content.replace(old_header_brand, new_header_brand)

# 2. Update Desktop & Mobile Nav Sequence
old_nav_links = """          {/* Nav Links — short names, clean spacing */}
          <nav className="hidden md:flex items-center gap-5 text-[13px] font-semibold text-gray-600">
            <a href="#pipeline" className="hover:text-blue-600 transition-colors">Process</a>
            <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#secondary" className="hover:text-blue-600 transition-colors">Operations</a>
            <button
              onClick={openCatalogPage}
              className="hover:text-blue-600 transition-colors text-gray-800 font-bold"
            >
              Catalogue
            </button>
            <a href="#overview" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#customers" className="hover:text-blue-600 transition-colors">Clients</a>
          </nav>"""

new_nav_links = """          {/* Nav Links — Sequence: About -> Process -> Quality/Photos -> Catalogue -> Contact Us */}
          <nav className="hidden md:flex items-center gap-5 text-[13px] font-semibold text-gray-600">
            <a href="#overview" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#pipeline" className="hover:text-blue-600 transition-colors">Process</a>
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
          </nav>"""

content = content.replace(old_nav_links, new_nav_links)

# Mobile Dropdown
old_mobile_menu = """        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-5 py-4 space-y-3.5 shadow-xl animate-fadeIn">
            <a href="#pipeline" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">Process Pipeline</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">Plant Gallery</a>
            <a href="#secondary" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">Operations</a>
            <button
              onClick={() => { setMenuOpen(false); openCatalogPage(); }}
              className="block w-full text-left text-blue-600 font-bold text-sm"
            >
              Catalogue →
            </button>
            <a href="#overview" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">About Us</a>
            <a href="#customers" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">Clients</a>
            <div className="pt-2">
              <button onClick={() => { setMenuOpen(false); openQuote(); }} className="w-full py-2.5 rounded-xl btn-nav-quote text-xs font-extrabold ">
                Get Quote →
              </button>
            </div>
          </div>
        )}"""

new_mobile_menu = """        {/* Mobile Dropdown — Sequence: About -> Process -> Quality/Photos -> Catalogue -> Contact Us */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-5 py-4 space-y-3.5 shadow-xl animate-fadeIn">
            <a href="#overview" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">About Us</a>
            <a href="#pipeline" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">Process Pipeline</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">Quality / Photos</a>
            <a href="#secondary" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-semibold text-sm">In-House Operations</a>
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
        )}"""

content = content.replace(old_mobile_menu, new_mobile_menu)

# 3. Update Hero Section: Remove floating nut animation, make video larger, update key boxes
old_hero_floating = """        {/* Floating 3D Bolt & Nut SVGs & Subtle Watermarks in Stainless Silver */}
        <WatermarkNut className="-right-24 -bottom-24 text-white/5" size={540} variant="silver" />
        <WatermarkBolt className="-left-20 top-20 text-white/5" size={480} rotation={22} variant="silver" />
        <div className="absolute top-12 right-12 pointer-events-none animate-float-1 hidden sm:block z-10">
          <NutSvg size={110} opacity={0.9} variant="silver" />
        </div>
        <div className="absolute bottom-20 left-10 pointer-events-none animate-float-2 hidden sm:block z-10">
          <BoltSvg size={115} opacity={0.9} rotation={-14} variant="silver" />
        </div>
        <div className="absolute top-1/2 right-1/4 pointer-events-none animate-float-3 hidden md:block z-10">
          <BoltSvg size={80} opacity={0.85} rotation={18} variant="silver" />
        </div>"""

new_hero_floating = """        {/* Floating 3D Bolt SVGs & Subtle Watermarks (Floating Nut animation removed per prompt) */}
        <WatermarkBolt className="-left-20 top-20 text-white/5" size={480} rotation={22} variant="silver" />
        <div className="absolute bottom-20 left-10 pointer-events-none animate-float-2 hidden sm:block z-10">
          <BoltSvg size={115} opacity={0.9} rotation={-14} variant="silver" />
        </div>
        <div className="absolute top-1/2 right-1/4 pointer-events-none animate-float-3 hidden md:block z-10">
          <BoltSvg size={80} opacity={0.85} rotation={18} variant="silver" />
        </div>"""

content = content.replace(old_hero_floating, new_hero_floating)

# Update Hero Grid Layout & Text
old_hero_grid = """        <div className="container-custom relative z-10 py-16 sm:py-24 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-0 lg:gap-x-12 items-center">
            {/* 1. Headline: Desktop col 1-7, row 1; Mobile 1st */}
            <div className="lg:col-span-7 lg:row-start-1">
              <Reveal delay={100}>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight leading-[1.05] mb-4 sm:mb-6 text-white">
                  STRONG FASTENERS.<br />
                  <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                    MADE FOR REAL-WORLD MACHINES.
                  </span>
                </h1>
              </Reveal>
            </div>

            {/* 2. Video Showcase:
                Mobile: Appears immediately after headline, BEFORE the paragraph!
                Desktop: Placed at the right side (col 8-12, row 1-3) */}
            <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-3 my-2 lg:my-0 self-center">
              <Reveal delay={150}>
                <HeroVideoPlayer />
              </Reveal>
            </div>

            {/* 3. Paragraph: Desktop col 1-7, row 2; Mobile 3rd (after video) */}
            <div className="lg:col-span-7 lg:row-start-2">
              <Reveal delay={200}>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal">
                  We make over <strong>1,00,000 varieties of high-strength bolts, nuts, screws, and custom forged parts</strong>. Across 4 modern plants in Satpur MIDC, Nashik, we produce 36,000 tonnes of certified, zero-defect fasteners every year for India’s top vehicle makers and global exports.
                </p>
              </Reveal>
            </div>

            {/* 4. Action Buttons: Desktop col 1-7, row 3; Mobile 4th */}
            <div className="lg:col-span-7 lg:row-start-3">
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 lg:mb-10">
                  <button
                    onClick={openCatalogPage}
                    className="btn-primary text-sm font-bold px-8 py-4 shadow-xl w-full sm:w-auto text-center"
                  >
                    EXPLORE ALL BOLTS &amp; NUTS ({catalogData.length}) →
                  </button>
                  <a
                    href="#pipeline"
                    className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
                  >
                    See How We Make Them
                  </a>
                  <button
                    onClick={() => openQuote()}
                    className="px-6 py-4 rounded-xl bg-slate-900/90 text-white hover:bg-slate-800 text-sm font-bold border border-blue-500/30 shadow-md transition hover:-translate-y-0.5 w-full sm:w-auto text-center"
                  >
                    Request a Price Quote
                  </button>
                </div>
              </Reveal>
            </div>

            {/* 5. Quick Key Facts in High-Contrast Technical Glassmorphism */}
            <div className="lg:col-span-12 lg:row-start-4 pt-6 sm:pt-8 border-t border-white/15 mt-2 lg:mt-6">
              <Reveal delay={400}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-5xl text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:border-blue-500/50 hover:bg-white/10 transition-all">
                    <div className="text-xl sm:text-2xl font-black font-display text-cyan-300">
                      <AnimatedCounter target={36000} suffix=" MT" />
                    </div>
                    <div className="text-[10px] text-slate-300 font-bold tracking-wider mt-0.5">Annual Capacity</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:border-blue-500/50 hover:bg-white/10 transition-all">
                    <div className="text-xl sm:text-2xl font-black font-display text-white">
                      <AnimatedCounter target={160000} suffix=" m²" />
                    </div>
                    <div className="text-[10px] text-slate-300 font-bold tracking-wider mt-0.5">4 Plants · Nashik MIDC</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:border-blue-500/50 hover:bg-white/10 transition-all">
                    <div className="text-xl sm:text-2xl font-black font-display text-cyan-300">
                      <AnimatedCounter target={100000} suffix="+" />
                    </div>
                    <div className="text-[10px] text-slate-300 font-bold tracking-wider mt-0.5">Fastener Types</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:border-blue-500/50 hover:bg-white/10 transition-all">
                    <div className="text-xl sm:text-2xl font-black font-display text-white">IATF 16949</div>
                    <div className="text-[10px] text-blue-400 tracking-wider mt-0.5 font-bold">BSI UK Certified</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>"""

new_hero_grid = """        <div className="container-custom relative z-10 py-14 sm:py-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-10 items-center">
            {/* 1. Left Side: Headline, Paragraph, Actions (Col 1-6) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <Reveal delay={50}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-4 w-fit">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Indian at heart with world class part
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.08] mb-4 text-white">
                  STRONG FASTENERS.<br />
                  <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                    MADE FOR REAL-WORLD MACHINES.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-6 font-normal">
                  Manufacturing over <strong>3,00,000+ varieties of high-strength bolts, nuts, screws, washers, and custom forged parts</strong>. Across 5 modern manufacturing plants (3 in Satpur MIDC Nashik, 2 in Pantnagar Uttarakhand) plus our upcoming Mega Plant in Chhatrapati Sambhajinagar, we produce 54,000 tonnes of zero-defect fasteners every year for India’s top vehicle OEMs and global exports.
                </p>
              </Reveal>

              <Reveal delay={250}>
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-4">
                  <button
                    onClick={openCatalogPage}
                    className="btn-primary text-xs font-bold px-7 py-3.5 shadow-xl w-full sm:w-auto text-center"
                  >
                    EXPLORE ALL BOLTS &amp; NUTS ({catalogData.length}) →
                  </button>
                  <button
                    onClick={openContactPage}
                    className="px-6 py-3.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-white text-xs font-bold border border-blue-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
                  >
                    3D Plant Map &amp; Contact
                  </button>
                  <button
                    onClick={() => openQuote()}
                    className="px-6 py-3.5 rounded-xl bg-slate-900/90 text-white hover:bg-slate-800 text-xs font-bold border border-white/20 shadow-md transition hover:-translate-y-0.5 w-full sm:w-auto text-center"
                  >
                    Request Price Quote
                  </button>
                </div>
              </Reveal>
            </div>

            {/* 2. Right Side: Large Prominent Video Showcase (Col 7-12) */}
            <div className="lg:col-span-6 my-2 lg:my-0 self-center">
              <Reveal delay={150}>
                <div className="w-full max-w-2xl mx-auto">
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
        </div>"""

content = content.replace(old_hero_grid, new_hero_grid)

# 4. Update Showcase Title & Subtitle
old_showcase_head = """              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-gray-950">
                OUR FASTENERS &amp; BOLTS SHOWCASE
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                Click any fastener card below to open technical specifications and get an instant quote.
              </p>"""

new_showcase_head = """              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-gray-950">
                OUR NUTS, BOLTS, WASHERS &amp; COMPONENTS SHOWCASE
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                Click any product card below to inspect technical specifications for hex bolts, lock nuts, Belleville washers, and precision stamped components.
              </p>"""

content = content.replace(old_showcase_head, new_showcase_head)

# 5. Update Overview / Legacy Section (50+ years, 250+ Cr, 2,20,000 m2)
old_overview_sec = """                <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-gray-950 mb-3 sm:mb-4 leading-tight">
                  50+ YEARS OF PRECISION FORGING &amp; FASTENING EXCELLENCE
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                  Founded in <strong className="text-blue-900">1970</strong> and expanded in <strong className="text-blue-900">1982</strong>, we operate 4 modern plants across 1,60,000 m² in Satpur MIDC, Nashik. Producing 36,000 MT annually with ₹120+ Cr turnover, we serve India’s top vehicle OEMs and global exports.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Established</div>
                    <div className="text-sm font-bold text-gray-950 mt-0.5">1970 &amp; 1982</div>
                    <div className="text-[10px] text-blue-900 font-bold mt-0.5">5+ Decades Experience</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Turnover (FY 19-20)</div>
                    <div className="text-sm font-bold text-blue-900 mt-0.5">₹120+ Crore</div>
                    <div className="text-[10px] text-emerald-700 font-bold mt-0.5">Consistent Growth</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Quality Standard</div>
                    <div className="text-sm font-bold text-gray-950 mt-0.5">IATF 16949</div>
                    <div className="text-[10px] text-blue-900 font-bold mt-0.5">BSI Certified</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Workforce</div>
                    <div className="text-sm font-bold text-gray-950 mt-0.5">500+ Specialists</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">Metallurgy &amp; Tooling</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Production Space</div>
                    <div className="text-sm font-bold text-gray-950 mt-0.5">1,60,000 m²</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">Satpur MIDC, Nashik</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="text-gray-500 text-[10px] font-semibold">Global Reach</div>
                    <div className="text-sm font-bold text-blue-900 mt-0.5">United States</div>
                    <div className="text-[10px] text-blue-600 font-bold mt-0.5">Worldwide Exports</div>
                  </div>
                </div>
              </Reveal>"""

new_overview_sec = """                <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-gray-950 mb-3 sm:mb-4 leading-tight">
                  50+ YEARS OF PRECISION FORGING, FASTENING &amp; STAMPING EXCELLENCE
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                  Founded in <strong className="text-blue-900">1970</strong> and expanded in <strong className="text-blue-900">1982</strong>, we operate 5 modern manufacturing plants across 2,20,000 sq. mtr. in Satpur MIDC Nashik and Pantnagar Uttarakhand, with an upcoming Mega Plant in Chhatrapati Sambhajinagar. Producing 54,000 MT annually with ₹250+ Crore turnover, we serve India’s top vehicle OEMs, Delhi NCR distribution clusters, and global exports to the United States.
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
                    <div className="text-sm font-bold text-blue-900 mt-0.5">United States &amp; Delhi NCR</div>
                    <div className="text-[10px] text-blue-600 font-bold mt-0.5">Worldwide Exports</div>
                  </div>
                </div>
              </Reveal>"""

content = content.replace(old_overview_sec, new_overview_sec)

# 6. Update Facility Cards Data
content = content.replace(
    "areaTag: 'Satpur MIDC, Nashik · 4 Plant Campus',",
    "areaTag: 'Satpur MIDC Nashik & Pantnagar · 5 Plants + Mega Plant',"
)
content = content.replace(
    "title: '1,60,000 SQ.M. Manufacturing Footprint',",
    "title: '2,20,000 SQ.M. Manufacturing Footprint',"
)
content = content.replace(
    "metric: '4 Modern Production Plants',",
    "metric: '5 Plants + Mega Expansion',"
)
content = content.replace(
    "shortDesc: 'Aerial view of Hindustan Fasteners campus across 1,60,000 square meters in Satpur MIDC, Nashik, Maharashtra.',",
    "shortDesc: 'Hindustan Fasteners & Precision Forging operations spread across 2,20,000 sq. mtr. across Nashik, Pantnagar, and upcoming Sambhajinagar Mega Plant.',"
)
content = content.replace(
    "explanation: 'Spread across 1,60,000 square meters, our 4 fully integrated manufacturing plants in Satpur MIDC bring every critical fastener operation under one unified roof. This complete vertical integration guarantees end-to-end quality control and eliminates subcontractor dependencies.',",
    "explanation: 'Spread across 2,20,000 sq. mtr., our 5 fully integrated manufacturing plants in Satpur MIDC Nashik and Pantnagar Uttarakhand (along with our upcoming Chhatrapati Sambhajinagar Mega Plant) bring every critical fastener operation under unified control.',"
)
content = content.replace(
    "capacity: '36,000 MT per annum aggregate output capacity.',",
    "capacity: '54,000 MT per annum aggregate output capacity.',"
)
content = content.replace(
    "capacity: 'Over 1,00,000 fastener varieties manufactured.',",
    "capacity: 'Over 3,00,000+ fastener, nut, washer & component varieties manufactured.',"
)
content = content.replace(
    "explanation: 'Our manufacturing plants hold formal IATF 16949:2016 certification issued by BSI for \"The Manufacture of High Tensile Fasteners\". Every process from tool design to layered audit conforms to global automotive OEM Tier-1 criteria.',",
    "explanation: 'Our manufacturing plants hold formal IATF 16949:2016, ISO 45001, BIS and ISO 9001 certifications issued by BSI for \"The Manufacture of High Tensile Fasteners and Precision Forged & Stamped Components\". Every process from tool design to layered audit conforms to global automotive OEM Tier-1 criteria.',"
)

# 7. Update Footer
old_footer = """            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-3">
              Hindustan Fasteners (1970) &amp; Precision Forging (1982). 4 interconnected manufacturing plants across 1,60,000 m² in Satpur MIDC, Nashik. Supplying India’s top vehicle OEMs and exporting to the United States.
            </p>
            <div className="text-xs font-mono text-blue-900 font-bold bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
              IATF 16949:2016 Certified · BSI Certificate 705083
            </div>
          </div>

          {/* Centered Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full mb-8 sm:mb-12 text-center">
            {/* Col 1: Plant Locations */}
            <div className="flex flex-col items-center text-center">
              <div className="text-gray-950 font-bold tracking-wider text-xs mb-3 font-mono">Plant Locations</div>
              <p className="text-gray-600 text-xs leading-relaxed">
                4 Plants in Satpur MIDC,<br />
                Nashik 422 007,<br />
                Maharashtra, India
              </p>
              <p className="mt-2 text-[11px] text-gray-500 font-mono font-medium">Total Land Area: 1,60,000 m²</p>
            </div>

            {/* Col 2: Quick Navigation */}
            <div className="flex flex-col items-center text-center">
              <div className="text-gray-950 font-bold tracking-wider text-xs mb-3 font-mono">Quick Navigation</div>
              <ul className="space-y-2 text-xs text-gray-600 font-medium flex flex-col items-center">
                <li><a href="#pipeline" className="hover:text-blue-600 transition">10-Stage Process</a></li>
                <li><a href="#secondary" className="hover:text-blue-600 transition">In-House Operations</a></li>
                <li><a href="#catalog" className="hover:text-blue-600 transition">Fastener Catalogue ({catalogData.length})</a></li>
                <li><a href="#overview" className="hover:text-blue-600 transition">Company Profile &amp; Legacy</a></li>
                <li><a href="#customers" className="hover:text-blue-600 transition">OEM Clients &amp; Coin Flip</a></li>
              </ul>
            </div>

            {/* Col 3: Plant Contact */}
            <div className="flex flex-col items-center text-center">
              <div className="text-gray-950 font-bold tracking-wider text-xs mb-3 font-mono">Plant Contact</div>
              <p className="text-gray-700 text-xs mb-1.5 flex items-center justify-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <a href="tel:+912532350890" className="hover:text-blue-600 transition">+91 (253) 235 0890</a>
              </p>
              <p className="text-gray-700 text-xs mb-3 flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <a href="mailto:engineering@hindustanfasteners.com" className="hover:text-blue-600 transition">Engineering@hindustanfasteners.com</a>
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
            <span>IATF 16949:2016 · BSI Registered · 36,000 MT Annual Output · Satpur MIDC, Nashik</span>
          </div>"""

new_footer = """            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-3">
              Hindustan Fasteners (1970) &amp; Precision Forging &amp; Stamping (1982). Operating 5 modern manufacturing plants across 2,20,000 sq. mtr. in Satpur MIDC Nashik and Pantnagar Uttarakhand, with upcoming Mega Plant in Chhatrapati Sambhajinagar. Supplying India’s top vehicle OEMs, Delhi NCR networks, and exporting to the United States.
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
          </div>"""

content = content.replace(old_footer, new_footer)

# 8. Add Floating Back To Top Button
floating_btn_code = """      {/* ════════════ FLOATING SCROLL TO TOP BUTTON (BOTTOM RIGHT) ════════════ */}
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
      </button>"""

if "FLOATING SCROLL TO TOP BUTTON" not in content:
    content = content.replace(
        "{/* ════════════ FLOATING ENQUIRY CTA BUTTON (BOTTOM LEFT) ════════════ */}",
        floating_btn_code + "\n\n      {/* ════════════ FLOATING ENQUIRY CTA BUTTON (BOTTOM LEFT) ════════════ */}"
    )

# 9. Update modal direct email to marketing@hfpfs.com
content = content.replace("engineering@hindustanfasteners.com", "marketing@hfpfs.com")
content = content.replace("Engineering@hindustanfasteners.com", "marketing@hfpfs.com")

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Part 2 updates applied to App.tsx successfully!')
