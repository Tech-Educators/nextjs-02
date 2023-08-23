const comments = [
  { title: "My comment rules", content: "lorem ipsum dolor sit", username: "Tim" },
  { title: "My comment rules 1", content: "lorem ipsum dolor sit", username: "Tim" },
  { title: "My comment rules 2", content: "lorem ipsum dolor sit", username: "Tim" },
];

async function delay(delay: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

export async function getComments() {
  await delay(5000);
  return comments;
}
