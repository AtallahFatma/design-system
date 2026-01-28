import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";
import type { ButtonVariant, ButtonSize } from "./Button.types";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  isLoading,
  disabled = false,
  className,
  onClick,
  children,
  ...props
}: ButtonProps) {

  const isDisabled = disabled || isLoading;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (!isDisabled && onClick) {
        onClick(e);
      }
    };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-primary text-textPrimary hover:opacity-90": variant === "primary",
          "bg-secondary text-textSecondary": variant === "secondary",
          "bg-danger text-textPrimary": variant === "danger",
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2": size === "md",
          "px-6 py-3 text-lg": size === "lg",
          "opacity-50 pointer-events-none": isLoading,
        },
        className
      )}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
