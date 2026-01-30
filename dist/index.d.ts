import { ButtonHTMLAttributes } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { ReactElement } from 'react';
import { RefAttributes } from 'react';
import { SelectHTMLAttributes } from 'react';
import { TextareaHTMLAttributes } from 'react';

export declare function Button({ variant, size, isLoading, disabled, className, onClick, children, ...props }: ButtonProps): JSX.Element;

declare type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
};

declare type ButtonSize = "sm" | "md" | "lg";

declare type ButtonVariant = "primary" | "secondary" | "danger";

declare type FormControlElement = ReactElement<FormControlProps>;

declare type FormControlProps = {
    id?: string;
    error?: boolean;
    "aria-invalid"?: boolean;
    "aria-describedby"?: string;
};

export declare function FormField({ label, helperText, error, children, }: FormFieldProps): JSX.Element;

declare type FormFieldProps = {
    label: string;
    helperText?: string;
    error?: string;
    children: FormControlElement;
};

export declare const Input: ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
size?: InputSize;
error?: boolean;
} & RefAttributes<HTMLInputElement>>;

declare type InputSize = "sm" | "md" | "lg";

export declare const Select: ForwardRefExoticComponent<SelectHTMLAttributes<HTMLSelectElement> & {
size?: SelectInputSize;
error?: boolean;
options: SelectOption[];
} & RefAttributes<HTMLSelectElement>>;

declare type SelectInputSize = "sm" | "md" | "lg";

declare type SelectOption = {
    label: string;
    value: string;
};

export declare const Textarea: ForwardRefExoticComponent<TextareaHTMLAttributes<HTMLTextAreaElement> & {
size?: TextareaSize;
error?: boolean;
} & RefAttributes<HTMLTextAreaElement>>;

declare type TextareaSize = "sm" | "md" | "lg";

export { }
