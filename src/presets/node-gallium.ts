import { Linter } from 'eslint';

import { baseRules, getImportRules, getNodeRules } from '~/rules';

/**
 * Config for Node.js 16 (Gallium).
 */
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
        ...getNodeRules({ nodeVersionRange: '^16.0.0' }),

        // Esto es sólo desde node 18
        'unicorn/prefer-node-protocol': 'off',
      },
    },
  ],
};

export default config;
