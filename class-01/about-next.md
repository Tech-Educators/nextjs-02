# About NextJS

The best overview of Next.js can of course be found in the [official documentation]().

But as a brief intro:

Next.js is a JavaScript framework for building server-rendered React applications. It allows developers to easily create and build scalable React applications with a powerful development environment, automatic code splitting, and optimized performance. With Next.js, developers can improve the speed and SEO of their web applications. Additionally, Next.js offers a built-in development server, hot module replacement, and static export capabilities, making it a popular choice for building high-performance, production-ready React applications.

## Server-side Rendering (SSR)

In the beginning, the core selling point of Next.js was it's ability to enable effortless Server Side Rendering, without managing a complex webpack configuration. It was important for building search engine optimised applications.

<<< insert meme - dude looking at a blackboard of complex mathematics scratching his head, captioned: "the react build process before next.js">>>

Server rendering, also known as Universal rendering, is a technique where the initial render of a web page happens on the server, rather than in the browser. The rendered HTML is then sent to the browser, just like a traditional application, and JavaScript then takes over and the page becomes a fully interactive single-page application (SPA).

In the context of a React application, server rendering is important because it allows for improved performance, caching and better search engine optimisation (SEO). When a web page is server-rendered, the initial HTML that is sent to the browser already contains the fully rendered content, allowing the page to load faster and improving the time-to-first-paint. This can be especially important for users on slow internet connections or low-end devices. Additionally, search engines can better crawl and index server-rendered pages, resulting in improved SEO. You can properly configure page and OpenGraph metadata to ensure social network crawlers can aslo access high quality images and metasdata for embeds and shares.

## Static Site Generation

Static site generation is a technique used to build websites by pre-generating all of the HTML, CSS, and JavaScript files that make up the site. The resulting files are then deployed to a web server, where they can be served to users.

One of the main benefits of static site generation is that it allows for faster performance, since the generated files are simply served to users without the need for any server-side processing.

Another advantage is that static sites are more secure, since they don't require server-side code to be executed, and hence are not vulnerable to server-side security issues.

There are some occasions where generating many static pages of unique content is useful, and Next.js continues to support this use case in version 13.

## Other competing frameworks are available

Next.js led many innovations in React development. However, there are now a number of newer frameworks gaining attention and offering new perspectives, and in many cases bringing back a more traditional, web platform focused development approach. Front end developers have become used to working around browser differences and platform inadequacies over the years and began to lose touch with the fundamental capabilities of the platform. In 2023, the platform is more advanced and browsers are more up to date. Devices are more capable. Fundamental concepts from the earlier more fragile days of the web, such as progressive enhancement, are being revisited and promoted to a new generation of developers. Frameworks like Remix and SvelteKit each offer a unique perspective on modern web application devlopment and are worth being aware ofas you dive deep into Next.js.

SvelteKit: web development, streamlined
https://kit.svelte.dev/

Remix
https://remix.run/
