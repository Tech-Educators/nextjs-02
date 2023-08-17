# 10. Dynamic rendering: Make a pageview counter for posts using Vercel KV (/pages & /app)

## Overview

Experiment with dynamic rendering. We're going to use the Vercel KV database to create a simple site-wide view counter for our website, just like the geocities days

We'll also use the patched Next.js `fetch` API to load data from a third-party API in a server component and think about caching that data for efficiency.

We'll also look at how we can access HTTP request headers in our server components, and configure some environment variables so we can access our database.

## Class Outline

- Lecture: Dynamic rendering. Using asyncrhonous and dynamic functions in server components.
- Lab: Build a page view counter with Vercel KV, loading github stars for your favourite repo using fetch

## Learning Objectives

- Understand dynamic rendering with server components
- Calling third party APIs from Server Components with external libraries
- Using Environment Variables in Next.js

## Helpful Resources

[Vercel KV docs](https://vercel.com/docs/storage/vercel-kv)
[Next.js Docs: Static and Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering)
https://vercel.com/docs/concepts/projects/environment-variables
https://nextjs.org/docs/app/building-your-application/data-fetching
https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
