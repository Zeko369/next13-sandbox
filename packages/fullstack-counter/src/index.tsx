import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "fullstack-counter:count";

export const Counter = ({ path }: { path: string }) => {
  const count = Number(cookies().get(COOKIE_NAME)?.value) || 0;
  const action = async (data: FormData) => {
    "use server";
    cookies().set(COOKIE_NAME, data.get("count") as string);
    redirect(path);
  };

  return (
    <form action={action}>
      <button type="submit" name="count" value={count - 1}>
        Decrement
      </button>
      &nbsp;
      <input type="text" value={count} size={3} readOnly />
      &nbsp;
      <button type="submit" name="count" value={count + 1}>
        Increment
      </button>
    </form>
  );
};
