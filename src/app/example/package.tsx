import React from "react";
import { redirect } from "next/navigation";
import { CreateForm } from "~/app/example/package.client";

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
      return <CreateForm action={action} path={path} />;
    },
  };
};
