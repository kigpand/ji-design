import * as ProgressPrimitive from "@radix-ui/react-progress";

export interface ProgressProps {
  value?: number | null;
  max?: number;
  variant?: "default" | "success" | "warning" | "destructive";
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

export function Progress({
  className,
  value,
  max = 100,
  variant = "default",
  size = "md",
  showValue = false,
}: ProgressProps) {
  // 0~max 범위로 clamp; null/undefined는 indeterminate
  const clampedValue = value != null ? Math.min(Math.max(0, value), max) : null;
  const percentage =
    clampedValue != null ? Math.round((clampedValue / max) * 100) : null;
  const isIndeterminate = clampedValue == null;

  const classes = [
    "ji-progress",
    `ji-progress--${size}`,
    variant !== "default" && `ji-progress--${variant}`,
    isIndeterminate && "ji-progress--indeterminate",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <ProgressPrimitive.Root
        className="ji-progress__track"
        value={clampedValue}
        max={max}
      >
        <ProgressPrimitive.Indicator
          className="ji-progress__indicator"
          style={
            !isIndeterminate
              ? { transform: `translateX(-${100 - percentage!}%)` }
              : undefined
          }
        />
      </ProgressPrimitive.Root>
      {showValue && percentage != null && (
        <span className="ji-progress__value" aria-hidden="true">
          {percentage}%
        </span>
      )}
    </div>
  );
}
