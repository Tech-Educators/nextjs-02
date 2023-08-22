# 14. Enhancing the form withclient side JS in client components

## Overview

The experience of our basic form is not very pleasant.

We're going to add a JavaScript event handler to the page to handle sending our form data to our API POST route with a fetch request.

Then we're going to combine the useTransition and useRouter hooks to update the comments on the page without refreshing the page or losing any client side state.

## Client Side Components

This is the first time we've used any client side components, so it's worth reading over the documentation to get a deeper understanding of the differences between client and server components.

To intercept our form submission event we need a client side event handler, and these can only be run in the browser - not on the server like our other server only components.

We'll also need the two hooks I mentioned, and these only work in the browser as well.

To denote a component as a client component, we simply put the directive `"use client";` at the top of the component file.

Because our form currently lives directly in our `Comments` server component, which loads our comment list, we'll need to move it to it's own component to be able to activate it's JS superpowers.

Create a `/components/CommentForm.tsx` file. You can copy it from the example, but we'll go through the most important bits.

```tsx
"use client";

/// ... imports here

export function CommentForm({ postSlug }: CommentFormProps) {
  // the router hook to trigger a page refresh
  const router = useRouter();

  // the react useTransition hook to manage client/server data upodates
  // without refreshing the page. isPending gives us the ability to know
  // show a spinner or similar
  const [isPending, startTransition] = useTransition();

  // runs when onSubmit event fires, uses fetch to send a POST request to
  // our API comment route, and then refreshes the page data to show the comment
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("submiting the form");

    // prevent the form submitting and redircting us to the action location
    event.preventDefault();

    // get the form input values
    const username = event.target["username"].value;
    const comment = event.target["comment"].value;

    // create a FormData object and append our values to send to the API
    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    // POST the FormData to the API
    const res = await fetch(`${WEBSITE_URL}/api/comments/${postSlug}`, {
      body: formData,
      method: "POST",
    });

    // Refresh the current route and fetch new data from the server without
    // losing client-side browser or React state.
    startTransition(() => {
      router.refresh();
      console.log("reloaded the page data");
    });
  }

  // the handleFormSubmit fuction is passed to the onSubmit event handler on the form
  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <label htmlFor="username">Name</label>
      <input type="text" name="username" className={styles.input} />
      <label htmlFor="comment">Comment</label>
      <textarea name="comment" cols={30} rows={10} className={styles.input} />
      <button type="submit" disabled={isPending}>
        {isPending ? "sending comment..." : "send comment"}
      </button>
    </form>
  );
}
```

Then delete the form in `Comments.tsx` and replace with your new `<CommentForm />` component.

With this all in place, you should now be able to leave a comment and see it update on the page.

Tip: if you change the `kv.lpush` function in the `/lib/comments.ts` file's `saveComment` file, you will append the comment to the beginning of the list instead of the end, so you'll see it appear under the form.
