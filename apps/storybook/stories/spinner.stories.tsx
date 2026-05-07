import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Spinner } from "@ji-design/ui";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  args: {
    size: "md",
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: "저장 중...",
  },
};

export const InButton: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Button disabled>
        <Spinner size="sm" />
        저장 중...
      </Button>
      <Button variant="outline" disabled>
        <Spinner size="sm" />
        불러오는 중...
      </Button>
    </div>
  ),
};
