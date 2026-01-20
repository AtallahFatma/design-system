import { forwardRef, type TextareaHTMLAttributes } from "react";
import { clsx } from "clsx";
import type { TextareaSize } from "./Textarea.types";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: TextareaSize;
  error?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ size = "md", error, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          "rounded-md border transition focus:outline-none focus:ring-2 resize-y",
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
    );
  }
);

Textarea.displayName = "Textarea";
