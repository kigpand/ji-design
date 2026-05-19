import { copyFileSync, readdirSync } from "node:fs";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    accordion: "src/accordion.tsx",
    alert: "src/alert.tsx",
    badge: "src/badge.tsx",
    button: "src/button.tsx",
    card: "src/card.tsx",
    checkbox: "src/checkbox.tsx",
    dialog: "src/dialog.tsx",
    "dropdown-menu": "src/dropdown-menu.tsx",
    input: "src/input.tsx",
    label: "src/label.tsx",
    popover: "src/popover.tsx",
    progress: "src/progress.tsx",
    radio: "src/radio.tsx",
    "radio-group": "src/radio-group.tsx",
    select: "src/select.tsx",
    separator: "src/separator.tsx",
    skeleton: "src/skeleton.tsx",
    spinner: "src/spinner.tsx",
    switch: "src/switch.tsx",
    tabs: "src/tabs.tsx",
    textarea: "src/textarea.tsx",
    toast: "src/toast.tsx",
    tooltip: "src/tooltip.tsx",
  },
  format: ["esm"],
  dts: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
  clean: true,
  async onSuccess() {
    // CSS 파일은 esbuild가 처리하지 않으므로 src에서 dist로 직접 복사
    const cssFiles = readdirSync("src").filter((f) => f.endsWith(".css"));
    for (const file of cssFiles) {
      copyFileSync(`src/${file}`, `dist/${file}`);
    }
  },
});
