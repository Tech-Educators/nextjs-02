import { WEBSITE_URL } from "config";

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
      <form action={`/api/comments/${slug}`} method="POST">
        <label htmlFor="username">Name</label>
        <br />
        <input name="username" className="text-black border-2 border-grey-400" />
        <br />
        <br />
        <label htmlFor="comment">Comment</label>
        <br />
        <textarea name="comment" cols={30} rows={10} className="text-black border-2 border-grey-400" />
        <br />
        <br />
        <button type="submit">Send Comment</button>
      </form>
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
