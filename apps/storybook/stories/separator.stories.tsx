import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from "@ji-design/ui";

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  args: {
    orientation: "horizontal",
    decorative: true,
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <p style={{ margin: "0 0 12px", color: "var(--ji-color-foreground)", fontSize: "var(--ji-font-size-md)" }}>
        위 섹션
      </p>
      <Separator />
      <p style={{ margin: "12px 0 0", color: "var(--ji-color-foreground)", fontSize: "var(--ji-font-size-md)" }}>
        아래 섹션
      </p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 12, height: 32 }}>
      <span style={{ color: "var(--ji-color-foreground)", fontSize: "var(--ji-font-size-md)" }}>왼쪽</span>
      <Separator orientation="vertical" />
      <span style={{ color: "var(--ji-color-foreground)", fontSize: "var(--ji-font-size-md)" }}>오른쪽</span>
    </div>
  ),
};

export const InCardExample: Story = {
  render: () => (
    <Card style={{ width: 320 }}>
      <CardHeader>
        <CardTitle>프로필</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "var(--ji-color-muted-foreground)", fontSize: "var(--ji-font-size-sm)" }}>이름</span>
            <span style={{ color: "var(--ji-color-foreground)", fontSize: "var(--ji-font-size-sm)" }}>김지훈</span>
          </div>
          <Separator />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "var(--ji-color-muted-foreground)", fontSize: "var(--ji-font-size-sm)" }}>이메일</span>
            <span style={{ color: "var(--ji-color-foreground)", fontSize: "var(--ji-font-size-sm)" }}>kigpand@gmail.com</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};
