import React from "react";
import { Helmet } from "react-helmet";

import Home from "./home.js";

export default function IndexPage() {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>js pescasio | portfolio</title>
        <meta name="description" content="J.S. Pescasio (also known as claynaut) is an artist and developer based in Southern California." />
        <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png" />
        <link rel="icon" href="../images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png" />
        <link rel="manifest" href="../images/site.webmanifest" />
        <link rel="mask-icon" href="../images/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Home />
    </main>
  )
}
