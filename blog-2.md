# How `Generics` allow to build reusable components and functions

## Introduction

One of the coolest features in TypeScript is Generics.
At first, Generics can look confusing because of syntax like `<T>`, but the main idea is actually simple:
Without Generics, we often repeat the same logic again and again for strings, numbers, objects, and other types.

Generics solve that problem.



## The Problem Without Generics

Suppose we want a function that returns the same value we pass into it.

Without Generics:

```ts
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
```

The logic is exactly the same.
We are just rewriting code for different types.



## Using Generics

```ts
function identity<T>(value: T): T {
  return value;
}
```

This single function works for multiple types.

Example:

```ts
identity<string>("Hello");
identity<number>(100);
identity<boolean>(true);
```

The function stays reusable while TypeScript still keeps full type safety.
This becomes very important in large projects.



## Why Companies Love Generics

In large applications, repeated code becomes difficult to maintain.
Generics help teams create reusable utilities and components without losing type safety.
That is why Generics are heavily used in:

- React
- Backend APIs
- Database utilities
- Large enterprise applications



## Conclusion

Generics are one of the biggest reasons TypeScript feels powerful.
They allow developers to write flexible and reusable code while still keeping strict type checking.
Instead of creating separate functions for every data type, we can create one smart solution that works everywhere.

That makes code cleaner, shorter, and easier to maintain.
