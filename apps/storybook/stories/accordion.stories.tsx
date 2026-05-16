import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ji-design/ui";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: { children: null, type: "single" as const },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1" style={{ width: 480 }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>계정 설정</AccordionTrigger>
        <AccordionContent>
          계정 이름, 이메일, 비밀번호를 변경할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>알림 설정</AccordionTrigger>
        <AccordionContent>
          이메일, 푸시, SMS 알림 수신 여부를 설정합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>개인정보 설정</AccordionTrigger>
        <AccordionContent>
          개인정보 처리 방침 및 데이터 수집 설정을 관리합니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion
      type="multiple"
      defaultValue={["item-1", "item-2"]}
      style={{ width: 480 }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>계정 설정</AccordionTrigger>
        <AccordionContent>
          계정 이름, 이메일, 비밀번호를 변경할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>알림 설정</AccordionTrigger>
        <AccordionContent>
          이메일, 푸시, SMS 알림 수신 여부를 설정합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>개인정보 설정</AccordionTrigger>
        <AccordionContent>
          개인정보 처리 방침 및 데이터 수집 설정을 관리합니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Collapsible: Story = {
  render: () => (
    <Accordion type="single" collapsible style={{ width: 480 }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>다시 클릭하면 닫힙니다</AccordionTrigger>
        <AccordionContent>
          collapsible 모드에서는 열린 항목을 다시 클릭해 닫을 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>두 번째 항목</AccordionTrigger>
        <AccordionContent>
          단일 모드에서는 한 번에 하나만 열립니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DisabledItem: Story = {
  render: () => (
    <Accordion type="single" collapsible style={{ width: 480 }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>일반 항목</AccordionTrigger>
        <AccordionContent>이 항목은 정상적으로 열립니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>비활성화 항목</AccordionTrigger>
        <AccordionContent>이 내용은 보이지 않습니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>세 번째 항목</AccordionTrigger>
        <AccordionContent>이 항목도 정상적으로 열립니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

function FAQDemo() {
  const [value, setValue] = useState<string[]>(["faq-1"]);

  return (
    <div style={{ width: 560 }}>
      <p
        style={{
          color: "var(--ji-color-muted-foreground)",
          fontSize: 13,
          marginBottom: 16,
        }}
      >
        열린 항목: {value.length > 0 ? value.join(", ") : "없음"}
      </p>
      <Accordion type="multiple" value={value} onValueChange={setValue}>
        <AccordionItem value="faq-1">
          <AccordionTrigger>배송은 얼마나 걸리나요?</AccordionTrigger>
          <AccordionContent>
            일반 배송은 3~5 영업일, 빠른 배송은 1~2 영업일이 소요됩니다. 도서
            산간 지역은 추가 시간이 걸릴 수 있습니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>반품 정책은 어떻게 되나요?</AccordionTrigger>
          <AccordionContent>
            수령일로부터 7일 이내에 반품을 신청할 수 있습니다. 단, 개봉된 상품이나
            사용 흔적이 있는 경우 반품이 제한될 수 있습니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>결제 수단에는 어떤 것이 있나요?</AccordionTrigger>
          <AccordionContent>
            신용카드, 체크카드, 계좌이체, 간편결제(카카오페이, 네이버페이, 토스)를
            지원합니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger>해외 배송이 가능한가요?</AccordionTrigger>
          <AccordionContent>
            현재는 국내 배송만 지원합니다. 해외 배송은 추후 지원 예정입니다.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export const FAQExample: Story = {
  render: () => <FAQDemo />,
};
