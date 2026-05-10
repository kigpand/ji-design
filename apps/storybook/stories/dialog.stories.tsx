import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "@ji-design/ui";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  args: { children: null },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogClose />
        <DialogHeader>
          <DialogTitle>알림</DialogTitle>
          <DialogDescription>변경사항이 저장되었습니다.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>확인</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>프로필 수정</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogClose />
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
          <DialogDescription>
            변경할 정보를 입력하고 저장하세요.
          </DialogDescription>
        </DialogHeader>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Label htmlFor="dialog-name">이름</Label>
            <Input id="dialog-name" defaultValue="김지훈" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Label htmlFor="dialog-email">이메일</Label>
            <Input
              id="dialog-email"
              type="email"
              defaultValue="kigpand@gmail.com"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button>저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const DestructiveConfirm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">계정 삭제</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogClose />
        <DialogHeader>
          <DialogTitle>계정을 삭제하시겠습니까?</DialogTitle>
          <DialogDescription>
            이 작업은 되돌릴 수 없습니다. 계정과 관련된 모든 데이터가
            영구적으로 삭제됩니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button
            style={{
              background: "var(--ji-color-destructive)",
              borderColor: "var(--ji-color-destructive)",
              color: "var(--ji-color-destructive-foreground)",
            }}
          >
            삭제
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
