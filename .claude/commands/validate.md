---
description: 이 모노레포의 표준 검증 명령 실행
argument-hint: "[package filter, optional]"
---

Ji Design workspace의 검증을 실행합니다.

package filter가 전달되면 `pnpm --filter`와 함께 사용합니다.
filter가 없으면 root 기준 검증을 실행합니다.

진행 순서:

1. `$ARGUMENTS`가 비어 있으면:
   - `pnpm lint`
   - `pnpm check-types`
2. `$ARGUMENTS`가 있으면:
   - `pnpm --filter $ARGUMENTS lint`
   - `pnpm --filter $ARGUMENTS check-types`
3. 변경이 exports, build config, package boundary, app에 영향을 주면:
   - 관련 build 명령도 실행합니다.
4. 실행한 정확한 명령과 통과/실패 결과를 보고합니다.
