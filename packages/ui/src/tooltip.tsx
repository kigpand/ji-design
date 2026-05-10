import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ComponentPropsWithoutRef } from "react";

export const TooltipProvider = TooltipPrimitive.Provider;
export type TooltipProviderProps = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Provider
>;

export const Tooltip = TooltipPrimitive.Root;
export type TooltipProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;

export const TooltipTrigger = TooltipPrimitive.Trigger;
export type TooltipTriggerProps = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
>;

export const TooltipPortal = TooltipPrimitive.Portal;
export type TooltipPortalProps = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Portal
>;

export type TooltipContentProps = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
>;

export function TooltipContent({
  className,
  sideOffset = 6,
  ...props
}: TooltipContentProps) {
  const classes = ["ji-tooltip__content", className].filter(Boolean).join(" ");
  return (
    <TooltipPortal>
      <TooltipPrimitive.Content sideOffset={sideOffset} className={classes} {...props} />
    </TooltipPortal>
  );
}

export type TooltipArrowProps = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Arrow
>;

export function TooltipArrow({ className, ...props }: TooltipArrowProps) {
  const classes = ["ji-tooltip__arrow", className].filter(Boolean).join(" ");
  return <TooltipPrimitive.Arrow className={classes} {...props} />;
}
