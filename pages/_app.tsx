import type { AppProps } from "next/app";

import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased">
      <Component {...pageProps} />
    </div>
  );
}
