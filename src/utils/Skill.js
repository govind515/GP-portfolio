import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Custom classnames function combining clsx and tailwind-merge
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
