import type { CSSProperties, HTMLAttributes } from "react";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rect" | "circle";
}

export function Skeleton({
  variant = "rect",
  className,
  style,
  ...props
}: SkeletonProps) {
  const classes = ["ji-skeleton", `ji-skeleton--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      style={style as CSSProperties}
      aria-hidden="true"
      {...props}
    />
  );
}
