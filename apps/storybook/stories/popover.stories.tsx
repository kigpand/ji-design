import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Button,
  Input,
  Label,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@ji-design/ui";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  args: { children: null },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">팝오버 열기</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p style={{ fontSize: 14, lineHeight: 1.5 }}>
          팝오버 내용입니다. 외부를 클릭하거나 Esc를 누르면 닫힙니다.
        </p>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">필터 설정</Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: 260 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ fontSize: 14, fontWeight: 600 }}>필터</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Label htmlFor="sb-popover-name">이름</Label>
            <Input id="sb-popover-name" placeholder="이름 검색" />
          </div>
          <div
            style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}
          >
            <Button variant="outline" size="sm">초기화</Button>
            <Button size="sm">적용</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Positions: Story = {
  render: () => (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: 16,
        justifyContent: "center",
        padding: 80,
      }}
    >
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              {side}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={side}>
            <p style={{ fontSize: 14 }}>{side} 방향 팝오버</p>
            <PopoverArrow />
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">알림 설정</Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: 240 }}>
        <PopoverClose />
        <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingRight: 24 }}>
          <p style={{ fontSize: 14, fontWeight: 600 }}>알림 설정</p>
          <p style={{ color: "var(--ji-color-muted-foreground)", fontSize: 13, lineHeight: 1.5 }}>
            알림 수신 여부와 방식을 설정합니다.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

function ControlledDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
      <div style={{ display: "flex", gap: 8 }}>
        <Button size="sm" onClick={() => setOpen(true)}>열기</Button>
        <Button variant="outline" size="sm" onClick={() => setOpen(false)}>닫기</Button>
      </div>
      <p style={{ color: "var(--ji-color-muted-foreground)", fontSize: 13 }}>
        상태: {open ? "열림" : "닫힘"}
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverAnchor asChild>
          <div style={{ height: 1, width: 200 }} />
        </PopoverAnchor>
        <PopoverContent>
          <p style={{ fontSize: 14 }}>외부 버튼으로 제어되는 팝오버입니다.</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledDemo />,
};
