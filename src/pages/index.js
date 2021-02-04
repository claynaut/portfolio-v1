import React from "react";
import { Helmet } from "react-helmet";

import Default from "./default.js";

export default function IndexPage() {
  return (
    <main>
      <Helmet>
        <title>js pescasio | portfolio</title>
        <link rel="icon" href="" />
      </Helmet>
      <Default />
    </main>
  )
}
