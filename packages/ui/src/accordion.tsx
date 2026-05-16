import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type { ComponentPropsWithoutRef, SVGProps } from "react";

function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export const Accordion = AccordionPrimitive.Root;
export type AccordionProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
>;

export type AccordionItemProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  const classes = ["ji-accordion__item", className].filter(Boolean).join(" ");
  return <AccordionPrimitive.Item className={classes} {...props} />;
}

export type AccordionTriggerProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>;

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const classes = ["ji-accordion__trigger", className]
    .filter(Boolean)
    .join(" ");
  return (
    <AccordionPrimitive.Header className="ji-accordion__header">
      <AccordionPrimitive.Trigger className={classes} {...props}>
        {children}
        <ChevronDownIcon className="ji-accordion__chevron" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export type AccordionContentProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  const classes = ["ji-accordion__content", className]
    .filter(Boolean)
    .join(" ");
  return (
    <AccordionPrimitive.Content className={classes} {...props}>
      <div className="ji-accordion__content-inner">{children}</div>
    </AccordionPrimitive.Content>
  );
}
