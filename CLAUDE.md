# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bare React Native 0.84 / React 19 CLI boilerplate (no Expo) with TypeScript, React Navigation 7 native-stack, i18next, a themed atomic-design UI kit, and Android product flavors. Package manager is **npm** (workspaces); Node >= 22.11.0.

## Commands

```bash
npm install                 # install + link workspaces (required after adding/renaming a workspace)
npm start                   # Metro bundler — must be running before the android:* scripts

npx tsc --noEmit            # type check (there is no `tsc` npm script)
npm run lint                # eslint .
npm test                    # jest
npm test -- __tests__/App.test.tsx   # single file
npm test -- -t 'renders correctly'   # single test by name

npm run ios                 # iOS simulator
npm run android             # Android, development flavor (.sit)
npm run android:staging     # staging flavor (.uat)
npm run android:prod        # production flavor
npm run android:clean       # gradlew clean
npm run android:apk:sit | android:apk:uat | android:apk   # release APKs per flavor
npm run android:aab:sit | android:aab:uat | android:aab   # release AABs per flavor

cd ios && bundle install && bundle exec pod install   # after any native dependency change
```

All `android:*` run scripts pass `--no-packager`, so Metro must already be started in another terminal.

## Path aliases — how they actually resolve

There is **no babel module-resolver**. `@app/*` and `@packages/*` imports resolve at runtime through npm-workspace symlinks: each aliased directory is itself a workspace with a `package.json` declaring the scoped name (`src/packages/react-native-ui/package.json` → `"name": "@packages/react-native-ui"`). `tsconfig.json` `paths` only mirrors this for the TypeScript compiler.

Adding a new alias therefore requires all four:

1. `src/<path>/package.json` with the scoped `name` (and `main`/`types` if it has a barrel `index.ts`),
2. an entry in the root `package.json` `workspaces` array,
3. matching `paths` entries in `tsconfig.json`,
4. `npm install` to create the symlink.

Because these workspaces ship untranspiled TS/TSX, `jest.config.js` `transformIgnorePatterns` must whitelist the scope — `@packages` is already listed; a new top-level scope needs adding there too.

Inside `@packages/react-native-ui`, files import siblings by relative path (`../Text/Text`) but reach theme/tokens by the deep alias (`@packages/react-native-ui/theme/tokens/spacing`). Follow the file you're editing.

## Architecture

```
index.js → App.tsx → src/Main.tsx → @app/navigation/HomeStack
```

- **App.tsx** — imports `@packages/i18n` for its init side effect, then wraps in `SafeAreaProvider` → `ThemeProvider`; drives `StatusBar` from `useTheme().colorScheme`.
- **`@packages/react-navigation`** — owns the navigator primitive (`RootStackNavigator`, a bare `createNativeStackNavigator()`) and `NavigationHeader`, which adapts `NativeStackHeaderProps` onto the UI kit's `Header` organism. It deliberately contains no routes.
- **`@app/navigation`** — owns the routes. `HomeStack.tsx` composes `RootStackNavigator.Screen` entries; `navigationTypes.ts` holds `RootStackParamList` and the `RootNavigationProp<T>` helper that screens use with `useNavigation`.
- **`@app/screens`** — screen components (default exports).
- **`@packages/react-native-ui`** — atoms / molecules / organisms + theme.
- **`@packages/i18n`** — i18next init and a re-export of `useTranslation`.
- **`@app/modules`** — empty placeholder workspace for feature modules.

### Demo screens are dev-only by construction

`HomeStack.tsx` registers the `Demo*` screens inside `{__DEV__ && ...}` using inline `require('@app/screens/demo/...')` (typed through an `AnyComponent` escape hatch) so Metro dead-code-eliminates them from release bundles. A static `import` would defeat this. New demo screens follow the same pattern and must also be added to `RootStackParamList` and to `DEMO_ITEMS` in `DemoIndexScreen.tsx`.

### UI kit conventions

Each component is a folder of three files — `Foo.tsx`, `Foo.types.ts`, `index.ts` (re-exporting value + types) — barrelled up through `atoms|molecules|organisms/index.ts` into `src/packages/react-native-ui/index.ts`. Consumers import from `@packages/react-native-ui` only.

Theming is runtime, not static: colors come from `useTheme()` and are applied via inline style objects, while layout-only rules live in `StyleSheet.create`. Never hardcode a color into a `StyleSheet`. `ThemeProvider` resolves `forcedScheme ?? manualScheme ?? systemScheme`; `useTheme()` throws outside the provider.

Tokens live in `theme/tokens/` (`colors` light/dark maps over a private `palette`, `spacing`, `radii`, `shadows` platform-selected, `typography` mapping the Montserrat family). Size/spacing values come from tokens, not literals — see `Button.tsx`'s `sizeConfig` for the established shape.

`Text` takes a semantic `variant` (heading1…caption/label) with an optional `weight` override; `TranslatedText` is `Text` plus a type-safe `tKey`. Prefer `TranslatedText` for user-facing copy — `@packages/i18n/i18n.ts` augments the i18next `CustomTypeOptions` module so `tKey` is checked against `locales/en/translation.json`.

Note `atoms/View` is a `flex: 1` transparent wrapper, not a drop-in for RN's `View`.

## Code conventions

Enforced by `.github/agents/react-native-dev.agent.md` (read it before larger changes):

- Functional components only, no class components; no `any`.
- No `import React from 'react'` — the modern JSX transform handles it (`React` is only imported where its types/APIs are used).
- No Expo packages.
- No `useMemo`/`useCallback` without a demonstrated performance reason.
- Don't define components inside a render body.
- Platform differences via `.ios.tsx`/`.android.tsx` suffixes (`moduleSuffixes` is configured) or `Platform.select`.
- Don't silence errors with `@ts-ignore` or `eslint-disable`.

## Native / assets gotchas

- Fonts are linked from `src/assets/fonts` via `react-native.config.js` (`npx react-native-asset` regenerates `link-assets-manifest.json`); Jest stubs `.ttf` through `__mocks__/fileMock.js`. Adding a font also means an `Info.plist` `UIAppFonts` entry on iOS. README has the full procedure, plus the rename-the-app checklist.
- Android flavors are `development` / `staging` / `production` (`android/app/build.gradle`), yielding variants named `<flavor><BuildType>` — `developmentDebug`, `stagingRelease`, `productionDebug`, and so on. Gradle task names follow the same casing (`bundleProductionRelease`, `assembleProductionRelease`); keep the npm scripts and the gradle `debuggableVariants` list in sync with the flavor names whenever a flavor is renamed or added.
- New flavors must be added to `debuggableVariants` in the `react { }` block or Metro won't attach in debug.
