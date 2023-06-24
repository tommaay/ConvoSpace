import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";

function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container flex items-center justify-between h-full gap-2 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="w-8 h-8 sm:h-6 sm:w-6" />
          <p className="hidden text-sm font-medium text-zinc-700 md:block">
            ConvoSpace
          </p>
        </Link>

        <Link href="sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
