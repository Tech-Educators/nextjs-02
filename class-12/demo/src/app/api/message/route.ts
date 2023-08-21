// this route can be reached by going to
//     /api/message
import { kv } from "@vercel/kv";
import { NextRequest } from "next/server";

export async function GET() {
  // <string> between the get method and the actual invocation, I am telling the function what it will return
  const message = await kv.get<string>("message");
  return new Response(JSON.stringify(message));
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const newmessage = form.get("messagefield") as string;
  await kv.set("message", newmessage);
  return new Response(JSON.stringify("success"));
}
