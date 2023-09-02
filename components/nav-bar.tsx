import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

export default async function NavBar() {
  return (
    <div className="flex items-center justify-between border-b px-4 py-3">
      <h1 className="text-xl font-extrabold tracking-tighter">
        Cafe Comprende
      </h1>
      <div className="flex items-center gap-x-2">
        <SignedIn>
          {/* TODO use drawer / modal here to add a review */}
          {/* <Button>Add Review</Button> */}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}
