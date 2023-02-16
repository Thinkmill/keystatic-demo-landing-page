import Link from "next/link";

import LogoLink from "./logo-link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 h-24 bg-white/[85%] py-6 backdrop-blur">
      <div className="mx-auto flex h-full max-w-5xl items-center px-4 sm:px-6 lg:px-8">
        <LogoLink />
        <nav className="ml-16 flex w-full items-center justify-between">
          <div className="flex gap-10">
            <a className="font-medium" href="#features">
              Features
            </a>
            <a className="font-medium" href="#reviews">
              Reviews
            </a>
            <a className="font-medium" href="#pricing">
              Pricing
            </a>
          </div>
          <Link
            href="#"
            className="rounded-full bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-900"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
