import { cloneElement, isValidElement, type ReactElement } from "react";

type FormControlProps = {
  id?: string;
  error?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

type FormControlElement = ReactElement<FormControlProps>;

type FormFieldProps = {
  label: string;
  helperText?: string;
  error?: string;
  children: FormControlElement;
};

export function FormField({
  label,
  helperText,
  error,
  children,
}: FormFieldProps) {
  const id = crypto.randomUUID();
  const describedBy = error
    ? `${id}-error`
    : helperText
      ? `${id}-help`
      : undefined;

  const child = isValidElement(children)
    ? cloneElement(children, {
        id,
        error: Boolean(error),
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy,
      })
    : children;

  return (
    <div className="flex flex-col gap-1 items-start">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}

      {child}

      {helperText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p id={`${id}-error`} className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
