import { CheckIcon } from "@ji-design/icons";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Radio,
  RadioGroup,
  Select,
  Textarea,
} from "@ji-design/ui";

export function App() {
  return (
    <main className="playground">
      <section className="surface">
        <div>
          <p className="eyebrow">Ji Design</p>
          <h1>Design system playground</h1>
          <p className="description">
            실제 앱 환경에서 토큰, 스타일, 컴포넌트 조합을 검증합니다.
          </p>
        </div>

        {/* Button */}
        <div className="preview">
          <Button>
            <CheckIcon />
            Primary
          </Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <div className="preview">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        {/* Badge */}
        <div className="preview">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        {/* Form inputs */}
        <div className="flex flex-col gap-3 max-w-sm">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="이름을 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="country">국가</Label>
            <Select id="country">
              <option value="">선택하세요</option>
              <option value="kr">대한민국</option>
              <option value="us">미국</option>
              <option value="jp">일본</option>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="message">메시지</Label>
            <Textarea id="message" placeholder="메시지를 입력하세요" />
          </div>
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Checkbox defaultChecked />
            이용약관에 동의합니다
          </Label>
        </div>

        {/* RadioGroup */}
        <RadioGroup aria-label="배송 방법">
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Radio name="delivery" value="standard" defaultChecked />
            일반 배송
          </Label>
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Radio name="delivery" value="express" />
            빠른 배송
          </Label>
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Radio name="delivery" value="pickup" disabled />
            직접 수령 (비활성화)
          </Label>
        </RadioGroup>

        {/* Alert */}
        <div className="flex flex-col gap-2 max-w-sm">
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
            <AlertDescription>
              요청 처리 중 오류가 발생했습니다.
            </AlertDescription>
          </Alert>
        </div>

        {/* Card */}
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>계정 정보를 입력해주세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호 입력"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">취소</Button>
            <Button>로그인</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
