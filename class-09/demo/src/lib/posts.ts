const POSTS = [
  {
    title: "Blog One",
    slug: "post-one",
    content: "Hey this is my blog",
  },
  {
    title: "Blog Two",
    slug: "post-two",
    content: "Hey this is my blog",
  },
  {
    title: "Blog Three",
    slug: "post-three",
    content: "Hey this is my blog",
  },
];

// get ALL the posts (simulating an API or database)
export function getPosts() {
  return POSTS;
}

// get ONE of the posts (simulating an API or database)
export function getPostBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}
