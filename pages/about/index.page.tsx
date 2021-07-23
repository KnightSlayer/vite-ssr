import React from "react";
import { TPageProps } from "./types";
import "./index.css";

export { Page };

function Page(pageProps: TPageProps) {
  const { movies } = pageProps;

  return (
    <>
      <h1>About</h1>
      <p>A colored page.</p>

      <ul>
        { movies.map((movie) => (
          <li key={movie.title}>
            { movie.title } - { movie.producer }
          </li>
        ))}
      </ul>
    </>
  );
}
