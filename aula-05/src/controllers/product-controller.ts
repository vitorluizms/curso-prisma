import { Request, Response } from "express";
import httpStatus from "http-status";

import productService from "../services/product-service";
import { CreateProduct } from "schemas/product-schema";

async function getProducts(req: Request, res: Response) {
  const products = await productService.getProducts();
  res.send(products);
}

async function createProduct(req: Request, res: Response) {
  const body = req.body as CreateProduct;
  await productService.createProduct(body);

  res.sendStatus(httpStatus.CREATED);
}

const productController = {
  getProducts,
  createProduct
}

export default productController;