import { prisma } from "~/db";
import { revalidatePath } from "next/cache";

export default async function FormPage() {
  const posts = await prisma.post.findMany();

  const create = async (formData: FormData) => {
    "use server";

    await prisma.post.create({
      data: {
        title: formData.get("name") as string,
      },
    });

    revalidatePath("/form");
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <hr />

      <form action={create}>
        <input name="name" />
        <input type="submit" />
      </form>
    </div>
  );
}
