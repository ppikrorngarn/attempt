import { $, $$ } from ".";

test("attempt with a synchronous function", () => {
  const syncFunc = (a: number, b: number): number => a + b;
  const [value, error] = $(syncFunc, 1, 2) as any[];
  expect(value).toBe(3);
  expect(error).toBeNull();
});

test("attempt with a synchronous function with error", () => {
  const syncFuncWithError = (_a: number, _b: number) => {
    throw Error("Test Error");
  };
  const [value, error] = $(syncFuncWithError, 1, 2) as any[];
  expect(value).toBeNull();
  expect(error).toBeInstanceOf(Error);
});

test("attempt with an asynchronous function", async () => {
  const asyncFunc = async (a: number, b: number): Promise<number> => {
    return a + b;
  };
  const [value, error] = (await $$(asyncFunc, 1, 2)) as any[];
  expect(value).toBe(3);
  expect(error).toBeNull();
});

test("attempt with an asynchronous function with error", async () => {
  const asyncFuncWithError = async (_a: number, _b: number) => {
    throw Error("Test Error");
  };
  const [value, error] = (await $$(asyncFuncWithError, 1, 2)) as any[];
  expect(value).toBeNull();
  expect(error).toBeInstanceOf(Error);
});
