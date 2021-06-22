/// <reference types="react-scripts" />

type fn = (...props: anything) => anything | void;
type anything = fn | obj | string | number | null | undefined;
type obj = {
  [k: string]: anything;
};
