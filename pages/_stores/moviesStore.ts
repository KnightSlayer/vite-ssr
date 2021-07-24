import { proxy } from 'valtio'

export const moviesStore = proxy<{[movieUrl: string]: TMovie}>({});
export default moviesStore
export type TMovie = {
  title: string,
  url: string,
  producer: string;
}

export const clearMoviesStore = () => {
  Object.keys(moviesStore).forEach((key) => {
    delete moviesStore[key];
  });
}

export const initMoviesStore = ({movies}: {movies?: TMovie[]}) => {
  clearMoviesStore();
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
