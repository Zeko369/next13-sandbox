import { PrismaClient, Prisma } from "@prisma/client";

const serverifyPrisma = (prisma: PrismaClient) => {
  return {
    // ...prisma,
    post: {
      // ...prisma.post,
      findMany: async (args: Prisma.PostFindManyArgs) => {
        "use server";
        return prisma.post.findMany(args);
      },
      create: async (args: Prisma.PostCreateArgs) => {
        "use server";
        return prisma.post.create(args);
      },
    },
  };
};

export const prisma = new PrismaClient();
