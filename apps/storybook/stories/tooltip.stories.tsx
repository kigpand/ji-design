import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ji-design/ui";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: { children: null },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">마우스를 올려보세요</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>저장 (Cmd + S)</p>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Positions: Story = {
  render: () => (
    <TooltipProvider>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: 16,
          justifyContent: "center",
          padding: 64,
        }}
      >
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                {side}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>{side} 방향 툴팁</p>
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  ),
};

export const WithDisabledButton: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        {/* disabled 버튼은 포인터 이벤트를 소비하지 않으므로 span으로 감쌉니다 */}
        <TooltipTrigger asChild>
          <span style={{ display: "inline-block" }}>
            <Button disabled style={{ pointerEvents: "none" }}>
              비활성화된 버튼
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>권한이 없어 사용할 수 없습니다.</p>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const LongContent: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">긴 설명 보기</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            이 버튼은 현재 문서를 서버에 저장하고 변경 이력을 기록합니다. 저장
            중 오류가 발생하면 재시도 안내가 표시됩니다.
          </p>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
