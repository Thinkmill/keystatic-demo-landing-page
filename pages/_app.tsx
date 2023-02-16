import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "../styles/scoped-preflight.css";
import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isKeystaticPage = router.pathname.startsWith("/keystatic");

  if (isKeystaticPage) return <Component {...pageProps} />;

  return (
    <div className="with-preflight">
      <Component {...pageProps} />
    </div>
  );
}
