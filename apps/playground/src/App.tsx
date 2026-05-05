import { CheckIcon } from "@ji-design/icons";
import { Button, Checkbox, Input, Label, Radio, RadioGroup, Textarea } from "@ji-design/ui";

export function App() {
  return (
    <main className="playground">
      <section className="surface">
        <div>
          <p className="eyebrow">Ji Design</p>
          <h1>Design system playground</h1>
          <p className="description">
            실제 앱 환경에서 토큰, 스타일, 컴포넌트 조합을 검증합니다.
          </p>
        </div>

        <div className="preview">
          <Button>
            <CheckIcon />
            Primary
          </Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <div className="preview">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <div className="flex flex-col gap-3 max-w-sm">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="이름을 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="name-disabled">비활성화</Label>
            <Input id="name-disabled" placeholder="비활성화 상태" disabled />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="message">메시지</Label>
            <Textarea id="message" placeholder="메시지를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="message-disabled">메시지 (비활성화)</Label>
            <Textarea id="message-disabled" placeholder="비활성화 상태" disabled />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Checkbox defaultChecked />
            이용약관에 동의합니다
          </Label>
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Checkbox disabled />
            비활성화 체크박스
          </Label>
        </div>

        <RadioGroup aria-label="배송 방법">
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Radio name="delivery" value="standard" defaultChecked />
            일반 배송
          </Label>
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Radio name="delivery" value="express" />
            빠른 배송
          </Label>
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Radio name="delivery" value="pickup" disabled />
            직접 수령 (비활성화)
          </Label>
        </RadioGroup>

        <Button>전송</Button>
      </section>
    </main>
  );
}
