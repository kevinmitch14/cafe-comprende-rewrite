import { type ReadonlyURLSearchParams } from "next/navigation";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createUrl(
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
}

export function upperFirstChar(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const REQUIRED_ERROR_MESSAGE = "Required";
export const zodNonEmptyString = z
  .string()
  .trim()
  .min(1, REQUIRED_ERROR_MESSAGE);
