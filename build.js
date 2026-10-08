import { mkdir, copyFile } from 'node:fs/promises';

// Package only the browser files for deployment.
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'web.js', 'calculator.js']) {
  await copyFile(file, `dist/${file}`);
}
console.log('Website packaged in dist/');
