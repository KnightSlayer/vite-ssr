import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { BrowserRouter } from "react-router-dom";
import initStores from "../_stores/_init";

hydrate();

async function hydrate() {
  const pageContext = await getPage();
  initStores(pageContext.pageProps);
  console.log('pageContext.pageProps', pageContext.pageProps)

  const { Page } = pageContext;
  ReactDOM.hydrate(
    <BrowserRouter>
      <Page {...pageContext.pageProps} />
    </BrowserRouter>,
    document.getElementById("react-root")
  );
}
