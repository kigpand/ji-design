import type { HTMLAttributes, ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "destructive" | "outline";
}

export function Badge({
  className,
  children,
  variant = "secondary",
  ...props
}: BadgeProps) {
  const classes = ["ji-badge", `ji-badge--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return <span className={classes} {...props}>{children}</span>;
}
