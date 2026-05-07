import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

export interface SelectOption {
  disabled?: boolean;
  label: string;
  value: string;
}

export interface SelectProps {
  "aria-invalid"?: boolean | "grammar" | "spelling";
  "aria-label"?: string;
  "aria-labelledby"?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  value?: string;
}

export function Select({
  "aria-invalid": ariaInvalid,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  className,
  defaultValue,
  disabled = false,
  id,
  name,
  onChange,
  options,
  placeholder = "선택하세요",
  required,
  value: controlledValue,
}: SelectProps) {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const value = isControlled ? controlledValue : internalValue;

  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const listboxId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const optionId = (index: number) => `${listboxId}-option-${index}`;

  const open = () => {
    const currentIndex = options.findIndex((o) => o.value === value);
    setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleSelect = (optionValue: string) => {
    if (!isControlled) setInternalValue(optionValue);
    onChange?.(optionValue);
    close();
    triggerRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (isOpen) {
          const opt = options[focusedIndex];
          if (opt && !opt.disabled) handleSelect(opt.value);
        } else {
          open();
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          open();
        } else {
          setFocusedIndex((i) => {
            let next = i + 1;
            while (next < options.length && options[next]?.disabled) next++;
            return next < options.length ? next : i;
          });
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((i) => {
            let prev = i - 1;
            while (prev >= 0 && options[prev]?.disabled) prev--;
            return prev >= 0 ? prev : i;
          });
        }
        break;
      case "Escape":
      case "Tab":
        close();
        break;
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        !triggerRef.current?.contains(e.target as Node) &&
        !listboxRef.current?.contains(e.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || focusedIndex < 0) return;
    const item = listboxRef.current?.children[focusedIndex] as HTMLElement;
    item?.scrollIntoView({ block: "nearest" });
  }, [focusedIndex, isOpen]);

  const classes = [
    "ji-select",
    isOpen && "ji-select--open",
    disabled && "ji-select--disabled",
    ariaInvalid && "ji-select--invalid",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {name && (
        <input name={name} required={required} type="hidden" value={value} />
      )}
      <button
        ref={triggerRef}
        aria-activedescendant={
          isOpen && focusedIndex >= 0 ? optionId(focusedIndex) : undefined
        }
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-invalid={ariaInvalid}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        className="ji-select__trigger"
        disabled={disabled}
        id={id}
        onClick={() => (isOpen ? close() : open())}
        onKeyDown={handleKeyDown}
        role="combobox"
        type="button"
      >
        <span className={selectedOption ? "ji-select__value" : "ji-select__placeholder"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          aria-hidden="true"
          className="ji-select__chevron"
          fill="none"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      {isOpen && (
        <ul
          ref={listboxRef}
          className="ji-select__listbox"
          id={listboxId}
          role="listbox"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              aria-disabled={option.disabled}
              aria-selected={option.value === value}
              className={[
                "ji-select__option",
                option.value === value && "ji-select__option--selected",
                index === focusedIndex && "ji-select__option--focused",
                option.disabled && "ji-select__option--disabled",
              ]
                .filter(Boolean)
                .join(" ")}
              id={optionId(index)}
              onMouseDown={(e) => {
                e.preventDefault();
                if (!option.disabled) handleSelect(option.value);
              }}
              onMouseEnter={() => !option.disabled && setFocusedIndex(index)}
              role="option"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
