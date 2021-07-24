import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import moviesStore, { loadMovie } from "../../../_stores/moviesStore";
import { Code } from "../../common/Code";


function About() {
  const movieUrl = 'https://swapi.dev/api/films/2/';
  const movie = useSnapshot(moviesStore)[movieUrl];

  useEffect(() => {
    if (movie) return;
    loadMovie(movieUrl);
  }, [movie]);

  return (
    <>
      <h2>About { movie?.title || '<None>' }</h2>
      <p>
        Note how the elapsed time above didn't reset when you switched to the{" "}
        <Code>/about</Code> page.
      </p>
      <p>
        This page is rendered to HTML, see{" "}
        <Code>view-source:http://localhost:3000/about</Code>.
      </p>
    </>
  );
}

export { About }
