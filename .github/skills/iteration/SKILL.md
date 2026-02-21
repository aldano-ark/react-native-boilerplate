---
name: iteration
description: 'Run a structured React Native development iteration cycle: plan, implement, verify, and refine a feature or fix.'
---

# React Native Iteration Cycle

A structured workflow for implementing and refining changes in this React Native project. Each iteration produces working, tested, convention-compliant code.

## When to Use

- Starting a new screen or component
- Fixing a bug or regression
- Refactoring existing code
- Adding or modifying navigation

## Procedure

### 1. Plan

- Read all files relevant to the change (screens, navigators, UI packages)
- Identify: What files change? What new files are needed? Any new dependencies?
- Check constraints from [react-native-dev.agent.md](../../agents/react-native-dev.agent.md) before proceeding
- If scope is ambiguous, ask one focused clarifying question before writing code

### 2. Implement

Follow project conventions:

| What                   | Where                                       |
| ---------------------- | ------------------------------------------- |
| New screen             | `src/app/screens/<ScreenName>.tsx`          |
| New navigator or stack | `src/packages/react-navigation/`            |
| Reusable UI component  | `src/packages/react-native-ui/`             |
| Route registration     | `src/packages/react-navigation/<Stack>.tsx` |

- Use path aliases: `@app/screens/*`, `@packages/react-navigation`
- TypeScript strict types, functional components only
- No `useMemo`/`useCallback` without a clear performance reason

### 3. Verify

Run these checks after every implementation step:

```bash
# Type check
yarn tsc --noEmit

# Lint
yarn lint

# Tests
yarn test
```

Fix all errors before moving to the next step. Do not suppress errors with `// @ts-ignore` or `eslint-disable`.

### 4. Refine

- Re-read the changed files and check for:
  - [ ] Correct file placement (screen vs component vs navigator)
  - [ ] Path aliases used (not relative `../../` imports between packages)
  - [ ] No Expo packages introduced
  - [ ] No `any` types
  - [ ] Platform-specific behavior handled (if applicable)
- If a native module was added: note that `pod install` (iOS) and a Gradle sync (Android) are required
- Refactor for readability and maintainability, but avoid premature optimization or unnecessary abstraction. Simplicity is preferred unless there is a clear reason for complexity.

### 5. Summarize

After completing the iteration, provide:

- Files created or modified (with brief reason for each)
- Commands the user needs to run (e.g., `pod install`, `yarn test`)
- Known limitations or follow-up tasks

## Iteration Size

Keep each iteration small and focused. If a task spans more than ~3 files or introduces a new dependency, split it into multiple iterations.
