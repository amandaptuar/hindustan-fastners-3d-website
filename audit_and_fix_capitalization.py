import re

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fixes list for App.tsx
replacements = [
    # Header & Nav
    ('Process Pipeline', 'Process Pipeline'),
    ('Plant Gallery', 'Plant Gallery'),
    ('Operations', 'Operations'),
    ('About Us', 'About Us'),
    ('Clients', 'Clients'),
    ('Get Quote →', 'Get Quote →'),
    ('Catalogue →', 'Catalogue →'),

    # Hero & Buttons
    ('SEE HOW WE MAKE THEM', 'See How We Make Them'),
    ('REQUEST A PRICE QUOTE', 'Request a Price Quote'),
    ('EXPLORE ALL BOLTS & NUTS', 'Explore All Bolts & Nuts'),

    # Gallery
    ('Swipe cards horizontally on mobile · Tap any photo card to 3D flip between plant view and engineering specifications.',
     'Swipe cards horizontally on mobile. Tap any photo card to flip in 3D for engineering specifications.'),

    ('Tip: Swipe left/right on mobile to scroll through cards · Tap any photo card to 3D flip between plant view and engineering specifications.',
     'Tip: Swipe left or right on mobile to scroll cards. Tap any photo card to flip in 3D for engineering specifications.'),

    ('Click or tap any photo below. The card will <strong className="text-cyan-300">flip in 3D</strong> to reveal an in-depth engineering explanation of that plant area, machinery, capacity, and zero-defect engineering quality controls.',
     'Click or tap any photo below. The card will flip in 3D to reveal plant machinery, capacity, and zero-defect engineering quality controls.'),

    # Secondary operations & Showcase
    ('100% In-House Managed Control', '100% In-House Managed Control'),
    ('Zero Sub-Contractors', 'Zero Sub-Contractors'),
    ('Strict Quality', 'Strict Quality Control'),
    ('Continuous Automatic Slider · Hover any card to pause and read details',
     'Continuous automatic slider. Hover over any card to pause and read details.'),

    # Footers & Labels
    ('Satpur MIDC Nashik', 'Satpur MIDC, Nashik'),
    ('Gate Passed', 'Gate Passed'),
    ('Gate 01 of 10 · Continuous In-House Line', 'Gate 01 of 10 · Continuous In-House Line'),
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new)

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Capitalization and grammar audit applied successfully!")
