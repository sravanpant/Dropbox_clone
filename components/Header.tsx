import Link from "next/link";
import Image from "next/image";
import { SignIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#0160FE] w-fit">
          <Image
            src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            alt="logo"
            height={50}
            width={50}
            className="invert"
          />
        </div>
        <span className="font-bold text-xl">Dropbox</span>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        {/* Theme toggler */}
        <ThemeToggler />

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
