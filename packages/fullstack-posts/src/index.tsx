import React from "react";
import { redirect } from "next/navigation";

type Post = {
  id: number;
  title: string;
  content: string | null;
};

type BasePrismaClient = {
  post: {
    findMany: () => Promise<Post[]>;
    create: (args: {
      data: { title: string; content: string };
    }) => Promise<Post>;
  };
};

export const initializePosts = <PrismaClient extends BasePrismaClient>(
  db: PrismaClient,
) => {
  const action = async (path: string, data: FormData) => {
    "use server";
    await db.post.create({
      data: {
        title: data.get("title") as string,
        content: data.get("content") as string,
      },
    });

    redirect(path);
  };

  return {
    ListPosts: async () => {
      const posts = await db.post.findMany();

      return (
        <ul>
          {posts.map((post) => (
            <li key={String(post.id)}>{post.title}</li>
          ))}
        </ul>
      );
    },
    CreatePost: ({ path }: { path: string }) => {
      return (
        <form action={action.bind(null, path)} className="flex flex-col gap-2">
          <label className="flex flex-col">
            Title
            <input
              type="text"
              name="title"
              className="border border-black"
              required
            />
          </label>

          <label className="flex flex-col">
            Content
            <textarea name="content" className="border border-black" />
          </label>

          <button type="submit">Create</button>
        </form>
      );
    },
  };
};
