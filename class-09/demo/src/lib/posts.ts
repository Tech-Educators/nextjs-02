const CATEGORIES = [
  { name: "Humans", catslug: "humans" },
  { name: "Animals", catslug: "animals" },
];

const POSTS = [
  {
    title: "ChatGPT stole my life",
    slug: "post-one",
    content: "Hey this is my blog",
    category: "humans",
  },
  {
    title: "Cars: Are they the future?",
    slug: "post-two",
    content: "Hey this is my blog",
    category: "humans",
  },
  {
    title: "Where did I bury my stick?",
    slug: "post-three",
    content: "Hey this is my blog",
    category: "animals",
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

export function getCategories() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}
