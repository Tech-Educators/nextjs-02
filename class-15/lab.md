# 15. Using React's (experimental) Server Actions in Next.js

## Overview

It's been common to use API routes for submitting forms since Next.js introduced support for them in the /pages directory.

React has introduced a new experimental feature that removes the need for creating manual API routes and connecting components to them via fetch requests.

We can delete our API routes for comments, and replace our `CommentForm.tsx` component with the following file, which will handle all of the functionality needed for submitting our comment.

## Creating the comment form

This is all the code need for both server and client for the comment form.

```tsx
import styles from "./comments.module.css";
import { revalidatePath } from "next/cache";
import { saveComment } from "../lib/comments";
import { FormStatusButton } from "./FormStatusButton";

// the CommentForm accepts the slug of our post, so it knows
// how to store the comments.
interface CommentFormProps {
  postSlug: string;
}

export function CommentForm({ postSlug }: CommentFormProps) {
  async function handleSubmitFormAction(formData: FormData) {
    // this function runs on the server
    "use server";
    // get the form data values submitted from the form
    const username = formData.get("username") as string;
    const comment = formData.get("comment") as string;
    // save the comment using saveComment, just like the API POST route
    const uuid = await saveComment(username, comment, postSlug);
    // revalidate the post page, to show the new comment
    revalidatePath(`/post/${postSlug}`);
  }

  return (
    <form action={handleSubmitFormAction} className={styles.form}>
      <label htmlFor="username">Name</label>
      <input type="text" name="username" className={styles.input} />
      <label htmlFor="comment">Comment</label>
      <textarea name="comment" cols={30} rows={10} className={styles.input} />
      <button type="submit">send comment</button>
    </form>
  );
}
```

CommentForm is a server component. It does not have "use client" at the top anymore. We're not using any JS event handlers or client side code. The `handleSubmitFormAction` function runs on the server - due to the "use server" directive - it uses the `saveComment` functon to save the comment just like our POST API route did, but without the complexity of the API Route, the fetch request, or handling the form event.

Once the comment is saved `revalidatePath` tells Next.js that our post page data has changed, and it reloads the comments.

Our comments are still loaded in the `Comments.tsx` file as normal.

Notice that the `postSlug` prop, passed down from our page to our Comments component to our CommentForm, is also available to the server function, so we can use the postSlug to save our comment. React handles passing this value to the server for us automatically. It does feel a little bit like magic! 🪄

## Pending state for the submit button `useFormStatus`

In our API demo our button had a loading state and became disabled to prevent double submissions while our comment was saving.

With ServerActions this information is being made available through an experimental hook called `useFormStatus`. The hook must be used inside the `<form>` component to have access to the submission state of the server communications.

To do this we'll make a new `"use client"` component called `FormStatusButton.tsx` that will hook into the form submission state and use it to disable itself and show "submitting comment..." pending state.

```tsx
// client component, because it'll be updating the dom based on pending status
"use client";

// experiemtnal react hook, renamed to remove the experimental prefix
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function FormStatusButton() {
  // use the hook and extract the current pending state
  // note: useFormStatus must be used by components "inside" the <form> tag
  // the form state isn't available

  const { pending } = useFormStatus();

  return (
    // use pending value to change the button
    <button type="submit" disabled={pending}>
      {pending ? "sending comment..." : "submit comment"}
    </button>
  );
}
```

Drop this into your CommentForm instead of the existing `<button type="submit">`.

When you click the button you should see the loading indicator. 🎉

If it's too fast, there's a delay function you can use in the coments.ts library.

```ts
// import this function and `await delay(5000)` to delay 5000 milliseconds
async function delay(delay: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}
```
