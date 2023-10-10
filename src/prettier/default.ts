import {
  getMergedGlobalOptionsFor,
  getMergedOverrideFor,
  getPluginsFor,
} from '@elegantech/prettier-multi-config/presets';
import { Config } from 'prettier';

const config: Config = {
  ...getMergedGlobalOptionsFor(['base'], {
    // custom options
  }),

  plugins: getPluginsFor(['base']),

  overrides: [...getMergedOverrideFor('base')],
};

export default config;
