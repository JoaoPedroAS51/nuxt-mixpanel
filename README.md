<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: nuxt-mixpanel
- Package name: nuxt-mixpanel
- Description: My new Nuxt module
-->

# nuxt-mixpanel

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

<!-- My new Nuxt module for doing amazing things. -->

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-mixpanel?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

<!-- ## Features -->

<!-- Highlight some of the features your module provide here -->
<!-- - ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz -->

## Quick Setup

1. Add `nuxt-mixpanel` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-mixpanel

# Using yarn
yarn add --dev nuxt-mixpanel

# Using npm
npm install --save-dev nuxt-mixpanel
```

2. Add `nuxt-mixpanel` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-mixpanel'
  ]
})
```

That's it! You can now use nuxt-mixpanel in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-mixpanel/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-mixpanel

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-mixpanel.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-mixpanel

[license-src]: https://img.shields.io/npm/l/nuxt-mixpanel.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-mixpanel

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
