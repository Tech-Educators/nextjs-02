# Lab

## Page url params and Query Strings

URL parameters and query string values are both used to send data to the server when making a request in web development, but they work in slightly different ways.

_URL parameters_ are included in the URL itself, typically used to identify a specific resource, like a user or a product. For example, the URL `example.com/users/123` includes a URL parameter of "123" to identify the user.

_Query string values_ are included in the URL after a question mark and are typically used to filter or sort data. For example, `example.com/team?sortBy=asc` includes a query string key/value pair of `sortBy: asc` to specify the sort direction for a list of team members.

- 📄 [Page.js Docs - the Next.js page conventions](https://beta.nextjs.org/docs/api-reference/file-conventions/page)

## ⛳️ Exercise: reading additional page parameters, and values from query strings

Continuing with your about website, try adding more parameters to a url route by creating some new routing folders and files. Display the values in the query string and the url on the page, or conditionally show content based on those values.

For example you could try something like:

`http://localhost:3000/team/james` -> renders content for James.
`http://localhost:3000/team?sortBy=asc` -> lists team members sorted by ascending or descending alphabetical order
