export const attemptAsync = async (
  asyncFunc: Function,
  ...args: any[]
): Promise<[any, any]> => {
  try {
    const value = await asyncFunc(...args);
    return [value, null];
  } catch (error) {
    return [null, error];
  }
};
