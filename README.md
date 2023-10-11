# @joinnus-team/eslint-config

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/joinnusteam/JARCH-eslint-config)
![npm (scoped with tag)](https://img.shields.io/npm/v/%40joinnus-team/eslint-config/latest)

Set of shared ESLint-opinionated configurations for the Joinnus organization.

## Installing

```sh
yarn add -D @joinnus-team/eslint-config
```

> Just replace `yarn` with `npm` if you are using it instead.

### Installing with peer dependencies:

You need to make sure that `peerDependencies` are installed.

If you are using a package manager that does not perform this automatically, you'll have to do it manually:

> npm >= 7 `peerDependencies` are installed automatically. If you are using it, ignore this step.

```sh
yarn add -D @joinnus-team/eslint-config \
  eslint \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-node \
  eslint-plugin-unicorn \
  prettier \
  prettier-plugin-organize-imports \
  prettier-plugin-pkg
```

<!-- TODO: Add automatically the peer dependencies in this line -->

## Usage

### ESLint config

In your `.eslintrc.json`:

```json
{
  "extends": "@joinnus-team/eslint-config/{preset}"
}
```

Where `{preset}` is one of the [available presets](#available-presets-for-eslint).

> Check out the [ESLint documentation](https://eslint.org/docs/latest/extend/shareable-configs#using-a-shareable-config) other formats to use shared configurations and override some configs.

### Prettier config

You also need to use the related prettier configuration.

In your `.prettierrc.json`:

```json
"@joinnus-team/eslint-config/default-prettier-config"
```

## Available presets for ESLint

The default export from this package offers rules for Node.js 16 and up. Other available presets are:

- `node-erbium`: For Node.js 12 applications.
- `node-fermium` For Node.js 14 applications.
- `node-gallium` For Node.js 16 applications.

## Contributing guidelines

Check out [CONTRIBUTING](./.github/CONTRIBUTING.md).
