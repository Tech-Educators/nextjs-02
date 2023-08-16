# Lab

## The Next.js `<Image />` component

The `<Image />` component offers some useful optimisation strategies for your images, and is designed as a replacement for the regular HTML `<img />` tag.

Some of the key benefits of the component are:

- Resize and generate responsive images to optimise file sizes, dimensions and formats to target the device loading the image. This means you'll serve up large full size images on desktops, but only smaller reduced size versions on smaller screens.
- Lazy loading: Images are only loaded as they become visible on a page. So a gallery containing 20 images won't download 20 images unless they're scrolled into view.
- Placeholder support: You can provide a much smaller blurred image placeholder to show in place while the bigger image is loading.
- Supports loading images from cloud storage and image CDNs, including S3 and Cloudinary.
- Plus plenty more on in the documentation.

## ⛳️ Exercise: Loading Images with `next/image`

Load some images using the image component (tip: There are some example images in the course Github repo under `demo-app/public/images`).

Experiment with the component props from the documentation. Load many different images and inspect the way they are loaded on the Network tab.

Try to load images from the internet using a URL. You'll get an error and warning on the terminal. It should tell you what the problem is - it's a configuration setting you have to add in a `next.config.js` file in the root directory (it should be a .js file even if you're using typescript).
