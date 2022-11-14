import joi from "joi";

const gameSchema = joi.object({
  title: joi.string().trim().required(),
  price: joi.string().trim().required(),
  genre: joi.string().trim().required(),
  description: joi.string().trim().required(),
});

const priceSchema = joi.object({
  price: joi.string().trim().required(),
});

export { gameSchema, priceSchema };
