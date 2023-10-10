import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { OutputPlugin } from 'rollup';
import { defineBuildConfig } from 'unbuild';

const ROOT_DIR = path.dirname(fileURLToPath(import.meta.url));

/**
 * Rollup plugin to convert the prettier config files to .json format.
 */
const prettierJsonConfig: OutputPlugin = {
  // TODO: Mover implementación a otro paquete
  name: 'prettierJsonConfig',

  async generateBundle(_outputOptions, bundle) {
    // Filter only prettier files
    const prettierFilesNames = Object.keys(bundle).filter(
      (name) => name.startsWith('prettier') && name.endsWith('.mjs')
    );

    // console.log(_outputOptions, bundle);

    const files = prettierFilesNames.map((name) => bundle[name]);

    for (const bundleFile of files) {
      if (bundleFile.type === 'chunk') {
        // const file = await import(DIST_DIR + '/' + fil.fileName);

        if (bundleFile.facadeModuleId) {
          const sourceFile = await import(bundleFile.facadeModuleId); // The original TS

          this.emitFile({
            type: 'asset',
            fileName: bundleFile.fileName.replace('.mjs', '.json'),
            source: JSON.stringify(sourceFile),
          });
        }
      }
    }
  },
};

export default defineBuildConfig({
  //   rollup: {
  //     inlineDependencies: false,
  //     output: {
  //       preserveModules: true,
  //     },
  //   },

  rollup: {
    output: {
      // @ts-ignore Type instantiation is excessively deep and possibly infinite.
      plugins: [prettierJsonConfig],
    },
  },

  externals: [
    //
    '@elegantech/prettier-multi-config/presets',
    '@elegantech/prettier-multi-config',
  ],
  alias: {
    '~': path.resolve(ROOT_DIR, './src'),
  },
  outDir: path.resolve(ROOT_DIR, './dist'),
});
