"use server";

import { prisma } from "~/db";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const ServerComponent = async () => {
  const user = await prisma.user.findFirstOrThrow();
  await delay(1000);

  return <h1>{user.name || "[No name]"}</h1>;
};

export const renderServer = () => {
  return <ServerComponent />;
};
