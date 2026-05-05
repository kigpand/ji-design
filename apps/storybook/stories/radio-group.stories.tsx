import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label, Radio, RadioGroup } from "@ji-design/ui";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    children: null,
    orientation: "vertical",
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <RadioGroup aria-label="배송 방법" orientation="vertical">
      <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
        <Radio name="vertical" value="standard" defaultChecked />
        일반 배송
      </Label>
      <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
        <Radio name="vertical" value="express" />
        빠른 배송
      </Label>
      <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
        <Radio name="vertical" value="pickup" />
        직접 수령
      </Label>
    </RadioGroup>
  )
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup aria-label="배송 방법" orientation="horizontal">
      <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
        <Radio name="horizontal" value="standard" defaultChecked />
        일반 배송
      </Label>
      <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
        <Radio name="horizontal" value="express" />
        빠른 배송
      </Label>
    </RadioGroup>
  )
};
