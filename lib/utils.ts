import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle<T>(array: T[]) {
  const temp = [...array];
  for (let i = temp.length - 1; i >= 0; --i) {
    const index = Math.floor(Math.random() * temp.length);
    [temp[i], temp[index]] = [temp[index], temp[i]];
  }
  return temp;
}
