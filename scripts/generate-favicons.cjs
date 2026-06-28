const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PUBLIC = path.join(__dirname, '..', 'public');

const favicons = [
    { svg: 'favicon.svg', out: 'favicon.svg', sizes: null },
    { svg: 'favicon.svg', out: 'favicon-16x16.png', sizes: 16 },
    { svg: 'favicon.svg', out: 'favicon-32x32.png', sizes: 32 },
    { svg: 'favicon-180x180.svg', out: 'apple-touch-icon.png', sizes: 180 },
    { svg: 'favicon-192x192.svg', out: 'favicon-192x192.png', sizes: 192 },
    { svg: 'favicon-512x512.svg', out: 'favicon-512x512.png', sizes: 512 },
    { svg: 'og-image.svg', out: 'og-image.png', sizes: null },
];

async function generate() {
    for (const { svg, out, sizes } of favicons) {
        const svgPath = path.join(PUBLIC, svg);
        const outPath = path.join(PUBLIC, out);

        if (!fs.existsSync(svgPath)) {
            console.warn(`[skip] ${svg} not found`);
            continue;
        }

        if (svg === out) {
            console.log(`[ok] ${out} (kept as SVG)`);
            continue;
        }

        let pipeline = sharp(svgPath);

        if (sizes) {
            pipeline = pipeline.resize(sizes, sizes);
        }

        if (out.endsWith('.png')) {
            pipeline = pipeline.png();
        }

        await pipeline.toFile(outPath);
        console.log(`[ok] ${out}${sizes ? ` (${sizes}x${sizes})` : ''}`);
    }

    console.log('\nDone. Favicons generated in public/');
}

generate().catch((err) => {
    console.error('Error:', err.message);
    process.exit(1);
});
