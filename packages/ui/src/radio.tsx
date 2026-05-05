import type { InputHTMLAttributes } from "react";

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function Radio({ className, ...props }: RadioProps) {
  const classes = ["ji-radio", className].filter(Boolean).join(" ");

  return <input className={classes} type="radio" {...props} />;
}
