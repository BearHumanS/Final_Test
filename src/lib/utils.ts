import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PLATE_CONFIG } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getKRPlateTitle = (name: string) => {
  return PLATE_CONFIG[name].title;
};
