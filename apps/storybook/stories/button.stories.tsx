import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@ji-design/ui";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button"
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary" }
};

export const Outline: Story = {
  args: { variant: "outline" }
};

export const Ghost: Story = {
  args: { variant: "ghost" }
};

export const Small: Story = {
  args: { size: "sm" }
};

export const Medium: Story = {
  args: { size: "md" }
};

export const Large: Story = {
  args: { size: "lg" }
};

export const Sizes: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
};

export const Disabled: Story = {
  args: { disabled: true }
};
