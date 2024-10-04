import Joi from "joi";

describe("joi", () => {
  test("validate/allowUnknown", () => {
    const schema = Joi.object({
      a: Joi.number(),
    });
    const data = {
      a: 1234,
      b: 2345,
    };

    const error1 = schema.validate(data).error;
    expect(!!error1).toBe(true);

    const error2 = schema.validate(data, { allowUnknown: true }).error;
    expect(!!error2).toBe(false);
  });
});
