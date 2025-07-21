import React from "react";
import { cn } from "../../lib/utils";

interface CalendarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  mode?: "single" | "multiple" | "range";
  selected?: Date | Date[] | { from: Date; to?: Date };
  onSelect?: (
    date: Date | Date[] | { from: Date; to?: Date } | undefined
  ) => void;
  disabled?: (date: Date) => boolean;
  showOutsideDays?: boolean;
}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      className,
      mode = "single",
      selected,
      onSelect,
      disabled,
      showOutsideDays = true,
      ...props
    },
    ref
  ) => {
    const [currentMonth, setCurrentMonth] = React.useState(new Date());

    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
    const today = new Date();

    const previousMonth = () => {
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
      );
    };

    const nextMonth = () => {
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
      );
    };

    const isSelected = (date: Date) => {
      if (!selected) return false;

      if (mode === "single") {
        return (
          selected instanceof Date &&
          date.getDate() === selected.getDate() &&
          date.getMonth() === selected.getMonth() &&
          date.getFullYear() === selected.getFullYear()
        );
      }

      return false;
    };

    const isToday = (date: Date) => {
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    };

    const handleDateClick = (date: Date) => {
      if (disabled && disabled(date)) return;

      if (mode === "single") {
        onSelect?.(date);
      }
    };

    const renderDays = () => {
      const days = [];

      // Previous month days
      if (showOutsideDays) {
        const prevMonth = new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth() - 1,
          0
        );
        const prevMonthDays = prevMonth.getDate();

        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
          const date = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth() - 1,
            prevMonthDays - i
          );
          days.push(
            <button
              key={`prev-${prevMonthDays - i}`}
              onClick={() => handleDateClick(date)}
              className="h-9 w-9 text-center text-sm text-muted-foreground hover:bg-muted rounded-md"
              disabled={disabled && disabled(date)}
            >
              {prevMonthDays - i}
            </button>
          );
        }
      } else {
        for (let i = 0; i < firstDayOfMonth; i++) {
          days.push(<div key={`empty-${i}`} className="h-9 w-9" />);
        }
      }

      // Current month days
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth(),
          day
        );
        const selected = isSelected(date);
        const isCurrentDay = isToday(date);
        const isDisabled = disabled && disabled(date);

        days.push(
          <button
            key={day}
            onClick={() => handleDateClick(date)}
            disabled={isDisabled}
            className={cn(
              "h-9 w-9 text-center text-sm rounded-md transition-colors",
              "hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring",
              {
                "bg-primary text-primary-foreground": selected,
                "bg-accent text-accent-foreground": isCurrentDay && !selected,
                "text-muted-foreground cursor-not-allowed": isDisabled,
              }
            )}
          >
            {day}
          </button>
        );
      }

      // Next month days
      if (showOutsideDays) {
        const remainingDays = 42 - days.length; // 6 weeks * 7 days
        for (let day = 1; day <= remainingDays; day++) {
          const date = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth() + 1,
            day
          );
          days.push(
            <button
              key={`next-${day}`}
              onClick={() => handleDateClick(date)}
              className="h-9 w-9 text-center text-sm text-muted-foreground hover:bg-muted rounded-md"
              disabled={disabled && disabled(date)}
            >
              {day}
            </button>
          );
        }
      }

      return days;
    };

    return (
      <div ref={ref} className={cn("p-3", className)} {...props}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={previousMonth}
            className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 flex items-center justify-center"
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
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="text-sm font-medium">
            {currentMonth.toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric",
            })}
          </div>

          <button
            onClick={nextMonth}
            className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 flex items-center justify-center"
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
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
            <div
              key={day}
              className="h-9 w-9 text-center text-xs font-medium text-muted-foreground flex items-center justify-center"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
      </div>
    );
  }
);
Calendar.displayName = "Calendar";

export { Calendar };
