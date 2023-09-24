import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const count = Number(cookies().get("count")?.value) || 0;
  const action = async (data: FormData) => {
    "use server";
    cookies().set("count", data.get("count") as string);
    redirect("/counter");
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
}
