import Joi from "joi";

describe("joi", () => {
  test("concat", () => {
    const schema = Joi.number().max(10).concat(Joi.number().min(1));
    const schema_a = Joi.object({ a: Joi.any() });
    const schema_b = Joi.object({ b: Joi.any() });
    const schema_ab = Joi.object({}).concat(schema_a).concat(schema_b);

    expect(schema["_rules"].length).toBe(2);
    expect(!!schema_ab["_ids"]["_byKey"].get("a")).toBe(true);
    expect(!!schema_ab["_ids"]["_byKey"].get("b")).toBe(true);
  });
});
