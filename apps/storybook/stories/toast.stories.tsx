import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Button,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@ji-design/ui";

const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: { children: null },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultDemo() {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Toast 표시
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <div style={{ flex: 1 }}>
          <ToastTitle>알림</ToastTitle>
          <ToastDescription>작업이 완료되었습니다.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

export const Default: Story = {
  render: () => <DefaultDemo />,
};

function SuccessDemo() {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <Button variant="outline" onClick={() => setOpen(true)}>
        저장 완료 Toast
      </Button>
      <Toast open={open} onOpenChange={setOpen} variant="success">
        <div style={{ flex: 1 }}>
          <ToastTitle>저장 완료</ToastTitle>
          <ToastDescription>변경사항이 성공적으로 저장되었습니다.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

export const Success: Story = {
  render: () => <SuccessDemo />,
};

function WarningDemo() {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <Button variant="outline" onClick={() => setOpen(true)}>
        경고 Toast
      </Button>
      <Toast open={open} onOpenChange={setOpen} variant="warning">
        <div style={{ flex: 1 }}>
          <ToastTitle>주의</ToastTitle>
          <ToastDescription>변경사항이 아직 저장되지 않았습니다.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

export const Warning: Story = {
  render: () => <WarningDemo />,
};

function DestructiveDemo() {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <Button variant="outline" onClick={() => setOpen(true)}>
        오류 Toast
      </Button>
      <Toast open={open} onOpenChange={setOpen} variant="destructive">
        <div style={{ flex: 1 }}>
          <ToastTitle>오류 발생</ToastTitle>
          <ToastDescription>요청을 처리하는 중 오류가 발생했습니다. 다시 시도해주세요.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

export const Destructive: Story = {
  render: () => <DestructiveDemo />,
};

function WithActionDemo() {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <Button variant="outline" onClick={() => setOpen(true)}>
        실행 취소 Toast
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <div style={{ flex: 1 }}>
          <ToastTitle>항목이 삭제되었습니다</ToastTitle>
          <ToastDescription>선택한 항목 3개가 삭제되었습니다.</ToastDescription>
        </div>
        <ToastAction altText="삭제 취소" onClick={() => setOpen(false)}>
          실행 취소
        </ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

export const WithAction: Story = {
  render: () => <WithActionDemo />,
};

function ControlledDemo() {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Button size="sm" onClick={() => setOpen(true)}>열기</Button>
        <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
          강제 닫기
        </Button>
        <span
          style={{
            color: "var(--ji-color-muted-foreground)",
            fontSize: 13,
          }}
        >
          상태: {open ? "열림" : "닫힘"}
        </span>
      </div>
      {/* duration={Infinity}로 자동 닫힘 비활성화 */}
      <Toast open={open} onOpenChange={setOpen} duration={Infinity}>
        <div style={{ flex: 1 }}>
          <ToastTitle>수동 제어 토스트</ToastTitle>
          <ToastDescription>이 토스트는 자동으로 닫히지 않습니다.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

export const Controlled: Story = {
  render: () => <ControlledDemo />,
};
