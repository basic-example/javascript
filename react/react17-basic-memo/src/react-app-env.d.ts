/// <reference types="react-scripts" />

type fn = typeof Function.prototype;
type obj = typeof Object.prototype;
type anything = fn | obj | Array<anything> | string | number | null | undefined;
