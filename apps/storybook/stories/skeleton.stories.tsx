import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardContent, CardHeader, Skeleton } from "@ji-design/ui";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    variant: "rect",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { height: 20, width: 200 },
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    style: { width: 240 },
  },
};

export const Circle: Story = {
  args: {
    variant: "circle",
  },
};

export const CardExample: Story = {
  render: () => (
    <Card style={{ width: 320 }}>
      <CardHeader>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Skeleton variant="circle" />
          <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
            <Skeleton variant="text" style={{ width: "60%" }} />
            <Skeleton variant="text" style={{ width: "40%" }} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Skeleton style={{ height: 16 }} />
          <Skeleton style={{ height: 16 }} />
          <Skeleton style={{ height: 16, width: "70%" }} />
        </div>
      </CardContent>
    </Card>
  ),
};
