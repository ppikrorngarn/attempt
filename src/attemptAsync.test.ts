import { attemptAsync as $$ } from "./attemptAsync";

test("attempt with an asynchronous function", async () => {
  const asyncFunc = async (a: number, b: number): Promise<number> => {
    return a + b;
  };
  const [value, error] = await $$(asyncFunc, 1, 2);
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
