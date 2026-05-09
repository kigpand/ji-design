import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ji-design/ui";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: { children: null },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">계정</TabsTrigger>
        <TabsTrigger value="security">보안</TabsTrigger>
        <TabsTrigger value="notifications">알림</TabsTrigger>
      </TabsList>
      <TabsContent value="account">계정 설정 내용입니다.</TabsContent>
      <TabsContent value="security">보안 설정 내용입니다.</TabsContent>
      <TabsContent value="notifications">알림 설정 내용입니다.</TabsContent>
    </Tabs>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">계정</TabsTrigger>
        <TabsTrigger value="security">보안</TabsTrigger>
        <TabsTrigger value="billing" disabled>
          결제 (비활성화)
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">계정 내용입니다.</TabsContent>
      <TabsContent value="security">보안 내용입니다.</TabsContent>
      <TabsContent value="billing">결제 내용입니다.</TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="account" orientation="vertical">
      <TabsList>
        <TabsTrigger value="account">계정</TabsTrigger>
        <TabsTrigger value="security">보안</TabsTrigger>
        <TabsTrigger value="notifications">알림</TabsTrigger>
      </TabsList>
      <TabsContent value="account">계정 설정 내용입니다.</TabsContent>
      <TabsContent value="security">보안 설정 내용입니다.</TabsContent>
      <TabsContent value="notifications">알림 설정 내용입니다.</TabsContent>
    </Tabs>
  ),
};
