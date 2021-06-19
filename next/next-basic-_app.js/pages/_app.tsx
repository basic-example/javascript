import type { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <div>something header</div>
      <Component {...pageProps} />;
    </>
  );
}
