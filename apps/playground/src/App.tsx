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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Radio,
  RadioGroup,
  Select,
  Separator,
  Skeleton,
  Spinner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@ji-design/ui";

export function App() {
  return (
    <TooltipProvider>
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
            <Select
              id="country"
              options={[
                { label: "대한민국", value: "kr" },
                { label: "미국", value: "us" },
                { label: "일본", value: "jp" },
              ]}
              placeholder="선택하세요"
            />
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

        <Separator />

        {/* Skeleton */}
        <Card className="max-w-sm">
          <CardHeader>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Skeleton variant="circle" />
              <div className="flex flex-col gap-1" style={{ flex: 1 }}>
                <Skeleton variant="text" style={{ width: "60%" }} />
                <Skeleton variant="text" style={{ width: "40%" }} />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Skeleton style={{ height: 16 }} />
              <Skeleton style={{ height: 16 }} />
              <Skeleton style={{ height: 16, width: "70%" }} />
            </div>
          </CardContent>
        </Card>

        {/* Switch */}
        <div className="flex flex-col gap-2">
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Switch defaultChecked />
            이메일 알림
          </Label>
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Switch />
            푸시 알림
          </Label>
          <Label style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <Switch disabled />
            마케팅 알림 (비활성화)
          </Label>
        </div>

        <Separator />

        {/* Tabs */}
        <Tabs defaultValue="profile" className="max-w-sm">
          <TabsList>
            <TabsTrigger value="profile">프로필</TabsTrigger>
            <TabsTrigger value="account">계정</TabsTrigger>
            <TabsTrigger value="billing" disabled>결제</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <div className="flex flex-col gap-1">
              <Label htmlFor="display-name">표시 이름</Label>
              <Input id="display-name" defaultValue="김지훈" />
            </div>
          </TabsContent>
          <TabsContent value="account">
            <div className="flex flex-col gap-1">
              <Label htmlFor="current-password">현재 비밀번호</Label>
              <Input id="current-password" type="password" />
            </div>
          </TabsContent>
          <TabsContent value="billing">결제 정보입니다.</TabsContent>
        </Tabs>

        {/* Dialog */}
        <div className="preview">
          <Dialog>
            <DialogTrigger asChild>
              <Button>프로필 수정</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogClose />
              <DialogHeader>
                <DialogTitle>프로필 수정</DialogTitle>
                <DialogDescription>
                  변경할 정보를 입력하고 저장하세요.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="pg-dialog-name">이름</Label>
                  <Input id="pg-dialog-name" defaultValue="김지훈" />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="pg-dialog-email">이메일</Label>
                  <Input
                    id="pg-dialog-email"
                    type="email"
                    defaultValue="kigpand@gmail.com"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">취소</Button>
                </DialogClose>
                <Button>저장</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Separator />

        {/* Spinner */}
        <div className="preview">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>

        <div className="preview">
          <Button disabled>
            <Spinner size="sm" />
            저장 중...
          </Button>
          <Button variant="outline" disabled>
            <Spinner size="sm" />
            불러오는 중...
          </Button>
        </div>

        <Separator />

        {/* Tooltip */}
        <div className="preview">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">저장</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>저장 (Cmd + S)</p>
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">삭제</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>선택한 항목을 삭제합니다.</p>
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span style={{ display: "inline-block" }}>
                <Button disabled style={{ pointerEvents: "none" }}>
                  게시
                </Button>
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>권한이 없어 사용할 수 없습니다.</p>
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
        </div>

        <Separator />

        {/* Popover */}
        <div className="preview">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">필터 설정</Button>
            </PopoverTrigger>
            <PopoverContent style={{ width: 260 }}>
              <PopoverClose />
              <div className="flex flex-col gap-3" style={{ paddingRight: 20 }}>
                <p style={{ fontSize: 14, fontWeight: 600 }}>필터</p>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="pg-popover-name">이름</Label>
                  <Input id="pg-popover-name" placeholder="이름 검색" />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="pg-popover-country">국가</Label>
                  <Select
                    id="pg-popover-country"
                    options={[
                      { label: "전체", value: "" },
                      { label: "대한민국", value: "kr" },
                      { label: "미국", value: "us" },
                    ]}
                    placeholder="전체"
                  />
                </div>
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <Button variant="outline" size="sm">초기화</Button>
                  <Button size="sm">적용</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Separator />

        {/* Dropdown Menu */}
        <div className="preview">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">작업</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>파일 작업</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  수정
                  <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  복제
                  <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>보관</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                삭제
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </main>
    </TooltipProvider>
  );
}
