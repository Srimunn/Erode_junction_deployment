// rotate-graduation.cjs
const path = require('path');
const sharp = require('sharp');

const inputPath = path.resolve(__dirname, 'src/assets/celebration/graduation day.webp');
const outputPath = inputPath; // overwrite

sharp(inputPath)
  .rotate(90)
  .toFile(outputPath)
  .then(() => console.log('Image rotated successfully'))
  .catch(err => console.error('Error rotating image:', err));
