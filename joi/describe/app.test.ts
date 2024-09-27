import Joi from "joi";

describe("joi", () => {
  test("describe", () => {
    expect(Joi.number().describe().type).toBe("number");
  });
});
