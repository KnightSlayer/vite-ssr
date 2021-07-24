import fetch from "node-fetch";

type TMovie = {
  title: string;
  producer: string;
}

export const checkPath = (path: string) => path === '/';

export const getData = async (path: string) => {
  const response = await fetch(`https://swapi.dev/api/films/1`);
  const movie: TMovie = await response.json();

  return { movie };
}

