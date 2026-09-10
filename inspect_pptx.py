import json

with open('scratch_pptx_data.json', encoding='utf-8') as f:
    data = json.load(f)

for s in data:
    txt = ' // '.join(s['texts'])
    imgs = ', '.join(s['images'])
    print(f"Slide {s['slide']}: {len(s['images'])} imgs [{imgs}]")
    if txt:
        print(f"   Text: {txt}")
