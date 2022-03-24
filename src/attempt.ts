import { errorOrNull } from "./types";

export const attempt = (func: Function, ...args: any[]): [any, errorOrNull] => {
  try {
    const value = func(...args);
    return [value, null];
  } catch (error) {
    return [null, error];
  }
};
