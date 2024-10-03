const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().min(18),
});
