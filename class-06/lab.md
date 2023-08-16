# Lab

Next.js supports all the usual ways you're used to using CSS in React apps.

For this course, we'll look at how Next.js supports a global CSS file, component scoped CSS Modules, and we'll go through setting up Tailwind CSS.

## Global CSS file

The `create-next-app` template includes a `globals.css` file which is made available on every page of the site. It supports importing other CSS files to let you organise your styles as you might have done on many projects in the past.

You can use this will any CSS naming scheme that you would like, eg. BEM.

The downside to this is Next won't be able to perform page route-level code splitting on your styles like it can with modules.

## CSS Modules

You can import a CSS file at the component level using a simple import statement. The file naming convention is `filename.module.css`. The build system is smart enough to be able to split up the CSS imported this way into discrete bundles containing only the necessary styles for the page being loaded. This helps minimise data downloaded over the network and helps speed up the site, since you won't be downloading all the unique CSS for the homepage when you view the About page.

CSS modules work out of the box with Next.js, so you can just start create `.module.css` files for your components and get to work.

## ⛳️ Exercise: Experiment with CSS modules

Create custom styles on diffrent pages, try sharing styles and experiment with CSS selectors (but be aware that using HTML tags as styling targets might be restrictive, tying the styles to the structure).

[Article: Stop targeting tags in CSS](https://frontstuff.io/you-need-to-stop-targeting-tags-in-css)

## Tailwind CSS

Tailwind CSS is a very popular CSS utility-first framework that suggests a different approach to styling and conventional views on separation of concerns.

- [Tailwind Docs: Configuring Tailwind with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [Next.js Docs: Tailwind CSS](https://beta.nextjs.org/docs/styling/tailwind-css)
