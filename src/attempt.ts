export const attempt = (func: Function, ...args: any[]): any[] => {
  try {
    const value = func(...args);
    return [value, null];
  } catch (error) {
    return [null, error];
  }
};

export const attemptAsync = async (
  asyncFunc: Function,
  ...args: any[]
): Promise<any[]> => {
  try {
    const value = await asyncFunc(...args);
    return [value, null];
  } catch (error) {
    return [null, error];
  }
};
