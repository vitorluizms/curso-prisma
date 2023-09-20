import { Produtos } from "@prisma/client";
import Joi from "joi";

export const productSchema = Joi.object({
  label: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  expirationDate: Joi.date().required(),
  eatable: Joi.boolean().optional(),
});

export type CreateProduct = Omit<Produtos, "id" | "createdAt">;
