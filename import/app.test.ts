describe("import", () => {
  test("example", () => {
    import("./app.test.json").then(
      (result: {
        default: {
          [key: string]: string;
        };
      }) => {
        expect(result.default).toEqual({
          a: "aaa",
          b: "bbb",
        });
      },
    );
  });
});
