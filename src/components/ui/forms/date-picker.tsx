import React from "react";
import { cn } from "../../../lib/utils";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../overlays/popover";
import { Button } from "../button";

interface DatePickerProps {
  date?: Date;
  // eslint-disable-next-line no-unused-vars
  onDateChange?: (date: Date) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      date,
      onDateChange,
      placeholder = "Selecione uma data",
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);

    const formatDate = (date: Date) => {
      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
            disabled={disabled}
            {...props}
          >
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
              className="mr-2 h-4 w-4"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            {date ? formatDate(date) : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              onDateChange?.(selectedDate as Date);
              setOpen(false);
            }}
            showOutsideDays={false}
          />
        </PopoverContent>
      </Popover>
    );
  }
);
DatePicker.displayName = "DatePicker";

interface DateRangePickerProps {
  dateRange?: { from: Date; to?: Date };
  onDateRangeChange?: (
    // eslint-disable-next-line no-unused-vars
    dateRange: { from: Date; to?: Date } | undefined
  ) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const DateRangePicker = React.forwardRef<
  HTMLButtonElement,
  DateRangePickerProps
>(
  (
    {
      dateRange,
      onDateRangeChange,
      placeholder = "Selecione um período",
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);

    const formatDateRange = (range: { from: Date; to?: Date }) => {
      const fromFormatted = range.from.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      if (range.to) {
        const toFormatted = range.to.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        return `${fromFormatted} - ${toFormatted}`;
      }

      return fromFormatted;
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !dateRange && "text-muted-foreground",
              className
            )}
            disabled={disabled}
            {...props}
          >
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
              className="mr-2 h-4 w-4"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            {dateRange ? formatDateRange(dateRange) : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={(selectedRange) => {
              onDateRangeChange?.(selectedRange as { from: Date; to?: Date });
              if (
                selectedRange &&
                (selectedRange as { from: Date; to?: Date }).to
              ) {
                setOpen(false);
              }
            }}
            showOutsideDays={false}
          />
        </PopoverContent>
      </Popover>
    );
  }
);
DateRangePicker.displayName = "DateRangePicker";

export { DatePicker, DateRangePicker };
