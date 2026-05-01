import { tokens } from "@ji-design/core";

export function getTokenJson() {
  return JSON.stringify(tokens, null, 2);
}
