import { config } from "@ji-design/eslint-config/react-internal";

export default [
  {
    ignores: [".next/**", "dist/**"]
  },
  ...config
];
