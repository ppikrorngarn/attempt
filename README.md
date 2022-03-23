# attempt

Inspired by Golang error handling, this util will help you code defensively by always handling the errors.

## Example:

```js script
const { attempt: $, attemptAsync: $$ } = require('@piyawasin/attempt');

const main = async () => {

  const add = (a, b) => a + b;
  const [v0, e0] = $(add, 1, 3);
  if (e0) {
    console.log(e0); // <unreachable>
  } else {
    console.log(v0); // 4
  }

  const addWithError = (a, b) => {
    throw Error("Test Error");
  };
  const [v1, e1] = $(addWithError, 1, 3);
  if (e1) {
    console.log(e1); // Error Object ('Test Error')
  } else {
    console.log(v1); // <unreachable>
  }

  const addAsync = async (a, b) => a + b;
  const [v2, e2] = await $$(addAsync, 3, 4);
  if (e2) {
    console.log(e2); // <unreachable>
  } else {
    console.log(v2); // 7
  }

  const addAsyncWithError = async (a, b) => {
    throw Error("Test Error");
  };
  const [v3, e3] = await $$(addAsyncWithError, 3, 4);
  if (e3) {
    console.log(e3); // Error Object ('Test Error')
  } else {
    console.log(v3); // <unreachable>
  }
};

main();
```
