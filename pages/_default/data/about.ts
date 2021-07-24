import fetch from "node-fetch";
export { checkAboutPath as checkPath } from "~/_components/routes/About/path";

type TMovie = {
  title: string;
  producer: string;
}

export const getData = async (path: string) => {
  const response = await fetch(`https://swapi.dev/api/films/2`);
  const movie: TMovie = await response.json();

  return { movies: [movie] };
}
