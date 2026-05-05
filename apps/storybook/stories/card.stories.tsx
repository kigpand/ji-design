import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@ji-design/ui";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: null,
  }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드에 대한 간단한 설명입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ color: "var(--ji-color-foreground)", fontSize: "var(--ji-font-size-md)", margin: 0 }}>
          카드 본문 내용이 들어갑니다.
        </p>
      </CardContent>
    </Card>
  )
};

export const WithFooter: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <CardHeader>
        <CardTitle>알림 설정</CardTitle>
        <CardDescription>이메일 수신 여부를 설정합니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ color: "var(--ji-color-muted-foreground)", fontSize: "var(--ji-font-size-sm)", margin: 0 }}>
          변경사항은 즉시 적용됩니다.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">취소</Button>
        <Button>저장</Button>
      </CardFooter>
    </Card>
  )
};

export const FormExample: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>계정 정보를 입력해주세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Label htmlFor="card-email">이메일</Label>
            <Input id="card-email" type="email" placeholder="email@example.com" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Label htmlFor="card-password">비밀번호</Label>
            <Input id="card-password" type="password" placeholder="비밀번호 입력" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button style={{ width: "100%" }}>로그인</Button>
      </CardFooter>
    </Card>
  )
};
