import Joi from "joi";

describe("joi", () => {
  test("assert", () => {
    Joi.assert(4, Joi.number());
  });
});
