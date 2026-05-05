import type { FieldsetHTMLAttributes, ReactNode } from "react";

export interface RadioGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: ReactNode;
  orientation?: "vertical" | "horizontal";
}

export function RadioGroup({
  className,
  children,
  orientation = "vertical",
  ...props
}: RadioGroupProps) {
  const classes = [
    "ji-radio-group",
    `ji-radio-group--${orientation}`,
    className,
  ].filter(Boolean).join(" ");

  return (
    <fieldset className={classes} {...props}>
      {children}
    </fieldset>
  );
}
