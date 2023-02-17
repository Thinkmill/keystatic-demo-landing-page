import Link from "next/link";

import LogoLink from "./logo-link";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 py-4 sm:fixed sm:h-24 sm:bg-white/[85%] sm:py-6 sm:backdrop-blur">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <LogoLink />
        <nav className="flex items-center justify-between sm:ml-16 sm:w-full">
          <div className="hidden gap-10 sm:flex">
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
