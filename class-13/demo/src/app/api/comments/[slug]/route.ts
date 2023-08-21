import { getComments, saveComment } from "@/lib/comments";
import { NextRequest, NextResponse } from "next/server";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export async function GET(request: NextRequest, { params }: BlogPostParams) {
  // get the comments
  const comments = await getComments(params.slug);

  // return the comments
  return NextResponse.json(comments);
}

export async function POST(request: NextRequest, { params }: BlogPostParams) {
  const form = await request.formData();
  const username = form.get("username") as string;
  const comment = form.get("comment") as string;
  console.log(username, comment, params.slug);
  await saveComment(username, comment, params.slug);
  return NextResponse.json("Comment saved");
}
