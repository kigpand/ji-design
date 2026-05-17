import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@ji-design/ui";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    value: 50,
    max: 100,
    size: "md",
    variant: "default",
    showValue: false,
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 400 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ color: "var(--ji-color-muted-foreground)", fontSize: 12 }}>sm</span>
        <Progress value={60} size="sm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ color: "var(--ji-color-muted-foreground)", fontSize: 12 }}>md</span>
        <Progress value={60} size="md" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ color: "var(--ji-color-muted-foreground)", fontSize: 12 }}>lg</span>
        <Progress value={60} size="lg" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 400 }}>
      <Progress value={75} variant="default" />
      <Progress value={100} variant="success" />
      <Progress value={55} variant="warning" />
      <Progress value={30} variant="destructive" />
    </div>
  ),
};

export const WithValue: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 400 }}>
      <Progress value={25} showValue />
      <Progress value={66} showValue />
      <Progress value={100} variant="success" showValue />
      <Progress value={45} size="lg" variant="warning" showValue />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    value: null,
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 400 }}>
      <Progress value={null} size="sm" />
      <Progress value={null} size="md" />
      <Progress value={null} size="lg" />
    </div>
  ),
};
