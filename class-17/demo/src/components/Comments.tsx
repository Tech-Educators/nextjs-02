import { WEBSITE_URL } from "config";
import CommentForm from "./CommentForm";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import Link from "next/link";

export default async function Comments({ slug }: { slug: string }) {
  let comments = [];
  try {
    const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, { next: { revalidate: 5 } });
    comments = await commentsRes.json();
  } catch (err) {
    console.log(err);
  }

  const user: User | null = await currentUser();

  return (
    <div>
      <h3>Comments</h3>
      {/* @ts-ignore */}
      {user ? <CommentForm slug={slug} username={user.username} /> : <Link href="/sign-in">Please sign in to comment</Link>}

      <ul>
        {/* @ts-ignore */}
        {comments.map((comment) => {
          return (
            <li key={comment.uuid}>
              {comment.username} says...
              <br />
              {comment.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
