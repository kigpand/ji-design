import * as PopoverPrimitive from "@radix-ui/react-popover";
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

export const Popover = PopoverPrimitive.Root;
export type PopoverProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>;

export const PopoverTrigger = PopoverPrimitive.Trigger;
export type PopoverTriggerProps = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Trigger
>;

export const PopoverPortal = PopoverPrimitive.Portal;
export type PopoverPortalProps = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Portal
>;

export const PopoverAnchor = PopoverPrimitive.Anchor;
export type PopoverAnchorProps = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Anchor
>;

export type PopoverContentProps = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
>;

export function PopoverContent({
  className,
  sideOffset = 8,
  ...props
}: PopoverContentProps) {
  const classes = ["ji-popover__content", className].filter(Boolean).join(" ");
  return (
    <PopoverPortal>
      <PopoverPrimitive.Content sideOffset={sideOffset} className={classes} {...props} />
    </PopoverPortal>
  );
}

export type PopoverCloseProps = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Close
>;

export function PopoverClose({ className, children, ...props }: PopoverCloseProps) {
  const classes = ["ji-popover__close", className].filter(Boolean).join(" ");
  return (
    <PopoverPrimitive.Close aria-label="닫기" {...props} className={classes}>
      {children ?? <XIcon />}
    </PopoverPrimitive.Close>
  );
}

export type PopoverArrowProps = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Arrow
>;

export function PopoverArrow({ className, ...props }: PopoverArrowProps) {
  const classes = ["ji-popover__arrow", className].filter(Boolean).join(" ");
  return <PopoverPrimitive.Arrow className={classes} {...props} />;
}
