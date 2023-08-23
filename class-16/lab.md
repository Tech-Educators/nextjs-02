# 16. Suspense and streaming

## Overview

We'll improve our page load speed by deferring the Comments, and loading the post first. Improving page load speed and user experience with minimal effort.

## HTTP Streaming

HTTP supports "streaming" pages over the internet. When you stream a video on YouTube or a song on Spotify you don't download the entire video before it starts to play. We can do the same thing with web pages: split the page up into chunks that can operate independenlty and share the first parts of the page as quickly as possible. Then "stream in" the rest of the content as it becomes available arrives.

This comes in handy for ensuring our blog posts load quickly, without waiting for out comments to load from the server, and allows the comments to be streamed in to the page once they've loaded. It means the user experience of the page load is much faster - and they'll probably never see the loading state for the comments, as they'll be underneath the post content!

## Wrappig it with Suspense

We achieve this with React's `Suspense` component. We can wrap our asynchronous `Comments` component with Suspense in our post page where we load the comments.

```tsx
<Suspsense fallback="Loading comments...">
  <Comments postSlug={postSlug} />
</Suspense>
```

and that's it. Your comments component is now streamed to the browser after loading comments without delaying the initial post page load. If you need to delay the comment loading speed to see this happen, remember you can use the delay function in your component or in the getComments function to slow it down.

## Shimmer

Suspense doens't only accept a text string as a fallback. It also accepts a React component. This means you can show anything while waiting for your asynchronous content to load.

A common approach to this is known as "shimmer" effects - where an approximation of the content to load, say a profile image and a block of text is shown as a "placeholder" - a blank set of boxes that represent the rough design of the content when it loads. This often "shimmers" or fades in and out to indicate a loading state.

You can see a simple example of this in the example folder, in the `components/CommentShimmer.tsx` file. This is a common way to indicate some content is about to load, and Suspense along with Async components makes doing this quite straightforward!
