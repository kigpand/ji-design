import type { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  const classes = ["ji-input", className].filter(Boolean).join(" ");

  return <input className={classes} type={type} {...props} />;
}
