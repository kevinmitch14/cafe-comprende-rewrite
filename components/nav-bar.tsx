import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export async function NavBar() {
  return (
    <div className="flex h-[5dvh] items-center justify-between border-b px-4 py-3 md:h-[7dvh]">
      <a href={"/"}>
        <h1 className="text-xl font-extrabold tracking-tighter">
          Cafe Comprende
        </h1>
      </a>
      <div className="flex items-center gap-x-2">
        <SignedIn>
          {/* TODO use drawer / modal here to add a review */}
          {/* <Button>Add Review</Button> */}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button size={"sm"} asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}
