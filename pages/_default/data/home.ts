import fetch from "node-fetch";
export { checkHomePath as checkPath } from "~/_components/routes/Home/path";

type TMovie = {
  title: string;
  producer: string;
}


export const getData = async (path: string) => {
  const response = await fetch(`https://swapi.dev/api/films/1`);
  const movie: TMovie = await response.json();

  return { movies: [movie] };
}

