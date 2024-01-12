export default async function ThisIsAThingy() {
  const SECRET = "DONT SHARE THIS";

  const action = async () => {
    "use server";
    console.log(SECRET);
  };

  return (
    <div>
      <h1>Here</h1>
      <form action={action}>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
