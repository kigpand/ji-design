# Ji Design

Design system monorepo.

## Structure

```txt
apps/
  storybook/      # documentation and component review
  playground/     # real app usage checks

packages/
  core/           # tokens, theme primitives, shared types
  ui/             # React components
  hooks/          # shared React hooks
  styles/         # reset, CSS variables, global styles
  icons/          # icon components
  eslint-config/  # shared ESLint config
  typescript-config/ # shared TypeScript config

tools/
  cli/             # future component generator entry point
  token-generator/ # future token generation pipeline
```

## Scripts

```sh
pnpm dev
pnpm storybook
pnpm lint
pnpm check-types
```
