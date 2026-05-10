import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, HTMLAttributes, SVGProps } from "react";

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

export const Dialog = DialogPrimitive.Root;
export type DialogProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

export const DialogTrigger = DialogPrimitive.Trigger;
export type DialogTriggerProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
>;

export const DialogPortal = DialogPrimitive.Portal;
export type DialogPortalProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Portal
>;

export type DialogOverlayProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  const classes = ["ji-dialog__overlay", className].filter(Boolean).join(" ");
  return <DialogPrimitive.Overlay className={classes} {...props} />;
}

export type DialogContentProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

export function DialogContent({ className, children, ...props }: DialogContentProps) {
  const classes = ["ji-dialog__content", className].filter(Boolean).join(" ");
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content className={classes} {...props}>
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

export type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  const classes = ["ji-dialog__header", className].filter(Boolean).join(" ");
  return <div className={classes} {...props} />;
}

export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  const classes = ["ji-dialog__footer", className].filter(Boolean).join(" ");
  return <div className={classes} {...props} />;
}

export type DialogTitleProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  const classes = ["ji-dialog__title", className].filter(Boolean).join(" ");
  return <DialogPrimitive.Title className={classes} {...props} />;
}

export type DialogDescriptionProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

export function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  const classes = ["ji-dialog__description", className]
    .filter(Boolean)
    .join(" ");
  return <DialogPrimitive.Description className={classes} {...props} />;
}

export type DialogCloseProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Close
>;

export function DialogClose({ className, children, ...props }: DialogCloseProps) {
  const classes = ["ji-dialog__close", className].filter(Boolean).join(" ");
  return (
    <DialogPrimitive.Close
      aria-label="닫기"
      {...props}
      className={classes}
    >
      {children ?? <XIcon />}
    </DialogPrimitive.Close>
  );
}
