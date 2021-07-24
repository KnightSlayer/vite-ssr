import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { useSnapshot } from 'valtio';
import moviesStore, { loadMovie } from './_stores/moviesStore';

export { Page };

function Page() {
  return (
    <>
      <b>
        <i>
          Time elapsed: <TimeElapsed />
        </i>
        <Counter />
      </b>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" >
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
    </>
  );
}

function Home() {
  const movieUrl = 'https://swapi.dev/api/films/1/';
  const movie = useSnapshot(moviesStore)[movieUrl];

  React.useEffect(() => {
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

function About() {
  const movieUrl = 'https://swapi.dev/api/films/2/';
  const movie = useSnapshot(moviesStore)[movieUrl];

  React.useEffect(() => {
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

function Code(props: any) {
  const style = {
    backgroundColor: "#eaeaea",
    padding: "1px 4px",
    borderRadius: "3px",
    ...props.style,
  };
  return <code {...props} style={style} />;
}

function TimeElapsed() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return <>{count}</>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      style={{ marginLeft: 10 }}
    >
      Count: <span>{count}</span>
    </button>
  );
}
