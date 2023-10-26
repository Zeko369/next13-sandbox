import { Counter } from "fullstack-counter";
import { initializePosts } from "fullstack-posts";

import { prisma } from "~/db";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="my-1 border border-red-500 p-2">{children}</div>
);

const { CreatePost, ListPosts } = initializePosts({
  post: {
    findMany: async (...args) => prisma.post.findMany(...args),
    create: async (...args) => {
      "use server";

      return prisma.post.create(...args);
    },
  },
});

export default function Page() {
  return (
    <>
      <Wrapper>
        <Counter path="/example" />
      </Wrapper>

      <Wrapper>
        <CreatePost path="/example" />
      </Wrapper>

      <Wrapper>
        <ListPosts />
      </Wrapper>
    </>
  );
}
