import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type {
  ComponentPropsWithoutRef,
  HTMLAttributes,
  ReactNode,
  SVGProps,
} from "react";

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 7l4 4 6-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function DotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="8"
      viewBox="0 0 8 8"
      width="8"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="4" cy="4" r="3" />
    </svg>
  );
}

function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 3l4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export const DropdownMenu = DropdownMenuPrimitive.Root;
export type DropdownMenuProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Root
>;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export type DropdownMenuTriggerProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Trigger
>;

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export type DropdownMenuPortalProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Portal
>;

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export type DropdownMenuGroupProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Group
>;

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export type DropdownMenuRadioGroupProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioGroup
>;

export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export type DropdownMenuSubProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Sub
>;

export type DropdownMenuContentProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
>;

export function DropdownMenuContent({
  className,
  sideOffset = 6,
  ...props
}: DropdownMenuContentProps) {
  const classes = ["ji-dropdown-menu__content", className]
    .filter(Boolean)
    .join(" ");
  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={classes}
        {...props}
      />
    </DropdownMenuPortal>
  );
}

export interface DropdownMenuItemProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  children?: ReactNode;
  variant?: "default" | "destructive";
}

export function DropdownMenuItem({
  className,
  variant = "default",
  ...props
}: DropdownMenuItemProps) {
  const classes = [
    "ji-dropdown-menu__item",
    variant === "destructive" && "ji-dropdown-menu__item--destructive",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <DropdownMenuPrimitive.Item className={classes} {...props} />;
}

export type DropdownMenuCheckboxItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;

export function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) {
  const classes = ["ji-dropdown-menu__checkbox-item", className]
    .filter(Boolean)
    .join(" ");
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={classes}
      checked={checked}
      {...props}
    >
      <span className="ji-dropdown-menu__item-indicator">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

export type DropdownMenuRadioItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioItem
>;

export function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  const classes = ["ji-dropdown-menu__radio-item", className]
    .filter(Boolean)
    .join(" ");
  return (
    <DropdownMenuPrimitive.RadioItem className={classes} {...props}>
      <span className="ji-dropdown-menu__item-indicator">
        <DropdownMenuPrimitive.ItemIndicator>
          <DotIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

export type DropdownMenuLabelProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Label
>;

export function DropdownMenuLabel({ className, ...props }: DropdownMenuLabelProps) {
  const classes = ["ji-dropdown-menu__label", className].filter(Boolean).join(" ");
  return <DropdownMenuPrimitive.Label className={classes} {...props} />;
}

export type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>;

export function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  const classes = ["ji-dropdown-menu__separator", className]
    .filter(Boolean)
    .join(" ");
  return <DropdownMenuPrimitive.Separator className={classes} {...props} />;
}

export type DropdownMenuShortcutProps = HTMLAttributes<HTMLSpanElement>;

export function DropdownMenuShortcut({ className, ...props }: DropdownMenuShortcutProps) {
  const classes = ["ji-dropdown-menu__shortcut", className]
    .filter(Boolean)
    .join(" ");
  return <span className={classes} {...props} />;
}

export type DropdownMenuSubTriggerProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubTrigger
>;

export function DropdownMenuSubTrigger({
  className,
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  const classes = ["ji-dropdown-menu__sub-trigger", className]
    .filter(Boolean)
    .join(" ");
  return (
    <DropdownMenuPrimitive.SubTrigger className={classes} {...props}>
      {children}
      <ChevronRightIcon className="ji-dropdown-menu__sub-chevron" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

export type DropdownMenuSubContentProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubContent
>;

export function DropdownMenuSubContent({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuSubContentProps) {
  const classes = ["ji-dropdown-menu__sub-content", className]
    .filter(Boolean)
    .join(" ");
  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitive.SubContent
        sideOffset={sideOffset}
        className={classes}
        {...props}
      />
    </DropdownMenuPortal>
  );
}
