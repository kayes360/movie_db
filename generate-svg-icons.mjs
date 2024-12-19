import fs from 'fs';
import path from 'path';

const generateSVGIcons = () => {
  const publicDirectory = path.join(process.cwd(), 'public');
  const componentsDirectory = path.join(process.cwd(), 'components');

  // Create components directory if it doesn't exist
  if (!fs.existsSync(componentsDirectory)) {
    fs.mkdirSync(componentsDirectory, { recursive: true });
  }

  const svgIconsPath = path.join(componentsDirectory, 'SVGIcons.jsx');

  let iconsCode = `import React from 'react';\n\n`;

  const walk = (dir) => {
    fs.readdirSync(dir).forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walk(filePath);
      } else if (path.extname(file) === '.svg') {
        const fileName = path.basename(file, '.svg');
        const componentName = `${fileName}Icon`;

        const svgData = fs.readFileSync(filePath, 'utf-8');

        iconsCode += `export const ${componentName} = () => (\n`;
        iconsCode += `  ${svgData}\n`;
        iconsCode += `);\n\n`;
      }
    });
  };

  walk(publicDirectory);

  fs.writeFileSync(svgIconsPath, iconsCode);
};

generateSVGIcons();