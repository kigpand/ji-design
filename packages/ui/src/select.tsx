import type { SelectHTMLAttributes } from "react";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, ...props }: SelectProps) {
  const classes = ["ji-select", className].filter(Boolean).join(" ");

  return <select className={classes} {...props} />;
}
