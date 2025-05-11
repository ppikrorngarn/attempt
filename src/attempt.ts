/**
 * Executes a function and returns a tuple [result, error].
 * @param func Function to execute
 * @param args Arguments to pass to the function
 */
import type { AttemptResult } from "./types";

export function attempt<T, Args extends any[], E = unknown>(
  func: (...args: Args) => T,
  ...args: Args
): AttemptResult<T, E> {
  try {
    return [func(...args), null];
  } catch (error) {
    return [null, error as E];
  }
}

