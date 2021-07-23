import fetch from "node-fetch";
import { PageContext } from "../_default/types";
import { TMovie } from "./types";

export { addPageContext }


async function addPageContext(pageContext: PageContext) {
    // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
    const response = await fetch(`https://swapi.dev/api/films`);
    const parsedResponse: {results: [TMovie]} = await response.json()

    // `movies` will be serialized and passed to the browser; we select only the data we
    // need in order to minimize what is sent over the network.
    const movies = parsedResponse.results.map(({ title, producer }) => ({title, producer}));

    const pageProps = { movies }
    return { pageProps }
}
