# Lab

note: We assume you have a recent version of Node.js installed (at time of writing we're using v18.12.0 LTS) and we'll stick to using the default `npm` for package management and running scripts.

## ⛳️ Exercise: create your app

Similar to the `create-react-app` command, Next.js maintains `create-next-app` which bootstraps a new Next.js application with sensible defaults. You can run the command to create a new Next.js 13 application like this:

`npx create-next-app@latest --experimental-app`

You will be prompted to:

- enter a name for your project
- choose to use TypeScript or not (we will use it for this example)
- ESLint (yes)
- Tailwind (yes)
- src directory (yes)
- use /app router (yes)
- customise default import alias (no)

This will install the dependencies and set up the project ready for development.

Change into the project directory with the `cd my-project` command.

Open your new project folder in your code editor. (You might be able to type `code .` in your terminal if you use VSCode.)

You can then immediately run the Next.js development server with the command `npm run dev`.

Visit `http://localhost:3000` in your browser to see your brand new, server-rendered Next.js 13 application.

The top level `app/page.tsx` file contains the HTML content for the Next.js 13 default index page you see in your browser.

You can edit this content in real-time and see the changes reflected instantly in your browser.

⚠️ warning: there have been some bugs with auto-refreshing in Firefox, so if you run into any issues where it won't reload, try a different browser.
