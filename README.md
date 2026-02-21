# React Native Boilerplate

A React Native CLI starter template with TypeScript, React Navigation 7, Yarn workspaces, custom fonts (Montserrat), and Android product flavors pre-configured.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
  - [Rename the App](#rename-the-app)
  - [Update Fonts](#update-fonts)
  - [Android Product Flavors](#android-product-flavors)
- [Running the App](#running-the-app)
- [Scripts](#scripts)

---

## Prerequisites

- Node.js >= 22.11.0
- Yarn (workspaces enabled)
- Ruby (for CocoaPods on iOS)
- Xcode (iOS)
- Android Studio + JDK (Android)

---

## Getting Started

```bash
# Install dependencies
yarn install

# iOS — install native pods
cd ios && pod install && cd ..

# Start Metro bundler
yarn start
```

---

## Project Structure

```
src/
├── Main.tsx                          # App root with NavigationContainer
├── app/
│   └── screens/                      # Screen components (@app/screens/*)
└── packages/
    ├── react-navigation/             # Stacks and navigators (@packages/react-navigation)
    └── react-native-ui/              # Shared UI components
```

Path aliases are configured in [tsconfig.json](tsconfig.json) and [babel.config.js](babel.config.js).

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

1. **Add font files** to `src/assets/fonts/` (e.g. `Inter-Regular.ttf`).

2. **Android** — copy the font files to `android/app/src/main/assets/fonts/`:

   ```bash
   cp src/assets/fonts/Inter-Regular.ttf android/app/src/main/assets/fonts/
   ```

   Android resolves fonts from this directory automatically — no further native changes needed.

3. **iOS** — two steps:

   a. Add the font files to the Xcode project:

   - In Xcode, right-click on the `ReactNativeBoilerplate` group → **Add Files to "ReactNativeBoilerplate"**
   - Select the font files and check **"Add to target"**

   b. Register each font in `ios/ReactNativeBoilerplate/Info.plist` under `UIAppFonts`:

   ```xml
   <key>UIAppFonts</key>
   <array>
       <string>Inter-Regular.ttf</string>
       <!-- add more variants here -->
   </array>
   ```

4. **Run** `cd ios && pod install` then rebuild.

5. **Use the font in JS** — use the PostScript name (usually `FontFamily-Weight`):
   ```tsx
   <Text style={{ fontFamily: 'Inter-Regular' }}>Hello</Text>
   ```
   > Tip: Use `Font.loadAsync` from expo-font or check the PostScript name in Font Book (macOS) if unsure of the exact name.

#### Remove unused fonts

To remove the default Montserrat fonts:

- Delete the `.ttf` files from `src/assets/fonts/`
- Remove their entries from `ios/ReactNativeBoilerplate/Info.plist` (`UIAppFonts` array)
- Remove them from the Xcode project (select files → **Delete** → **Move to Trash**)
- Delete them from `android/app/src/main/assets/fonts/`

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
   debuggableVariants = ["developmentDebug", "developmentDebugOptimized", "stagingDebug", "stagingDebugOptimized", "prodDebug", "prodDebugOptimized", "newFlavorDebug", "newFlavorDebugOptimized"]
   ```
3. Run with the new flavor (see [Running the App](#running-the-app)).

---

## Running the App

### iOS

```bash
yarn ios
```

### Android — default flavor (`development`)

```bash
yarn android
```

### Android — specific flavor

```bash
# Development (SIT)
yarn react-native run-android --mode developmentDebug

# Staging (UAT)
yarn react-native run-android --mode stagingDebug

# Production
yarn react-native run-android --mode productionDebug
```

Or use Android Studio: **Build > Select Build Variant** → choose the desired flavor + build type.

---

## Scripts

| Command        | Description                                            |
| -------------- | ------------------------------------------------------ |
| `yarn start`   | Start Metro bundler                                    |
| `yarn ios`     | Build and run on iOS simulator                         |
| `yarn android` | Build and run on Android emulator (development flavor) |
| `yarn test`    | Run Jest tests                                         |
| `yarn lint`    | Run ESLint                                             |
