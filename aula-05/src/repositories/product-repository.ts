import { Produtos } from "@prisma/client";
import db from "../database/database";
import prisma from "../database/database";
import { CreateProduct } from "schemas/product-schema";

const TABLE_NAME = "products";

async function getProducts(): Promise<Produtos[]> {
  const result = await prisma.produtos.findMany();
  return result;
}

async function getProduct(id: number): Promise<Produtos> {
  const result = await prisma.produtos.findFirst({ where: { id } });
  return result;
}

async function createProduct(product: CreateProduct) {
  await prisma.produtos.create({ data: product });
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct,
};

export default productRepository;
