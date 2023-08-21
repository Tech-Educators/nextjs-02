# 12. Building a simple API

Backend APIs are useful for interacting with other services, sharing or processing data, or integration payment providers like Stripe. You can use them to save user submitted data to databases, integrating mobile app clients with your app, and keeping secret keys secret - when interacting with private APIs we don't want to share our secrets with the user in the browser, so we keep this code on the server, behind an API route, and call it from the browser using fetch.

## Creating a GET route

The simplest kind of API route is the GET route. It's used for retrieving data, who could've guessed? In general if the request doesn't change anything about the data, you'll use a GET route.

In Next.js 13 you declare an HTTP GET route by creating a `route.ts` file inside a named directory - exactly as you would for a `page.tsx` file.

```ts
// app/api/message/route.ts
export async function GET(request: NextRequest) {
  return NextResponse.json("API OK");
}
```

You can call this in your browser, by visiting `http://localhost:3000/api/message`.

You should see `API OK`.

## Creating a PUT/POST Route

We're going to make a status message you can update via an API request.

Before we'll be able to return it, we'll need to save it!

For that, we'll use a `PUT` request, to _update_ the message in the KV store.

You can use a POST route here too, but PUT is probably more correct.

```ts
// add to app/api/message/route.ts

export async function POST(request: NextRequest) {
  // receive the request form data (an input text field called "message")
  const formData = await request.formData();
  // retrieve the message from the formdata
  const message = formData.get("message");
  // save it to the store under the key message
  await kv.set("message", message);
  // redirect("/");
  console.log("saved message");
}
```

The last thing we need to do is add the line to retrieve the message from the store and return it in our GET requets:

```ts
// app/api/message/route.ts
export async function GET(request: NextRequest) {
  // ADD THIS LINE
  const message = await kv.get<string>("message");
  // ADD LINE ABOVE
  return new Response(message);
}
```

## Testing APIs

You can easily call HTTP GET routes with your web browser, but making a POST request is a little harder.

There are graphical applications you can try like Postman, RapidAPI, and others.

You can also use the `curl` command in your terminal to call the API routes and check the respones. This lets you easily test your code without having to build a whole UI for it.

Here's a curl request you can run for each of the routes:

GET (retrieve the message): `curl -X http://localhost:3000/api/message`

PUT (update the message): `curl -X PUT -H "Content-Type: multipart/form-data" --form "message=message tribute" http://localhost:3001/api/message`

POST (add a comment): `curl -X POST -F "username=curlmaster" -F "comment=this is not the greatest comment in the world, this is just a tribute" http://localhost:3000/api/message`

##
