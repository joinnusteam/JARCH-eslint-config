import { Linter } from 'eslint';

interface INodeRulesOptions {
  /**
   * The version range for node.
   *
   * @example
   * '>=16'
   * '^14.0.0'
   */
  nodeVersionRange: string;
}

export const getNodeRules = (options: INodeRulesOptions): Linter.RulesRecord => {
  return {
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: options.nodeVersionRange,
        ignores: [],
      },
    ],
  };
};
