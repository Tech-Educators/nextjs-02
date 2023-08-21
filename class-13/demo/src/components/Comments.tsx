export default function Comments() {
  return (
    <div>
      <form action={`/api/comments`} method="POST">
        <label htmlFor="username">Name</label>
        <br />
        <input name="username" />
        <br />
        <br />
        <label htmlFor="comment">Comment</label>
        <br />
        <textarea name="comment" cols={30} rows={10} />
        <br />
        <br />
        <button type="submit">Send Comment</button>
      </form>
      <p>This will become the list of previous comments</p>
    </div>
  );
}
