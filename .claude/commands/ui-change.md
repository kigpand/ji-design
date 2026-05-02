---
description: Ji Design UI 패키지 변경 구현 또는 리뷰
argument-hint: "<component or task>"
---

Ji Design UI 변경 작업을 진행합니다: `$ARGUMENTS`.

다음 repo 규칙을 따릅니다.

- 컴포넌트 소스는 `packages/ui/src`에 둡니다.
- public export는 `packages/ui/src/index.ts`를 통합니다.
- 재사용 스타일은 `@ji-design/styles`의 token과 맞춥니다.
- 동작이나 variant가 바뀌면 `apps/storybook/stories`의 Storybook 예제를 추가하거나 수정합니다.
- 빠른 런타임 예제가 필요하면 `apps/playground/src/App.tsx`도 업데이트합니다.
- 검증 명령:
  - `pnpm --filter @ji-design/ui lint`
  - `pnpm --filter @ji-design/ui check-types`
  - Storybook이나 playground를 건드렸으면 해당 앱의 검증도 실행합니다.
