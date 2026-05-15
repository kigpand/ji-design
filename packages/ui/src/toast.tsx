import * as ToastPrimitive from "@radix-ui/react-toast";
import type { ComponentPropsWithoutRef, SVGProps } from "react";

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4 4 12M4 4l8 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export const ToastProvider = ToastPrimitive.Provider;
export type ToastProviderProps = ComponentPropsWithoutRef<
  typeof ToastPrimitive.Provider
>;

export type ToastViewportProps = ComponentPropsWithoutRef<
  typeof ToastPrimitive.Viewport
>;

export function ToastViewport({ className, ...props }: ToastViewportProps) {
  const classes = ["ji-toast__viewport", className].filter(Boolean).join(" ");
  return <ToastPrimitive.Viewport className={classes} {...props} />;
}

export interface ToastProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  variant?: "default" | "success" | "warning" | "destructive";
}

export function Toast({ className, variant = "default", ...props }: ToastProps) {
  const classes = [
    "ji-toast",
    variant !== "default" && `ji-toast--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <ToastPrimitive.Root className={classes} {...props} />;
}

export type ToastTitleProps = ComponentPropsWithoutRef<
  typeof ToastPrimitive.Title
>;

export function ToastTitle({ className, ...props }: ToastTitleProps) {
  const classes = ["ji-toast__title", className].filter(Boolean).join(" ");
  return <ToastPrimitive.Title className={classes} {...props} />;
}

export type ToastDescriptionProps = ComponentPropsWithoutRef<
  typeof ToastPrimitive.Description
>;

export function ToastDescription({ className, ...props }: ToastDescriptionProps) {
  const classes = ["ji-toast__description", className]
    .filter(Boolean)
    .join(" ");
  return <ToastPrimitive.Description className={classes} {...props} />;
}

export type ToastActionProps = ComponentPropsWithoutRef<
  typeof ToastPrimitive.Action
>;

export function ToastAction({ className, ...props }: ToastActionProps) {
  const classes = ["ji-toast__action", className].filter(Boolean).join(" ");
  return <ToastPrimitive.Action className={classes} {...props} />;
}

export type ToastCloseProps = ComponentPropsWithoutRef<
  typeof ToastPrimitive.Close
>;

export function ToastClose({ className, children, ...props }: ToastCloseProps) {
  const classes = ["ji-toast__close", className].filter(Boolean).join(" ");
  return (
    <ToastPrimitive.Close aria-label="닫기" {...props} className={classes}>
      {children ?? <XIcon />}
    </ToastPrimitive.Close>
  );
}
