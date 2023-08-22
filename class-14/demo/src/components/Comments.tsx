import { WEBSITE_URL } from "config";
import CommentForm from "./CommentForm";

export default async function Comments({ slug }: { slug: string }) {
  let comments = [];
  try {
    const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, { next: { revalidate: 5 } });
    comments = await commentsRes.json();
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <CommentForm slug={slug} />

      <h3>Comments</h3>
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
