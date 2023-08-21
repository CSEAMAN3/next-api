import { kv } from "@vercel/kv";
import { NextRequest } from "next/server";

export async function GET() {
  // string between the get method and the actual invocation, I am telling it what it will return
  const message = await kv.get<string>("message");

  return new Response(JSON.stringify(message));
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  // console.log(form)
  const newmessage = form.get("messagefield") as string;
  await kv.set("message", newmessage);
  return new Response(JSON.stringify("success"));
}
