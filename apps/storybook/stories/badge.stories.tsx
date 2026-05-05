import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@ji-design/ui";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Badge",
    variant: "secondary",
  }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary" }
};

export const Secondary: Story = {
  args: { variant: "secondary" }
};

export const Destructive: Story = {
  args: { variant: "destructive" }
};

export const Outline: Story = {
  args: { variant: "outline" }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
};
