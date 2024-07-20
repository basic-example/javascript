import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <header>something header</header>
      <Component {...pageProps} />
      <Component {...pageProps} />
      <Component {...pageProps} />
    </>
  );
}
