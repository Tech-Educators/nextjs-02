# 14. Walk on the Client Side: client components, submitting forms, user experience

## Overview

The form we've built so far isn't very nice to use. It's a bit jarring getting thrown to a blank API page and having to navigate back and refresh to see our comments.

We're going to convert our form to a JavaScript form, and set up an `onSubmit` event handler to intercept our comment submission and send it to our API without redirecting the user.

Along the way we'll find out what client components are - this'll be the first time we've used a traditional client side React component! We'll also learn how to refresh the page data without doing a full page reload.

## Class Outline

- Lecture: Forms 2: Client components, event handlers, client side POST request
- Lab: Enhance your comment form with JavaScript and Client components

## Learning Objectives

- How to create a client component and use JavaScript event handlers
- How to improve the user experience of our comment submission
- Reloading page data to refresh the comments list without refreshing the page (React's useTransition hook and Next's useRouter hook)

## Helpful Resources

https://nextjs.org/docs/getting-started/react-essentials
