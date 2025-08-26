import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./select"; // ajuste o caminho se necessário

interface ComboboxProps {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onValueChange?: (value: string) => void;
  placeholder?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
  disabled?: boolean;
}

export const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      value,
      onValueChange,
      placeholder = "Selecione uma opção...",
      options,
      className,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <Select
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        {...props}
      >
        <SelectTrigger ref={ref} className={className}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
);
Combobox.displayName = "Combobox";