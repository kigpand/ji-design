import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label, Radio } from "@ji-design/ui";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    name: "radio-story"
  }
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true }
};

export const Disabled: Story = {
  args: { disabled: true }
};

export const WithLabel: Story = {
  render: () => (
    <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Radio name="radio-label" defaultChecked />
      옵션 선택
    </Label>
  )
};
