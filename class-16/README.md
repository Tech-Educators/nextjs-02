# 16. Suspense, streaming, defering loading slower, less important content

## Overview

Returning a page quickly for a fast loading experience is important. For something like a blog with comments, there's a clear distinction in importance: the post is clearly the primary focus of a visitor landing on a post page, and the comments are less important.

When our posts load directly from the file system and not an API they are likely to be very fast!

Our comments loading from the KV Store on Vercel will be slower.

To avoid the post waiting for the comments to load before returning the page, React and Next.js support HTTP streaming. This allows us to return the top of the page and the post content quickly, and automatically defer the comments to "stream in" to the page a little bit later, after the post is already displayed. We do this with the `<Suspense />` component.

## Class Outline

- Lecture: Suspense/Streaming? Why do it? What is HTTP Streaming?
- Lab: Improve efficiency of our post pages by deferring comment loading using Suspense

## Learning Objectives

- How to use the Suspense component
- What HTTP Streaming is and why we might use it
- How Suspense and streaming help speed up our page loads and improve user experience

## Helpful Resources

https://nextjs.org/docs/getting-started/react-essentials
App: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
Pages: https://nextjs.org/docs/pages/building-your-application/data-fetching/building-forms
Talk: Dan Abramov: React from another dimension (introducing server actions at remix conf) https://www.youtube.com/watch?v=zMf_xeGPn6s
