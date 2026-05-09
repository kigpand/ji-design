import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label, Switch } from "@ji-design/ui";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { defaultChecked: true, disabled: true },
};

export const WithLabel: Story = {
  render: () => (
    <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Switch defaultChecked />
      알림 받기
    </Label>
  ),
};
