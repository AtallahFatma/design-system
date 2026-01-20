import { forwardRef, type InputHTMLAttributes } from "react";
import { clsx } from "clsx";
import type { SelectInputSize, SelectOption } from "./Select.types";

type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  size?: SelectInputSize;
  error?: boolean;
  options: SelectOption[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = "md", error, className, options, ...props }, ref) => {
    return (
      <select ref={ref}
        className={clsx(
          "rounded-md border transition focus:outline-none focus:ring-2 bg-white",
          {
            "px-2 py-1 text-sm": size === "sm",
            "px-3 py-2": size === "md",
            "px-4 py-3 text-lg": size === "lg",
            "border-danger focus:ring-danger": error,
            "border-gray-300 focus:ring-primary": !error,
            "bg-gray-100 cursor-not-allowed opacity-60": props.disabled,
          },
          className
        )}
        {...props}
      >
       {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";
