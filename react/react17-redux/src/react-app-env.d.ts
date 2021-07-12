/// <reference types="react-scripts" />
/// <reference types="node" />

type fn = typeof Function.prototype;
type obj = typeof Object.prototype;
type anything = fn | obj | Array<anything> | string | number | null | undefined;
