# Ji Design Claude 가이드

## 프로젝트 개요

Ji Design은 React 디자인 시스템을 만들기 위한 pnpm/Turborepo 모노레포입니다.

- 패키지 매니저: `pnpm@9.0.0`
- Node: `>=20`
- 언어/모듈: TypeScript, ESM
- React: 19
- Playground: Vite React 앱입니다. Next.js가 아닙니다.
- Storybook: Storybook React Vite

## 워크스페이스 구조

- `apps/playground`: 실제 앱 환경에서 사용성을 확인하는 Vite React playground.
- `apps/storybook`: 컴포넌트 문서화와 리뷰를 위한 Storybook 앱.
- `packages/ui`: React 컴포넌트 패키지.
- `packages/hooks`: 공유 React hooks 패키지.
- `packages/styles`: reset, CSS variables, global styles export 패키지.
- `packages/icons`: 아이콘 컴포넌트 패키지.
- `packages/eslint-config`: 공유 ESLint flat config 패키지.
- `packages/typescript-config`: 공유 TypeScript config 패키지.
- `tools/cli`: 향후 컴포넌트 생성기 진입점.
- `tools/token-generator`: 향후 토큰 생성 파이프라인.

## 자주 쓰는 명령어

특정 패키지만 작업할 때는 가능하면 `--filter`를 사용합니다.

```sh
pnpm lint
pnpm check-types
pnpm build
pnpm dev
pnpm storybook
```

Package examples:

```sh
pnpm --filter playground dev
pnpm --filter playground lint
pnpm --filter playground check-types
pnpm --filter playground build
pnpm --filter @ji-design/ui lint
pnpm --filter @ji-design/ui check-types
```

## 개발 규칙

- 새 로컬 설정을 만들기보다 기존 workspace 패키지와 공유 config를 우선 사용합니다.
- 어떤 패키지가 dependency를 import한다면, 그 dependency는 해당 패키지의 `package.json`에 선언합니다.
- 내부 `@ji-design/*` 패키지는 `workspace:*`로 연결합니다.
- generated output은 수정하지 않습니다: `node_modules`, `dist`, `.next`, `.turbo`, `storybook-static`, coverage 파일.
- `apps/playground`에 Next.js를 다시 도입하지 않습니다. 이 앱은 의도적으로 Vite React입니다.
- 런타임 토큰의 기준은 `packages/styles/src/variables.css`의 CSS variables입니다.
- React 컴포넌트는 일반적인 TypeScript와 JSX로 작성합니다. 필요 없는 추상화는 만들지 않습니다.
- 컴포넌트 variant 이름은 가능하면 표현 방식(`solid`)보다 의미(`primary`, `secondary`, `destructive`)를 우선합니다.
- CSS는 소유하는 패키지나 앱 가까이에 둡니다. 재사용 토큰이나 global style일 때만 공유 패키지로 옮깁니다.
- 디자인 시스템 색상, radius, primitive 값은 가능하면 `@ji-design/styles`의 CSS variables를 사용합니다.
- 각 패키지의 public API는 해당 패키지의 `src/index.ts`를 통해 export합니다.
- 새 public export를 추가하면 해당 패키지의 `package.json` `exports` map도 함께 확인합니다.

## 검증 기준

코드 변경을 마치기 전에 변경 범위에 맞는 가장 좁은 검증을 실행합니다.

- 컴포넌트/패키지 변경: `pnpm --filter <package> lint`, `pnpm --filter <package> check-types`
- Playground 변경: `pnpm --filter playground lint`, `pnpm --filter playground check-types`, 보통 `pnpm --filter playground build`까지 실행
- 여러 패키지에 걸친 변경: `pnpm lint`, `pnpm check-types`
- build pipeline이나 exports 변경: `pnpm build` 포함

명령을 실행할 수 없으면, 실행하려던 정확한 명령과 실패 이유를 보고합니다.

## Git 안전 규칙

- 사용자가 명시적으로 요청하지 않은 변경은 되돌리지 않습니다.
- 사용자가 직접 요청하지 않는 한 `git reset --hard`, 넓은 범위의 `git checkout`, 디렉터리 삭제 같은 파괴적 명령은 피합니다.
- 변경 범위는 사용자의 요청에 맞게 좁게 유지합니다.
