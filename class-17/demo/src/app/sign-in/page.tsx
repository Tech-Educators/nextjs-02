import { SignIn } from "@clerk/nextjs";

type RedirectParams = {
  searchParams: { redirect: string };
};

export default function Page({ searchParams }: RedirectParams) {
  // the redirectUrl prop of the SignIn component, tells the browser where to go after signing in and out
  return <SignIn redirectUrl={searchParams.redirect} />;
}
