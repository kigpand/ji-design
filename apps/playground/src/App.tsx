import { CheckIcon } from "@ji-design/icons";
import { Button } from "@ji-design/ui";

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

        <div className="preview">
          <Button>
            <CheckIcon />
            Primary
          </Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>
    </main>
  );
}
