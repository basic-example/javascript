/// <reference types="react-scripts" />

type fn = (...args: Array<anything>) => anything | void;
type obj = typeof Object.prototype;
type anything =
  | fn
  | obj
  | Record<string, unknown>
  | Array<anything>
  | string
  | number
  | null
  | undefined;
