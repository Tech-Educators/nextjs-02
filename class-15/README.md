# 15. Experimental Server Actions, simplifying the client/server divide

## Overview

Next.js 13 is the first framework to implement React's new Server Actions.

This is a big new feature that is part of the core React library. It allows us to write code in our components that will run on the server, not the browser, and facilitates communication between client and server automatically, without manually creating API Routes.

This is a big deal in our case, because it allows us to call our KV store and save our comments with code that lives inside the same component as our comment form. This means we don't need our own GET and POST API routes - React handles it for us, behind the scenes. We just write the functionality, mark those functons with the "use server" directive, and React handles passing the form data to the server function for us.

Server Actions are an experimental feature for now, so consider following the official advice to avoid production deployments at this stage. For small projects we're probably going to be safe to experiment though!

Don't forget to set the `{ experimental: { serverActions: true; }}` flag in your `next.config.js`.

## Class Outline

- Lecture: Server Actions? A significant new React feature implemented in Next.js.
- Lab: Simplify client/server communication with Server Actions

## Learning Objectives

- What are Server Actions?
- How to use Server Actions to eliminate the need for writing separate API routes and calling with fetch

## Helpful Resources

https://nextjs.org/docs/getting-started/react-essentials
App: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
Pages: https://nextjs.org/docs/pages/building-your-application/data-fetching/building-forms
Talk: Dan Abramov: React from another dimension (introducing server actions at remix conf) https://www.youtube.com/watch?v=zMf_xeGPn6s
