import short from "short-uuid";
import { kv } from "@vercel/kv";

export async function saveComment(username: string, comment: string, slug: string) {
  // generate a unique ID for this comment
  const uuid = short.generate();

  // stringify our comment object
  const commentObject = JSON.stringify({
    username,
    comment,
    uuid,
  });

  // add the comment to the kv store - comment:12345
  kv.set(`comment:${uuid}`, commentObject);

  // add this comment tot he list of comments for the post - comments:post-one
  const commentsList = await kv.lpush(`comments:${slug}`, uuid);
  // list will look like: comments:post-one 12345 12345 3456
  console.log(commentsList);

  return uuid;
}

export async function getComments(slug: string) {
  const commentIds = await kv.lrange(`comments:${slug}`, 0, -1);
  const commentKeys = commentIds.map((id) => `comment:${id}`); // [comment:1234, comment:23456, comment:3245]

  return await kv.mget(...commentKeys);
}
