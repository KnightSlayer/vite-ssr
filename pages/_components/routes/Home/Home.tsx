import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import moviesStore, { loadMovie } from "~/_stores/moviesStore";
import { Code } from "~/_components/common/Code";

function Home() {
  const movieUrl = 'https://swapi.dev/api/films/1/';
  const movie = useSnapshot(moviesStore)[movieUrl];

  useEffect(() => {
    if (movie) return;
    loadMovie(movieUrl);
  }, [movie]);

  return (
    <div>
      <h2>Home { movie?.title || '<None>' }</h2>
      <p>Example of client-side routing with React Router and SSR.</p>
      <p>
        This page is rendered to HTML, see{" "}
        <Code>view-source:http://localhost:3000</Code>.
      </p>
    </div>
  );
}

export { Home }
