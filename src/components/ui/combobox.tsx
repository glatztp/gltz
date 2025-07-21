import React from "react";
import { cn } from "../../lib/utils";

interface ComboboxProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      value,
      onValueChange,
      placeholder = "Selecione uma opção...",
      searchPlaceholder = "Buscar...",
      emptyText = "Nenhum resultado encontrado.",
      options,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    const selectedOption = options.find((option) => option.value === value);

    return (
      <div className="relative">
        <button
          ref={ref}
          type="button"
          onClick={() => setOpen(!open)}
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        >
          <span
            className={cn(
              "truncate",
              !selectedOption && "text-muted-foreground"
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "h-4 w-4 opacity-50 transition-transform",
              open && "rotate-180"
            )}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div className="absolute top-full z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md">
            <div className="flex items-center border-b px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4 shrink-0 opacity-50"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div className="max-h-[200px] overflow-y-auto">
              {filteredOptions.length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  {emptyText}
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <div
                    key={option.value}
                    className={cn(
                      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                      value === option.value &&
                        "bg-accent text-accent-foreground"
                    )}
                    onClick={() => {
                      onValueChange?.(option.value);
                      setOpen(false);
                      setSearchValue("");
                    }}
                  >
                    <span className="truncate">{option.label}</span>
                    {value === option.value && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-auto h-4 w-4"
                      >
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {open && (
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
        )}
      </div>
    );
  }
);
Combobox.displayName = "Combobox";

export { Combobox };
