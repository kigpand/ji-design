import type { HTMLAttributes, ReactNode } from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "info" | "success" | "warning" | "destructive";
}

export function Alert({
  className,
  children,
  variant = "info",
  role = "status",
  ...props
}: AlertProps) {
  const classes = ["ji-alert", `ji-alert--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} role={role} {...props}>{children}</div>;
}

export interface AlertTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function AlertTitle({ className, children, ...props }: AlertTitleProps) {
  const classes = ["ji-alert__title", className].filter(Boolean).join(" ");
  return <p className={classes} {...props}>{children}</p>;
}

export interface AlertDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function AlertDescription({ className, children, ...props }: AlertDescriptionProps) {
  const classes = ["ji-alert__description", className].filter(Boolean).join(" ");
  return <p className={classes} {...props}>{children}</p>;
}
