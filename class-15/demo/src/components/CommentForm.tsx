import { WEBSITE_URL } from "config";
import FormStatusButton from "./FormStatusButton";
import { saveComment } from "@/lib/comments";
import { revalidatePath } from "next/cache";

export default function CommentForm({ slug }: { slug: string }) {
  // function that runs on the server!?!?!?!
  async function handleSubmitFormAction(formData: FormData) {
    "use server";

    // get the form data values
    const username = formData.get("username") as string;
    const comment = formData.get("comment") as string;

    // save the comment
    await saveComment(username, comment, slug);

    // formData.set("username", ""); // doesn't work

    //revalidate the path , so the version on the server has all the correct comments
    revalidatePath(`/blog/${slug}`);
  }

  return (
    <form action={handleSubmitFormAction} className="flex flex-col gap-4">
      <label htmlFor="username">Name</label>
      <input name="username" className="text-black border-2 border-grey-400" />
      <label htmlFor="comment">Comment</label>
      <textarea name="comment" cols={30} rows={10} className="text-black border-2 border-grey-400" required />
      <FormStatusButton />
    </form>
  );
}
