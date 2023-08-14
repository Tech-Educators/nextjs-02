# Lab

Usually, bootstrapping a Next.js project will be done using the `create-next-app` command. This configures various tools including tailwind and ESLint for a smoother development experience.

It's still interesting to understand how simple a basic Next.js project can be. This is useful for creating simple and minimalist code examples.

## ⛳️ Exercise: create a bare bones Next.js project from scratch

- 1. Create a new direcotry called `next-barebones` and run `cd next-barebones`
- 2. Initialise an npm project to install dependencies: `npm init -y`
- 3. Install Next, React and React DOM (because we're in the browser) `npm install next react react-dom`
- 4. Add the launch script `"dev": "next dev"` to `scripts` section in `package.json`. Now you can run `npm run dev` in a moment.
- 5. Make the `/app` directory: `mkdir app`
- 6. Create the file for the homepage: `touch app/page.tsx` and add the following:

```
    export default function HomePage() {
      return <div>Hello, world!</div>
    }
```

- 7. Run the development server: `npm run dev`

Next will start up and configure Typescript for your project, if you use the `.tsx` file extension. If you use the `.jsx` extension it will not install TypeScript.
