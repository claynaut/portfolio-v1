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
      </Helmet>
      <Home />
    </main>
  )
}
