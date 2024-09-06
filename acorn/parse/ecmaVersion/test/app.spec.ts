import * as acorn from "acorn";

describe("acorn/parse/ecmaversion", () => {
  test("example", () => {
    const data = acorn.parse("(a,b=1234) => {}", {
      ecmaVersion: "latest",
    });
    expect(JSON.parse(JSON.stringify(data))).toEqual({
      body: [
        {
          end: 16,
          expression: {
            async: false,
            body: { body: [], end: 16, start: 14, type: "BlockStatement" },
            end: 16,
            expression: false,
            generator: false,
            id: null,
            params: [
              { end: 2, name: "a", start: 1, type: "Identifier" },
              {
                end: 9,
                left: { end: 4, name: "b", start: 3, type: "Identifier" },
                right: {
                  end: 9,
                  raw: "1234",
                  start: 5,
                  type: "Literal",
                  value: 1234,
                },
                start: 3,
                type: "AssignmentPattern",
              },
            ],
            start: 0,
            type: "ArrowFunctionExpression",
          },
          start: 0,
          type: "ExpressionStatement",
        },
      ],
      end: 16,
      sourceType: "script",
      start: 0,
      type: "Program",
    });
  });
});
