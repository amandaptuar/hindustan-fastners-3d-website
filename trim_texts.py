import re

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Trim Gallery Header Description
old_gallery_desc = """              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed px-2 sm:px-4">
                Slide across our 1,60,000 sq.m. campus in Satpur MIDC, Nashik. Tap any photo card to <strong className="text-cyan-300 font-bold">flip in 3D</strong> and inspect machinery, capacities, and zero-defect quality gates.
              </p>"""

new_gallery_desc = """              <p className="text-xs sm:text-sm text-gray-300 px-2 sm:px-4">
                Explore our Satpur MIDC plant campus. Tap any photo to <strong className="text-cyan-300">flip in 3D</strong> for technical specs.
              </p>"""

if old_gallery_desc in content:
    content = content.replace(old_gallery_desc, new_gallery_desc, 1)

# 2. Trim Secondary Ops Subtitle
old_sec_desc = """          <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">
            We don't send your parts to outside sub-contractors. All 10 specialized secondary operations happen right inside our own plant under our direct control!
          </p>"""

new_sec_desc = """          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-1.5">
            100% in-house secondary processing with zero subcontractor dependency.
          </p>"""

if old_sec_desc in content:
    content = content.replace(old_sec_desc, new_sec_desc, 1)

# 3. Trim Showcase Subtitle
old_cat_desc = """              <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
                Continuous moving product slider. Hover over any card to pause and inspect, or click on any bolt or nut to open its <strong>big technical dialogue box</strong> with high-res photos and instant quotes!
              </p>"""

new_cat_desc = """              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                Click any fastener card below to open technical specifications and get an instant quote.
              </p>"""

if old_cat_desc in content:
    content = content.replace(old_cat_desc, new_cat_desc, 1)

# 4. Trim Overview Paragraphs
old_overview_p1 = """                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Founded in <strong className="text-blue-900">1970</strong> as Hindustan Fasteners and expanded in <strong className="text-blue-900">1982</strong> with Precision Forging and Stamping, we have grown into one of India’s foremost cold-formed fastener manufacturers with a turnover exceeding ₹120 Cr and an annual capacity of 36,000 Metric Tonnes.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  Operating out of 4 interconnected plants across 1,60,000 Sq.M. in Satpur MIDC, Nashik, we supply over 1,00,000 varieties of standard and specialized fasteners directly to major OEMs in India and export to demanding clients in the United States.
                </p>"""

new_overview_p1 = """                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  Founded in <strong className="text-blue-900">1970</strong> and expanded in <strong className="text-blue-900">1982</strong>, we operate 4 modern plants across 1,60,000 m² in Satpur MIDC, Nashik. Producing 36,000 MT annually with ₹120+ Cr turnover, we serve India’s top vehicle OEMs and global exports.
                </p>"""

if old_overview_p1 in content:
    content = content.replace(old_overview_p1, new_overview_p1, 1)

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Text trimmed by 40% successfully!")
