import { proxy } from 'valtio'

export const moviesStore: any = proxy({});
export default moviesStore
export type TMovie = {
  title: string,
  url: string,
  producer: string;
}

export const init = ({movies}: {movies?: TMovie[]}) => {
  // clear previous store?
  if (!movies) return;

  for (const movie of movies) {
    moviesStore[movie.url] = movie;
  }
}

export const loadMovie = async (url: string) => {
  const response = await fetch(url);
  const movie: TMovie = await response.json();

  moviesStore[movie.url] = movie;
  return movie;
}
