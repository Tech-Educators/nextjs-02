import { getComments } from "@/lib/comment";

export default async function Comment() {
  const comments = await getComments();

  return (
    <>
      {comments?.map((comment: any) => {
        return (
          <div key={comment.title}>
            <h2>{comment.title}</h2>
            <p>{comment.content}</p>
            <p>{comment.username}</p>
          </div>
        );
      })}
    </>
  );
}
