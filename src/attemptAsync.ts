/**
 * Executes an async function and returns a tuple [result, error].
 * @param func Async function to execute
 * @param args Arguments to pass to the function
 */
import type { AttemptResult } from "./types";

export async function attemptAsync<T, Args extends any[], E = unknown>(
  func: (...args: Args) => Promise<T>,
  ...args: Args
): Promise<AttemptResult<T, E>> {
  try {
    return [await func(...args), null];
  } catch (error) {
    return [null, error as E];
  }
}

