import { getPostsByCategory } from "@/lib/posts";
import Link from "next/link";
import React from "react";

type CategoryParams = {
  params: {
    catslug: string;
  };
};

export default function CategoryPage({ params }: CategoryParams) {
  const posts = getPostsByCategory(params.catslug);
  return (
    <div>
      <h2>My Categories</h2>
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
