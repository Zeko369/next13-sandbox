import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const res = await fetch(
    "https://sofa-story.dev.sofascore.com/api/v1/stories"
  );
  const data = await res.json();

  console.log(data);

  return NextResponse.json(data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};
