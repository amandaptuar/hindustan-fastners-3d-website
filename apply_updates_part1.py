import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add import for ContactUsPage
if "import { ContactUsPage } from './components/ContactUsPage';" not in content:
    content = content.replace(
        "import { InteractiveUnboltScroll } from './components/InteractiveUnboltScroll';",
        "import { InteractiveUnboltScroll } from './components/InteractiveUnboltScroll';\nimport { ContactUsPage } from './components/ContactUsPage';"
    )

# 2. Update state in App
content = content.replace(
    "const [currentView, setCurrentView] = useState<'home' | 'catalog'>('home');",
    "const [currentView, setCurrentView] = useState<'home' | 'catalog' | 'contact'>('home');"
)

# 3. Add openContactPage and update handleHash
contact_nav_funcs = """  const openCatalogPage = () => {
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.location.hash = 'catalog';
  };

  const openContactPage = () => {
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.location.hash = 'contact';
  };

  const openHomePage = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash === '#catalog' || window.location.hash === '#contact') {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };"""

content = re.sub(
    r'  const openCatalogPage = \(\) => \{[\s\S]*?const openHomePage = \(\) => \{[\s\S]*?\}  \};',
    contact_nav_funcs,
    content
)

# Update handleHash logic
hash_logic = """    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#catalog') {
        setCurrentView('catalog');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#contact') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };"""

content = re.sub(
    r'    const handleHash = \(\) => \{[\s\S]*?setCurrentView\(\'home\'\);\s*\}\s*\};',
    hash_logic,
    content
)

# 4. Update HeroVideoPlayer
hero_video_comp = """/* ─────────────────────────── HERO VIDEO SHOWCASE COMPONENT ─────────────────────────── */
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

content = re.sub(
    r'/\* ─+ HERO VIDEO SHOWCASE COMPONENT ─+ \*/[\s\S]*?const HeroVideoPlayer: React\.FC = \(\) => \{[\s\S]*?return \([\s\S]*?<\/div>\s*\);\s*\};',
    hero_video_comp,
    content
)

# 5. Update DedicatedCatalogPage category filters
content = content.replace(
    """    const matchesCat =
      activeCategory === 'all' ||
      (activeCategory === 'bolts' && item.category === 'Bolts & Screws') ||
      (activeCategory === 'specialty' && item.category === 'Specialty Fasteners') ||
      (activeCategory === 'screws' && item.category === 'Specialized Screws') ||
      (activeCategory === 'advanced' && item.category === 'Advanced Drive Systems') ||
      (activeCategory === 'nuts' && item.category === 'Lock Nuts & Clips') ||
      (activeCategory === 'pins' && item.category === 'Pins & Studs');""",
    """    const matchesCat =
      activeCategory === 'all' ||
      (activeCategory === 'bolts' && item.category === 'Bolts & Screws') ||
      (activeCategory === 'specialty' && item.category === 'Specialty Fasteners') ||
      (activeCategory === 'screws' && item.category === 'Specialized Screws') ||
      (activeCategory === 'advanced' && item.category === 'Advanced Drive Systems') ||
      (activeCategory === 'nuts' && item.category === 'Nuts & Lock Nuts') ||
      (activeCategory === 'washers' && item.category === 'Washers & Components') ||
      (activeCategory === 'pins' && (item.category === 'Pins & Special Bolts' || item.category === 'Studs & Rods'));"""
)

# Update category buttons in DedicatedCatalogPage
cat_buttons = """            {[
              { id: 'all', label: `All Products (${catalogData.length})` },
              { id: 'bolts', label: 'Heavy Bolts & Screws' },
              { id: 'nuts', label: 'Nuts & Lock Nuts' },
              { id: 'washers', label: 'Washers & Components' },
              { id: 'specialty', label: 'Specialty Fasteners' },
              { id: 'screws', label: 'Specialized Screws' },
              { id: 'advanced', label: 'Advanced Drive Systems' },
              { id: 'pins', label: 'Pins & Studs' },
            ].map((cat) => ("""

content = re.sub(
    r'\{\[\s*\{\s*id:\s*\'all\'[\s\S]*?\{\s*id:\s*\'pins\'[\s\S]*?\}\s*\]\.map\(\(cat\) => \(',
    cat_buttons,
    content
)

# 6. Render condition for ContactUsPage
contact_render_view = """  /* ─────────────────────────── RENDER DEDICATED CONTACT US & 3D MAP VIEW ─────────────────────────── */
  if (currentView === 'contact') {
    return (
      <div className="min-h-screen bg-[#FAFAF9] text-gray-900 font-sans">
        <ContactUsPage
          onBackToHome={openHomePage}
          onOpenCatalog={openCatalogPage}
        />
        <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} product={quoteProduct} />
        <ProductDetailModal
          product={selectedCatalogItem}
          onClose={() => setSelectedCatalogItem(null)}
          onOpenQuote={(name) => openQuote(name)}
        />
      </div>
    );
  }"""

if "if (currentView === 'contact')" not in content:
    content = content.replace(
        "/* ─────────────────────────── RENDER DEDICATED CATALOGUE VIEW ─────────────────────────── */",
        contact_render_view + "\n\n  /* ─────────────────────────── RENDER DEDICATED CATALOGUE VIEW ─────────────────────────── */"
    )

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated App.tsx navigation and view rendering successfully!')
