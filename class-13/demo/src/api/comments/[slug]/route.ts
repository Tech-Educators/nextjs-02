import { getComments } from "@/lib/comments";
import { NextRequest, NextResponse } from "next/server";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export async function GET(request: NextRequest, { params }: BlogPostParams) {
  // get the comments
  const comments = getComments(params.slug);
  // return the comments
  return NextResponse.json({ comments });
}

export async function POST() {}
