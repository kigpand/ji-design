import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "@ji-design/ui";

const options = [
  { label: "옵션 1", value: "option1" },
  { label: "옵션 2", value: "option2" },
  { label: "옵션 3", value: "option3" },
];

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    options,
    placeholder: "선택하세요",
  }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: "option2" }
};

export const Disabled: Story = {
  args: { disabled: true }
};

export const Invalid: Story = {
  render: (args) => <Select {...args} aria-invalid={true} />
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: "옵션 1", value: "option1" },
      { label: "옵션 2 (비활성화)", value: "option2", disabled: true },
      { label: "옵션 3", value: "option3" },
    ]
  }
};
