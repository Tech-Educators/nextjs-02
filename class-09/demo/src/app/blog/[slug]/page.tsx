import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

// this builds all the params for ALL blog posts when the website is deployed
export function generateStaticParams() {
  const posts = getPosts();

  // generateStaticParams expects you to output an array of objects, containing the [slug]
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });

  // you can write the above on one line by wrapping the object you want to return in () so it doesn't mistake the {} for the function brackets
  // return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
