import type { LabelHTMLAttributes, ReactNode } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function Label({ className, children, ...props }: LabelProps) {
  const classes = ["ji-label", className].filter(Boolean).join(" ");

  return <label className={classes} {...props}>{children}</label>;
}
