import { Post } from "@prisma/client";
import db from "../database/database";
import prisma from "../database/database";
import { Create } from "protocols/post-protocol";

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">;

async function getPosts() {
  const result = await prisma.post.findMany();

  return result;
}

async function getPost(id: number) {
  const result = await prisma.post.findFirst({ where: { id } });

  return result;
}

async function createPost(post: CreatePost) {
  const { username, title, content } = post;
  const result = await prisma.post.create({
    data: { username: username, title: title, content: content },
  });

  return result;
}

async function deletePost(id: number) {
  const result = await prisma.post.delete({ where: { id: id } });
  return result;
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost,
};

export default postRepository;
