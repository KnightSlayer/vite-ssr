import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { BrowserRouter } from "react-router-dom";

hydrate();

async function hydrate() {
  const pageContext = await getPage();
  const { Page } = pageContext;
  ReactDOM.hydrate(
    <BrowserRouter>
      <Page {...pageContext.pageProps} />
    </BrowserRouter>,
    document.getElementById("react-root")
  );
}
