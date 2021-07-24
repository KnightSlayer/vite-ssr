import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router";
import { html } from "vite-plugin-ssr";
import { PageContext } from "./types";
import { getPageData } from "./data";
import logoUrl from "./logo.svg";
import initStores from "../_stores/_init";

export { render, addPageContext };
export { passToClient };

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ["pageProps"];

function render(pageContext: PageContext) {
  const { Page, pageProps, url } = pageContext;
  const pageHtml = renderToString(
    <StaticRouter location={url}>
      <Page {...pageProps} />
    </StaticRouter>
  );

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc = (documentProps && documentProps.description) || "App using Vite + vite-plugin-ssr";

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${html.dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}


async function addPageContext(pageContext: PageContext) {
  const pageProps = await getPageData(pageContext.url);
  initStores(pageProps);
  return { pageProps };
}
