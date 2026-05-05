import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "@ji-design/ui";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <option value="">선택하세요</option>
      <option value="option1">옵션 1</option>
      <option value="option2">옵션 2</option>
      <option value="option3">옵션 3</option>
    </Select>
  )
};

export const WithValue: Story = {
  render: () => (
    <Select defaultValue="option2">
      <option value="option1">옵션 1</option>
      <option value="option2">옵션 2</option>
      <option value="option3">옵션 3</option>
    </Select>
  )
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <option value="">선택하세요</option>
      <option value="option1">옵션 1</option>
    </Select>
  )
};

export const Invalid: Story = {
  render: () => (
    <Select aria-invalid="true">
      <option value="">선택하세요</option>
      <option value="option1">옵션 1</option>
    </Select>
  )
};
