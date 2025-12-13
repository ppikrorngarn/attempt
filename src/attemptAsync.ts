/**
 * Executes an async function and returns a tuple [result, error].
 * @param func Async function to execute
 * @param args Arguments to pass to the function
 */
import type { AttemptResult } from "./types";

export async function attemptAsync<T, E = unknown>(
  promise: Promise<T>
): Promise<AttemptResult<T, E>>;

export async function attemptAsync<T, Args extends any[], E = unknown>(
  func: (...args: Args) => Promise<T>,
  ...args: Args
): Promise<AttemptResult<T, E>>;

export async function attemptAsync<T, Args extends any[], E = unknown>(
  funcOrPromise: ((...args: Args) => Promise<T>) | Promise<T>,
  ...args: Args
): Promise<AttemptResult<T, E>> {
  if (funcOrPromise instanceof Promise) {
    try {
      const result = await funcOrPromise;
      return [result, null];
    } catch (error) {
      return [null, error as E];
    }
  }

  const func = funcOrPromise;
  try {
    return [await func(...args), null];
  } catch (error) {
    return [null, error as E];
  }
}

