// Extract PPTX content — images and text
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const pptxPath = path.join(__dirname, '..', 'src', 'Hindustan Fasteners Precision Forging  Stamping presentation (2).pptx');
const outputDir = path.join(__dirname, '..', 'public', 'images', 'pptx');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const zip = new AdmZip(pptxPath);
const entries = zip.getEntries();

// Extract all media files (images)
let imageCount = 0;
const imageFiles = [];
entries.forEach(entry => {
  if (entry.entryName.startsWith('ppt/media/')) {
    const ext = path.extname(entry.entryName).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.emf', '.wmf', '.svg'].includes(ext)) {
      const outName = `slide-media-${imageCount}${ext}`;
      fs.writeFileSync(path.join(outputDir, outName), entry.getData());
      imageFiles.push(outName);
      imageCount++;
    }
  }
});

console.log(`\n=== Extracted ${imageCount} images ===`);
imageFiles.forEach(f => console.log(`  /images/pptx/${f}`));

// Extract text from all slides
console.log('\n=== SLIDE TEXT CONTENT ===\n');
entries.forEach(entry => {
  if (entry.entryName.match(/ppt\/slides\/slide\d+\.xml$/)) {
    const xml = entry.getData().toString('utf8');
    // Extract text between <a:t> tags
    const textMatches = xml.match(/<a:t>([^<]*)<\/a:t>/g);
    if (textMatches && textMatches.length > 0) {
      const slideNum = entry.entryName.match(/slide(\d+)/)?.[1];
      console.log(`--- SLIDE ${slideNum} ---`);
      const texts = textMatches.map(m => m.replace(/<\/?a:t>/g, '').trim()).filter(t => t.length > 0);
      texts.forEach(t => console.log(t));
      console.log('');
    }
  }
});
