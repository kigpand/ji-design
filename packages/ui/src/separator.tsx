import type { HTMLAttributes } from "react";

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

export function Separator({
  orientation = "horizontal",
  decorative = true,
  className,
  ...props
}: SeparatorProps) {
  const classes = [
    "ji-separator",
    `ji-separator--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const accessibilityProps = decorative
    ? { role: "none" as const, "aria-hidden": true as const }
    : { role: "separator" as const, "aria-orientation": orientation };

  return <div className={classes} {...accessibilityProps} {...props} />;
}
