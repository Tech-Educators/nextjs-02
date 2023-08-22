import { allPosts as POSTS } from "contentlayer/generated";

const CATEGORIES = [
  { name: "Humans", catslug: "humans" },
  { name: "Animals", catslug: "animals" },
];

// get ALL the posts (simulating an API or database)
export function getPosts() {
  return POSTS;
}

// get ONE of the posts (simulating an API or database)
export function getPostBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getCategories() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}
