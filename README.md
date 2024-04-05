<p></p>
<p align="center">
  <a href="https://github.com/heybrostudio/vite-webext-vue">
    <img alt="Developing Browser Extensions with Vue.js based on Vite" src="https://raw.githubusercontent.com/heybrostudio/vite-webext-vue/main/.github/logo.svg" width="500">
  </a>
</p>
<p align="center">
  <samp>Developing Browser Extensions with Vue.js based on Vite.</samp>
</p>

## Usage

- The extension manifest is defined in `src/manifest.ts` and used by `@samrum/vite-plugin-web-extension` in the vite config.

- `Background`, `content scripts`, `options`, and `popup` entry points exist in the `src/entries` directory.

- `Content scripts` are rendered by `src/entries/content/index.ts` - `renderContent` function which renders content within a ShadowRoot
and handles style injection for HMR and build modes.

- Otherwise, the project functions just like a regular `Vite` project.

- `HMR` during development in `Manifest V3` requires `Chromium version >= 110.0.5480.0`.

- Using the [UnoCSS](https://github.com/unocss/unocss) Atomic CSS engine in `Content scripts`, `options`, and `popup`.

Refer to [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension) for more usage notes.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

To clone repo:
```sh
bunx degit heybrostudio/vite-webext-vue [your-project-name]
```

To install dependencies:
```sh
bun install
```

## Commands
### Build
#### Development, HMR

Hot Module Reloading is used to load changes inline without requiring extension rebuilds and extension/page reloads
Currently only works in Chromium based browsers.
```sh
bun run dev
```

#### Development, Watch

Rebuilds extension on file changes. Requires a reload of the extension (and page reload if using content scripts)
```sh
bun run dev:watch
```

#### Production

Minifies and optimizes extension build
```sh
bun run build
```

#### Release

Bump version and extension build
```sh
bun run release
```

#### Upgrade dependencies

Using [taze](https://github.com/antfu/taze) to detect dependency versions
```sh
bun run up
```

### Auto Zip

Automatically zip after build via [vite-plugin-fflate-zip](https://github.com/heybrostudio/vite-plugin-fflate-zip)
```ts
// vite.config.ts

// ...

import fflateZip from 'vite-plugin-fflate-zip'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      // ...
      webExtension({
        manifest: getManifest(),
      }),
      fflateZip({
        inDir: 'dist/build',
      }),
    ],
    // ...
  }
})
```

### Load extension in browser

Loads the contents of the `dist/dev` directory into the specified browser
```sh
bun run serve:chrome
```

```sh
bun run serve:firefox
```
