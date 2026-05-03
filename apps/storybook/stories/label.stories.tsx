import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "@ji-design/ui";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Label"
  }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHtmlFor: Story = {
  args: { htmlFor: "input-id", children: "이름" }
};
