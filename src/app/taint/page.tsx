import React, { experimental_taintUniqueValue } from "react";
import { PrismaClient } from "@prisma/client";
import { Users } from "~/app/taint/client";

const db = new PrismaClient();
const wrappedDb = db.$extends({
  result: {
    user: {
      hashedPassword: {
        needs: { hashedPassword: true },
        compute: (user) => {
          experimental_taintUniqueValue(
            "Cant send hashedPassword to client",
            user,
            user.hashedPassword,
          );
          return user.hashedPassword;
        },
      },
    },
  },
});

export default async function Page() {
  const users = await wrappedDb.user.findMany({
    select: {
      id: true,
      name: true,
      hashedPassword: true,
    },
  });

  return (
    <div>
      <h1>Page</h1>
      <Users users={users} />
    </div>
  );
}
