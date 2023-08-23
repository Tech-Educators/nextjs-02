# 17. Adding user login to prevent comment spam

Follow these steps to demo setting up a clerk.dev project:

- Got to [Clerk NextJS Guide](https://clerk.com/docs/quickstarts/nextjs)
- Follow the instructions
- Install
- Copy .env.local variables
- Mount clerk, so wrap root layout with <ClerkProvider>
  - Must be in server component
- Middleware allows us to run a poiece of code on every page before any request (so, auth basically). The example code will check for a cookie
- Make sign in and sign up pages
- The wild card route [[...sign-up]] will do ALL the sign up flow
- More env variables, to specify the sign in/up urls
- Import UserButton and put it in the layout
- Now its complaining we don't have acces to the home page
- As a parameter to the authMiddleware, add:

```ts
  {
    publicRoutes: ["/", "/blog", "/blog/(.*)]"
  }
```

- Go to dahsboard and create an application (the more you add the more the production enviroment requires to set up
- Do add username
- Add the env variables
  DON'T CLICK PREMIUM OPTIONS
- Go to sign up and make an account

Connecting the username to the comment form

- Go to Read Sessiona nd User Data in the docs
- Import { currentUser } in the root layout and add `const user = await currentUser()`
- Render the button if we have a user, and coditrionally rewnder the button or a link to the login page
- Make a post with no comments
- In the Comments, conditioanlly render the form or a prompt to log in
- Get the user with currentUser()
- Show that on the page in the inputs place
- Change the submitFormAction frunction to set the user to the current user (pass as parameter to the function

This means no one can pretent to be another user because its determined on the server

- BUT because comment former is client, our server action doesn't have action to the page headers, so we write it now in the comments component and pass it into thee comment form

Make sure to add enviroment variable to the vercel deployment
