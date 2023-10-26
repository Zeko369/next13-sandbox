"use client";

import { User } from "@prisma/client";

export const Users = ({ users }: { users: any[] }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.hashedPassword}
        </li>
      ))}
    </ul>
  );
};
