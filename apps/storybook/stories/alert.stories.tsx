import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertDescription, AlertTitle } from "@ji-design/ui";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    children: null,
    variant: "info",
  }
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <Alert variant="info">
      <AlertTitle>안내</AlertTitle>
      <AlertDescription>새로운 업데이트가 있습니다.</AlertDescription>
    </Alert>
  )
};

export const Success: Story = {
  render: () => (
    <Alert variant="success">
      <AlertTitle>성공</AlertTitle>
      <AlertDescription>변경사항이 저장되었습니다.</AlertDescription>
    </Alert>
  )
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTitle>경고</AlertTitle>
      <AlertDescription>이 작업은 되돌릴 수 없습니다.</AlertDescription>
    </Alert>
  )
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" role="alert">
      <AlertTitle>오류</AlertTitle>
      <AlertDescription>요청을 처리하는 중 오류가 발생했습니다.</AlertDescription>
    </Alert>
  )
};

export const WithTitleAndDescription: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 400 }}>
      <Alert variant="info">
        <AlertTitle>안내</AlertTitle>
        <AlertDescription>새로운 업데이트가 있습니다.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>성공</AlertTitle>
        <AlertDescription>변경사항이 저장되었습니다.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>경고</AlertTitle>
        <AlertDescription>이 작업은 되돌릴 수 없습니다.</AlertDescription>
      </Alert>
      <Alert variant="destructive" role="alert">
        <AlertTitle>오류</AlertTitle>
        <AlertDescription>요청을 처리하는 중 오류가 발생했습니다.</AlertDescription>
      </Alert>
    </div>
  )
};
