import type { HTMLAttributes } from "react";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

export function Spinner({
  size = "md",
  label,
  className,
  ...props
}: SpinnerProps) {
  const classes = ["ji-spinner", `ji-spinner--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      role="status"
      aria-label={label ?? "Loading"}
      {...props}
    >
      <span className="ji-spinner__icon" aria-hidden="true" />
      {label && <span className="ji-spinner__label">{label}</span>}
    </span>
  );
}
