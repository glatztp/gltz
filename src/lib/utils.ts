import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {}
): string {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    day: "numeric",
    year: "numeric",
    ...options,
  }).format(new Date(date));
}

export function formatCurrency(
  amount: number,
  currency: string = "BRL"
): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(amount);
}
function twMerge(arg0: string) {
  throw new Error("Function not implemented.");
}
