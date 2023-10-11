import { Linter } from 'eslint';

export * from './import.rules';
export * from './node.rules';

export const baseRules: Linter.RulesRecord = {
  'unicorn/no-null': 'off',
  'no-console': 'warn',
  'unicorn/prefer-module': 'warn',
  'unicorn/filename-case': [
    'warn',
    {
      case: 'kebabCase',
    },
  ],
  'unicorn/prevent-abbreviations': [
    'warn',
    {
      replacements: {
        i: {
          index: false,
        },
        e: {
          event: false,
        },
        res: false,
        cmd: {
          command: true,
        },
      },
    },
  ],
};
