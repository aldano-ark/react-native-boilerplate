# React Native Boilerplate

A React Native 0.87 CLI starter template with TypeScript, React Navigation 7, NPM (>= 9.0.0) workspaces, custom fonts (Montserrat), and Android product flavors pre-configured.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
  - [Path aliases](#path-aliases)
- [Customization](#customization)
  - [Rename the App](#rename-the-app)
  - [Update Fonts](#update-fonts)
  - [Android Product Flavors](#android-product-flavors)
- [Running the App](#running-the-app)
- [Scripts](#scripts)

---

## Prerequisites

- Node.js `^22.13.0 || ^24.3.0 || >= 26.0.0` (required by React Native 0.87)
- NPM >= 9.0.0 (workspaces enabled)
- Ruby (for CocoaPods on iOS)
- Xcode (iOS)
- Android Studio + JDK (Android)
- Android SDK: platform 37, build-tools 37.0.0, NDK 28.2.13676358

---

## Getting Started

```bash
# Install dependencies (also links the workspace aliases)
npm install

# iOS — install native pods
cd ios && bundle install && bundle exec pod install && cd ..

# Start Metro bundler
npm start
```

> The `android:*` run scripts pass `--no-packager`, so Metro must already be running in another terminal.

---

## Project Structure

```
App.tsx                               # Root providers: SafeAreaProvider → ThemeProvider
src/
├── Main.tsx                          # NavigationContainer + HomeStack
├── assets/fonts/                     # Montserrat family (linked via react-native.config.js)
├── app/
│   ├── screens/                      # Screen components (@app/screens/*)
│   ├── navigation/                   # Routes: HomeStack + RootStackParamList (@app/navigation/*)
│   └── modules/                      # Placeholder for feature modules (@app/modules/*)
└── packages/
    ├── react-navigation/             # Navigator primitives + NavigationHeader — no routes
    ├── react-native-ui/              # Atoms / molecules / organisms + theme
    └── i18n/                         # i18next init and useTranslation
```

Routes live in `@app/navigation`; `@packages/react-navigation` deliberately holds only the navigator
primitive so the UI layer stays route-agnostic.

### Path aliases

There is **no babel module-resolver**. `@app/*` and `@packages/*` resolve at runtime through npm
workspace symlinks — each aliased directory is a workspace whose `package.json` declares the scoped
name. [tsconfig.json](tsconfig.json) `paths` only mirrors that for the TypeScript compiler.

Adding a new alias needs all four:

1. `src/<path>/package.json` with the scoped `name` (plus `main`/`types` if it has a barrel `index.ts`),
2. an entry in the root [package.json](package.json) `workspaces` array,
3. matching `paths` in [tsconfig.json](tsconfig.json),
4. `npm install` to create the symlink.

A new top-level scope must also be whitelisted in `transformIgnorePatterns` in
[jest.config.js](jest.config.js), since these workspaces ship untranspiled TS/TSX.

---

## Customization

### Rename the App

Replace every occurrence of `ReactNativeBoilerplate` / `reactnativeboilerplate` with your app name.

#### 1. `app.json`

```json
{
  "name": "MyApp",
  "displayName": "My App"
}
```

#### 2. Android

**`android/settings.gradle`** — root project name:

```groovy
rootProject.name = 'MyApp'
```

**`android/app/build.gradle`** — namespace and application ID:

```groovy
android {
    namespace "com.myapp"
    defaultConfig {
        applicationId "com.myapp"
        ...
    }
}
```

**`android/app/src/main/res/values/strings.xml`** — default app name (used as fallback when no flavor is active):

```xml
<string name="app_name">My App</string>
```

> The per-flavor display names are set via `resValue` in each `productFlavors` block inside `android/app/build.gradle`. See [Android Product Flavors](#android-product-flavors).

**`android/app/src/main/java/`** — rename the package directory from `com/reactnativeboilerplate/` to `com/myapp/` and update the `package` declaration at the top of `MainActivity.kt` and `MainApplication.kt`.

#### 3. iOS

**`ios/ReactNativeBoilerplate/Info.plist`** — display name:

```xml
<key>CFBundleDisplayName</key>
<string>My App</string>
```

**Xcode** — open `ios/ReactNativeBoilerplate.xcodeproj`, select the target, and update:

- Target name
- Bundle Identifier (e.g. `com.myapp`)
- `MARKETING_VERSION` and `CURRENT_PROJECT_VERSION` in Build Settings

**`ios/Podfile`** — target name must match the Xcode target:

```ruby
target 'MyApp' do
  ...
end
```

After renaming the iOS target/folder, re-run:

```bash
cd ios && pod install
```

---

### Update Fonts

The boilerplate ships with the full **Montserrat** family. Font files live in `src/assets/fonts/`.

#### Replace or add fonts

1. **Add font files** to `src/assets/fonts/` (e.g. `Inter-Regular.ttf`). That directory is registered
   as an asset folder in [react-native.config.js](react-native.config.js).

2. **Link them** — this copies to `android/app/src/main/assets/fonts/`, adds the Xcode file
   references, and regenerates `ios/link-assets-manifest.json` + `android/link-assets-manifest.json`:

   ```bash
   npx react-native-asset
   ```

3. **iOS — register each face in `Info.plist`.** Linking puts the `.ttf` in the bundle but iOS only
   _loads_ fonts listed under `UIAppFonts`, so add every new face to
   `ios/ReactNativeBoilerplate/Info.plist`:

   ```xml
   <key>UIAppFonts</key>
   <array>
       <string>Inter-Regular.ttf</string>
       <!-- add every variant you shipped -->
   </array>
   ```

   > This is also why the three `FontAwesome6_*.ttf` entries are in that array — `@react-native-vector-icons`
   > ships its faces via its podspec, but without the `Info.plist` entries the icons silently render as
   > missing-glyph boxes on iOS while still working on Android. Any additional icon set needs the same treatment.

4. **Rebuild** the app (`cd ios && bundle exec pod install` first if pods changed).

5. **Use the font in JS** — use the PostScript name (usually `FontFamily-Weight`), and prefer adding it
   to `theme/tokens/typography.ts` over hardcoding:
   ```tsx
   <Text style={{ fontFamily: 'Inter-Regular' }}>Hello</Text>
   ```
   > Tip: check the PostScript name in Font Book (macOS) if unsure of the exact name.

#### Remove unused fonts

To remove the default Montserrat fonts:

- Delete the `.ttf` files from `src/assets/fonts/`
- Remove their entries from `ios/ReactNativeBoilerplate/Info.plist` (`UIAppFonts` array)
- Remove them from the Xcode project (select files → **Delete** → **Move to Trash**)
- Delete them from `android/app/src/main/assets/fonts/`
- Drop their entries from `ios/link-assets-manifest.json` and `android/link-assets-manifest.json`
- Remove any references from `src/packages/react-native-ui/theme/tokens/typography.ts`

---

### Android Product Flavors

Three flavors are configured in `android/app/build.gradle`:

| Flavor        | Suffix   | App Name          | Version Name |
| ------------- | -------- | ----------------- | ------------ |
| `development` | `.sit`   | Boilerplate (SIT) | 1.0.0-SIT    |
| `staging`     | `.uat`   | Boilerplate (UAT) | 1.0.0-UAT    |
| `production`  | _(none)_ | Boilerplate       | 1.0.0        |

Each flavor produces a unique `applicationId`, so all three can be installed on the same device simultaneously.

#### Modify a flavor

Edit the `productFlavors` block in `android/app/build.gradle`:

```groovy
productFlavors {
    development {
        dimension "default"
        applicationIdSuffix ".sit"
        resValue "string", "app_name", "My App (SIT)"
        versionCode 1
        versionName "1.0.0-SIT"
    }
    staging {
        dimension "default"
        applicationIdSuffix ".uat"
        resValue "string", "app_name", "My App (UAT)"
        versionCode 1
        versionName "1.0.0-UAT"
    }
    production {
        dimension "default"
        resValue "string", "app_name", "My App"
        versionCode 1
        versionName "1.0.0"
    }
}
```

#### Add a new flavor

1. Add a new entry in `productFlavors`.
2. Add it to `debuggableVariants` in the `react { }` block so Metro bundler works correctly in debug:
   ```groovy
   debuggableVariants = ["developmentDebug", "developmentDebugOptimized", "stagingDebug", "stagingDebugOptimized", "productionDebug", "productionDebugOptimized", "newFlavorDebug", "newFlavorDebugOptimized"]
   ```
3. Run with the new flavor (see [Running the App](#running-the-app)).

---

## Running the App

### iOS

```bash
npm run ios
```

### Android — default flavor (`development`)

```bash
npm run android
```

### Android — specific flavor

```bash
# Development (SIT)
npm run android

# Staging (UAT)
npm run android:staging

# Production
npm run android:prod
```

Or invoke the CLI directly (note the `=` and that Metro must be running):

```bash
npx react-native run-android --mode=stagingDebug --appIdSuffix uat --no-packager
```

Or use Android Studio: **Build > Select Build Variant** → choose the desired flavor + build type.

---

## Scripts

| Command                                                    | Description                                            |
| ---------------------------------------------------------- | ------------------------------------------------------ |
| `npm start`                                                | Start Metro bundler                                    |
| `npm run ios`                                              | Build and run on iOS simulator                         |
| `npm run android`                                          | Build and run on Android emulator (development flavor) |
| `npm run android:staging`                                  | Run the staging (UAT) flavor                           |
| `npm run android:prod`                                     | Run the production flavor                              |
| `npm run android:clean`                                    | `./gradlew clean`                                      |
| `npm run android:apk:sit` / `:uat` / `npm run android:apk` | Release APK per flavor                                 |
| `npm run android:aab:sit` / `:uat` / `npm run android:aab` | Release AAB per flavor                                 |
| `npm test`                                                 | Run Jest tests                                         |
| `npm run lint`                                             | Run ESLint                                             |
| `npx tsc --noEmit`                                         | Type check (there is no `tsc` script)                  |

`npm run lint` has 6 pre-existing `react-native/no-inline-styles` warnings (0 errors). They are the
runtime-theming convention colliding with that rule — that is the expected baseline.
