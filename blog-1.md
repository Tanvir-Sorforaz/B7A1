# Why `unknown` is Safer Than `any` in TypeScript

## Introduction

When I first started learning TypeScript, I used `any` everywhere because it felt easy. If TypeScript showed an error, I could just write `any` and the error disappeared instantly.But later I understood something important:`any` removes TypeScript’s protection.

That’s why many developers call it a “type safety hole.” A better option for handling uncertain data is `unknown`.


## The Problem with `any`
The problem is that TypeScript stops checking for mistakes.
Example:

```ts
let value: any = "Tanvir";

value.toUpperCase();
value.toFixed(3);
```
This code compiles successfully even though `toFixed()` only works on numbers.
At runtime, this can crash the application.
So even though `any` feels flexible, it can create bugs that are difficult to find later.


## Why `unknown` is Better
`unknown` is also used for unpredictable data, but it is much safer.
Example:

```ts
let value: unknown = "Tanvir";
value.toUpperCase();
```
TypeScript will immediately show an error.
Why?
Because `unknown` forces us to check the type before using it.


## Type Narrowing

This checking process is called **type narrowing**.
We “narrow” the type before accessing properties or methods.
Example:
```ts
let value: unknown = "Tanvir";
if (typeof value === "string") {
  return value.toUpperCase();
}
```
Now TypeScript understands that inside the `if` block, `value` is definitely a string.
So the code becomes both safe and readable.


## Conclusion
`any` gives freedom, but it removes safety.
`unknown` gives flexibility while still forcing developers to validate data properly.

That small difference makes TypeScript applications more reliable and easier to debug.

In short:
- `any` = “Do anything.”
- `unknown` = “Check first, then use.”

And in real projects, checking first is usually the smarter choice.
