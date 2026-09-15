with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

gallery_start_marker = '<section id="gallery"'
secondary_marker = '<section id="secondary"'

pos_gallery_start = content.find(gallery_start_marker)
pos_comment_start = content.rfind('{/*', 0, pos_gallery_start)

pos_secondary = content.find(secondary_marker)
pos_sec_comment = content.rfind('{/*', 0, pos_secondary)

assert pos_comment_start != -1 and pos_sec_comment != -1, "Markers not found"

new_gallery_jsx = """{/* ════════════ 3D FLIP CARD GALLERY SCROLLER — "OUR AREA AND GALLERY" ════════════ */}
      <section id="gallery" className="py-14 sm:py-24 bg-[#060C1B] text-white relative overflow-hidden border-t border-slate-800">
        {/* Ambient background glow orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-950/90 border border-cyan-500/40 text-cyan-300 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-2.5 sm:mb-3.5 shadow-sm">
                <RotateCcw className="w-3.5 h-3.5 text-cyan-300" /> Interactive Plant Tour · 3D Cards
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-white mb-2 sm:mb-3">
                OUR AREA &amp; PLANT GALLERY
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed px-2 sm:px-4">
                Slide across our 1,60,000 sq.m. campus in Satpur MIDC, Nashik. Tap any photo card to <strong className="text-cyan-300 font-bold">flip in 3D</strong> and inspect machinery, capacities, and zero-defect quality gates.
              </p>
            </Reveal>
          </div>

          {/* Horizontal Scrollable Category Filter Pills (Mobile Friendly) */}
          <div className="w-full mb-5 sm:mb-8">
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
                  className={`flex-shrink-0 whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer active:scale-95 ${
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

          {/* Scroller Control Ribbon (Desktop & Mobile Unified) */}
          <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-md">
            {/* Left: Active Area Count */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950 border border-cyan-700/70 text-cyan-300 font-mono font-bold text-xs shadow-xs">
                AREA {String(activeGalleryIndex + 1).padStart(2, '0')} / {String(filteredGalleryCards.length).padStart(2, '0')}
              </span>
              <span className="text-xs font-display font-bold text-white hidden md:inline truncate max-w-xs">
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
            className="flex gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-2 sm:py-4 px-4 sm:px-12 md:px-20 no-scrollbar scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
          >
            {filteredGalleryCards.map((card, idx) => {
              const isFlipped = !!flippedCards[card.id];
              const isActive = activeGalleryIndex === idx;

              return (
                <div
                  key={card.id}
                  className={`gallery-card-item perspective-1000 w-[86vw] max-w-[340px] sm:w-[380px] md:w-[420px] h-[470px] sm:h-[510px] flex-shrink-0 snap-center cursor-pointer select-none group transition-all duration-300 ${
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
                      <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-950 flex-shrink-0">
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] font-mono text-cyan-300 font-bold border border-white/10 uppercase tracking-wider shadow">
                          {card.areaTag}
                        </div>
                        <div className="absolute top-2.5 right-2.5 bg-blue-900/90 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] font-mono text-white font-bold border border-blue-400/40 shadow">
                          {card.metric}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                      </div>

                      {/* Card Content */}
                      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800/60">
                              Area #{String(card.id).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] font-mono text-gray-400">
                              Satpur MIDC Plant
                            </span>
                          </div>
                          <h3 className="text-sm sm:text-lg font-bold font-display text-white mb-1 group-hover:text-cyan-300 transition-colors line-clamp-2">
                            {card.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-gray-300 line-clamp-3 leading-relaxed">
                            {card.shortDesc}
                          </p>
                        </div>

                        {/* Front Bottom Bar — High contrast action callout */}
                        <div className="pt-2.5 sm:pt-3 border-t border-slate-700/70 flex items-center justify-between mt-1">
                          <span className="text-[10px] sm:text-[11px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-800/50">
                            <RotateCcw className="w-3.5 h-3.5 text-cyan-300 group-hover:rotate-180 transition-transform duration-500" />
                            Tap Card to 3D Flip ↻
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 bg-slate-700/70 px-2 py-0.5 rounded">
                            Spec Backside
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ── CARD BACK (180deg) ── */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-y-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 border-2 border-cyan-500/60 p-3.5 sm:p-5 flex flex-col justify-between shadow-2xl">
                      <div>
                        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/90 px-2.5 py-0.5 rounded border border-cyan-700 shadow-sm">
                            {card.backDepartment}
                          </span>
                          <span className="text-[10px] font-mono text-gray-400">Area #{card.id} Spec</span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold font-display text-white mb-2 leading-snug">
                          {card.backTitle}
                        </h3>

                        <div className="space-y-1.5 sm:space-y-2 text-xs text-gray-200 mb-2">
                          <div className="p-2 rounded-xl bg-slate-900/80 border border-cyan-900/60">
                            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block mb-0.5">Machinery &amp; Tech:</span>
                            <p className="text-gray-300 text-[11px] leading-snug line-clamp-2">{card.equipment}</p>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block mb-0.5">What Is In This Picture:</span>
                            <p className="text-gray-300 text-[11px] leading-snug line-clamp-3">{card.explanation}</p>
                          </div>
                          <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-800/60">
                            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block mb-0.5">Engineering Quality Gate:</span>
                            <p className="text-emerald-200 text-[11px] leading-snug line-clamp-2">{card.qualityControl}</p>
                          </div>
                        </div>
                      </div>

                      {/* Back Bottom Bar */}
                      <div className="pt-2 sm:pt-2.5 border-t border-white/15 flex items-center justify-between mt-auto">
                        <span className="text-[10px] font-mono text-cyan-300/80 font-semibold truncate max-w-[170px]">
                          {card.capacity}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleCardFlip(card.id); }}
                          className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-[10px] sm:text-[11px] font-mono font-bold transition flex items-center gap-1 border border-cyan-500/40 cursor-pointer"
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
        </div>

        {/* ─── BOTTOM CONTROLS, PROGRESS BAR & THUMB BUTTONS (MOBILE FIRST) ─── */}
        <div className="container-custom mt-4 sm:mt-8 relative z-10">
          {/* Glowing Continuous Progress Bar */}
          <div className="max-w-md mx-auto w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden mb-3 border border-slate-700/60">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300"
              style={{
                width: `${((activeGalleryIndex + 1) / Math.max(filteredGalleryCards.length, 1)) * 100}%`,
              }}
            />
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap px-2 mb-4">
            {filteredGalleryCards.map((_, dotIdx) => (
              <button
                key={`dot-${dotIdx}`}
                onClick={() => scrollToGalleryIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeGalleryIndex === dotIdx
                    ? 'w-7 bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]'
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Jump to area ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* Mobile Bottom Quick Thumb Navigation Buttons */}
          <div className="flex sm:hidden items-center justify-center gap-2.5">
            <button
              onClick={() => scrollGallery('left')}
              className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 text-gray-200 text-xs font-mono font-bold flex items-center justify-center gap-1.5 active:scale-95 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Prev Area
            </button>
            <button
              onClick={() => scrollGallery('right')}
              className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-mono font-bold flex items-center justify-center gap-1.5 active:scale-95 shadow-md shadow-blue-600/30 cursor-pointer"
            >
              Next Area <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3.5 text-center text-[10px] sm:text-[11px] font-mono text-gray-400">
            Tip: Swipe cards horizontally on mobile · Tap any photo card to 3D flip between plant view and engineering specifications.
          </div>
        </div>
      </section>

      """

content = content[:pos_comment_start] + new_gallery_jsx + content[pos_sec_comment:]

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("App.tsx mobile gallery refined successfully!")
