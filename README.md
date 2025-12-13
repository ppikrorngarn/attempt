# attempt

A minimal, type-safe utility for defensive error handling in both synchronous and asynchronous JavaScript/TypeScript code. Inspired by Go's error handling, `attempt` and `attemptAsync` help you avoid unhandled exceptions and keep your code predictable.

---

## Features

- **Tuple-based error handling**: No more try/catch blocks scattered everywhere.
- **TypeScript-first**: Fully typed for safer code and better IDE experience.
- **Universal module support**: Works seamlessly with both CommonJS and ESM.
- **Works with any function**: Supports both sync and async, including native Promises.
- **Zero dependencies**

---

## Installation

```sh
npm install @piyawasin/attempt
```

---

## API

### `attempt(fn, ...args)`

Safely executes a synchronous function.

- **Returns:** `[result, error]` — If the function throws, `result` is `null` and `error` is set.

### `attemptAsync(fnOrPromise, ...args)`

Safely executes an async function or resolves a Promise directly.

- **Returns:** `Promise<[result, error]>` — If the function rejects/throws, `result` is `null` and `error` is set.

---

## Usage

### JavaScript Example

```js
const { attempt, attemptAsync } = require("@piyawasin/attempt");

// Synchronous
function parseNumber(str) {
  if (isNaN(Number(str))) throw new Error("Invalid number");
  return Number(str);
}

const [num, err] = attempt(parseNumber, "42");
if (err) {
  console.error("Failed to parse:", err.message);
} else {
  console.log("Parsed number:", num);
}

// Asynchronous (Function)
async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network error");
  return res.json();
}

(async () => {
  const [data, fetchErr] = await attemptAsync(
    fetchData,
    "https://api.example.com/data"
  );
  if (fetchErr) {
    console.error("Fetch failed:", fetchErr.message);
  } else {
    console.log("Fetched data:", data);
  }
})();

// Asynchronous (Promise)
(async () => {
  const myPromise = Promise.resolve("Success!");
  const [res, err] = await attemptAsync(myPromise);
  console.log(res); // "Success!"
})();
```

### TypeScript Example

```typescript
import { attempt, attemptAsync } from "@piyawasin/attempt";

function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Divide by zero");
  return a / b;
}

const [result, error] = attempt(divide, 10, 2); // result: 5, error: null

async function getUser(id: string): Promise<{ name: string }> {
  // ...fetch user
}

const [user, userErr] = await attemptAsync(getUser, "123");
```

---

## Best Practices

- Always check the `error` value before using the result.
- For async code, always `await` the result of `attemptAsync`.

---

## License

ISC
