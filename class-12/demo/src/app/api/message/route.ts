// this route can be reached by going to
//     /api/message
import { kv } from "@vercel/kv";

export async function GET() {
  // <string> between the get method and the actual invocation, I am telling the function what it will return
  const message = await kv.get<string>("message");
  return new Response(JSON.stringify(message));
}
