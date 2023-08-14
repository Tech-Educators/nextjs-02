# Lab

## Server-side navigation

When you make a direct request to the server, the server fetches any necessary data, and sends HTML fully populated with the page content over the network. When a user clicks a link to another page, another request is made to the server and a different page of fully populated HTML is delivered over the network.

## Client-side navigation

When you make a direct request to the server, an empty shell of an HTML document is delivered, with a JavaScript bundle which bootstraps the application, optionally requests some remote data from an API, and injects the resulting HTML into the page. When a user clicks a link to another page, the client may be able to navigate instantly as the content could already be available in the application, although server API requests may still needed to fetch new data to display.

## ⛳️ Exercise: creating pages and navigating between them.

Creating pages.

Call it what you like, but `/about` will make it easier to follow the rest of this guide.

We make a folder called `about` inside the `/app` directory. Inside there we'll create an empty file called `page.tsx`. So it's final location is `/app/about/page.tsx`.

Then we'll return a simple default React component containing "hello, world!".

```
export default function AboutRoute() {
  return <p>hello, about page world!</p>
}
```

Create this file and then attempt to visit `http://localhost:3000/about` in your browser. Create another page, by making another folder and another `page.tsx` file.

Add links to these pages in the root layout at `/app/layout.tsx` file. Click around the pages to get a feel for how it feels to switch between pages.

Next up:
- Make sure your header and footer are in components
- Add at least 3 new pages
- Add at least one new layout.tsx within one of those pages
