# attempt

Inspired by Golang error handling, this util will help you code defensively by always handling the errors.

Feel free to contribute, please send a pull request: https://github.com/ppikrorngarn/attempt

## Example:

```js script
const { attempt: $, attemptAsync: $$ } = require("@piyawasin/attempt");

const main = async () => {
  // ##### sync example #####
  const add = (a, b) => a + b;

  const [sum, error] = $(add, 10, 15);

  if (error) {
    // handle error here
  } else {
    // do something with the sum here
  }

  // ##### async example #####
  const signIn = async (email, password, stayLoggedIn) => {
    // return user data
  };

  const [user, error1] = await $$(
    signIn,
    "example@example.com",
    "somePassword",
    true
  );
  if (error1) {
    // handle error here
  } else {
    // do something with the user data here
  }
};

main();
```
