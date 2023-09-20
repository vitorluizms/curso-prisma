import { Produtos } from "@prisma/client";
import productRepository from "../repositories/product-repository";
import { CreateProduct } from "schemas/product-schema";

async function getProducts() {
  const products: Produtos[] = await productRepository.getProducts();
  return products;
}

async function getProduct(id: number) {
  const product = await productRepository.getProduct(id);
  if (!product)
    throw {
      name: "NotFoundError",
      message: "Post not found",
    };

  return product;
}

async function createProduct(post: CreateProduct): Promise<void> {
  await productRepository.createProduct(post);
}

const postService = {
  getProducts,
  createProduct,
};

export default postService;
