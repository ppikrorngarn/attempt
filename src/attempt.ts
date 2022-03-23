export const attempt = (func: Function, ...args: any[]): any[] => {
  try {
    const value = func(...args);
    return [value, null];
  } catch (error) {
    return [null, error];
  }
};
