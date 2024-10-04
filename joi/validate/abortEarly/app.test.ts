import Joi from "joi";

describe("joi", () => {
  test("validate/abortEarly", () => {
    const schema = Joi.object({
      a: Joi.number(),
      b: Joi.string(),
    });
    const data = {
      a: "ssssssss",
      b: 1234,
    };

    const error1 = schema.validate(data, {}).error?.details;
    expect(error1?.length).toBe(1);

    const error2 = schema.validate(data, { abortEarly: false }).error?.details;
    expect(error2?.length).toBe(2);
  });
});
