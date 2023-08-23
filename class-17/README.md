# 17. Adding user login to prevent comment spam

## Overview

Our comments system works quite well at a basic level, but if you've spent any time at all on the internet you'll know spam is a ubiquitous problem. We can't safely publish our comment form on the web without some basic authentication or spam protection.

We might choose to implement a Captcha, but for this we're going to use Clerk.dev to add surprisingly powerful authentication features with very little setup.

This will allow our users to login, set a username, and leave a comment. We can optinally enforce email validation, SMS validation, or login with socal providers like Google, Facebook or Github.

## Class Outline

- clerk.dev code along

## Learning Objectives

- How to use clerk.dev

## Helpful Resources

https://nextjs.org/docs/getting-started/react-essentials
App: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
Pages: https://nextjs.org/docs/pages/building-your-application/data-fetching/building-forms
Talk: Dan Abramov: React from another dimension (introducing server actions at remix conf) https://www.youtube.com/watch?v=zMf_xeGPn6s
