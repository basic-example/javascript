import Joi from "joi";

describe("joi", () => {
  test("validate/messages", () => {
    const schema = Joi.object({
      a: Joi.number(),
    });
    const data = {
      a: "abcd",
    };

    const error1 = <Joi.ValidationErrorItem[]>(
      schema.validate(data).error?.details
    );
    expect(error1[0]["message"]).toContain("must be a number");

    const error2 = <Joi.ValidationErrorItem[]>schema.validate(data, {
      messages: {},
    }).error?.details;
    expect(error2[0]["message"]).toContain("must be a number");

    const error3 = <Joi.ValidationErrorItem[]>schema.validate(data, {
      messages: {
        "number.base": "custom error message",
      },
    }).error?.details;
    expect(error3[0]["message"]).toContain("custom error message");
  });
});
