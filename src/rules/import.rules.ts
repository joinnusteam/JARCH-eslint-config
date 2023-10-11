import { Linter } from 'eslint';

export type Group =
  | 'builtin'
  | 'external'
  | 'internal'
  | 'unknown'
  | 'parent'
  | 'sibling'
  | 'index'
  | 'object'
  | 'type';

export type Position = 'before' | 'after';

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md#pathgroups-array-of-objects
 */
export interface IImportPathGroup {
  /**
   * minimatch pattern for the paths to be in this group (will not be used for builtins or externals)
   */
  pattern: string;

  /**
   * One of the allowed groups, the pathGroup will be positioned relative to this group
   */
  group: Group;

  /**
   * Defines where around the group the pathGroup will be positioned, can be 'after' or 'before', if not provided pathGroup will be positioned like the group
   */
  position?: Position | undefined;

  /**
   * options for minimatch
   *
   * @default
   * { nocomment: true }
   */
  patternOptions?: unknown;
}

export interface IImportRulesOptions {
  /**
   * Internal aliases patterns to be used as internal import group.
   *
   * @example
   *
   * [
   *   { pattern: '@app/**', position: 'before'},
   *   { pattern: '@utils/**'}
   * ]
   */
  pathsGroups?: IImportPathGroup[];
}

/**
 * Rules related to import.
 */
export const getImportRules = (
  options: IImportRulesOptions,
  otherRules: Linter.RulesRecord = {}
): Linter.RulesRecord => {
  return {
    'import/no-self-import': 'error',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        alphabetize: {
          // De esto se encarga el prettier
          order: 'ignore',
        },
        groups: [
          //
          'builtin',
          'external',
          'internal',
          [
            //
            'index',
            'parent',
            'sibling',
          ],
        ],
        pathGroups: options.pathsGroups ?? [],
      },
    ],
    'import/newline-after-import': [
      'warn',
      {
        count: 1,
        considerComments: true,
      },
    ],

    // The custom rules
    ...otherRules,
  };
};
