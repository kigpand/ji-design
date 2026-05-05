import type { InputHTMLAttributes } from "react";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function Checkbox({ className, ...props }: CheckboxProps) {
  const classes = ["ji-checkbox", className].filter(Boolean).join(" ");

  return <input className={classes} type="checkbox" {...props} />;
}
