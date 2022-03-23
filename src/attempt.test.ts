import { attempt as $ } from "./attempt";

test("attempt with a synchronous function", () => {
  const syncFunc = (a: number, b: number): number => a + b;
  const [value, error] = $(syncFunc, 1, 2);
  expect(value).toBe(3);
  expect(error).toBeNull();
});

test("attempt with a synchronous function with error", () => {
  const syncFuncWithError = (_a: number, _b: number) => {
    throw Error("Test Error");
  };
  const [value, error] = $(syncFuncWithError, 1, 2);
  expect(value).toBeNull();
  expect(error).toBeInstanceOf(Error);
});
