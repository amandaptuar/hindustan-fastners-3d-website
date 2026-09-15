with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

pos_pipeline = content.find('<section id="pipeline"')
pos_comment_start = content.rfind('{/*', 0, pos_pipeline)

pos_gallery = content.find('<section id="gallery"')
pos_gal_comment = content.rfind('{/*', 0, pos_gallery)

assert pos_comment_start != -1 and pos_gal_comment != -1, "Section positions not found"

new_pipeline_jsx = """{/* ════════════ 10-STAGE VERTICAL MANUFACTURING PIPELINE ════════════ */}
      <section id="pipeline" className="py-14 sm:py-24 bg-[#FAFAF9] border-t border-gray-200 relative overflow-hidden">
        {/* Ambient background SVGs & Watermarks */}
        <WatermarkNut className="-right-20 top-12" size={460} />
        <WatermarkBolt className="-left-24 bottom-12" size={440} rotation={-18} />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold uppercase tracking-wider mb-2 sm:mb-3 shadow-xs">
                <Cog className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '10s' }} />
                100% In-House Continuous Process
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-gray-950 mb-2 sm:mb-3">
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
                  <span className={`text-[10px] font-bold block uppercase ${isActive ? 'text-blue-100' : isPassed ? 'text-emerald-700' : 'text-gray-400'}`}>
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

        {/* ─── SLIDING STAGE CARDS TRACK ─── */}
        <div className="relative w-full overflow-hidden">
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
                        <span className="text-[10px] uppercase underline flex-shrink-0 ml-2">Inspect →</span>
                      </div>
                    )}

                    {/* Active Card Content */}
                    <div>
                      {/* Top Header Badge Row */}
                      <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[11px] sm:text-xs font-mono font-black shadow-xs">
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
                      <h3 className="text-base sm:text-2xl font-black font-display uppercase tracking-tight text-gray-950 mb-1.5 sm:mb-3">
                        {st.stageTitle}
                      </h3>

                      {/* Metric Banner */}
                      <div className="p-2 sm:p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-xs sm:text-sm font-semibold text-blue-950 font-mono mb-2.5 sm:mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                        <span className="leading-snug">{st.metric}</span>
                      </div>

                      {/* Main Section: Concise Explanation + Quality Gate */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-6 items-stretch mb-2.5 sm:mb-4">
                        <div className="lg:col-span-8 space-y-2 sm:space-y-3">
                          {/* Plain English Explanation */}
                          <div className="p-2.5 sm:p-4 rounded-xl bg-[#FAFAF9] border border-gray-200 text-xs sm:text-sm text-gray-800 leading-relaxed">
                            <span className="text-[10px] sm:text-xs font-mono text-blue-900 font-bold uppercase tracking-wider block mb-0.5">
                              Process Explanation:
                            </span>
                            <p className="text-gray-700 font-normal text-xs sm:text-sm">{st.simpleExpl}</p>
                          </div>

                          {/* Quality Gate */}
                          <div className="p-2 sm:p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span><strong className="text-emerald-900">Quality Gate:</strong> {st.whyItMatters}</span>
                          </div>
                        </div>

                        {/* Station Graphic — Desktop Only */}
                        <div className="hidden lg:flex lg:col-span-4 flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 text-center shadow-sm">
                          <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-2 shadow-md relative">
                            {st.icon}
                            <div className="absolute -top-1.5 -right-1.5 bg-gray-950 text-white font-mono text-[9px] font-black px-1.5 py-0.5 rounded-full border border-blue-400">
                              #{st.num}
                            </div>
                          </div>
                          <div className="text-[10px] font-mono text-blue-900 font-bold uppercase">
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
                      {/* Mobile 10-Dot Progress Indicator */}
                      <div className="flex items-center justify-center gap-1.5 py-0.5 sm:hidden">
                        {presentationStages.map((_, dotIdx) => (
                          <button
                            key={`stage-dot-${dotIdx}`}
                            onClick={(e) => { e.stopPropagation(); goToStage(dotIdx); }}
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
                        Stage <strong>{st.num} of 10</strong> · Satpur MIDC Nashik
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      """

content = content[:pos_comment_start] + new_pipeline_jsx + content[pos_gal_comment:]

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Pipeline section updated with sleek compact mobile presentation!")
