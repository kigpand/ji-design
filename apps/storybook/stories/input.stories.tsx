import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@ji-design/ui";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text..."
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: "Hello world" }
};

export const Disabled: Story = {
  args: { disabled: true }
};
