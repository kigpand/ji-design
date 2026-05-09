import {
  createContext,
  useCallback,
  useContext,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type KeyboardEvent,
  type MutableRefObject,
  type ReactNode,
} from "react";

interface TabsContextValue {
  activeValue: string;
  baseId: string;
  firstEnabledValueRef: MutableRefObject<string>;
  orientation: "horizontal" | "vertical";
  setActiveValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs parts must be used within <Tabs>");
  return ctx;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  value?: string;
}

export function Tabs({
  children,
  className,
  defaultValue = "",
  onValueChange,
  orientation = "horizontal",
  value,
  ...props
}: TabsProps) {
  const baseId = useId();
  const firstEnabledValueRef = useRef("");
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;

  const setActiveValue = useCallback(
    (next: string) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const classes = ["ji-tabs", `ji-tabs--${orientation}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <TabsContext.Provider
      value={{ activeValue, baseId, firstEnabledValueRef, orientation, setActiveValue }}
    >
      <div className={classes} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export type TabsListProps = HTMLAttributes<HTMLDivElement>;

export function TabsList({ className, onKeyDown, ...props }: TabsListProps) {
  const { orientation } = useTabsContext();

  const classes = ["ji-tabs__list", className].filter(Boolean).join(" ");

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e);
    if (e.defaultPrevented) return;

    const triggers = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>(
        '[role="tab"]:not([disabled])',
      ),
    );
    const idx = triggers.indexOf(document.activeElement as HTMLButtonElement);
    if (idx === -1) return;

    const isHorizontal = orientation === "horizontal";
    const prevKey = isHorizontal ? "ArrowLeft" : "ArrowUp";
    const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown";

    let next = -1;
    if (e.key === prevKey) {
      next = (idx - 1 + triggers.length) % triggers.length;
    } else if (e.key === nextKey) {
      next = (idx + 1) % triggers.length;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = triggers.length - 1;
    }

    if (next !== -1) {
      const target = triggers[next];
      if (target) {
        e.preventDefault();
        target.focus();
        target.click();
      }
    }
  };

  return (
    <div
      {...props}
      className={classes}
      role="tablist"
      aria-orientation={orientation}
      onKeyDown={handleKeyDown}
    />
  );
}

export interface TabsTriggerProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  value: string;
}

export function TabsTrigger({
  className,
  disabled,
  onClick,
  value,
  ...props
}: TabsTriggerProps) {
  const { activeValue, baseId, firstEnabledValueRef, setActiveValue } =
    useTabsContext();

  // 렌더 순서 기준으로 첫 번째 비장애 trigger를 기록해 value가 없을 때도
  // tablist에 항상 tabIndex=0인 요소가 하나 존재하도록 보장합니다.
  if (!firstEnabledValueRef.current && !disabled) {
    firstEnabledValueRef.current = value;
  }

  const effectiveActive = activeValue || firstEnabledValueRef.current;
  const isSelected = effectiveActive === value;

  const classes = [
    "ji-tabs__trigger",
    isSelected && "ji-tabs__trigger--active",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      className={classes}
      type="button"
      role="tab"
      id={`${baseId}-trigger-${value}`}
      aria-selected={isSelected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={isSelected ? 0 : -1}
      disabled={disabled}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented && !disabled) setActiveValue(value);
      }}
    />
  );
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function TabsContent({
  className,
  tabIndex = 0,
  value,
  ...props
}: TabsContentProps) {
  const { activeValue, baseId } = useTabsContext();
  const isActive = activeValue === value;

  const classes = ["ji-tabs__content", className].filter(Boolean).join(" ");

  return (
    <div
      {...props}
      className={classes}
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-trigger-${value}`}
      hidden={!isActive}
      tabIndex={tabIndex}
    />
  );
}
