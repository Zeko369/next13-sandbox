import { sql } from "@vercel/postgres";

export default function Page() {
  const action = async (formData: FormData) => {
    const name = formData.get("name") as string;
    await sql`INSERT INTO users (name) VALUES (${name})`;
  };

  return (
    <form action={action}>
      <input name="name" />
      <input type="submit" />
    </form>
  );
}
