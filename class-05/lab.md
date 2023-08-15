# Lab

## Page meta tags and document

In HTML, meta tags are used to provide metadata about a web page, which can be used by search engines and web browsers. The metadata is placed in the head section of the HTML document. In Next.js 13, each layout.tsx or page.tsx file can export a static metadata object or a dynamic generateMetadata function to specify page metadata.

Tags such as the charset and viewport are only usually needed once in the top level layout.tsx file, but others, especially title and description, are probably different for every page.

# Tags included by Next.js on every page by default

`<meta charset="UTF-8">`: This tag is used to specify the character encoding for the document. This is important for ensuring that special characters and non-English text is displayed correctly. THIS IS ALWAYS INCLUDED BY Next.js automatically.

`<meta name="viewport" content="width=device-width, initial-scale=1">`: This tag is used to control the layout of the page on different devices. It tells the browser to use the device's width as the width of the viewport, and to set the initial zoom level to 1. THIS IS ALWAYS INCLUDED BY NEXT.js automatically.

### Tags you'll commonly find exported from page files:

```ts
export const metadata = {
  title: "Title of a great page",
  description: "This page is very good",
  robots: "noindex",
  openGraph: {
    title: "title of a great page when shared on facebook",
  },
};
```

description: This tag is used to provide a brief summary of the web page's content. This description is often used by search engines as a snippet when the page appears in search results.

robots: This tag is used to control how search engines index and follow the links on a web page. If a page contains a "noindex" directive, search engines will not include the page in their index. If a page contains a "nofollow" directive, search engines will not follow any links on the page.

This is also where you would include Open Graph tags, to customise your images and metadata on search engines and social network crawlers.

Using meta tags can be beneficial for SEO, better indexing and improving the user experience of your website.

## Dynamic metadata

generateMetadata is a function export that will be passed the page parameters from the URL, so you can use these to lookup specific metadata, for example the name of the pet on the pet's page.

```ts
// Dynamic metadata
export async function generateMetadata({ params }) {
  // you can do any asynchrone js in here, such as load items from a db
  // to get page specific information
  return {
    title: params.pet + " | Pets",
  };
}
```

## Social Share Testing

Once we deploy our walking skeleton in a future class, we can preview our opengraph values using the facebook social debugger.

https://developers.facebook.com/tools/debug/

## ⛳️ Exercise: Meta data and descriptions

Customise the meta tags for the different pages on your website, especially the description.

Note: you can call the same data fetching functions in your `head.tsx` file as you use for the content in your `page.tsx`.

## ⛳️ Extra Exercise: Open graph data

Add open graph meta tags for richer social cards. We'll be able to test these work properly in a later class.
