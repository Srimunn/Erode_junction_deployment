import sharp from 'sharp';

const inputPath = 'C:\\Users\\itsme\\.gemini\\antigravity-ide\\brain\\aa76c129-d546-470c-bfff-bebdfc645291\\media__1781192748137.png';
const outputPath = 'c:\\Users\\itsme\\Erode_junction_deployment\\src\\assets\\logo.webp';

sharp(inputPath)
  .webp({ quality: 95 })
  .toFile(outputPath)
  .then(() => console.log('Successfully converted and overwritten logo.webp'))
  .catch(err => {
    console.error('Conversion failed:', err);
    process.exit(1);
  });
