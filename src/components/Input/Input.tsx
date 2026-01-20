import { forwardRef, type InputHTMLAttributes } from "react";
import { clsx } from "clsx";
import type { InputSize } from "./Input.types";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  size?: InputSize;
  error?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label,size = "md", error, className, ...props }, ref) => {
    return (
    <div className="flex flex-col gap-1 items-start">
      {label && <label className="text-sm font-medium">{label} :</label>}   
      <input ref={ref}
        className={clsx(
          "rounded-md border transition focus:outline-none focus:ring-2",
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
      />
      {error && <span className="text-sm text-danger">{error}</span>}
    </div>
    );
  }
);

Input.displayName = "Input";
