---
description: Vite React playground 작업
argument-hint: "<task>"
---

Vite React playground 작업을 진행합니다: `$ARGUMENTS`.

중요한 맥락:

- `apps/playground`는 의도적으로 Vite React입니다. Next.js가 아닙니다.
- 앱 entry는 `apps/playground/src/main.tsx`입니다.
- 메인 화면은 `apps/playground/src/App.tsx`입니다.
- 로컬 스타일은 `apps/playground/src/styles.css`에 있습니다.

검증 명령:

```sh
pnpm --filter playground lint
pnpm --filter playground check-types
pnpm --filter playground build
```
