import { Linter } from 'eslint';

export * from './import.rules';
export * from './node.rules';

export const baseRules: Linter.RulesRecord = {
  'unicorn/no-null': 'off',
  'no-console': 'warn',
  'unicorn/prefer-module': 'warn',
};
