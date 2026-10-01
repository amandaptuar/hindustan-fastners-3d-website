import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update imports for lazy-loaded components
old_imports = """import { InteractiveUnboltScroll } from './components/InteractiveUnboltScroll';
import { ContactUsPage } from './components/ContactUsPage';"""

new_imports = """const InteractiveUnboltScroll = React.lazy(() =>
  import('./components/InteractiveUnboltScroll').then((m) => ({ default: m.InteractiveUnboltScroll }))
);
const ContactUsPage = React.lazy(() =>
  import('./components/ContactUsPage').then((m) => ({ default: m.ContactUsPage }))
);"""

if old_imports in content:
    content = content.replace(old_imports, new_imports)
elif "import { InteractiveUnboltScroll }" in content:
    content = content.replace(
        "import { InteractiveUnboltScroll } from './components/InteractiveUnboltScroll';",
        new_imports
    )

# 2. Update HeroVideoPlayer to preload metadata and use poster
old_hero_video = """/* ─────────────────────────── HERO VIDEO SHOWCASE COMPONENT ─────────────────────────── */
const HeroVideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(37,99,235,0.3)] transition-all duration-500 hover:shadow-[0_25px_65px_rgba(37,99,235,0.4)]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/videos/hero-showcase.mp4" type="video/mp4" />
        <source src="/videos/PixVerse_V6_Image_Text_540P_Create_a_60second_ (2).mp4" type="video/mp4" />
        <source src="/VIDEOS/PixVerse_V6_Image_Text_540P_Create_a_60second_ (2).mp4" type="video/mp4" />
      </video>
    </div>
  );
};"""

new_hero_video = """/* ─────────────────────────── HERO VIDEO SHOWCASE COMPONENT (OPTIMIZED FAST STREAMING) ─────────────────────────── */
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
};"""

content = content.replace(old_hero_video, new_hero_video)

# 3. Add Suspense wrappers for lazy-loaded components
# Wrap InteractiveUnboltScroll in Suspense
content = content.replace(
    "<InteractiveUnboltScroll />",
    """<React.Suspense fallback={<div className="h-64 flex items-center justify-center bg-gray-50 text-xs font-mono text-gray-400">Loading 3D interactive viewer...</div>}>
        <InteractiveUnboltScroll />
      </React.Suspense>"""
)

# Wrap ContactUsPage render in Suspense
content = content.replace(
    """        <ContactUsPage
          onBackToHome={openHomePage}
          onOpenCatalog={openCatalogPage}
        />""",
    """        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-950 text-white font-mono text-sm">Loading 3D Map &amp; Contact Desk...</div>}>
          <ContactUsPage
            onBackToHome={openHomePage}
            onOpenCatalog={openCatalogPage}
          />
        </React.Suspense>"""
)

# 4. Add loading="lazy" and decoding="async" to all <img> tags that don't have them
def add_img_optimizations(match):
    tag = match.group(0)
    if 'hero-car-exploded' in tag or 'HF LOGO' in tag or 'PFS logo' in tag:
        if 'decoding=' not in tag:
            tag = tag.replace('<img', '<img decoding="async"')
        return tag
    if 'loading=' not in tag:
        tag = tag.replace('<img', '<img loading="lazy" decoding="async"')
    return tag

content = re.sub(r'<img\s+[^>]+>', add_img_optimizations, content)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Speed optimizations applied successfully to App.tsx!')
