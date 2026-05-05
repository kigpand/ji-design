import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  const classes = ["ji-card", className].filter(Boolean).join(" ");
  return <div className={classes} {...props}>{children}</div>;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  const classes = ["ji-card__header", className].filter(Boolean).join(" ");
  return <div className={classes} {...props}>{children}</div>;
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  const classes = ["ji-card__title", className].filter(Boolean).join(" ");
  return <h3 className={classes} {...props}>{children}</h3>;
}

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  const classes = ["ji-card__description", className].filter(Boolean).join(" ");
  return <p className={classes} {...props}>{children}</p>;
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  const classes = ["ji-card__content", className].filter(Boolean).join(" ");
  return <div className={classes} {...props}>{children}</div>;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  const classes = ["ji-card__footer", className].filter(Boolean).join(" ");
  return <div className={classes} {...props}>{children}</div>;
}
