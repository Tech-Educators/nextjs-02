import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div>
      <h2>My Posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
