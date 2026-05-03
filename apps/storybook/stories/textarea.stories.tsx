import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@ji-design/ui";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text..."
  }
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: "Hello world" }
};

export const Disabled: Story = {
  args: { disabled: true }
};
