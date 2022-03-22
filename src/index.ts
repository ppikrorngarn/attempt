const attemptSynchronous = (func: Function, ...args: any[]): any[] => {
  try {
    const value = func(...args);
    return [value, null];
  } catch (error) {
    return [null, error];
  }
};

const attemptAsynchronous = async (
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

const isAsync = (func: Function) => {
  return func.constructor.name === "AsyncFunction";
};

export const attempt = (func: Function, ...args: any[]) => {
  if (isAsync(func)) {
    return attemptAsynchronous(func, ...args);
  } else {
    return attemptSynchronous(func, ...args);
  }
};
