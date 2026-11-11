# NourishHer

> Nourish her. Every phase.

NourishHer is an iOS app built with [Expo](https://expo.dev) and React Native, written in TypeScript. It is organized around the four phases of the menstrual cycle: menstrual, follicular, ovulation and luteal.

**Status:** early foundation. The app currently shows a branded landing screen. Navigation and features come next.

## Tech stack

- [Expo SDK 58](https://docs.expo.dev/versions/v58.0.0/) with React Native 0.88 and React 19
- TypeScript (strict mode)
- [pnpm](https://pnpm.io) for package management
- [EAS](https://docs.expo.dev/eas/) for cloud builds
- iOS only

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 22.13 or newer (24 LTS recommended)
- [pnpm](https://pnpm.io/installation)
- An iPhone with [Expo Go](https://apps.apple.com/app/expo-go/id982107779) installed

You do not need a Mac or Xcode to run the app on a physical iPhone.

### Install and run

```bash
pnpm install
pnpm start
```

Scan the QR code with your iPhone camera to open the app in Expo Go. Sign in to the same Expo account in Expo Go and in your terminal (`npx expo login`) so the project shows up.

If your phone cannot reach your computer over the local network, for example when developing inside WSL, use a tunnel:

```bash
pnpm start --tunnel
```

On a Mac you can also launch the iOS simulator directly:

```bash
pnpm ios
```

### Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm start`     | Start the Expo dev server            |
| `pnpm ios`       | Start the dev server and open the iOS simulator (macOS only) |
| `pnpm lint`      | Lint the project with Expo's ESLint config |
| `npx tsc --noEmit` | Type-check the project             |

Add Expo packages with `npx expo install <package>` so versions stay compatible with the SDK.

## Project structure

```
.
├── App.tsx               # Root component, renders HomeScreen
├── index.ts              # Entry point (registerRootComponent)
├── app.json              # Expo config
├── eas.json              # EAS Build profiles
└── src/
    ├── components/       # Reusable UI components
    ├── constants/
    │   └── theme.ts      # Colors, font sizes, spacing
    ├── navigation/       # Navigation setup
    ├── screens/
    │   └── HomeScreen.tsx
    └── types/            # Shared TypeScript types
```

## Releasing

To ship to TestFlight or the App Store, build with [EAS Build](https://docs.expo.dev/build/introduction/) (`eas.json` is already configured). This requires an Apple Developer Program membership.

## Documentation

- [Expo SDK 58 docs](https://docs.expo.dev/versions/v58.0.0/)
- [Expo Go](https://expo.dev/go)
- [EAS Build](https://docs.expo.dev/build/introduction/)
