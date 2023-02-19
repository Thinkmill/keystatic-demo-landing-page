export type FooterProps = {
  footerHeadline: string;
  footerText: string;
};

type ComponentProps = {
  data: FooterProps;
};

export default function Footer({
  data: { footerHeadline, footerText },
}: ComponentProps) {
  return (
    <footer className="sticky bottom-0  overflow-hidden">
      <div className="relative grid h-screen max-h-[800px] min-h-0 place-items-center overflow-y-auto overflow-x-hidden bg-blob-2 sm:pt-32 sm:pb-16 md:max-h-[1200px] md:py-48 lg:py-60">
        {/* Footer blobs */}
        <div className=" absolute -top-64 left-0 aspect-[10/8] w-[1200px] animate-float bg-[radial-gradient(50%_50%_at_50%_50%,#e3a9c1_0%,theme(colors.blob-1)_24.48%,rgba(239,238,243,0)_100%)]"></div>

        <div className="absolute -top-64 -left-64 aspect-[10/8] h-full w-[1200px] animate-float bg-[radial-gradient(50%_50%_at_50%_50%,#f4ddcd_0%,theme(colors.blob-2)_24.48%,rgba(239,238,243,0)_100%)] opacity-50 mix-blend-overlay [animation-delay:4s]"></div>

        <div className="relative isolate z-40 mx-auto h-96 max-h-screen max-w-xl px-6 lg:px-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="group h-12 w-12 sm:h-20 sm:w-20"
            viewBox="0 0 80 80"
          >
            <path
              fill="#000"
              className="transition group-hover:scale-[98%]"
              fillRule="evenodd"
              d="M4.686 4.686C0 9.373 0 16.916 0 32v16c0 15.085 0 22.627 4.686 27.314C9.373 80 16.916 80 32 80h16c15.085 0 22.627 0 27.314-4.686C80 70.627 80 63.084 80 48V32c0-15.085 0-22.627-4.686-27.314C70.627 0 63.084 0 48 0H32C16.915 0 9.373 0 4.686 4.686Zm16.187 56.146C18.397 59.462 17 57.582 17 55.541c0-1.721 1.111-2.837 2.825-2.837.984 0 1.746.446 3.047 1.69 2.254 2.135 4.635 3.155 7.682 3.155 3.841 0 6.222-1.657 6.222-4.367 0-2.136-1.587-3.73-4.603-4.399l-5.777-1.339c-6.063-1.37-8.92-4.367-8.92-9.212C17.476 32.048 22.555 28 30.46 28c3.27 0 6.317.765 8.698 2.2 2.253 1.306 3.587 3.155 3.587 4.972 0 1.626-1.111 2.646-2.794 2.646-.984 0-1.682-.319-3.143-1.562-2.317-2.104-4.158-2.869-6.697-2.869-3.619 0-5.81 1.69-5.81 4.367 0 2.168 1.43 3.475 4.54 4.208l6.095 1.402c5.936 1.371 8.697 4.304 8.697 9.213 0 6.407-5.11 10.391-13.459 10.391-3.523 0-6.824-.765-9.3-2.136ZM50.65 63c-2.38 0-4.349-1.976-4.349-4.399 0-2.39 1.968-4.367 4.35-4.367 2.38 0 4.348 1.976 4.348 4.367C55 61.024 53.032 63 50.651 63Z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="mt-4 text-4xl font-bold sm:mt-10 sm:text-5xl md:text-6xl">
            {footerHeadline}
          </h2>
          <p className="mt-4 pr-8 text-lg sm:mt-6 sm:text-xl sm:leading-8">
            {footerText}
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-900 sm:mt-10"
          >
            Sign up
          </a>
        </div>
      </div>
    </footer>
  );
}
