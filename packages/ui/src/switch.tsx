import type { InputHTMLAttributes } from "react";

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function Switch({ className, ...props }: SwitchProps) {
  const classes = ["ji-switch", className].filter(Boolean).join(" ");

  return <input className={classes} type="checkbox" role="switch" {...props} />;
}
