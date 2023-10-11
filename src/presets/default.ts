import { Linter } from 'eslint';

import { baseRules, getImportRules, getNodeRules } from '~/rules';

const config: Linter.Config = {
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      parserOptions: {
        ecmaVersion: 'latest',
      },
      extends: [
        //
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:import/recommended',
        'plugin:unicorn/recommended',
        'prettier',
      ],
      plugins: [
        //
        'node',
        'import',
        'unicorn',
      ],
      rules: {
        ...baseRules,
        ...getImportRules({
          pathsGroups: [
            { group: 'internal', pattern: '@/**' },
            { group: 'internal', pattern: '~/**' },
          ],
        }),
        ...getNodeRules({ nodeVersionRange: '>=16' }),
      },
    },
  ],
};

export default config;

// TODO: Create presets for different versions of node
// 18.x	Hydrogen	2023-09-18
// 20.x	-	2023-09-28
