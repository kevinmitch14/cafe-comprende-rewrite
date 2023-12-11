import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export async function NavBar() {
  return (
    <div className="flex h-[10dvh] items-center justify-between border-b px-4 py-3 sm:h-[5dvh]">
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
