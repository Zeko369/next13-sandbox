export default function Page({
  searchParams: { include_blank } = { include_blank: "false" },
}: {
  searchParams: any;
}) {
  const includeBlank = include_blank === "true";

  return (
    <a href={includeBlank ? "/audit" : "/audit?include_blank=true"}>
      <div>Include blank</div>
      <span
        className={[
          `relative block h-5 w-12 rounded-full ${
            includeBlank ? "bg-gray-200" : "bg-blue-500"
          }`,
          `after:absolute ${
            includeBlank ? "after:left-0.5" : "after:right-0.5"
          } after:top-0.5 after:block after:h-4 after:w-4 after:rounded-full after:bg-white`,
        ].join(" ")}
      />
    </a>
  );
}
