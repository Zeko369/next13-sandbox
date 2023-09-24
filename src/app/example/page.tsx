import { PrismaClient } from "@prisma/client";
import { Counter } from "fullstack-counter";
import { CreatePost, ListPosts } from "fullstack-posts";

import { prisma } from "~/db";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="my-1 border border-red-500 p-2">{children}</div>
);

namespace globalThis {
  export let db: PrismaClient;
}

globalThis.db = prisma;

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
        <ListPosts db={prisma} />
      </Wrapper>
    </>
  );
}
