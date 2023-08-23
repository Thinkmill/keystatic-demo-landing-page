import Link from "next/link";

import LogoLink from "./logo-link";

export default function Navbar() {
  return (
    <div className="relative">
      <KeystaticBanner />
      <header className="absolute inset-x-0 z-20 py-4 sm:fixed sm:h-24 sm:bg-white/[85%] sm:py-6 sm:backdrop-blur">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6 lg:px-8">
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
    </div>
  );
}

function KeystaticBanner() {
  return (
    <div className="absolute inset-x-0 top-20 z-20 bg-black fill-white px-4 py-3 text-center text-sm text-white sm:top-24">
      You're looking at a{" "}
      <svg
        className="-mt-0.5 inline h-[14px] fill-white"
        width="111"
        height="16"
        viewBox="0 0 111 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.1031 2.1263C9.15901 1.68716 8.91955 1.26353 8.51449 1.08497C8.10943 0.906401 7.63516 1.0154 7.34871 1.3529L1.2376 8.5529C0.985452 8.84997 0.928826 9.26645 1.0925 9.62006C1.25618 9.97367 1.61035 10.2 2 10.2H6.36461L5.8969 13.8737C5.84099 14.3128 6.08045 14.7365 6.48551 14.915C6.89057 15.0936 7.36484 14.9846 7.65129 14.6471L13.7624 7.4471C14.0145 7.15003 14.0712 6.73355 13.9075 6.37994C13.7438 6.02633 13.3897 5.8 13 5.8H8.63539L9.1031 2.1263Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.0114 14V2.36364H24.4716V7.49432H24.625L28.8125 2.36364H31.7614L27.4432 7.57386L31.8125 14H28.8693L25.6818 9.21591L24.4716 10.6932V14H22.0114ZM33.0426 14V2.36364H40.8835V4.39205H35.5028V7.16477H40.4801V9.19318H35.5028V11.9716H40.9062V14H33.0426ZM42.1577 2.36364H44.9134L47.5668 7.375H47.6804L50.3338 2.36364H53.0895L48.8452 9.88636V14H46.402V9.88636L42.1577 2.36364ZM60.7457 5.71023C60.7003 5.25189 60.5052 4.89583 60.1605 4.64205C59.8158 4.38826 59.348 4.26136 58.7571 4.26136C58.3556 4.26136 58.0166 4.31818 57.7401 4.43182C57.4635 4.54167 57.2514 4.69508 57.1037 4.89205C56.9598 5.08902 56.8878 5.3125 56.8878 5.5625C56.8802 5.77083 56.9238 5.95265 57.0185 6.10795C57.117 6.26326 57.2514 6.39773 57.4219 6.51136C57.5923 6.62121 57.7893 6.7178 58.0128 6.80114C58.2363 6.88068 58.4749 6.94886 58.7287 7.00568L59.7741 7.25568C60.2817 7.36932 60.7476 7.52083 61.1719 7.71023C61.5961 7.89962 61.9635 8.13258 62.2741 8.40909C62.5848 8.68561 62.8253 9.01136 62.9957 9.38636C63.17 9.76136 63.259 10.1913 63.2628 10.6761C63.259 11.3883 63.0772 12.0057 62.7173 12.5284C62.3613 13.0473 61.8461 13.4508 61.1719 13.7386C60.5014 14.0227 59.6927 14.1648 58.7457 14.1648C57.8063 14.1648 56.9882 14.0208 56.2912 13.733C55.598 13.4451 55.0563 13.0189 54.6662 12.4545C54.2798 11.8864 54.0772 11.1837 54.0582 10.3466H56.4389C56.4654 10.7367 56.5772 11.0625 56.7741 11.3239C56.9749 11.5814 57.242 11.7765 57.5753 11.9091C57.9124 12.0379 58.2931 12.1023 58.7173 12.1023C59.134 12.1023 59.4957 12.0417 59.8026 11.9205C60.1132 11.7992 60.3537 11.6307 60.5241 11.4148C60.6946 11.1989 60.7798 10.9508 60.7798 10.6705C60.7798 10.4091 60.7022 10.1894 60.5469 10.0114C60.3954 9.83333 60.1719 9.68182 59.8764 9.55682C59.5848 9.43182 59.2268 9.31818 58.8026 9.21591L57.5355 8.89773C56.5545 8.65909 55.7798 8.28598 55.2116 7.77841C54.6435 7.27083 54.3613 6.58712 54.3651 5.72727C54.3613 5.02273 54.5488 4.4072 54.9276 3.88068C55.3101 3.35417 55.8348 2.94318 56.5014 2.64773C57.1681 2.35227 57.9257 2.20455 58.7741 2.20455C59.6378 2.20455 60.3916 2.35227 61.0355 2.64773C61.6832 2.94318 62.187 3.35417 62.5469 3.88068C62.9067 4.4072 63.0923 5.01705 63.1037 5.71023H60.7457ZM64.4744 4.39205V2.36364H74.0312V4.39205H70.4688V14H68.0369V4.39205H64.4744ZM76.1889 14H73.5526L77.5696 2.36364H80.7401L84.7514 14H82.1151L79.2003 5.02273H79.1094L76.1889 14ZM76.0241 9.42614H82.2514V11.3466H76.0241V9.42614ZM84.2869 4.39205V2.36364H93.8438V4.39205H90.2812V14H87.8494V4.39205H84.2869ZM97.8778 2.36364V14H95.4176V2.36364H97.8778ZM110.169 6.4375H107.68C107.635 6.11553 107.542 5.82955 107.402 5.57955C107.262 5.32576 107.082 5.10985 106.862 4.93182C106.643 4.75379 106.389 4.61742 106.101 4.52273C105.817 4.42803 105.508 4.38068 105.175 4.38068C104.572 4.38068 104.048 4.5303 103.601 4.82955C103.154 5.125 102.807 5.55682 102.561 6.125C102.315 6.68939 102.192 7.375 102.192 8.18182C102.192 9.01136 102.315 9.70833 102.561 10.2727C102.811 10.8371 103.16 11.2633 103.607 11.5511C104.054 11.839 104.571 11.983 105.158 11.983C105.487 11.983 105.792 11.9394 106.072 11.8523C106.357 11.7652 106.608 11.6383 106.828 11.4716C107.048 11.3011 107.23 11.0947 107.374 10.8523C107.521 10.6098 107.624 10.3333 107.68 10.0227L110.169 10.0341C110.105 10.5682 109.944 11.0833 109.686 11.5795C109.432 12.072 109.089 12.5133 108.658 12.9034C108.23 13.2898 107.718 13.5966 107.124 13.8239C106.533 14.0473 105.864 14.1591 105.118 14.1591C104.08 14.1591 103.152 13.9242 102.334 13.4545C101.519 12.9848 100.875 12.3049 100.402 11.4148C99.9323 10.5246 99.6974 9.44697 99.6974 8.18182C99.6974 6.91288 99.9361 5.83333 100.413 4.94318C100.891 4.05303 101.538 3.375 102.357 2.90909C103.175 2.43939 104.095 2.20455 105.118 2.20455C105.792 2.20455 106.417 2.29924 106.993 2.48864C107.572 2.67803 108.086 2.95455 108.533 3.31818C108.98 3.67803 109.343 4.11932 109.624 4.64205C109.908 5.16477 110.089 5.76326 110.169 6.4375Z"
          fill="currentColor"
        />
      </svg>{" "}
      template.{" "}
      <a
        href="https://keystatic.com"
        className="text-white underline hover:text-yellow-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more about Keystatic
        <span className="sr-only">opens in a new tab</span>
      </a>{" "}
      and get this template for free.
    </div>
  );
}
