import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function calculateLevel(points: number): number {
  return Math.floor(points / 100) + 1
}

export function getNextLevelPoints(currentPoints: number): number {
  const currentLevel = calculateLevel(currentPoints)
  return currentLevel * 100
}
