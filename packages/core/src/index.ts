export const tokens = {
  color: {
    background: "#ffffff",
    foreground: "#171717",
    primary: "#2563eb",
    primaryForeground: "#ffffff",
    border: "#d4d4d8"
  },
  radius: {
    sm: "4px",
    md: "6px",
    lg: "8px"
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    6: "24px"
  }
} as const;

export type Tokens = typeof tokens;
