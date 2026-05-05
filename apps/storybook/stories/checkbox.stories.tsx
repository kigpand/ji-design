import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox, Label } from "@ji-design/ui";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true }
};

export const Disabled: Story = {
  args: { disabled: true }
};

export const DisabledChecked: Story = {
  args: { defaultChecked: true, disabled: true }
};

export const WithLabel: Story = {
  render: () => (
    <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Checkbox defaultChecked />
      이용약관에 동의합니다
    </Label>
  )
};
