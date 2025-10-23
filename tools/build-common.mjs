import { build } from 'esbuild';
import { join } from 'node:path';

// Build the common module separately
async function buildCommonModule() {
  try {
    await build({
      entryPoints: ['src/infragistics-common.ts'],
      bundle: true,
      outfile: 'dist/infragistics-common.js',
      format: 'esm',
      platform: 'browser',
      minify: true,
      external: [
        'igniteui-webcomponents-core',
        'igniteui-webcomponents-data-grids'
      ]
    });
    console.log('✔ infragistics-common.js built successfully');
  } catch (error) {
    console.error('❌ Failed to build common module:', error);
  }
}

buildCommonModule();