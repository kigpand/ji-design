import { config } from "@ji-design/eslint-config/react-internal";

export default [
  {
    ignores: ["storybook-static/**", "dist/**"]
  },
  ...config
];
