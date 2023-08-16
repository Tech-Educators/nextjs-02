# Lab

# 8. Deploying a walking Skeleton

A walking skeleton is a minimal implementation of the core functionality of a software system that is used to demonstrate the overall architecture and design of the system.

The main goal of a walking skeleton is to deploy early and often, which allows for the validation of the entire infrastructure, including any external dependencies and integration points, as well as the software itself.

It's better to test the system end to end as early as possible to validate assumptions and avoid running into complicated issues at the end of a project.

Modern hosting companies like Vercel and Netlify streamline the deployment of your projects by implementing tightly with git and Github.

By commiting the changes to your project to a free Github account, and connecting your Github to a free Vercel account you can easily set up your own continuous integration process.

## ⛳️ Exercise: set up Github / Vercel

Deploy the app.

1. Create a new project on Vercel: Go to the Vercel website and sign up or log in to your account. Then, create a new project by clicking on the "New Project" button.

2. Connect to Github: In the project settings, you will be prompted to connect to your Github account. Follow the prompts to connect your Github account to Vercel.

3. Import your Next.js app: Once your Github account is connected, you will be prompted to import your Next.js app. Select the repository that contains your Next.js app and click the "Import" button.

4. Configure the project settings: In the project settings, you can configure the build settings, environment variables, and other options for your Next.js app. To begin with, the defaults should be fine.

5. Deploy the app: Once you have configured your project settings, you can deploy your Next.js app by clicking the "Deploy" button. This will trigger a build and deploy process on Vercel, which will take a few minutes to complete.

6. Verify the deployment: Once the deployment is complete, you will be given a URL to access your Next.js app. Verify that the app is working as expected by visiting the URL.

## ⛳️ Exercise 2: Start of the Blog Project

Now that you've got the skeleton, you can get a head start on the blog before tomorrow:

You should aim to have:
- A home page explaining what your blog is
- A `/blog` page that shows a list of posts (just hard code these for now with lorem content)
- A `[slug]` dynamic route segment to show for each individual post
