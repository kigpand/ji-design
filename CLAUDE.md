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

## 컴포넌트 추가 템플릿

새 UI 컴포넌트를 추가할 때는 아래 순서를 기본 템플릿으로 사용합니다.

### 1. 파일 구성

컴포넌트 이름이 `Label`이라면 다음 파일을 추가하거나 수정합니다.

```txt
packages/ui/src/label.tsx
packages/ui/src/label.css
packages/ui/src/styles.css
packages/ui/src/index.ts
packages/ui/package.json
apps/storybook/stories/label.stories.tsx
apps/playground/src/App.tsx
```

컴포넌트 수가 늘어나거나 파일이 복잡해지기 전까지는 flat 구조를 유지합니다. 컴포넌트가 여러 하위 파트, 별도 hook, 테스트, 복잡한 스타일을 갖게 되면 `packages/ui/src/<component>/` 폴더 구조로 승격합니다.

예시:

```txt
packages/ui/src/dialog/
  dialog.tsx
  dialog.css
  index.ts
```

### 2. 컴포넌트 구현 규칙

- 컴포넌트 파일은 `packages/ui/src/<component>.tsx`에 둡니다.
- props 타입은 `<ComponentName>Props`로 export합니다.
- native HTML attribute 타입을 우선 확장합니다.
- 기본 element가 명확하면 별도 polymorphic API를 만들지 않습니다.
- `className`은 항상 기존 클래스 뒤에 병합해서 소비자가 보강할 수 있게 합니다.
- 컴포넌트 기본 클래스명은 `ji-<component>` 형식을 사용합니다.
- variant, size 클래스는 `ji-<component>--<value>` 형식을 사용합니다.
- 기본값이 필요한 props는 컴포넌트 인자 destructuring에서 지정합니다.
- 조합형 컴포넌트는 기존 규칙을 제거하지 않고 root와 하위 파트에 나누어 적용합니다.
- 조합형 컴포넌트의 하위 파트는 `<Component><Part>` 이름으로 export합니다.
- 하위 파트 클래스명은 `ji-<component>__<part>` 형식을 사용합니다.
- root에 variant나 size가 있으면 root 클래스에서 제어하고, 하위 파트는 가능한 root 상태를 기준으로 스타일링합니다.
- `Dialog`, `Popover`, `Select`, `Tooltip`, `DropdownMenu`처럼 접근성과 상호작용이 복잡한 컴포넌트는 직접 구현보다 검증된 headless primitive 사용을 우선 검토합니다.

예시:

```tsx
import type { LabelHTMLAttributes, ReactNode } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function Label({ children, className, ...props }: LabelProps) {
  const classes = ["ji-label", className].filter(Boolean).join(" ");

  return (
    <label className={classes} {...props}>
      {children}
    </label>
  );
}
```

조합형 컴포넌트 예시:

```tsx
import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  const classes = ["ji-card", className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  const classes = ["ji-card__header", className].filter(Boolean).join(" ");

  return <div className={classes} {...props} />;
}
```

### 3. CSS 구현 규칙

- 컴포넌트 CSS는 `packages/ui/src/<component>.css`에 둡니다.
- 모든 컴포넌트 스타일은 `@layer components` 안에 작성합니다.
- 색상, 간격, radius, typography 값은 가능한 `--ji-*` CSS variables를 사용합니다.
- hover, focus-visible, disabled, invalid 같은 상태는 컴포넌트가 지원하는 범위 안에서 함께 정의합니다.
- CSS 파일을 추가하면 `packages/ui/src/styles.css`에 import합니다.

예시:

```css
@layer components {
  .ji-label {
    color: var(--ji-color-foreground);
    display: inline-block;
    font-size: var(--ji-font-size-sm);
    font-weight: var(--ji-font-weight-semibold);
    line-height: var(--ji-line-height-normal);
  }

  .ji-label[data-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.4;
  }
}
```

조합형 컴포넌트 CSS 예시:

```css
@layer components {
  .ji-card {
    background: var(--ji-color-background);
    border: 1px solid var(--ji-color-border);
    border-radius: var(--ji-radius-lg);
  }

  .ji-card__header {
    padding: var(--ji-space-4);
  }
}
```

### 4. Public API 연결

`packages/ui/src/index.ts`에 컴포넌트와 타입을 export합니다.

```ts
export { Label } from "./label";
export type { LabelProps } from "./label";
```

컴포넌트를 서브패스로 직접 import할 수 있어야 하면 `packages/ui/package.json`의 `exports`도 추가합니다.

```json
"./label": "./src/label.tsx"
```

### 5. Storybook 스토리

새 컴포넌트는 `apps/storybook/stories/<component>.stories.tsx`를 추가합니다.

기본 스토리는 최소한 아래 상태를 포함합니다.

- `Default`
- 주요 `variant`가 있으면 variant별 스토리
- 주요 `size`가 있으면 size별 스토리
- `Disabled` 상태가 있으면 disabled 스토리
- 폼 컴포넌트는 실제 조합 예시

예시:

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "@ji-design/ui";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Label"
  }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```

### 6. Playground 확인

새 컴포넌트는 `apps/playground/src/App.tsx`에 실제 조합 예시를 하나 이상 추가합니다.

- 단독 컴포넌트만 나열하기보다 실제 사용 맥락을 보여줍니다.
- 폼 컴포넌트는 `Label`, `Input`, help text, disabled 상태와 함께 확인합니다.
- 임시 테스트용 색상이나 텍스트는 남기지 않습니다.

### 7. 검증

컴포넌트 추가 후 최소한 아래 명령을 실행합니다.

```sh
pnpm --filter @ji-design/ui lint
pnpm --filter @ji-design/ui check-types
pnpm --filter storybook check-types
pnpm --filter playground check-types
```

Storybook이나 Playground 사용 화면을 수정했다면 가능하면 build도 확인합니다.

```sh
pnpm --filter playground build
```

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
