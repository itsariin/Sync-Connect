import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn is a great util which helps us create a dynamic classes inside tailwind 
// But why we need this why do we both clsx and tailwind merge ?
// coz there are cases where we could create conflicting classes and instead of writing our own complicated util 
// to decide which one should we prioritized, we have this nice little util which will gonna help us 

// example

// import {cn} from "@/lib/utils"
// const state = true;
// className={cn(
//   "bg-indigo-500",
//   state && "bg-red-500"
// )}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
