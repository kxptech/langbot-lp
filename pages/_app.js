import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
